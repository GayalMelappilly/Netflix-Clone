import React, { useEffect, useContext } from 'react'
import './RowPost.css'
// import Youtube from 'react-youtube'
import axios from '../../axios'
import { useState } from 'react'
import { AppContext } from '../../AppContext'
// import { API_KEY } from '../../Constants/constants'

function RowPost(props) {
    const [state, setState] = useState([])
    // const [urlId, setUrlId] = useState()
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setState(response.data.results)
        }).catch(err => {
            alert('Network error')
        })
    }, [])
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

    const { id, setId } = useContext(AppContext)

    return (
        <div className='row'>
            <h2 className="title">{props.title}</h2>
            <div className='posters'>
                {state.map((obj) => {
                    if (obj.poster_path == null) {
                        return (
                            console.log('IMAGE NOT FOUND')
                        )
                    } else {
                        let imgUrl = 'https://image.tmdb.org/t/p/w500' + obj.poster_path;
                        return (
                            <div className='container'>
                                <a href={'/movies/' + obj.id}><img onClick={() => setId(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={imgUrl} alt="" /></a>
                                {console.log(obj.title)}
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