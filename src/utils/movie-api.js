import axios from "axios";
import { API_KEY } from "../constants/urls";

export async function fetchSingleMovie(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id.movie_id}?api_key=${API_KEY}`)
}

export async function fetchCommonMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}
export async function fetchSoonMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
}