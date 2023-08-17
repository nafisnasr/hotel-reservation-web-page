import React from "react";
import "./City.css"

export default function City({ img, city, province }) {
    return (
        <>
            <div className="city col-lg-2 col-md-4 col-sm-5">
                <div className="img-container">
                    <img src={img} alt={city} />

                </div>
                <div className="text-container">
                    <span className="city-name">{city}</span>
                    <span className="sub-text">{province}</span>
                </div>
            </div>
        </>
    );
}