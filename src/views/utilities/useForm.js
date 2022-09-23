import React,{useState} from 'react'

export const useForm = (initialFormValues) => {
    const [values,setValues] = useState(initialFormValues);
    const handleInputChange = e => {
        const {name,value}= e.target
        setValues({
            ...values,
            [name]: value
        })

    }
    return {
        values,
        setValues,
        handleInputChange
    }
}





export const Form = (props) => {
  return (
    <form autoComplete='off'>
        {props.children}
    </form>
  )
}
