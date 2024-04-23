import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../../Components/SearchBar";
import SearchCard from "../../Components/SearchCard";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Search.css";

const ResultsDiv = styled.div`
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

const FadeDiv = styled.div`
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &.fade-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    &.fade-enter-active {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const Search = (props) => {

    const {products, marcas} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        document.title = "Library | Búsqueda";

        const filtered = products.filter((product) => 
                product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
    }, [searchTerm, products])

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    
    //Resultados inmediatos
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <ResultsDiv>
                {searchTerm && filteredProducts.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ) : searchTerm ? (
                    filteredProducts.map((product, index) => (
                        <SearchCard
                            key={index}
                            data={product}
                            marcas={marcas}
                        />
                    ))
                ) : null}
            </ResultsDiv>
        </div>
    )//*/

    /*Resultados al hacer click en el boton
    return (
        <div>
          <SearchBar onSearch={handleSearch} />
          <ResultsDiv>
            {searchTerm && filteredProducts.length === 0 ? (
              <p>No se encontraron resultados</p>
            ) : searchTerm ? (
              filteredProducts.map((product, index) => (
                <SearchCard
                  data={product}
                  key={index}
                  marcas={marcas}
                />
              ))
            ) : null}
          </ResultsDiv>
        </div>
      );*/

      /*
      return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <ResultsDiv>
                {searchTerm && filteredProducts.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ) : (
                    <TransitionGroup component={Div}>
                        {filteredProducts.map((product, index) => (
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="fade"
                            >
                                <FadeDiv className="fade-enter-active">
                                    <SearchCard
                                        key={index}
                                        data={product}
                                        marcas={marcas}
                                    />
                                </FadeDiv>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ResultsDiv>
        </div>
    );*/
}

export default Search