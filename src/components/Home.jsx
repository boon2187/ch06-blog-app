import React from "react";
import { posts } from "../data/posts";
import Article from "./Article";

export default function Home() {
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
