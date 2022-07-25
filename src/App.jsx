import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blog/blog_detail";
import Landing from "./pages/landing/landing";
import Trainings from "./pages/trainings/trainings";
import About from "./pages/about/about";
import News from "./pages/news/news";

function App() {
  return (
      <Router>
          <div className="bg-gray-200">
              <NavBar />
              <Routes>
                  <Route exact path="/" element={<Landing />}/>
                  <Route exact path="/blog" element={<Blog />}/>
                  <Route exact path="/blog/:blogId" element={<BlogDetail />}/>
                  <Route exact path="/about" element={<About />}/>
                  <Route exact path="/trainings" element={<Trainings />}/>
                  <Route exact path="/news" element={<News />}/>
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
