import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DropDownElement from "./DropDownElement";
import Table from '../assignment/EmployeeTable';
import DropdownModal from './DropdownModal';
import './Form.css';
const Form = () => {
    const { register, handleSubmit, errors, watch, reset } = useForm();
    const [employees, setEmployees] = useState([]);
    const [employeeData, setEmployeeData] = useState('');
    const [onEdit, setOnEdit] = useState(false)

    const onSubmit = data => {
        employees.push({ data });
        localStorage.setItem('employeeFormData', JSON.stringify(employees));
        let empData = localStorage.getItem('employeeFormData');
        empData = JSON.parse(empData)
        console.log(empData)
        setEmployeeData(empData);
        reset();
    }

    return (
        <div className="form">
            < form onSubmit={handleSubmit(onSubmit)} >
                <div className="form__title" >Employee Data  </div>
                <div className="form__ID">
                    <label htmlFor="employeeID">Employee ID</label>
                    < input name="employeeID" className="idInput" ref={register({ required: true })} />
                    {errors.employeeID && <span>This field is required</span>}
                </div>
                <div className="form__userName">
                    <label htmlFor="userName">Employee Name</label>
                    < input name="userName" className="userInput" ref={register({ required: true })} />
                    {errors.userName && <span>This field is required</span>}
                </div>
                <div className="form__contactNumber">
                    <label htmlFor="contactNumber">Contact Number</label>
                    < input name="contactNumber" className="numberInput" type="number" ref={register({
                        required: true,
                    })} />
                    {errors.contactNumber && <span>This field is required</span>}
                </div>
                <div className="form__emailID">
                    <label htmlFor="emailID">Email ID</label>
                    < input name="emailID" className="emailInput" type=
                        "email" ref={register({ required: true })} />
                    {errors.emailID && <span>This field is required</span>}
                </div>

                <div className="form__salary">

                    <label htmlFor="salary">Salary</label>
                    < input name="salary" className="salaryInput" type="number" ref={register({ required: true })} />
                    {errors.salary && <span>This field is required</span>}
                </div>
                <button className="submit__button" onClick={handleSubmit}>Submit</button>
            </form >
            <Table data={employeeData} />
            <DropdownModal data={employeeData} />
        </div>

    );
}


export default Form;