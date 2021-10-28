import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import axios from 'axios';



const Ejercicio3 = ({ persona, modal, setModal}) => {
    console.log(persona);
    const [user, setUser] = useState({ first_name: persona.first_name, last_name: persona.last_name, email: persona.email });
    const EditarPorId = async () => {
        const body = {first_name:user.first_name,last_name:user.last_name,email:user.email};
        let response = await axios.put(`https://reqres.in/api/users/${persona.id}`,
            body);
            alert("Se actualizó correctamente");
            console.log(response);
    }

    return (
        <div>
            <Button variant="primary" onClick={()=>setModal(!modal)}>Update</Button>
            <Modal show={modal}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input value={user.first_name} placeholder="First Name" onChange={(e)=> setUser({...user, first_name:e.target.value})}></input>
                    <input value={user.last_name} placeholder="Last Name" onChange={(e)=> setUser({...user, last_name:e.target.value})}></input>
                    <input value={user.email} placeholder="Email" onChange={(e)=> setUser({...user, email:e.target.value})}></input>
                
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"onClick={()=> setModal(!modal)}>Close</Button>
                    <Button variant="primary" onClick={()=> EditarPorId()}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
        </div>
    )
}

export default Ejercicio3
