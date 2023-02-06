import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--image" alt="TravelImage"></img>
            <div className="card--text">
                <p>{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                <h3>{props.item.title}</h3>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
            <div className="card--borderbottom"></div>
        </div>
    )
}