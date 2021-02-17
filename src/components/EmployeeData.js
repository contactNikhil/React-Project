import React, { useEffect } from 'react'

function EmployeeData(props) {

    useEffect(() => {
        console.log(props.id)

    }, [])
    return (
        <div>
            {props.id}
        </div>
    )
}

export default EmployeeData
