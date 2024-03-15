import React, { useState, useEffect } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { imageUrl, API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Details() {
    const [details, setDetails] = useState('')
    const [play, setPlay] = useState(false)
    const [showCrew, setShowCrew] = useState(false)
    const { id } = useParams()
    const [urlId, setUrlId] = useState('')
    const [crew, setCrew] = useState([])

    useEffect(() => {
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
            setDetails(response.data)
            // alert(urlId.key)
        })
        axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then((response) => {
            setCrew(response.data.crew)
            // alert(urlId.key)
        })
    }, [id])

    function toHours(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return { hours, minutes: remainingMinutes };
    }

    const { hours, minutes } = toHours(details.runtime)

    const opts = {
        height: '550',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className='details'>
            <div className="overview">
                <h1 className='title'>About</h1>
                <p>Overview : {details.overview}</p>
                <br />
                <p>Genres : {details && details.genres.map((obj) => {
                    return (
                        <span key={obj.id}>{obj.name} &nbsp;</span>
                    )
                })} </p>
                <br />
                <p>Released Date : <span>{details.release_date}</span></p>
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
                    <button className='close-button' onClick={() => {
                        setPlay(false)
                    }}>Close</button>
                    <br />
                    <br />
                    {urlId && <YouTube opts={opts} videoId={urlId.key} />}
                </span> : null}
            </div>

            <div className="crew">
                <h1 className='title'>Crew</h1>
                <div className="list">
                    {crew.slice(0, 28).map((obj) => {
                        return (
                            <p>{obj.name} - {obj.job}</p>
                        )
                    })}
                </div>
                <button onClick={() => {
                    setShowCrew(true)
                }} className='button' style={{ marginTop: '20px', float: "center" }}>Full crew</button>
                <br />
                <br />

                {showCrew ? <div className="crew-window-content">
                    <span className='crew-window'>
                        <button className='close-button' onClick={() => {
                            setShowCrew(false)
                        }}>Close</button>
                        <br />
                        <br />
                        {crew.map((obj) => {
                            return (
                                obj.profile_path ? <div>
                                    <img src={imageUrl + obj.profile_path} alt="" className='crew-image' />
                                    <p className='crew-name'>{obj.name} <br /> {obj.job}</p>
                                </div> : null
                            )
                        })}

                    </span>
                </div> : null}
            </div>
        </div>
    )
}



export default Details