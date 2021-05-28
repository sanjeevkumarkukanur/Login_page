import React,{ useState } from 'react'
import './App.css';
import Axios from 'axios'


function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () =>{
    Axios.post('http://localhost:3001/create',{
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage
    }).then(()=>{
      setEmployeeList([...employeeList, {
        name:name,
      age:age,
      country:country,
      position:position,
      wage:wage
      },
    ]);
    });
  }

  const getEmployee = ()=>{
    Axios.get('http://localhost:3001/employeeDel').then((response)=>{
      setEmployeeList(response.data)
    });
  }

  return (
    <div className="App">
        <div className="information">
        <label>Name</label>
        <input type="text" onChange={(event)=>{
          setName(event.target.value);
        }
        }  />
        <label>Age</label>
        <input type="number"
        onChange={(event)=>{
          setAge(event.target.value);
        }
        }  />
        <label>Country</label>
        <input type="text" onChange={(event)=>{
          setCountry(event.target.value);
        }
        } />
        <label>Position</label>
        <input type="text" onChange={(event)=>{
          setPosition(event.target.value);
        }
        } />
        <label>Wage (year)</label>
        <input type="number" onChange={(event)=>{
          setWage(event.target.value);
        }
        } />
        <button onClick={addEmployee} >Add Employee</button>
        
      </div>
      <div className='employees'>
      <button onClick={getEmployee}>show employees</button> 
      </div>
      {employeeList.map((val, key)=>{
        return <div className='employee'>
          <h3>{val.name}</h3>
          <h3>{val.age}</h3>
          <h3>{val.country}</h3>
          <h3>{val.position}</h3>
          <h3>{val.wage}</h3>
        </div>
      })}
    </div>
  );
}

export default App;
