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
      <div className="flex flex-col max-w[800px] mt-12 mx-auto">
        <img src={post.thumbnailUrl} alt={post.title} />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between p-2">
            <div className="text-gray-500">
              {format(new Date(post.createdAt), "yyyy/M/d")}
            </div>
            <div className="flex gap-2">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="border border-blue-300 text-blue-500 p-1 rounded-md"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
