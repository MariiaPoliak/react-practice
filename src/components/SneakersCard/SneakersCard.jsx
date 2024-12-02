import React from "react";
import "./SneakersCard.css";

const SneakersCard = ({ name, price, image, description }) => {
  return (
    <div className="sneaker-card">
      <img src={image} alt={name} className="sneaker-image" />
      <div className="sneaker-details">
        <h2>{name}</h2>
        <p>{price} UAH</p>
      </div>
      {/* Кнопка "Замовити" */}
      <button className="order-button">Замовити</button>
      {/* Опис кросівка */}
      <div className="sneaker-description">{description}</div>
    </div>
  );
};

export default SneakersCard;
