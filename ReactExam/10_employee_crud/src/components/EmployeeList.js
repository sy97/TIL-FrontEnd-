import axios from "../api/axios";
import {useEffect, useState} from 'react';

const EmployeeList = () =>{
    const [employee, setEmployee] = useState([]);

    //async()이하 단 한번만 실행될 수 있도록 useEffect
    useEffect(()=>{
        fetchEmployee();
    },[]);

    const fetchEmployee = async() => {
    try{

        const response = await axios.get('/emp');
        setEmployee(response.data);
    }

    catch(err){
        console.log('fetch err')
    }
}
    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {
                    employee.map((emp)=>
                        <tr key={emp.id}> 
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;