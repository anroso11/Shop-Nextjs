import React from "react";
import flechita from '@images/flechita.svg';
import '@styles/Order.scss'

const Order = () => {
  return (
    <div className="orders">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={flechita} alt="arrow" />
    </div>
  );
};

export default Order;
