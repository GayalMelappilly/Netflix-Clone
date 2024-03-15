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
            
        </div>
    )
}

export default RowPost