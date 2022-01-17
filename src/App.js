import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col w-card h-card bg-blue-500 rounded-2xl overflow-hidden">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
