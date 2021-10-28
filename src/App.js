
import './App.css';
import useAxios from './useAxios.js';
import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import Ejercicio2 from './components/ejercicio2/index';



function App() {
  const data = useAxios('/users');
  const datos = data.data.data;
  const [idPersona, setIdPersona] = useState("");
  const [resultado, setResultado] = useState("")
  

  const buscarId = () => {


    if (idPersona == "") {
      setResultado("Realice una busqueda por id")
    } else {
      console.log(datos);
      datos.forEach((d) => {
        
        if (d.id == idPersona) {
          setResultado(d.first_name);
          return
        } 
        
      }
      
      )

    }
  }


  return (
    <div className="App">
      <div>
        <FormControl value={idPersona} onChange={(e) => setIdPersona(e.target.value)} />
        <Button onClick={() => buscarId()} variant="primary">Search</Button>
        <h1>el nombre de este id es:  {resultado? resultado : "no hay usuarios con este id"}</h1>
      </div>
      <div>
        <Ejercicio2/>
      </div>


    </div>


  );
}


export default App;
