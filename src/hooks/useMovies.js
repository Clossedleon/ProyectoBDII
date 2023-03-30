import { useState } from "react";
import { fetchSoonMovies, fetchSingleMovie, fetchCommonMovies } from "../utils/movie-api";

export function useMovies() {
    const [ movie, setMovie ] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    


    const getSingleMovie = async (movieId) => {
        setLoading(true)
        const { data } = await fetchSingleMovie(movieId)
        setMovie(data)
        console.log(data, movie)
        setLoading(false)
    };

    const getCommonMovies = async (page) => {
        setLoading(true)
        const { data } = await fetchCommonMovies(page)
        setMovies(data.results)
        setLoading(false)
    }

    const getSoonMovies = async (page) => {
        setLoading(true)
        const { data } = await fetchSoonMovies(page)
        setMovies(data.results)
        setLoading(false)
    }
    
    return {
        getSingleMovie,
        getSoonMovies,
        getCommonMovies,
        Loading,
        movie,
        movies,
    };
}