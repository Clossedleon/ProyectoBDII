import React, { useEffect } from 'react'
import { useMovies } from '../../hooks/useMovies'
import Styles from './FavoriteCard.module.css'

export default function FavoriteCard({ MovieId }) {

    const { getSingleMovie, movie} = useMovies()
    console.log(movie)
        
    useEffect(() => {
        getSingleMovie(MovieId)
    }, [])


    const { title, poster_path, genres, original_language, budget, overview, popularity, production_companies, release_date, status, tagline } = movie

    


    return (
        <div>
            <br />

            <div className={Styles.poster}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={ `Poster de ${title}`} />
            </div>
            <div>
                <h1>{title}</h1>
                <h3>{tagline}</h3>
            </div>
            <div className={Styles.genres}>
                {genres.map((genre) => (
                    <h3 className={Styles.gender} key={genre.id}>- {genre.name} -</h3>
                ))}
            </div>
        
            <h3 className={Styles.whiteText}>Lenguaje original: {original_language}</h3>
            <h3 className={Styles.whiteText}>Presupuesto: {budget}</h3>
            <h3 className={Styles.whiteText}>Descripcion: {overview}</h3>
            <h3 className={Styles.whiteText}>Popularidad: {popularity}</h3>
            
            <div>
                <h3 className={Styles.whiteText}>Compañias: </h3>

                <div className={Styles.companies}>
                    {production_companies.map((company) => (
                        <h3 className={Styles.whiteSmallText} key={company.id}>- { company.name }</h3>
                    ))}

                </div>
            </div>

            <h3>Fecha de lanzamiento: {release_date}</h3>

            <h3>Estado: {status} </h3>
            
            <div className={Styles.boton}>
                <div className={Styles.quitar} onClick={() => {}}><h2>Quitar de favoritos</h2></div>
            </div>

            <br />
        </div>
    )
}
