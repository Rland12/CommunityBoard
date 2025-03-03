import React from 'react';

function HotelCard (props) {
    return(
        <div className = "hotel-container">
            <div className = "img-container">
            <img src = {props.img} />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <button><a href ={props.button}>Book Now</a></button>
        </div>
    )
}

export default HotelCard;