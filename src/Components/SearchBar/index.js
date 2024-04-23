import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Images/biblioteca_logo.jpg"
import { BsSearch } from "react-icons/bs"
import { colorPrimario } from "../UI/Variables";

const Search_Bar = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50px;
    margin: 10px;

    @media (max-width: 800px)
    {
        margin: 10px auto;
    }

`

const Search_Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex:1;
`

const Logo = styled.img`
    max-width: 50px;
    z-index: 1;
    border-radius: 50% 0 0 50%;
`

const Search = styled.input`
    text-align: center;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 40px 10px 10px;
    border-radius: 5px;
`

const Button = styled.button`
    background-color: ${colorPrimario};
    color: #FFFFFF;
    border: none;
    padding: 18px;
    border-radius: 0 50% 50% 0;
    cursor: pointer;
`

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    //Resultados automáticos
    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term)
      };

    const handleSearch = () => {
        onSearch(searchTerm); // Pasar el término de búsqueda como argumento
        setSearchTerm(""); // Limpiar el término de búsqueda después de realizar la búsqueda
      };

    /*  
      const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm(""); // Limpiamos el campo de búsqueda después de realizar la búsqueda
      };
    */
    return(
        <Search_Bar>
           <Search_Container>
            <Logo src={logo} />
            <Search 
                type="text"
                placeholder="¿Qué leerás hoy?"
                value={searchTerm}
                onChange={handleInputChange}
            />
            </Search_Container>
            <Button onClick={handleSearch} ><BsSearch /></Button> 
        </Search_Bar>
    )
}

export default SearchBar;