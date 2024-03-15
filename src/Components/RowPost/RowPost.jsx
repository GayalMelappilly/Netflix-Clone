import React, { useEffect } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";

function RowPost(props) {
    const [state, setState] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setState(response.data.results)
        }).catch(err => {
            alert('Network error')
        })
    })

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // }

    // const handleMovie = (id)=>{
    //     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //         if(response.data.results.length!==0){
    //             setUrlId(response.data.results[0])
    //         }else{
    //             console.log('Trailer not found.')
    //         }
    //     })
    // }

    // function changeMovieId(id) {
    //     setId(id)
    // }

    return (
        <div className='row'>
            <h2 className="title">{props.title}</h2>
            <div className='posters'>
                {state.map((obj) => {

                    if (obj.poster_path == null) {
                        return (
                            null
                        )
                    } else {
                        let imgUrl = 'https://image.tmdb.org/t/p/w500' + obj.poster_path;

                        return (
                            <div className='container' key={obj.id}>
                                <Link to={'/movies/' + obj.id}>
                                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={imgUrl} alt="" />
                                </Link>                                
                                <p className='movie-title'>{obj.title}</p>
                            </div>
                        )
                    }
                })}
            </div>
            {/* { urlId && <Youtube opts={opts} videoId={urlId.key} /> } */}
        </div>
    )
}

export default RowPost