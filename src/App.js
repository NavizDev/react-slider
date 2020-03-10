import React from "react";
import "./App.css";
import Slider from "./components/Slider/Slider";

const images = [
  "https://www.ecotonedigital.com/wp-content/uploads/2016/12/Functionality-Usuability-Ecotone-Digital-4-e1556811686975.jpg",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
];

function App() {
  return <Slider slides={images} />;
}

export default App;
