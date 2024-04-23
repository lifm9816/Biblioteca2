import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { PiBooksFill } from "react-icons/pi"
import './CartIcon.css'; // Importa tu archivo de estilos

const CartIcon = ({ itemCount }) => {
  return (
    <div>
      <span className="icon">
        <PiBooksFill />
        {itemCount > 0 && <span className="cart-counter">{itemCount}</span>}
      </span>
      <span className="text">Carrito</span>
    </div>
  );
};

export default CartIcon;
