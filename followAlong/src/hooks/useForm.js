import { useLocalStorage } from 'react'
// the utility that useState provides for a single state variable,
// this custom hook provides for an entire form with some bonus functions



export const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage("formValues", initialValues)
    // "formValues" becomes our key in useLocalStorage
    // replace useState(initialValues) with useLocalStorage(initialValues)
    // ({
        // firstName= "",
        // lastName= ""
        // move these key value pairs to const initialValues = {} moved to signup.js
    // })
    //change them to values and setValues to make it general

    const handleChanges = e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value})
    };
    // not sure if it is a shallow merge? No worries just ...values either way
    // need to make it a computed property name with setValues[e.target.name]: e.target.value

    const clearForm = e => {
        e.preventDefault();
        setFirstName("");
    };

    // return value should be something *kinda* like [firstName, setFirstName]
    return [values, handleChanges, clearForm]
}