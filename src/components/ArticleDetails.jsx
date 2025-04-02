import React from "react";
import Header from "./Header";
import { format } from "date-fns";
import DOMPurify from "dompurify";

const post = {
  id: 1,
  title: "記事タイトル１",
  thumbnailUrl: "https://placehold.jp/800x400.png",
  createdAt: "2023-09-11T09:00:00.000Z",
  categories: ["React", "TypeScript"],
  content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
};

export default function ArticleDetails() {
  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-col">
        <img src={post.thumbnailUrl} alt={post.title} />
        <div>
          <div>{format(new Date(post.createdAt), "yyyy/M/d")}</div>
          <div>
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="border border-blue-300 text-blue-500 p-1 rounded-md"
              >
                {category}
              </span>
            ))}
          </div>
          <div>{post.title}</div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
      </div>
    </div>
  );
}
