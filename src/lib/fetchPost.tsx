import { useEffect, useState } from "react";

const useInstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=YOUR_ACCESS_TOKEN")
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.slice(0,4));
      });
  }, []);

  return posts;
};

export default useInstagramFeed;