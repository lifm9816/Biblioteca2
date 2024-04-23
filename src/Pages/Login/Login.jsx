import styled from "styled-components";
import { colorPrimario, btnSignIn } from "../../Components/UI/Variables";
import { Link } from "react-router-dom";
import { Btn ,Contenedor, CampoTexto } from "../../Components/UI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Formulario = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 900px)
    {
        margin-top: 5%;
        transform: scale(1.3);
    }
`

const Etiqueta = styled.label`
    background-color: ${colorPrimario};
    font-size: 20px;
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 10px;
    width: auto;
    font-weight: 400;
`

const Input = styled(CampoTexto)`
    margin-right: 0;
`

const BtnCuenta = styled(Btn)`
    font-size: 25px;
    transition: all .5s ease-in-out;
    border-radius: 10px;
    width: max-content;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
`

const IniciarSesion = styled(BtnCuenta)`
    background-color: ${btnSignIn};
    
    &:hover
    {
        background-color: #e08044;
    }
`

const CrearCuenta = styled(BtnCuenta)`
    background-color: ${colorPrimario};
`

const DivInput = styled.div`
    box-sizing: border-box;
    width: auto;
    display:block; 
    margin: 0 15%;
`

const DivBtn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 600px)
    {
        flex-direction: column;
    }
`

const Login = ({ users, handleUserLogin }) =>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = "Library | Iniciar Sesión";
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password); // Verifica si los valores se capturan correctamente
    
        // Lógica de autenticación
        const user = users.find((u) => u.email === email && u.password === password);
    
        if (user) {
            handleUserLogin(user); // Establece el usuario activo

            localStorage.setItem('isLoggedIn', true); // Marca la sesión como iniciada
            localStorage.setItem('userData', JSON.stringify(user)); // Almacena los datos del usuario
        
    
          // Redirecciona al home
          navigate("/");
        } else {
          // Manejar credenciales incorrectas o usuario no encontrado
          console.log("Credenciales incorrectas");
        }
      };

    return(
        <Contenedor>
            <Formulario onSubmit={handleLogin}>
                <DivInput>
                    <Etiqueta htmlFor="correo">Correo:</Etiqueta>
                    <Input type="email"
                        id="correo"
                        placeholder="Ingrese su correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </DivInput>
                
                <DivInput>
                    <Etiqueta htmlFor="contraseña" >Contraseña: </Etiqueta>
                    <Input type="password"
                        id="contraseña"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </DivInput>
                
                <DivBtn>
                    <Link to="/signin">
                        <CrearCuenta>Crear cuenta</CrearCuenta>
                    </Link>
                    <IniciarSesion >Iniciar Sesión</IniciarSesion>
                </DivBtn>
            </Formulario>    
        </Contenedor>
    )
}

export default Login;