import {Routes,Route} from 'react-router-dom';
import FormProvider from './context/FormContext';
import Form from './components/Form';
import Summary from './components/Summary';
import './App.css';
 

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route path ="/" element={<Form />} />
        <Route path ="/summary" element={<Summary />} />
      </Routes>
    </FormProvider>
  );
}
export default App;
 
