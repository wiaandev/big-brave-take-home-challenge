import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export const FormProvider = ({children}) => {

    const [formValues, setFormValues] = useState({});

    // Function to update form values
    const updateFormValues = (newValues) => {
      setFormValues({ ...formValues, ...newValues });
    };

    return (
        <FormContext.Provider value={{formValues, updateFormValues}}>
            {children}
        </FormContext.Provider>
    )
}