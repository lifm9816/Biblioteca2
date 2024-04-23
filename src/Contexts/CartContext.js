import React, { createContext, useState, useContext, useEffect } from "react";

//Creación de contexto del carrito
export const CartContext = createContext();

//Creación de componente porveedor para el contexto del carrito
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    //Cargar datos del carrito desde localStorage al cargar la página
    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if(storedCartItems){
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    //Actualizar localStorage cuando cambien los elementos del carrito
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    //Función para agregar o actualizar elementos en el carrito
    const addToCart = (product) =>{
        const existingItem = cartItems.find(item => item.product.id === product.id);
        
        if(existingItem) {
            const updatedCartItems = cartItems.map((item) => 
                item.product.id === product.id 
                ? {...item, quantity: item.quantity + 1}
                : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, {
                product: product, quantity: 1
            }])

        }
    }

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.product.id !== productId
          );
          setCartItems(updatedCartItems);
    }

    const updateCartItemQuantity = (productId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) => 
            item.product.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    }

    const getTotalItems = () => {
        const TotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        return TotalItems;
    }

    return (
        <CartContext.Provider
            value = {{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartItemQuantity,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>    
    )
}

//Función personalizada para acceder al contexto del carrito
export const useCart = () => useContext(CartContext)