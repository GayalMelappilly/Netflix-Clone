import React from 'react'
import Movies from '../Components/Movies/Movies'
import Details from '../Components/Details/Details'
import RowPost from '../Components/RowPost/RowPost'
import axios from '../axios'
import { useEffect, useState } from 'react'
import { API_KEY } from '../Constants/constants'
import { useParams } from 'react-router-dom'
import { originals } from '../url'

function About() {
    const { id } = useParams()
    const [result, setResult] = useState([])
    useEffect(()=>{
      axios.get((`movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`)).then((response)=>{
        setResult(response.data.total_results)
      }).catch((err)=>{
        console.log("An error occured ", err)
      })
    }, [id])
  return (
    <div>
        <Movies />
        <Details />
        <RowPost title='Cast' url={`movie/${id}/credits?api_key=${API_KEY}&language=en-US`} noHover />
        {result !== 0 ? 
        <RowPost title='More Like This' url={`movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`} isSmall /> 
        : <RowPost title='Netflix Originals' url={originals} isSmall />}
    </div>
  )
}

export default About