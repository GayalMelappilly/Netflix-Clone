import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner