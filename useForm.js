import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    // Vanmos a manejar el estado del formulario
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState); // forma de resetear el formulario
    }


    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }


    return [values, handleInputChange, reset];

}
