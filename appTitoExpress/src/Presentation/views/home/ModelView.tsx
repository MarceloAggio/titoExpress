import React, { useState } from 'react'

const HomeViewModel = () => {

    // Restaurando os valores dos campos dos formularios 
    const[values, setValues] = useState({
        email: '',
        senha:'',
    });

    // Criando o metado

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]:value});
    }
    
    const register = () => {
        console.log(JSON.stringify(values))
    } 


    return ( {
        ...values,
        onChange,
        register
    }
    )
}
export default HomeViewModel;