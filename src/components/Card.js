import React from "react"
import GPS from "./../images/gps-icon.png"
import data from "./../data"

export default function Card(props) {
    let max = "Not Max"

    if (props.item.id === data.length) {
        max = "MAX"
    } else {
        max = "Not Max"
    }

    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--image" alt="TravelImage"></img>
            <div className="card--text">
                <p><img src={GPS} className="card--gpsicon" alt="GPS-Icon"></img>{props.item.location} <a href={props.item.googleMapsUrl} className="gray">View on Google Maps</a></p>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p>{props.item.description}</p>
            </div>
            {max === "Not Max" && <div className="card--borderbottom"></div>}
        </div>
    )
}