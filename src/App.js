import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col w-card h-card bg-white rounded-2xl overflow-hidden">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
