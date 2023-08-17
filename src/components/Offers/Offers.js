import React from 'react'
import "./Offers.css"

export default function Offers({ title, id, city, price, img }) {
    return (
        <div className='offers col-lg-3 col-md-5'>
            <div className="offer-img-container">
                <img src={img} alt={title} />
                <span className="offer-id">شناسه : {id}</span>
            </div>
            <div className="offer-text-container">
                <h6 className="title">{title}</h6>
                <span className="subtext">{city}</span>
                <div className="price-container">
                    <span className="price">{price} تومان / هر شب</span>
                    <button className='reserve-btn'>
                        رزرو آنی
                    </button>
                </div>
            </div>
        </div>
    )
}
