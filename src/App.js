import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Navbar from './assignment/Navbar';
import SideNavigationBar from './assignment/SideNavigationBar';
import EmployeeTable from './assignment/EmployeeTable';
import SideBar from './assignment/SideNavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SideNavigationBar >
          <div id="page-wrap">

          </div>
        </SideNavigationBar>
        <EmployeeTable />
      </div>
    </Router>

  );
}

export default App;
