import React from 'react'
import './Review.css'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { API_KEY } from '../../Constants/constants'
import { useParams } from 'react-router-dom'

function Review() {
    const { id } = useParams()
    const [review, setReview] = useState('')
    useEffect(()=>{
        axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-U`).then((response)=>{
            setReview(response.data.results)
            console.log(review)
        })
    })
  return (
    <div className='review'>
        <h1 className='title'>Reviews</h1>
        <div className="content">
        {review.map((obj)=>{
                return (
                    <div className='review-div'>
                        <p>Name : <span>{obj.author_details.name}</span></p>
                        <p>Comment : <span>{`${obj.content.subString(0,100)}`}</span></p>
                        <p>Posted on : <span>{obj.created_at.slice(0,11)}</span></p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Review