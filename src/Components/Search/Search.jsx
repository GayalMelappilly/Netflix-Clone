import React from 'react'
import './Search.css'

function Search() {
  return (
    <div>
      <h1 className='title'>Browse</h1>
      <div className="search-div">
        <input type="text" className='search' />
      </div>
    </div>
  )
}

export default Search