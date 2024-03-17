import React, { useState, useEffect } from 'react'
import './Movies.css'
import { API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'
import { useNavigate, useParams } from 'react-router-dom'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { list } from '../../Constants/constants'

function Movies() {
    // alert('MOVIES')
    const [movie, setMovie] = useState([])
    const [imageUrlWithCacheBust, setImageUrlWithCacheBust] = useState('');
    const [addToList, setAddToList] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        // alert(`movie/${id}??api_key=${API_KEY}&language=en-US`)
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data)
            setMovie(response.data)
            if (response.data.backdrop_path) {
                setImageUrlWithCacheBust(`${imageUrl}${response.data.backdrop_path}?${Date.now()}`);
            }
        })
    }, [id])

    function displayTimer(){
        setTimeout(() => {
            setAddToList(false)
        }, 1000);
    }

    return (
        <div>
            { movie && (
                <div className='banner' style={{ backgroundImage: `url(${imageUrlWithCacheBust})`}}>
                <FontAwesomeIcon className='back-icon' icon={faCircleLeft} onClick={()=>navigate(-1)} />
                {addToList ? <div className='list-msg'>
                    {displayTimer()}
                    <p>Added to list</p>
                </div> : null}
                <div className='content'>
                    <h1 className='title'>{movie ? movie.original_title : ''}</h1>
                    <div className='banner-buttons'>
                        <button className='button'>Play</button>
                        <button className='button' onClick={()=>{
                            setAddToList(true)
                            console.log(list)
                            list.push(movie)
                        }}>Add to list</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ''}</h1>
                </div>
                <div className="fade"></div>
            </div>
            )}
        </div>
    )
}

export default Movies