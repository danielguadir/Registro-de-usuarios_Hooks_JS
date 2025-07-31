import {useForm} from '../context/FormContext';
import {useNavigate} from 'react-router-dom';
import './SummaryStyle.css';
import'../App.css';
function Form(){
    const {formData, setFormData} = useForm();
    const navigate = useNavigate();

    const manejarCambio = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const manejarRegistro = (e) => {
    if(formData.name && formData.email && formData.password) {
        navigate('/summary');
    }else{
        alert('Por favor, completa todos los campos');
    }
};

return (
<>
<div><p>Registro de usuario</p></div>
    <div className="containerForm">
        <table className='table'>           
            <tbody className='table-bodyform'>
                <tr>
                    <td>Nombre:  </td>
                    <td>
                        <input type="text"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            value={formData.name}
                            onChange={manejarCambio} />
                    </td>
                </tr>

                <tr>
                    <td>Email:  </td>
                    <td>
                        <input type="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={formData.email}
                            onChange={manejarCambio} />
                    </td>
                </tr>
                <tr>
                    <td>password:  </td>
                    <td>
                        <input type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={formData.password}
                            onChange={manejarCambio} />
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
    </div><div className='btn-container'>
            <button onClick={manejarRegistro} className='btn-getinto'>Register</button>

        </div></>
);
}
export default Form;