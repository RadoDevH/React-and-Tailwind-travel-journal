import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { data } from "./data";
import Footer from "./components/Footer";
//import Footer from "./components/Footer";

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="flex flex-col w-card h-card bg-white rounded-2xl overflow-hidden">
      <Navbar />
      <section className="flex flex-col h-full px-5 items-center mt-10">
        {cards}
      </section>
      <Footer />
    </div>
  );
};

export default App;
