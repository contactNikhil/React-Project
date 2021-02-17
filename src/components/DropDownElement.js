import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap';
import EmployeeData from './EmployeeData';
function DropDownElement(props) {
    const [employeeData, setEmployeeData] = useState('')
    const [selectedId, setSelectedId] = useState('');
    // useEffect(() => {
    //     let data = localStorage.getItem('employeeFormData');
    //     data = JSON.parse(data);
    //     setEmployeeData(data);
    //     console.log(employeeData)
    // }, [setEmployeeData])
    useEffect(() => {
        window.addEventListener('storage', () => {
            let data = localStorage.getItem('employeeFormData');
            data = JSON.parse(data)
            setEmployeeData(data)
        });
    }, [setEmployeeData])

    const idClickedHandler = (e) => {
        // console.log(e.target.text)
        let id = e.target.text;
        console.log(e.target.text)

        setSelectedId(id);
        {
            employeeData.length !== 0 && employeeData.map((employee, index) => {

                if (e.target.text == employee.data.employeeID) {
                    return <EmployeeData id={id} />
                }
            })
        }
    }
    return (
        <div>
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Employee
  </Dropdown.Toggle>
                <Dropdown.Menu  >
                    {props.data?.length !== 0 && props.data?.map((employee, index) => {
                        return <Dropdown.Item value={employee.data.employeeID} key={employee.data.employeeID}
                            onClick={idClickedHandler} >
                            {employee.data.employeeID}
                        </Dropdown.Item>
                        { console.log(employee.data.employeeID) }
                    })}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default DropDownElement
