import "./App.css";
import Header from "./components/Header";
import { posts } from "./data/posts";
import Article from "./components/Article";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="mt-10">
        <ul className="flex-1 w-full flex flex-col items-center">
          {posts.map((post) => (
            <li key={post.id} className="mb-5 w-1/2 p-4">
              <Article post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
