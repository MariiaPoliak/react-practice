import React from "react";
import SneakersCard from "./components/SneakersCard/SneakersCard";
import "./App.css";

// Імпортуємо зображення
import nikeAirMaxImage from "./assets/IMG_5980.png";

const App = () => {
  const sneakers = [
    {
      id: 1,
      name: "Puma",
      price: "4999",
      description:
        "Класичні кросівки з чудовою амортизацією для комфорту при будь-якому русі.",
      image: nikeAirMaxImage,
    },
  ];

  return (
    <div className="app">
      <h1>Sneaker Shop</h1>
      <div className="sneaker-list">
        {sneakers.map((sneaker) => (
          <SneakersCard
            key={sneaker.id}
            name={sneaker.name}
            price={sneaker.price}
            description={sneaker.description}
            image={sneaker.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
