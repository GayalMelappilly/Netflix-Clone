import React, { useState, useEffect } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { imageUrl, API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Details() {
    const [details, setDetails] = useState('')
    const [play, setPlay] = useState(false)
    const { id } = useParams()
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
            setDetails(response.data)
            // alert(urlId.key)
        })
    }, [id])

    function toHours(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return { hours, minutes: remainingMinutes };
    }

    const { hours, minutes } = toHours(details.runtime)

    // const handleMovie = (id) => {
    //     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
    //         if (response.data.results.length !== 0) {
    //             setUrlId(response.data.results[0])
    //             console.log(urlId)
    //             // setPlay(true)
    //             // alert(urlId.key)
    //         } else {
    //             console.log('Trailer not found.')
    //         }
    //     }, [id])
    //     return (
    //         <span>
    //             <button className='button' >x</button>
    //             {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    //         </span>
    //     )
    // }

    // const closeVideo = () => {
    //     setPlay(false)
    // }

    const opts = {
        height: '550',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className='details'>
            <h1 className='title'>Overview</h1>
            <div className="overview">
                <p>{details.overview}</p>
                <br />
                <p>Genres : {details && details.genres.map((obj) => {
                    return (
                        <span key={obj.id}>{obj.name} &nbsp;</span>
                    )
                })} </p>
                <br />
                <p>Release Date : <span>{details.release_date}</span></p>
                <br />
                <p>Runtime : <span>{hours}hr {minutes}min</span></p>
                <br />
                <p>Language : {details && details.spoken_languages.map((obj) => {
                    return (
                        <span>{obj.english_name} &nbsp;</span>
                    )
                })} </p>
                <br />
                <button className='button' onClick={() => {
                    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
                        if (response.data.results.length !== 0) {
                            setUrlId(response.data.results[0])
                            console.log(urlId.key)
                            setPlay(true)
                        } else {
                            console.log('Trailer not found.')
                        }
                    }, [id])
                }}>Watch Trailer</button>
                <br />
                <br />
                {play ? <span className='trailer-window'>
                    <button className='close-button' onClick={()=>{
                        setPlay(false)
                    }}>Close</button>
                    <br />
                    <br />
                    {urlId && <YouTube opts={opts} videoId={urlId.key} />}
                </span> : null}
            </div>
        </div>
    )
}



export default Details