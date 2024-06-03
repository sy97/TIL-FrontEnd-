import axios from "../api/axios";
import {useEffect, useState} from 'react';



const EmployeeList = () =>{
    const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        fetchEmployee();
    },[]);

    const deleteEmployee= async (id) => {
        try{
            const url = `/${id}`;
            await axios.delete(url);
            fetchEmployee();
        }
        catch(err){
            console.log("delete err : " + err);
        }
    }
    const fetchEmployee = async() => {
        //async()이하 단 한번만 실행될 수 있도록 useEffect

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
                            <button onClick={() => deleteEmployee(emp.id)}>삭제</button></tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;