import './App.css';
import EmployeeList from './components/EmployeeList'; 
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm/>
      <hr/>
      <EmployeeList/>
      
    </div>
  );
}

export default App;
