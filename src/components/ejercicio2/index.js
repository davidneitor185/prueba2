import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import Ejercicio3 from '../ejercicio3'

const Ejercicio2 = () => {
    const [element, setElement] = useState("");
    const [persona, setPersona] = useState({});
    const [modal, setModal]= useState(false);
    
    
    const buscarPorId = async ()=>{
        if(element == ""){
            return
        }
        let response = await axios(`https://reqres.in/api/users/${element}`);
        setPersona(response.data.data);
        console.log(persona);
    }
    
    //console.log(persona);

    return (
        
        
        <div>
            <div>
            <input value={element} onChange={(e)=>setElement(e.target.value)}/>  
            <Button variant="primary" onClick={() => buscarPorId()}>Search</Button>
            </div>

            <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        <th>Option</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        

                        {persona && Object.keys(persona).map((ele)=>{
                           return <td>{persona[ele]}</td>

                        })}
                        {persona && persona.id &&<td><Ejercicio3 persona={persona} modal={modal} setModal={setModal}></Ejercicio3></td>}
                    </tr>

                </tbody>
            </Table>
            </div>

        </div>
    )
}

export default Ejercicio2

