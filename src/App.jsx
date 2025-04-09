import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
