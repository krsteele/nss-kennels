import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const Animal = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                {animal.name}
            </Link>
        </h3>
        <div className="animal__breed">{animal.animalBreed}</div>
        {/* <div className="animal__location">location: {location.name}</div>
        <div className="animal__customer">customer: {customer.name}</div> */}
    </section>
)