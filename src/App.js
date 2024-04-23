import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MobileNav from './Components/Mobile-Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import fondo_ingenieria from "./assets/Images/5.png";
import fondo_biologia from "./assets/Images/6.png";
import fondo_mat from "./assets/Images/7.png";
import fondo_ciencias from "./assets/Images/8.png";
import fondo_fil from "./assets/Images/9.png";
import ing from "./assets/Images/ingeniería.jpg";
import ing2 from "./assets/Images/ingeniería2.jpg";
import bio1 from "./assets/Images/biologia1.jpg";
import bio2 from "./assets/Images/b.jpg";
import mat1 from "./assets/Images/mat1.jpg";
import mat2 from "./assets/Images/mat2.jpg";
import cien1 from "./assets/Images/ciencias1.jpg";
import cien2 from "./assets/Images/ciencias2.jpg";
import filo1 from "./assets/Images/filo1.jpg"
import filo2 from "./assets/Images/filo2.jpg"
import Luis from "./assets/Images/Luis.jpg"
import Amy from "./assets/Images/Amy.jpg"
import portada from "./assets/Images/portada_miles.jpeg";
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/Signing';
import Account from './Pages/Account/Account';
import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid"
import ProductRegister from './Pages/ProductRegister/ProductRegister';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import { CartProvider } from './Contexts/CartContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(null); // Nuevo estado para almacenar al usuario activo
  const [userData, setUserData] = useState(null); // Define el estado de los datos del usuario
  
  const handleUserLogin = (user) => {
    setActiveUser(user); // Establecer el usuario que inició sesión como activo
    setIsLoggedIn(true); // Establecer el estado de inicio de sesión como verdadero
    setUserData(user); // Actualizar el estado de userData con los datos del usuario
    localStorage.setItem('isLoggedIn', true); // Guardar el estado de inicio de sesión en el localStorage
    localStorage.setItem('userData', JSON.stringify(user)); // Guardar los datos del usuario en el localStorage
    // Otras acciones después del inicio de sesión si las hay
  };

  useEffect(() => {
    // Verificar si hay datos de usuario almacenados en localStorage al cargar la página
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);


  const handleSetUserData = (userData) => {
    setUserData(userData); // Actualiza el estado de los datos del usuario
    // Guardar en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const [marcas, actualizarMarca] = useState ([
    {
      id: uuid(),
      brand: "Ingeniería",
      background: fondo_ingenieria,
    },
    {
      id: uuid(),
      brand: "Biología",
      background: fondo_biologia,
    },
    {
      id: uuid(),
      brand: "Matemáticas",
      background: fondo_mat,
    },
    {
      id: uuid(),
      brand: "Ciencias Sociales",
      background: fondo_ciencias,
    },
    {
      id: uuid(),
      brand: "Filosofía",
      background: fondo_fil
    }
  ]);

  const [products, updateProducts] = useState([
    {
      id: uuid(),
      brand: "Ingeniería",
      photo: ing,
      title: "Systems Engineering in the Fourth Industrial Revolution",
      description: "Libro de Ingeniería",
      stock: 15
    },
    {
      id: uuid(),
      brand: "Ingeniería",
      photo: ing2,
      title: "INGENIERIA DE SISTEMAS: INGENIERIA, ECONOMIA E INVESTIGACION DE OPERACIONES",
      description: "Libro de Ingeniería",
      stock: 10
    },
    {
      id: uuid(),
      brand: "Biología",
      photo: bio1,
      title: "Biología",
      description: "Libro de biología",
      stock: 20
    },
    {
      id: uuid(),
      brand: "Biología",
      photo: bio2,
      title: "El libro de la biología (The Biology Book)",
      description: "Libro de biología",
      stock: 11
    },
    {
      id: uuid(),
      brand: "Matemáticas",
      photo: mat1,
      title: "El Libro de Las Matemáticas",
      description: "Libro de matemáticas",
      stock: 25
    },
    {
      id: uuid(),
      brand: "Matemáticas",
      photo: mat2,
      title: "Geometría, Trigonometría y Geometría Analítica",
      description: "Libro de matemáticas",
      stock: 30
    },
    {
      id: uuid(),
      brand: "Ciencias Sociales",
      photo: cien1,
      title: "Sociología",
      description: "Libro de sociología",
      stock: 35
    },
    {
      id: uuid(),
      brand: "Ciencias Sociales",
      photo: cien2,
      title: "Introducción a las Ciencas Sociales",
      description: "Libro de sociología",
      stock: 17
    },
    {
      id: uuid(),
      brand: "Filosofía",
      photo: filo1,
      title: "Metafísica",
      description: "Libro de filosofía",
      stock: 12
    },
    {
      id: uuid(),
      brand: "Filosofía",
      photo: filo2,
      title: "FILOSOFÍA DE LA IDEA COSMONÓMICA PARA PRINCIPIANTES",
      description: "Libro de filosofía",
      stock: 12
    },
  ]);

  const [users, updateUsers] = useState([
    {
      id: uuid(),
      photo: Luis,
      matricula: "231803302",
      name: "Luis",
      lastName: "Martínez",
      email: "lifm1698@outlook.com",
      phone: "222 526 5031",
      password: "123456789",
      role: "cliente",
      font: fondo_mat
    },
    {
      id: uuid(),
      photo: Amy,
      matricula: "231803302",
      name: "Amy",
      lastName: "Martínez",
      email: "lifm98@outlook.com",
      phone: "222 526 5031",
      password: "123456789",
      role: "administrador",
      font: fondo_ingenieria
    }
  ])

  useEffect(() => {
    // Verificar el estado de inicio de sesión al cargar la aplicación
    const loggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('userData');
    const activeUser = localStorage.getItem("userData");
    if (loggedIn && userData && activeUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(userData));
      setActiveUser({ role: JSON.parse(userData).role });
    }
  }, []);

  useEffect(() => {
    // Verificar si hay datos de usuarios almacenados en localStorage al cargar la página
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }

    // Verificar si hay datos de productos almacenados en localStorage al cargar la página
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      updateProducts(parsedProducts);
    }
  
  }, []);

  

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setActiveUser(null)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home 
            products={products.map((product) => ({
              id: product.id,
              title: product.title,
              photo: product.photo,
              description: product.description,
              price: product.price,
              brand: product.brand,
              stock: product.stock
            }))}
            marcas={marcas}
            isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo 
            />} 
          />

          <Route path = "/search" element = {<Search 
            products = {products.map((product) => ({
              id: product.id,
              title: product.title,
              photo: product.photo,
              description: product.description,
              price: product.price,
              brand: product.brand,
              stock: product.stock
            }))}
            marcas={marcas}
            isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />} />

          <Route path = "/about" element = {<About isLoggedIn={isLoggedIn} 
            userData={userData}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />}/>

          <Route path = "/login" element = {<Login 
            users={users}
            handleUserLogin={handleUserLogin}
            setIsLoggedIn={setIsLoggedIn} // Pasar setIsLoggedIn al componente Login
          />} />

          <Route path = "/signin" element = {<SignIn 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn} 
            users = {users} 
            updateUsers = {updateUsers}
            handleUserLogin = {handleUserLogin} // Pasar la función handleUserLogin a SignIn
          />} />

          <Route path = "/account" element = {<Account 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            users={users}
            updateUsers={updateUsers}
            activeUser={activeUser} // Pasar el usuario activo a Account
            userData={userData} // Pasar el estado userData como props.userData a Account
            setData={handleSetUserData} // Pasa la función para establecer los datos del usuario
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
            logOut={handleLogout}
          />} />

          <Route path="/shopping" element={<ShoppingCart 
            products = {products.map((product) => ({
              id: product.id,
              title: product.title,
              photo: product.photo,
              description: product.description,
              price: product.price,
              brand: product.brand,
              stock: product.stock
            }))}
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
          />} />

          <Route path="/productRegister" element={<ProductRegister
            brands={marcas.map((marca) => marca.brand)}
            products={products}
            updateProducts={(newProduct) => {
              const updatedProducts = [...products, newProduct];
              updateProducts(updatedProducts);
              localStorage.setItem('products', JSON.stringify(updatedProducts));
            }}
            isLoggedIn={isLoggedIn} // Pasar el estado de la sesión
            userRole={activeUser ? activeUser.role : null} // Pasar el rol del usuario si está activo
            userData={userData}
          />} />
        </Routes>
        <MobileNav  isLoggedIn={isLoggedIn}
          userRole={activeUser ? activeUser.role : null} 
        />
      </CartProvider>
    </Router>
  );
}

export default App;
