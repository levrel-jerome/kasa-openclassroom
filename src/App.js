import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./PageContainer";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
