import styled from "styled-components";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { colorPrimario, colorSecundario } from "../UI/Variables";
import { useState } from "react";
const CardProduct = styled.div`
    width: 280px;
    margin-bottom: 24px;
    position: relative;
`

const Header = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`

const ProductImage = styled.img`
    width: 100px;
    max-height: 128.5px;
    border-radius: 5px;
    position: relative;
    bottom: -50px;
`

const Info = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 50px;
    padding-bottom: 40px;
    min-height: 100px;
`

const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`

const Description = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 24px;
    font-weight: 400;
    margin: 0;
`

const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${colorSecundario};
    padding: 0 24px;
    font-weight: bold;
    margin: 0;
`

const BtnDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`

const AddBtn = styled.button`
    background-color: ${colorPrimario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border:none;
    font-weight: bold;
`

const ViewBtn = styled.button`
    background-color: ${colorSecundario};
    border-radius: 7px;
    color: #F9F9F9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`

const Card = (props) => {
    const { photo, title, stock } = props.data;

    const { marcas, addToCart } = props;
    
    const brandBackground = marcas.find((marca) => marca.brand === props.data.brand)?.background;

    const handleAddToCart = () => {
        addToCart({
            ...props.data,
            quantity: 1
        });
        console.log("Producto agregado al carrito con éxito");
    };

    return (
        <CardProduct>
            <Header style = {{backgroundImage: `url(${brandBackground})`}} >
                <ProductImage src = {photo} alt = {title} />
            </Header>
            <Info>
                <Title> {title} </Title>
                <Price> {`Stock: ${stock}`} </Price>
                <BtnDiv>
                    <AddBtn onClick={handleAddToCart}>Agregar</AddBtn>
                    <ViewBtn>Ver</ViewBtn>
                </BtnDiv>
            </Info>
            
        </CardProduct>
    )
}

export default Card;