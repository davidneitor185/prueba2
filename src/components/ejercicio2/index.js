import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import Ejercicio3 from '../ejercicio3'

const Ejercicio2 = () => {
    const [element, setElement] = useState("");
    const [people, setPeople] = useState({});
    const [modal, setModal]= useState(false);
    
    
    const searchId = async ()=>{
        if(element == ""){
            return
        }
        let response = await axios(`https://reqres.in/api/users/${element}`);
        setPeople(response.data.data);
        //console.log(people);
    }
    
    

    return (
        
        
        <div>
            <div>
            <input value={element} onChange={(e)=>setElement(e.target.value)}/>  
            <Button variant="primary" onClick={() => searchId()}>Search</Button>
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
                        

                        {people && Object.keys(people).map((ele)=>{
                           return <td>{people[ele]}</td>

                        })}
                        {people && people.id &&<td><Ejercicio3 people={people} modal={modal} setModal={setModal}></Ejercicio3></td>}
                    </tr>

                </tbody>
            </Table>
            </div>

        </div>
    )
}

export default Ejercicio2

