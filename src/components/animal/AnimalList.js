import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({history}) => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)
    // since we are no longer always going to be displaying all animals
    const [filteredAnimals, setFiltered] = useState([])

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /* 
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */
    useEffect(() => {
        if (searchTerms !== "") {
            console.log(searchTerms)
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    useEffect(() => {
        console.log("filtered animals:", filteredAnimals)
    }, [filteredAnimals])

    return (
        <>
            <h1>Animals</h1>
            <button onClick={() => history.push("/animals/create")}>
                Make Appointment
            </button>
            <div className="animals">
            {
                filteredAnimals.map(animal => {
                    return <Animal key={animal.id} animal={animal} />})
            }
            </div>
        </>
    )
}