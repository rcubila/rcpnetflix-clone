import React, { useState, useEffect } from 'react'
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/"

export default function Rox({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])
    // console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__porsterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={`${base_url}${movie.name}`} />
                    )
                })}
            </div>

        </div>
    )
}
