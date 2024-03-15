import React from 'react'
import Movies from '../Components/Movies/Movies'
import Details from '../Components/Details/Details'
import RowPost from '../Components/RowPost/RowPost'
import Review from '../Components/Review/Review'
import { API_KEY } from '../Constants/constants'
import { useParams } from 'react-router-dom'

function Overview() {
    const { id } = useParams()
  return (
    <div>
        <Movies />
        <Details />
        <Review />
        <RowPost title='More Like This' url={`movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`}/>
    </div>
  )
}

export default Overview