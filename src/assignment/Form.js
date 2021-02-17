import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
function Form(props) {
    const firstNameRef = useRef();
    const { register, handleSubmit, errors, setValue, reset } = useForm();
    useEffect(() => {
        firstNameRef.current.focus();
    }, [])
    return (
        <div className="form">
            < form onSubmit={handleSubmit(props.onSubmit)} >
                <div className="form__title" >Employee Data  </div>
                <div className="form__ID">
                    <label htmlFor="employeeID">Employee ID</label>
                    < input name="employeeID" className="idInput" ref={(e) => {
                        register(e)
                        firstNameRef.current = e // you can still assign to ref
                    }} />
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
                    <button onSubmit={handleSubmit(props.onSubmit)} >Submit</button>
                </div>
            </form >
        </div>
    )
}

export default Form;
