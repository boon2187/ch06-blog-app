import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

export default function ArticleDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await response.json();
      setPost(data.post);
    };
    fetchPost();
  }, []);

  if (!post) {
    return (
      <div className="flex flex-col max-w-[800px] mt-12 mx-auto">
        <p>記事が見つかりませんでした。</p>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="flex flex-col max-w-[800px] mt-12 mx-auto">
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
  );
}
