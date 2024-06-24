import React from 'react'
import logo from "../assets/news-logo.png"
import news from "../images/news.jpg"


function First() {
  return (
    <div className='bg-custom-image h-screen outer'>
     <div className="head leading-snug d-flex ">
     Get your daily dose <br/> of Kannada news curated for you <br/> ~ NewsNest
     <img src={logo} alt="" />
     </div>
    </div>
  )
}

export default First
