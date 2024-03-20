import React, { useEffect, useState } from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import RowPost from '../RowPost/RowPost'

function Search() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState('')
  // const [displayMv, setDisplayMv] = useState('')
  useEffect(() => {
    // alert(`movie/${id}??api_key=${API_KEY}&language=en-US`)
    axios.get(`search/movie?api_key=${API_KEY}&query=${movie}&include_adult=false&language=en-US&page=1`).then((response) => {
        // console.log(response.data)
        console.log(response.data.results)
    })
}, [movie])
  return (
    <div className='search'>
      <FontAwesomeIcon className='back-icon' icon={faCircleLeft} onClick={()=>navigate(-1)} />
      <h1 className='title' id='browse-title'>Browse</h1>
      <div className="search-div">
        <input type="text" id='search-input' className='search-input' onChange={(e)=>setMovie(e.target.value)} />
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
        {console.log("SEARCH : "+movie)}
      </div>
      <div className='display'>
        {movie.length === 0 && movie === '' ? null : movie.length === 0 && movie !== '' ? <RowPost title="Not Found" /> : <RowPost title="Results" url={`search/movie?api_key=${API_KEY}&query=${movie}&include_adult=false&language=en-US&page=1`} isSmall />}
      </div>
    </div>
  )
}

export default Search