import React from "react"


export default function Section(props){
    
    return (
        <div className="section">
            <img src={props.imageUrl} className = "section-image"/>
            <div className = "section-contents">
                <h3><img src="https://cdn-icons-png.flaticon.com/512/439/439902.png" className="gps-icon"/><span className="location">{props.location}</span><span className="map-link"> View on Google Maps</span></h3>
                <h1 className="title">{props.title}</h1>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
            
        </div>
    )
}