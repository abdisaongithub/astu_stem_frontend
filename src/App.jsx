import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blog/blog_detail";
import Landing from "./pages/landing/landing";
import Trainings from "./pages/trainings/trainings";
import About from "./pages/about/about";

function App() {
  return (
      <Router>
          <div className="bg-gray-200">
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<Landing />}/>
                  <Route exact path="/blog" element={<Blog />}>
                  </Route>
                  <Route exact path="/blog/:blogId" element={<BlogDetail />}/>
                  <Route exact path="/about" element={<About />}/>
                  <Route exact path="/trainings" element={<Trainings />}/>
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
