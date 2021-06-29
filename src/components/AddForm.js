import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addStudent} = useContext(StudentContext);

    const [newStudent, setnewStudent] = useState({
        name:"", specialization:"", phone:"", address:""
    });

    const onInputChange = (e) => {
        setnewStudent({...newStudent,[e.target.name]: e.target.value})
    }

    const {name, specialization, phone, address} = newStudent;

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(name,specialization, phone, address);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Education"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="course"
                    name="specialization"
                    value={specialization}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Institution"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="percentage"
                    
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
             
            <Button variant="success" type="submit" block>
                Add New Education
            </Button>
        </Form>

     )
}

export default AddForm;