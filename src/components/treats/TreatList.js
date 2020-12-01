import React from "react"

export const TreatList = (props) => {
    const treats = ["cookies", "bones", "biscuits"]
return (
<>
<div>Hello! This is treat number {props.match.params.treatId}, {props.name}</div>
{treats.map(treat => <p>{treat}</p>)}
</>
)}