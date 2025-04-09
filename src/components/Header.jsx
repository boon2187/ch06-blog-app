import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 bg-gray-900 h-[72px]">
      <Link to="/" className="text-xl text-white">
        Blog
      </Link>
      <Link
        to="/contact"
        className="text-white bg-gray-900 mt-1 cursor-pointer"
      >
        お問い合わせ
      </Link>
    </header>
  );
}
