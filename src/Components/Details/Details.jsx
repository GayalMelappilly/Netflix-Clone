import React, { useState, useEffect } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { imageUrl, API_KEY } from '../../Constants/constants'
import axios from '../../axios'

function Details() {
    const [details, setDetails] = useState('')
    const { id } = useParams()
    useEffect(() => {
        // alert(`movie/${id}??api_key=${API_KEY}&language=en-US`)
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response)
            console.log(response.data)
            setDetails(response.data)
        })
    }, [])
  return (
    <div className='details'>
        <h1 className='title'>Overview</h1>
        <div className="overview">
            <p>{details.overview}</p>
            <br />
            <p>Genres : {details && details.genres.map((obj)=>{
                return (
                    <span>{obj.name} &nbsp;</span>
                )
            })} </p>
            <br />
            <p>Release Date : <span>{details.release_date}</span></p>
            <br />
            <p>Runtime : <span>{details.runtime} minutes</span></p>
            <br />
            <p>Language : {details && details.spoken_languages.map((obj)=>{
                return (
                    <span>{obj.english_name} &nbsp;</span>
                )
            })} </p>
        </div>
    </div>
  )
}

export default Details