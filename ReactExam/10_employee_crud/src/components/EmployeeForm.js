import axios from "../api/axios";
import {useEffect, useState} from 'react';

const EmployeeForm = () =>{ 
//employeelist에 있는 fetchemployess를 부모가 props로 employeeform에 전달해줌.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/emp', {name, email}); //비동기 방식이기 때문에 순서를 지켜줘야해서 await. await를 쓰려면 반드시 async로 묶어줘야함.
            setName('');
            setEmail('');
        }
        catch(err){
            console.log("insert employee error : ", err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required /> 
            </div>
            <div>
                <label>Email : </label>
                <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)} required />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;