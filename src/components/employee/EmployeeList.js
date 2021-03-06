import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { Employee } from "./Employee"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    // const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        // console.log("EmployeeList: Initial render before data")
        getEmployees()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the employee state changed.
    */
    useEffect(() => {
        // console.log("EmployeeList: Employee state changed")
        // console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {
                    employees.map(employee => {
                        return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}