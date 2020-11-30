import React, { useContext, useRef, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const name = useRef(null)
    const location = useRef(null)
    const owner = useRef(null)
    const breed = useRef(null)

    /* Get customer state and location state on initialization. */
    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])
    
    const constructNewAnimal = () => {
        /* 
        The `location` and `tech` variables below are the references attached to the input 
        firlds. You can't just ask for the `.value` property directly, but rather 
        `.current.value` now in React.
        */
       const locationId = parseInt(location.current.value)
       const customerId = parseInt(owner.current.value)
       const animalName = name.current.value
       const animalBreed = breed.current.value
   
       if (locationId === 0 || customerId === 0 || animalName === "") {
         window.alert("Please select a location and an owner and provide a name")
       } else {
         addAnimal({
           name: animalName,
           animalBreed,
           locationId,
           customerId
         })
           .then(() => props.history.push("/animals"))
       }
    }
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Assign to customer: </label>
                    <select defaultValue="" name="customer" ref={owner} id="animalCustomer" className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
    }