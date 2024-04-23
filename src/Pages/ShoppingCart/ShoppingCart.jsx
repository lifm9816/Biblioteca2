import styled from "styled-components";
import ShoppingCard from "../../Components/ShoppingCard";
import { useState, useEffect } from "react";
import { useCart } from "../../Contexts/CartContext";
import { colorPrimario, colorSecundario } from "../../Components/UI/Variables";
import { Btn } from "../../Components/UI";

const Div = styled.div`
    margin-bottom: 20%;
`;

const ProductsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;

    @media (min-width: 931px) {
        padding: 0 25%;
    }
`;

const ReturnDate = styled.p`
    font-size: 16px;
    margin-top: 20px;
    color: ${colorPrimario};
    font-weight: 700;
    font-size: 36px;
    margin-right: 50px;
`;

const ReturnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const RentarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const RentarBtn = styled(Btn)`
    background-color: ${colorSecundario};
    transition: all .5s ease-in-out;

    &:hover
    {
        background-color: #7aad28;
    }
`

const ShoppingCart = () => {
    const { cartItems, setCartItems } = useCart();
    const [returnDate, setReturnDate] = useState("");

    useEffect(() => {
        document.title = "GeekStore | Carrito";

        const today = new Date();
        today.setDate(today.getDate() + 3); // Calculating return date, 3 days after today
        const formattedDate = today.toLocaleDateString("es-ES");
        setReturnDate(formattedDate);
    }, []);

    console.log("productos en el carrito: ", cartItems);

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
            <ReturnDiv>
                <ReturnDate>Fecha de devolución: {returnDate}</ReturnDate>
            </ReturnDiv>
            <RentarDiv>
                <RentarBtn>Rentar</RentarBtn>
            </RentarDiv>
        </Div>
    );
};

export default ShoppingCart;
