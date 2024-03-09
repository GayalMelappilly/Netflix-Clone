import React from 'react'
import './RowPost.css'
import axios from 'axios'
import { useState } from 'react'

function RowPost() {
    const [state, setState] = useState([])
    const apiKey = '62ab8bb1ed2ab8d361d8f0e21bfe6e4f'
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey).then((response) => {
        setState(response.data.results)
    })
    return (
        <div className='row'>
            <h2 className="title">Now playing</h2>
            <div className="posters">
                {state.map((obj) => {
                    let imgUrl = 'https://image.tmdb.org/t/p/w500' + obj.poster_path;
                    return (
                        <div className='container'>
                            <img className='poster' src={imgUrl} alt="" />
                            <p>{obj.title}</p>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default RowPost