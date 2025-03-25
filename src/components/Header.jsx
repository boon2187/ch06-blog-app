import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 bg-gray-900 h-[72px]">
      <h2 className="text-xl text-white">Blog</h2>
      <button className="text-white bg-gray-900 mt-1">お問い合わせ</button>
    </header>
  );
}
