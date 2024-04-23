import { useState, useEffect } from "react";
import "./MobileNav.css"
import { AiFillHome, AiOutlineSearch} from "react-icons/ai";
import { HiUserAdd, HiUser } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { BsCircleHalf} from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";
import logo from "../../assets/Images/biblioteca_logo.jpg"
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../CartIcon";
import { useCart } from "../../Contexts/CartContext";


const MobileNav = ({isLoggedIn, userRole}) =>
{
    const { cartItems, getTotalItems } = useCart();
    const [activeIndex, setActiveIndex] = useState(0);
    const { pathname } = useLocation();//Destructura pathname directamente

    useEffect(() => {

        //Definición de mapa de rutas a índices
        const pathToIndex = {
            "/": 0,
            "/search": 1,
            "/about": 2,
            ...(isLoggedIn
              ? { "/account": 3 }
              : { "/login": 3, "/signin": 3 }
            ),
            ...( isLoggedIn && userRole === "administrador"
                ?{"/productRegister":4}    
                : {"/shopping": 4})
          };

        //Estableciendo el valor de activeIndex en función de la ruta actual
        setActiveIndex(pathToIndex[pathname]);
    },[pathname, isLoggedIn]);

    return(
        <div className="navigation">
            <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                    <Link to="/" >
                        <a href="#" onClick={() => setActiveIndex(0)}>
                            <span className="icon">
                                <AiFillHome/>
                            </span>
                            <span className="text">Inicio</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                    <Link to="/search">
                        <a href="#" onClick={() => setActiveIndex(1)}>
                            <span className="icon">
                                <AiOutlineSearch/>
                            </span>
                            <span className="text">Buscar</span>
                        </a>
                    </Link>    
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                    <Link to="/about">
                        <a href="#" onClick={() => setActiveIndex(2)}>
                            <span className="icon">
                                <img className="logo_movil" src={logo} alt="" />
                            </span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                    <Link to = {isLoggedIn ? "/account" : "/login"}>
                        <a href="#" onClick={() => setActiveIndex(3)}>
                            <span className="icon">
                            {isLoggedIn ? <HiUser /> : <HiUserAdd />}
                            </span>
                            <span className="text">{isLoggedIn ? "Cuenta" : "Log In"}</span>
                        </a>
                    </Link>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                    <Link to = {isLoggedIn && userRole === "administrador" ? "/productRegister" : "/shopping"}>
                        <a href="#" onClick={() => setActiveIndex(4)}>
                            { isLoggedIn && userRole === "administrador" ? 
                            <span className="icon">
                                <MdAssignmentAdd /> 
                            </span>: <CartIcon className={`list ${activeIndex === 4 ? 'active' : ''}`} itemCount={getTotalItems()}/>}
                            
                            <span className="text">{ isLoggedIn && userRole === "administrador" ? "Libro +" : "Renta"}</span>
                        </a>
                    </Link>
                </li>
                <div className="indicator"></div>      
            </ul>
        </div>
    )
}

export default MobileNav;