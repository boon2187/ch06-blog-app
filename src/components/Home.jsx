import React, { useEffect, useState } from "react";
import Article from "./Article";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="mt-10">
      <ul className="flex-1 w-full flex flex-col items-center">
        {posts.map((post) => (
          <li key={post.id} className="mb-5 w-1/2 p-4">
            <Article post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
