import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = createContext()

const StudentContextProvider  = (props) => {

    const [Students, setStudents] = useState([
       
])

useEffect(()=> {
    setStudents(JSON.parse(localStorage.getItem('Students')))
},[])

useEffect(() => {
    localStorage.setItem('Students', JSON.stringify(Students));
})



const sortedStudents = Students.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addStudent = (name,specialization, address, phone,university) => {
    setStudents([...Students , {id:uuidv4(), name, specialization, address, phone}])
}

const deleteStudent = (id) => {
    setStudents(Students.filter(Student => Student.id !== id))
}

const updateStudent = (id, updatedStudent) => {
    setStudents(Students.map((Student) => Student.id === id ? updatedStudent : Student))
}

    return (
        <StudentContext.Provider value={{sortedStudents, addStudent, deleteStudent, updateStudent}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;