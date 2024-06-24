import React from 'react'
import logo from "../assets/news-logo.png"
import news from "../images/news.jpg"
import { Link } from 'react-router-dom'


function First() {
  return (
    <div className='bg-custom-image h-screen outer d-flex'>
     <div className="head leading-snug ">
     Get your daily dose <br/> of ಕನ್ನಡ ನ್ಯೂಸ್ curated for you <br/> ~ NewsNest
     </div>
     <Link to='/land'>
     <div className="">
      <img src={logo} alt="" />
      </div>
     </Link>
     </div>
  )
}

export default First
