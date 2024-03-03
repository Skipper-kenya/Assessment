import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import { Spin } from "antd";

import Questions from "./pages/Questions";
import Thanks from "./pages/Thanks";
import Page404 from "./pages/Page404";

function App() {
  const [loading, setLoading] = useState(false);

  class Question {
    constructor(_name, _question, _answer) {
      this.name = _name;
      this.question = _question;
      this.answer = _answer;
    }

    get questions() {}
  }

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="main-wrapper">
      <Router>
        <Spin fullscreen spinning={loading} />
        <Toaster richColors position="top-center" />
        <Routes>
          <Route path="/" element={<Home handleProceed={handleProceed} />} />
          <Route
            path="/question"
            element={<Questions Question={Question} setLoading={setLoading} />}
          />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
