import argparse
import pandas as pd
from pystac_client import Client
import json

def flatten_dict(d, parent_key='', sep='_'):
    """
    Helper to flatten nested dictionaries into a flat structure suitable for CSV.
    """
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_dict(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)

def main():
    parser = argparse.ArgumentParser(description="Export a STAC Catalog to a CSV file.")
    parser.add_argument("stac_url", type=str, help="The URL to the STAC Catalog.")
    parser.add_argument("collection_id", type=str, help="The collection ID to export.")
    parser.add_argument("output_path", type=str, help="The path to save the CSV file.")

    args = parser.parse_args()

    print(f"Opening STAC Catalog at {args.stac_url}...")
    try:
        catalog = Client.open(args.stac_url)
    except Exception as e:
        print(f"Error opening STAC Catalog: {e}")
        return

    print(f"Fetching items from collection: {args.collection_id}...")
    try:
        # Search for items in the specified collection
        search = catalog.search(collections=[args.collection_id])
        items = list(search.get_items())
    except Exception as e:
        print(f"Error searching collection: {e}")
        return

    if not items:
        print(f"No items found for collection {args.collection_id}.")
        return

    print(f"Processing {len(items)} items...")

    data = []
    for item in items:
        # Convert item to dict to get properties and other attributes
        item_dict = item.to_dict()
        
        # Extract core fields
        row = {
            "id": item.id,
            "datetime": item.properties.get("datetime") if item.properties else None,
            "geometry": json.dumps(item.geometry),
            "bbox": json.dumps(item.bbox),
        }
        
        # Flatten properties
        properties = item_dict.get("properties", {})
        row.update(flatten_dict(properties))
        
        # Flatten assets links (just the hrefs)
        assets = item_dict.get("assets", {})
        for asset_key, asset_val in assets.items():
            row[f"asset_{asset_key}_href"] = asset_val.get("href")
            
        data.append(row)

    # Use standard pandas
    df = pd.DataFrame(data)
    
    # Save to CSV
    try:
        df.to_csv(args.output_path, index=False)
        print(f"Successfully exported {len(data)} items to {args.output_path}")
    except Exception as e:
        print(f"Error saving to CSV: {e}")

if __name__ == "__main__":
    main()
