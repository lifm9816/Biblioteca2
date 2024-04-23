import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyCarousel from "../../Components/Carousel";
import "./Home.css";
import Card from "../../Components/Card";
import { useCart } from "../../Contexts/CartContext";
import { colorPrimario } from "../../Components/UI/Variables";

const Brand = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin-bottom: 10%;
`

const ProductDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

const Etiqueta = styled.label`
    background-color: ${colorPrimario};
    font-size: 20px;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 10px;
    width: auto;
    font-weight: 400;
`

const Select = styled.select`
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-left: 20px;
    width: 250px;
    outline: none;

`

const Home = (props) => {
    const { cartItems, addToCart } = useCart();
    const { products, marcas } = props;
    const [selectedBrand, setSelectedBrand] = useState("all");

    useEffect(() => {
        document.title = "Library | Inicio";
    }, []);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const filteredProducts = selectedBrand === "all" ? products : products.filter(product => product.brand === selectedBrand);

    return (
        <div>
            <div className="carousel-container">
                <MyCarousel />
            </div>
            <SelectContainer>
                <Etiqueta htmlFor="brandSelect">Seleccionar genero:</Etiqueta>
                <Select id="brandSelect" value={selectedBrand} onChange={handleBrandChange}>
                    <option value="all">Todas las marcas</option>
                    {marcas.map((marca) => (
                        <option key={marca.id} value={marca.brand}>{marca.brand}</option>
                    ))}
                </Select>
            </SelectContainer>
            {filteredProducts.length > 0 && (
                <Brand>
                    <ProductDiv>
                        {filteredProducts.map((product, index) => (
                            <Card
                                data={product}
                                key={index}
                                marcas={marcas}
                                addToCart={addToCart}
                            />
                        ))}
                    </ProductDiv>
                </Brand>
            )}
        </div>
    )
}

export default Home;
