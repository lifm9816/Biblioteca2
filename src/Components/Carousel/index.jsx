import React from "react";
import { Carousel } from "react-responsive-carousel";
import ing from "../../assets/Images/ingeniero.jpg";
import mat from "../../assets/Images/matematicas.jpg";
import fil from "../../assets/Images/filosofia.jpeg";
import bio from "../../assets/Images/biologia.jpg";
import cien from "../../assets/Images/ciencias.jpg";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Container = styled.div`
    width: 50%;
    height: 25%;
    border-radius: 20px;
    margin-top: 10px;
    justify-content: center;
    box-sizing: border-box;

    @media(max-width: 800px)
    {
        width: 100%;
        margin: 10px;
    }
`

const Img = styled.img`
    border-radius: 20px;
    height: 100%;
`

const MyCarousel = () => {
    return(
        <Container>
            <Carousel
                autoPlay={true}
                interval={4000}
                infiniteLoop={true}
            >
                <div>
                    <Img src={mat} alt="" />
                </div>
                <div>
                    <Img src={bio} alt="" />
                </div>
                <div>
                    <Img src={ing} alt="" />
                </div>
                <div>
                    <Img src={cien} alt="" />
                </div>
                <div>
                    <Img src={fil} alt="" />
                </div>
            </Carousel>
        </Container>
    )
}

export default MyCarousel