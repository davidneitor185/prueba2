
import './App.css';
import useAxios from './useAxios.js';
import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import Ejercicio2 from './components/ejercicio2/index';



function App() {
  const info = useAxios('/users');
  const data = info.data.data;
  const [peopleId, setpeopleId] = useState("");
  const [result, setResult] = useState("")
  

  const searchId = () => {


    if (peopleId == "") {
      setResult("Realice una busqueda por id")
    } else {
      //console.log(datos);
      if( data.find(people => people.id == peopleId) != null){
        setResult(data.find(people => people.id == peopleId).first_name); 
      }else{
        setResult("No hay personas con este Id");
      }
                  
      }          
  }


  return (
    <div className="App">
      <div>
        <FormControl value={peopleId} onChange={(e) => setpeopleId(e.target.value)} />
        <Button onClick={() => searchId()} variant="primary">Search</Button>
        <h1>el nombre de este id es:  {result? result : "no hay usuarios con este id"}</h1>
      </div>
      <div>
        <Ejercicio2/>
      </div>


    </div>


  );
}


export default App;
