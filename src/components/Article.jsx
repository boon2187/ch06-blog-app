import React from "react";

export default function Article({ article }) {
  return (
    <div>
      <div>{article.createdAt}</div>
      <div>
        {article.categories.map((category, index) => (
          <span key={index}>{category}</span>
        ))}
      </div>
      <h2>{article.title}</h2>
      <div>{article.content}</div>
    </div>
  );
}
