import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux' // เข้าถึงค่าใน store
import MovieCard from '../MovieCard/MovieCard'

function MovieListing() {
    const { movies } = useSelector((state) => state.movies)

    return (
        <div className="movie-container">
            {movies && movies.map((movie) => (
                <MovieCard key={movie.imdbI} movie={movie} />
            ))}
        </div>
    )
}

export default MovieListing
