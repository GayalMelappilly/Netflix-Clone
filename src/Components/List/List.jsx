import React from 'react'
import './List.css'
import { list } from '../../Constants/constants'
import { imageUrl } from '../../Constants/constants'
import { Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function List() {
    console.log("LIST :" + list)
    const Navigate = useNavigate()
    return (
        <div>
            <FontAwesomeIcon className='back-icon' icon={faCircleLeft} onClick={() => Navigate(-1)} />
            <h1 className="title">My List</h1>
            {list.map((obj) => {
                console.log('OBJ: ' + obj.poster_path)
                let imgUrl = 'https://image.tmdb.org/t/p/w500' + obj.poster_path;
                return (
                    <div className="mylist">
                        {list.length === 0 ? <div className='title'><h1>Nothing added yet!</h1></div> : <div><Link to={'/movies/' + obj.id}>
                            <img className='smallPoster' src={imgUrl} alt="" />
                        </Link>
                            <p className='movie-title'>{obj.title}</p></div>}
                    </div>
                )
            })}
        </div>
    )
}

export default List