import React from 'react'
import Styles from './DetailsCard.module.css'

export function DetailsCard({ Movie }) {
    const { title, poster_path, genres, original_language, budget, overview, popularity, production_companies, release_date, status } = Movie

    
    return (
        <div className={Styles.body}>

            <div className={Styles.base}>

                <div className={Styles.title}>

                    <h1>{title}</h1>

                </div>

                <div className={Styles.info}>

                    <div className={Styles.poster}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={ `Poster de ${title}`} />
                    </div>

                    <div className={Styles.text}>

                        <div className={Styles.data}>
                            
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

                        </div>

                    </div>

                </div>
                
            </div>

        </div>
    )
}

