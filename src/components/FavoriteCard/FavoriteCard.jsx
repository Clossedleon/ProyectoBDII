import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from '../../hooks/useMovies'
import Styles from './FavoriteCard.module.css'

export default function FavoriteCard({ MovieId }) {
    console.log(MovieId)

    const [loading, setLoading] = useState(true)

    const { getSingleMovie, movie } = useMovies()

    const [pelicula, setPelicula] = useState({
        title: "Titulo",
        poster_path: "1",
        genres: ["a"],
        original_language: "e",
        budget: 0,
        overview: "a",
        popularity: 0,
        production_companies: ["a"],
        release_date: "1",
        status: "B",
        tagline: "l" 
    })

    console.log(pelicula)


    useEffect(() => {

        setLoading(true)
        getSingleMovie(MovieId)
        if (movie != null) {
            setPelicula(movie)

        }
        setLoading(false)

    }, []) 

    console.log(movie, loading)

    const { title, poster_path, original_language, status, tagline, id } = pelicula


    return (
        <>
            {loading ? <h1>Loading...</h1> : 
                <div className={Styles.tarjeta}>

                    <div className={Styles.imagen}>
                        <Link to={`../movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster de ${title}`} /></Link>
                    </div>
                    <div className={Styles.info}>
                        <div>
                            <Link to={`../movie/${id}`} className={Styles.title}><h1>{title}</h1></Link>
                            <h3>{tagline}</h3>
                        </div>
                    
                        <h3 className={Styles.whiteText}>Lenguaje original: {original_language}</h3>
                
                        <h3>Estado: {status} </h3>
                        
                        <div className={Styles.boton}>
                            <div className={Styles.quitar} onClick={() => {}}><h2>Quitar de favoritos</h2></div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
