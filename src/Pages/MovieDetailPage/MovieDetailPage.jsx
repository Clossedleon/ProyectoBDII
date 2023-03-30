import React, { useEffect } from 'react'
import styles from "./MovieDetailPage.module.css"
import { useMovies } from '../../hooks/useMovies'
import { useParams } from 'react-router-dom'
import { DetailsCard } from '../../components/DetailsCard/DetailsCard'
import { Footer } from '../../components/Footer/Footer'
import { useUser } from '../../context/UserContext'

export function MovieDetailPage() {
    const user = useUser()
    const movie_id = useParams()
    const { getSingleMovie, movie, Loading } = useMovies()
    console.log(movie)
    useEffect(() => {
        if (!Loading && movie_id) {
            getSingleMovie(movie_id.movie_id)

        }
    }, [])
    
    

    if (Loading) {
        return (
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    }

    if (!Loading && !movie) {
        return (
            <div>
                <h1>PELICULA NO ENCONTRADA</h1>
            </div>
        )
    }

    return (
        <>
        
        <div className={styles.details}>
        <DetailsCard Movie={movie} user={user.user} key={movie_id}></DetailsCard>
        </div>

        <Footer/>

        </>
    )
}
