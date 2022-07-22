import Landing from "./components/Landing";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <div className="bg-gray-200">
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<Landing/>}/>
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
