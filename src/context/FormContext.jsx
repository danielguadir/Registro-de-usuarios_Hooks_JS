import { createContext, useContext, useState } from 'react';


// 1. Creacion de  el contexto
const FormContext = createContext();

// 2. Creacion del proveedor que va a envolver toda la app
function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
    
  );
 
}

// 3. Creacion de  un hook personalizado para consumir fácilmente el contexto
export function useForm() {
  return useContext(FormContext);
}
export default FormProvider;