import React, { useState, useEffect } from 'react'
import './Movies.css'
import { API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'
import { useParams } from 'react-router-dom'

function Movies() {
    // alert('MOVIES')
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    useEffect(() => {
        // alert(`movie/${id}??api_key=${API_KEY}&language=en-US`)
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data)
            setMovie(response.data)
        })
    }, [])
    return (
        <div>
            <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
                <div className='content'>
                    <h1 className='title'>{movie ? movie.original_title : ''}</h1>
                    <div className='banner-buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My list</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ''}</h1>
                </div>
                <div className="fade"></div>
            </div>
        </div>
    )
}

export default Movies