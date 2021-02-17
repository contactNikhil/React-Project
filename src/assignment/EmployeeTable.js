import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import EditedForm from './EditedForm';
import './EmployeeTable.css';
import Form from './Form';
function EmployeeTable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [onEdit, setOnEdit] = useState(false)
    const [index, setIndex] = useState('')
    const [employeeData, setEmployeeData] = useState([]);
    const [stateChanged, setStateChanged] = useState(true);


    useEffect(() => {
        localStorage.setItem('employeeFormData', JSON.stringify([]))
    }, [])
    useEffect(() => {
        let eData = localStorage.getItem('employeeFormData');
        eData = JSON.parse(eData);
        setEmployeeData(eData)
    }, [setEmployeeData])
    const onSubmit = data => {
        if (onEdit === true) {
            employeeData.splice(index, 1, data);
            setIndex('');
            setOnEdit(false);
        }
        else {
            employeeData.push(data);
        }
        localStorage.setItem('employeeFormData', JSON.stringify(employeeData));
        let empData = localStorage.getItem('employeeFormData');
        empData = JSON.parse(empData)
        console.log(empData)
        setEmployeeData(empData);
        setShow(false);
        // reset();
    }
    const editEmployeeHandler = (index) => {
        setOnEdit(true);
        setIndex(index);
        setShow(true);
    }
    const removeEmployeeHandler = (index) => {
        console.log(employeeData)
        employeeData.splice(index, 1);
        localStorage.setItem('employeeFormData', JSON.stringify(employeeData));
        setStateChanged(!stateChanged);
        console.log(employeeData)
    }

    return (

        < div >
            <p> <b><u>Brilworks Employee details</u></b></p>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Contact Number</th>
                        <th>Email </th>
                        <th>Salary</th>
                        <th>Remove Items</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(employeeData)}
                    {employeeData?.length !== 0 ? employeeData?.map((employee, index) => {
                        return <tr key={employee?.employeeID} >
                            {console.log(employee)}
                            <td>{employee?.employeeID}</td>
                            <td>{employee?.userName}</td>
                            <td>{employee?.contactNumber}</td>
                            <td>{employee?.emailID}</td>
                            <td>{employee?.salary}</td>
                            <td>
                                <Button variant="secondary" onClick={() => editEmployeeHandler(index)} >Edit </Button>
                            </td>
                            <td>
                                <button variant="danger" onClick={() => removeEmployeeHandler(index)}>Remove </button>
                            </td>

                        </tr>
                    })
                        : <tr>

                            <td colSpan="7" className="empty__table">No Employee Currently Added</td></tr>
                    }
                </tbody>
            </Table>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Add Employees
      </Button>

                <div className="wrapper">
                    <a onClick={() => setShow(true)} href="#"><span>Add Employees</span></a>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {onEdit === true ? <EditedForm onSubmit={onSubmit} index={index} /> : <Form onSubmit={onSubmit} />}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div >
    )
}

export default EmployeeTable;
