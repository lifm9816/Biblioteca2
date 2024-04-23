import styled from "styled-components";
import ShoppingCard from "../../Components/ShoppingCard";
import { useState, useEffect } from "react";
import { useCart } from "../../Contexts/CartContext";

const Div = styled.div`
    margin-bottom: 20%;
`

const ProductsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;

    @media (min-width: 931px)
    {
        padding: 0 25%;
    }
`

const ShoppingCart = () => {

    const { cartItems, setCartItems } = useCart();

    console.log("productos en el carrito: ",cartItems);
    

    useEffect(() => {
        document.title = "GeekStore | Carrito";
    }, [])

    return (
        <Div>
            <ProductsDiv>
            {cartItems.map((cartItem, index) => (
                <ShoppingCard
                    key={index}
                    data={cartItem.product}
                    quantity={cartItem.quantity}
                    stock={cartItem.product.stock}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            ))}

            </ProductsDiv>
        </Div>
    )
}

export default ShoppingCart;