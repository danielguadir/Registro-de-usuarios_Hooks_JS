import {useForm} from '../context/FormContext';
import './SummaryStyle.css';

function Summary(){
    const {formData} = useForm();

    return (<>  
        <div><p>Resumen de Registro</p></div>
        <div className='container-summary'>
            <table className='table'>
           
            <tbody>
                <tr>
                    <td>name:  </td> <td>{formData.name}</td>
                </tr>
                <tr>
                    <td>Email: </td> <td>{formData.email}</td>
                </tr>
                <tr>
                    <td>password: </td><td>{formData.password}</td>
                </tr>
                <tr className='registration-completed'> <td colSpan={2}><strong>Registration completed !</strong></td></tr>

            </tbody>
            </table>
            <button onClick={() => window.history.back()} className='btn btn-back'>Back</button>
            
        </div>
    </>);
}
export default Summary;