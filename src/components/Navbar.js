import React from "react"
import "./../style.css"
import EarthIcon from "./../images/earth-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={EarthIcon} className="navbar--icon" alt="EarthIcon"></img>
            <h3 className="navbar--header">my travel journal.</h3>
        </nav>
    )
}