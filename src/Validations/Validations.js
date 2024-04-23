export const validateName = (name) =>{
    if(name.length > 2 )
    {
        return {
            name: {
                error: false,
                message: ""
            }
        }
    }
    if(name.length === 0){
        return {
            name: {
                error: true,
                message: "El campo de nombre no puede estar vacío"
            }
        }
    }
    else{
        return {
            name: {
                error: true,
                message: "El campo nombre debe tener al menos 3 caracteres"
            }
        }
    }
}

export const validateLastName = (lastName) => {
    if(lastName.length > 2){
        return {
            lastName: {
                error: false,
                message: ""
            }
        }
    }
    if(lastName.length === 0) {
        return {
            lastName: {
                error: true,
                message: "El campo apellido no puede estar vacío"
            }
        }
    }
    else{
        return {
            lastName: {
                error: true,
                message: "El campo apellido debe contener al menos 3 caracteres"
            }
        }
    }
}

export const validateEmail = (email) => {
    if(email.length > 8 && email.includes("@") && email.includes(".") ){
        return {
            email: {
                error: false,
                message: ""
            }
        }
    }
    else{
        if(email.length < 8) {
            return {
                email: {
                    error: true,
                    message: "El correo electrónico debe contener al menos 8 caracteres"
                }
            }
        }
        if(email.length === 0)
        {
            return {
                email: {
                    error: true,
                    message: "El campo de correo electrónico no puede estar vacío"
                }
            }
        }
        else
        {
            return {
                email:{
                    error: true,
                    message: "El correo electrónico debe llevar el símbolo @"
                }
            }
        }
    }
}

export const validatePhone = (phone) => {
    if (phone.replace(/\D/g, "").length === 10) {
        return {
            phone: {
                error: false,
                message: ""
            }
        }
    }
    if (phone.replace(/\D/g, "").length === 0) {
        return {
            phone: {
                error: true,
                message: "El campo de número de teléfono no puede estar vacío"
            }
        }
    }
    else {
        return {
            phone: {
                error: true,
                message: "El número de teléfono debe tener 10 dígitos"
            }
        }
    }
}

export const ValidatePassword = (password) => {
    if (password.length > 8){
        return {
            password: {
                error: false,
                message: ""
            }
        }
    }
    if (password.length === 0){
        return {
            password: {
                error: true,
                message: "El campo contraseña no puede estar vacío"
            }
        }
    }
    else {
        return {
            password: {
                error: true,
                message: "La constraseña debe ser mayor a 8 caratéres"
            }
        }
    }
}

export const confirmPassword = (password, confPass) => {
    if (password === confPass && password.length > 8){
        return{
            confPass: {
                error: false,
                verify: true,
                message: "Las contraseñas coinciden"
            }
        }
    }
    if (password === confPass && password.length < 8){
        return{
            confPass: {
                error: true,
                verify: false,
                message: "Las contraseñas coinciden pero debe se mayor a 8 caracteres"
            }
        }
    }
    if (confPass === 0){
        return {
            confPass: {
                error: true,
                verify: false,
                message: "Confirme su contraseña para continuar"
            }
        }
    }
    else {
        return {
            confPass: {
                error: true,
                verify: false,
                message: "Las contraseñas no coinciden"
            }
        }
    }
}

export const validateProductCover = (cover) =>{
    if(cover !== null) {
        return {
            cover: {
                error: false,
                message: ""
            }
        }
    }
    else {
        return {
            cover: {
                error: true,
                message: "El campo portada no puede estar vacío"
            }
        }
    }
}

export const validateBrand = (brand) => {
    if (brand !== "")
    {
        return {
            brand: {
                error: false,
                message: ""
            }
        }
    }
    else {
        return {
            brand: {
                error: true,
                message: "Seleccone una marca"
            }
        }
    }
}

export const validateTitle = (title) => {
    if (title !== null && title.length > 1 && title !== " ")
    {
        return {
            title: {
                error: false,
                message: ""
            }
        }
    }
    else {
        return {
            title: {
                error: true,
                message: "El campo de título no puede estar vacío"
            }
        }
    }
}

export const validateStock = (stock) => {
    if (stock > 0 && stock !== null) {
        return {
            stock: {
                error: false,
                message: ""
            }
        }
    }
    else {
        return {
            stock: {
                error: true,
                message: "El campo stock no puede estar vacío"
            }
        }
    }
}

export const validatePrice = (price) => {
    if(price !== null && price !== 0) {
        return {
            price: {
                error: false,
                message: ""
            }
        }
    }
    else {
        return {
            price: {
                error: true,
                message: "El precio del producto debe ser mayor a 0"
            }
        }
    }
}