"use client"
import React, { useState } from "react"
import "./page.css"

const Card = (props) => {
  const [filterMovies, setFilterMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  function filterMovieItems(e) {
    setSearchQuery(e.target.value)
    setFilterMovies(
      props.movieList.filter((movie, i) =>
        movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <>
      <div>
        <h1 className='Movie-title'>Movies App</h1>
      </div>
      <div className='searchcontainer'>
        <input
          type='search'
          value={searchQuery || ""}
          onChange={(e) => filterMovieItems(e)}
          placeholder='Search Movie Name... '
        ></input>
      </div>
      <div className='moviecontainer'>
        {filterMovies.length <= 0
          ? props.movieList.map((movie, i) => (
              <div className='moviecard' key={i}>
                <img src={movie.Poster} alt={i} />
                <div className='moviedesc'>
                  <h3>{movie.Title}</h3>
                </div>
              </div>
            ))
          : filterMovies.map((movie, i) => (
              <div className='moviecard' key={i}>
                <img src={movie.Poster} alt={i} />
                <div className='moviedesc'>
                  <h3>{movie.Title}</h3>
                </div>
              </div>
            ))}
      </div>
    </>
  )
}

export default Card
