import React from "react"

export default function Card(props) {
    return (
        <div>
            {/* <img>{props.item.imageUrl}</img> */}
            <h3>{props.item.location}</h3>
            <h3>View on Google Maps {props.item.googleMapsUrl}</h3>
            <h3>{props.item.title}</h3>
            <h1>{props.item.startDate}</h1>
            <h3>{props.item.endDate}</h3>
            <h3>{props.item.description}</h3>
        </div>
    )
}