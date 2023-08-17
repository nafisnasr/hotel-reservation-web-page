import React from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import "./TitleBox.css"
import { Link } from 'react-router-dom'

export default function TitleBox({ title, desc }) {
    return (
        <div className='title-box'>
            <div className="title-text-box">
                <h3 className="title">{title}</h3>
                <span className="detail">{desc}</span>
            </div>
            <Link to="/" className='link'>
                <BsFillArrowLeftSquareFill className='icon' />
            </Link>
        </div>
    )
}
