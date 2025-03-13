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
    <>
      <Header />
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
}

export default App;
