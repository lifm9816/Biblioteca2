import styled from "styled-components";
import { colorPrimario } from "./Variables";

export const Options = styled.img`
    height: 25px;
    width: 25px;
`

export const Btn = styled.button`
    border-radius: 5px;
    text-align: center;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 15px;

    @media (max-width: 799px)
    {
        transform: scale(.7);
    }

    @media (min-width: 800px)
    {
        height: 50px;
        width: 100px;
    }
`

export const Contenedor = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    margin-bottom: 20%;
`

export const Etiqueta = styled.label`
    background-color: ${colorPrimario};
    font-size: 20px;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 10px;
    max-width: fit-content;
    font-weight: 400;
    display: block;
`

export const CampoTexto = styled.input`
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 30px;
    margin-top:10px;
    width: auto;
    outline: none;

    @media(min-width: 930px)
    {
        width: -webkit-fill-available;
        margin-right: 35px;
    }
`

export const Div = styled.div`
    @media (min-width: 930px) 
    {
        width: 50%;
    }
`

export const Formulario = styled.form`
box-sizing: border-box;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 929px)
{
    flex-direction: column;
    align-items: start;
}

@media (min-width: 930px)
{
    margin-bottom: 10%;
}
`