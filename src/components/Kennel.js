import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
// import { Animal } from "./animal/Animal"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import "./animal/Animal.css"
// import { Customer } from "./customer/Customer"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import "./customer/Customer.css"
// import { Employee } from "./employee/Employee"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import "./employee/Employee.css"
// import { Location } from "./location/Location"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import "./location/Location.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <NavBar />
        <ApplicationViews />
    </>
)