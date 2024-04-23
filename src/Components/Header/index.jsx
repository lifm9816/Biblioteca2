import React from "react";
import styled from "styled-components";
import logo from "../../assets/Images/biblioteca_logo.jpg";
import { Btn } from "../UI";
import { btnLogIn, btnSignIn, colorPrimario } from "../UI/Variables";
import { Link } from "react-router-dom";

const BtnLogIn = styled(Btn)`
    background-color: ${btnLogIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

const BtnSignIn = styled(Btn)`
    background-color: ${btnSignIn};

    @media (max-width: 799px)
    {
        display: none;
    }
`

const StyledHeader = styled.nav`
    background-color: ${colorPrimario};
    display: flex;
    justify-content: space-evenly;
    height: auto;
    align-items: center;
    box-sizing: border-box;
`

const Logo = styled.img`
box-sizing: border-box;

@media (max-width: 800px)
{
    margin: auto;
    width: 250px;
}

@media (min-width: 801px)
{
    width: 250px;

}
    
`

const Header = () =>{
    return(
        <StyledHeader>
            <div></div>
            <div>
                <Link to="/">
                    <Logo src={logo} alt = "Logo de GeekStore" />
                </Link>    
            </div>
            <div>
                <Link to="/login">
                    <BtnLogIn>Log In</BtnLogIn>
                </Link>
                <BtnSignIn>Sign In</BtnSignIn>
            </div>
        </StyledHeader>
    )
}

export default Header;