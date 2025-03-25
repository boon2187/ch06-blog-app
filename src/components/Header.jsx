import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 bg-gray-900 h-[72px]">
      <a className="text-xl text-white">Blog</a>
      <button className="text-white bg-gray-900 mt-1 cursor-pointer">
        お問い合わせ
      </button>
    </header>
  );
}
