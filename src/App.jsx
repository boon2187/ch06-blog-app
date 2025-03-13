import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { posts } from "./data/posts";
import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 初期表示時にpostsデータを読み込む
    setArticles(posts);
  }, []);

  return (
    <div className="containerw-full h-screen flex flex-col">
      <div className="h-14 w-full bg-gray-800">
        <Header />
      </div>
      <div className="mt-10">
        <ul className="flex-1 w-full flex flex-col items-center">
          {articles.map((article) => (
            <li key={article.id} className="mb-5 w-1/2 p-4 bg-gray-800">
              <Article article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
