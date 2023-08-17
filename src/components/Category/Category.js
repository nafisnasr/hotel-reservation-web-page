import React from 'react'
import "./Category.css"

export default function Category({ title, detail, img }) {
    return (
        <div className="category col-lg-3 col-md-6 col-11">
            <img src={`/images/${img}`} alt="categories" className='category-img' />
            <div className="category-text-box my-2">
                <span className="title">{title}</span>
                <span className="detail">{detail}</span>
            </div>
        </div>
    )
}
