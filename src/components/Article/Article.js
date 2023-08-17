import React from 'react'
import "./Article.css"


export default function Article({ img, title, desc }) {
  return (
    <div className='article col-lg-5 col-sm-4 col-11'>
      <img src={img} alt={title} className="container-fluid" />
      <div className="article-body">
        <h5 className="article-title">{title}</h5>
        <p className="article-text">{desc}</p>
      </div>
    </div>
  )
}
