"use client"
import "./page.css"
import React from "react"
import axios from "axios"
import Card from "../MovieCard/page"
import { useEffect, useState } from "react"

const App = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?apikey=45f0782a&s=war"
        )
        setMovie(response.data.Search)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  })

  return (
    <div>
      <Card movieList={movie} />
    </div>
  )
}

export default App
