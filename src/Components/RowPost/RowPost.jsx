import React, { useEffect } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";

function RowPost(props) {
    const [state, setState] = useState([''])
    const { id } = useParams()
    useEffect(() => {
        props.title === 'Cast' ?
            axios.get(props.url).then((response) => {
                setState(response.data.cast)
            }).catch(err => {
                alert('Network error')
            })
            :
            axios.get(props.url).then((response) => {
                setState(response.data.results)
            }).catch(err => {
                alert('Network error')
            })
    }, [props.url, id, props.title])
    return (
        <div className='row'>
            <h2 className="title">{props.title}</h2>
            {props.title === 'Cast' ?
                <div className='posters'>
                    {state.map((obj) => {
                        if (obj.profile_path === null) {
                            return (
                                null
                            )
                        } else {
                            let imgUrl = 'https://image.tmdb.org/t/p/w500' + obj.profile_path;

                            return (
                                <div className='container' key={obj.id}>
                                    <img className='castPoster' src={imgUrl} alt="" />
                                    <p className='movie-title'>{obj.name} {obj.character === '' ? null : <span> <br /> '{obj.character}'</span>}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                :
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
                                        <div>
                                        <img className={props.isSmall ? 'smallPoster' : 'poster'} src={imgUrl} alt="" />
                                        <p className='movie-title'>{obj.title}</p>
                                        </div>
                                    </Link>
                                    
                                </div>
                            )
                        }
                    })}
                </div>
            }
        </div>
    )
}

export default RowPost