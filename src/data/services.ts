import { ShoppingCart, Smartphone, Search, MapPin, Share2, MousePointerClick } from "lucide-react";

export const services = [
  {
    slug: "shopify-development",
    name: "Shopify Store Development",
    description: "Build high-converting online stores on Shopify tailored to your products, brand identity, and customer journey.",
    icon: ShoppingCart,
  },
  {
    slug: "app-development",
    name: "Customize App Development",
    description: "Design and develop fully customized mobile or web apps that match your unique business workflow and user needs.",
    icon: Smartphone,
  },
  {
    slug: "seo",
    name: "On/Off Page SEO",
    description: "Improve your website's ranking with comprehensive on-page, off-page, and technical optimization strategies.",
    icon: Search,
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    description: "Attract nearby customers by optimizing your business for local searches, maps visibility, and location-based traffic.",
    icon: MapPin,
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    description: "Grow your brand presence and engagement through strategic campaigns on platforms like Facebook, Instagram, and more.",
    icon: Share2,
  },
  {
    slug: "google-meta-ads",
    name: "Google / Meta Ads",
    description: "Drive targeted traffic and measurable results with paid campaigns on Google and Meta advertising platforms.",
    icon: MousePointerClick,
    iconColor: "text-blue-500",
  },
];
