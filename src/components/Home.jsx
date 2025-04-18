import React, { useEffect, useState } from "react";
import Article from "./Article";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 5000));

        const response = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await response.json();
        setPosts(data.posts);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg">読み込み中...</p>
      </div>
    );
  }

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
