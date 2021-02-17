import React from 'react';
import './App.css';
import Form from './components/Form';
import EmployeeTable from './assignment/EmployeeTable';
// import DropDownElement from './components/DropDownElement';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Form /> */}
        <EmployeeTable />
        {/* <DropDownElement /> */}
      </div>
    </Router>

  );
}

export default App;
