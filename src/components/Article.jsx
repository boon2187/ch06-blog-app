import React from "react";

export default function Article({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  const formatContent = (content) => {
    // HTMLタグを改行に変換
    const textWithLineBreaks = content.replace(/<br\s*\/?>/g, "\n");
    // HTMLタグを除去
    const plainText = textWithLineBreaks.replace(/<[^>]*>/g, "");
    // 60文字で切り詰め
    const truncatedText = plainText.slice(0, 60);
    // 改行を<br/>タグに戻す
    return truncatedText.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < truncatedText.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>{formatDate(post.createdAt)}</div>
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
      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        {formatContent(post.content)}
        {post.content.replace(/<[^>]*>/g, "").length > 60 && "..."}
      </div>
    </div>
  );
}
