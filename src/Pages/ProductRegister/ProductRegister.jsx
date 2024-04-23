import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { btnSignIn, colorPrimario } from "../../Components/UI/Variables";
import { Formulario, Btn, Contenedor, Etiqueta, CampoTexto} from "../../Components/UI";
import OptionList from "../../Components/OptionList";
import { validatePrice, validateProductCover, validateStock, validateTitle } from "../../Validations/Validations";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";

const RegistrarProducto = styled(Btn)`
    background-color: ${btnSignIn};
    font-size: 25px;
    padding: 20px;
    transition: all .5s ease-in-out;
    border-radius: 20px;
    width: auto;
    height: auto;
    margin-bottom: 100px;
    display: block;
    &:hover
    {
        background-color: #e08044;
    }
`

const DivFoto = styled.div`
    @media (min-width: 495px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:-webkit-fill-available;
    }
`

const PortadaProducto = styled.label`
    border: 10px dashed #737373;
    display: inline-block;
    height: 200px;
    width: 170px;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    margin: 15px 25%;
    overflow: hidden;
    text-align: center;
    color: #737373;
    font-size: 115px;
    font-weight: bold;
    input{
        display: none;
    }
`

const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: -webkit-fill-available;

    @media(min-width: 930px)
    {
        margin-top: 30px;
    }
`

const Div = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    


    @media (min-width: 930px) 
    {
        width: 50%;
        padding: 0 80px;
    }
`

const CropContainer = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  transform: translate(-5.8%, -5.8%);
`;

const CropPreview = styled.img`
  position: relative;
  left: 5%;
  top: -82.5%;
  width: 170px;
  height: 200px;
  border-radius: 20px;
`;

const ErrorMessage = styled.p`
    box-sizing: border-box;
    background-color: red;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: -25px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 90%;

    border-radius: 10px;
    padding: 2px 2px 2px 7px;

    @media (max-width: 939px)
    {
        margin-right: -151px;
    }
`

const ProductRegister = ({ brands, products, updateProducts, isLoggedIn, userRole, userData}) =>
{
    const navigate = useNavigate();
    console.log(isLoggedIn, userRole);
    

    useEffect(() => {
        document.title = "Library | Registrar Libro";

        if (!isLoggedIn || userRole !== "administrador") {
            // Si el usuario no tiene acceso, redirigir a otra página (por ejemplo, la página de inicio)
            navigate('/'); // Redirigir a la página de inicio
            
 
          }
        }, [isLoggedIn, userRole]);
      


    const [selectedImage, setSelectedImage] = useState(null);
    const [coverError, setCoverError] = useState({
        cover: {
            error: false,
            message: ""
        }
    });
    const [editor, setEditor] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                setSelectedImage(imageUrl);

                //Validar la portada cuando se selecciona una imagen
                const validation = validateProductCover(imageUrl);
                setCoverError(validation);
            };
            reader.readAsDataURL(file);
        }
        
    };

    const handleSubmit = () => {
        // Valida la portada antes de enviar el formulario
        const validation = validateProductCover(selectedImage);
        setCoverError(validation);

        if (!validation.cover.error) {
            const newProduct = {
            id: uuid(),
            brand: marca,
            photo: selectedImage,
            title,
            description,
            price,
            stock
            };
        // Obtener los productos actuales
        const updatedProducts = [...products];
        const productExists = updatedProducts.some(product => product.title === newProduct.title && product.brand === newProduct.brand)

        if(!productExists){
            updatedProducts.push(newProduct);
            updateProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
        else{
            {errorTitle.title.error && (
                <ErrorMessage> El producto ya existe </ErrorMessage>
            )}
        }
        // Actualizar el estado de los productos
        //props.updateProducts(updatedProducts);

        // Mantener la imagen seleccionada en el estado local
        setSelectedImage(selectedImage);

        // Almacenar los productos actualizados en el localStorage
        //localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
    };

    const handleSave = () => {
        if (editor) {
            const canvas = editor.getImage();
            const dataURL = canvas.toDataURL();
            console.log(dataURL);
        }
    };

    const [marca, updateBrand] = useState("");
    const [errorBrand, setErrorBrand] = useState({
        brand: {
            error: false,
            message: ""
        }
    });

    const [title, setTitle] = useState("");
    const [errorTitle, setErrorTitle] = useState({
        title: {
            error: false,
            message: ""
        }
    });

    const [description, setDescription] = useState("");
    const [errorDescription, setErrorDescription] = useState({
        description: {
            error: false,
            message: ""
        }
    });

    const [stock, setStock] = useState();
    const [errorStock, setErrorStock] = useState({
        stock: {
            error: false,
            message: ""
        }
    });

    const [price, setPrice] = useState(0.00);
    const [errorPrice, setErrorPrice] = useState({
        price: {
            error: false,
            message: ""
        }
    });
    const formatPrice = (event) => {
        const input = event.target;
        let value = input.value;
      
        // Eliminar caracteres no numéricos
        value = value.replace(/\D/g, '');
      
        // Si el valor es cero, establecerlo como un valor vacío
        if (value === '0') {
          value = '';
        }
      
        // Dar formato al valor como precio
        let formattedValue = '';
        if (value !== '') {
          const cents = value.padStart(3, '0').slice(-2);
          const dollars = value.padStart(3, '0').slice(0, -2).replace(/^0+(?=\d)/, ''); // Quita los ceros iniciales
          formattedValue = `$ ${dollars}.${cents}`;
        } else {
          formattedValue = '$ 0.00';
        }
      
        // Actualizar el valor en el campo de texto
        input.value = formattedValue;
      
        // Actualizar el estado de 'price' si es un componente funcional
        const floatValue = parseFloat(value) / 100;
        setPrice(floatValue); // Asegúrate de llamar a setPrice con el nuevo valor formateado
      };
      
    return(
        <Contenedor>
            <Formulario>
                <DivFoto>
                    <Etiqueta htmlFor = "portada" >Portada del producto</Etiqueta>
                    <PortadaProducto>
                        +
                        <input 
                            type = "file" 
                            accept="image/*" 
                            onChange = {handleImageChange}
                            required 
                        />
                        { selectedImage ? (
                            <CropContainer>
                                <CropPreview src={selectedImage} alt = "Portada del producto"/>
                            </CropContainer>
                        ) : null}
                    </PortadaProducto>
                    {coverError.cover.error && ( 
                        <ErrorMessage> {coverError.cover.message} </ErrorMessage>
                    )}
                </DivFoto>

                <Div>
                    <Etiqueta htmlFor="brand" >Marca: </Etiqueta>
                    <OptionList 
                        id = "marca"
                        placeholder = "Selecciona la marca"
                        required
                        value = {marca}
                        updateValue = {updateBrand}
                        brands = {brands}
                    />
                    
                </Div>

                <Div>
                    <Etiqueta htmlFor="title" >Título: </Etiqueta>
                    <CampoTexto 
                        id = "title"
                        type = "text"
                        placeholder="Ingrese el título del producto"
                        error = {errorTitle && errorTitle.title && errorTitle.title.error}
                        value = {title}
                        onChange = {(e) => {
                            setTitle(e.target.value);
                        }}
                        onBlur = {(e) => {
                            setErrorTitle(validateTitle(e.target.value))
                        }}
                        required
                    />
                    {errorTitle.title.error && (
                        <ErrorMessage> {errorTitle.title.message} </ErrorMessage>
                    )}
                </Div>

                <Div>
                    <Etiqueta htmlFor="description">Descripción: </Etiqueta>
                    <CampoTexto 
                        id = "description"
                        type = "text"
                        placeholder="Ingrese la descripción del producto"
                    />
                </Div>

                <Div>
                    <Etiqueta htmlFor="stock">Stock: </Etiqueta>
                    <CampoTexto 
                        id = "stock"
                        type = "number"
                        min="0"
                        placeholder="Ingrese la cantidad de stock del producto"
                        error = {errorStock && errorStock.stock && errorStock.stock.error}
                        value = {stock}
                        onChange = { (e) => {
                            setStock(e.target.value);
                        }}
                        onBlur = { (e) => {
                            setErrorStock(validateStock(e.target.value));
                        }}
                        required
                    />
                    {errorStock.stock.error && (
                        <ErrorMessage> {errorStock.stock.message} </ErrorMessage>
                    )}
                </Div>

                <DivBtn>
                    <RegistrarProducto onClick={handleSubmit} >Registrar Producto</RegistrarProducto>
                </DivBtn>
            </Formulario>
        </Contenedor>
    )
}

export default ProductRegister;