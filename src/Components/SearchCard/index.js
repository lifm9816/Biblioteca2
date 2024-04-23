import styled from "styled-components";
import { colorPrimario, colorSecundario } from "../UI/Variables";



const Card = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    margin-bottom: 24px;
    position: relative;
    display: flex;
    flex-direction: row;
`

const ImageDiv = styled.div`
    height: 100%;
    width: 33%;
    background-color: #F0F0F0;
    border-radius: 10px 0px 0px 10px;

    @media (min-width: 931px)
    {
        width: 12%;
    }
`

const ProductImage = styled.img`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    border-radius: 5px;
    position: relative;
`

const Info = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 10px 10px 0px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 67%;

    @media (min-width: 931px)
    {
        width: 88%;
    }
`

const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
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
    width: 100%;
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

const SearchCard = (props) => {
    const { photo, title, description, stock } = props.data;

    return (
        <Card>
            <ImageDiv>
                <ProductImage src = {photo} alt = {title} />
            </ImageDiv>
            <Info>
                <Title> { title } </Title>
                <Price> { `Stock: ${stock}` } </Price>
                <BtnDiv>
                    <AddBtn>Agregar</AddBtn>
                    <ViewBtn>Ver</ViewBtn>
                </BtnDiv>
            </Info>
        </Card>

    )
}

export default SearchCard;