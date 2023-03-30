import React from 'react'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import { useUser } from '../../context/UserContext';
import Styles from './FavoritesPage.module.css';
import { useMovies } from '../../hooks/useMovies'

export function FavoritesPage() {

    const { user } = useUser();
    console.log(user)

    const favoritos = user.likes

    return (
        <>
            <div style={Styles.titulo}>
                <h1>Favoritos</h1>
            </div>
            <div  style={Styles.descripcion}>
                <p>
                    Seleccione la película que desee para ver sus detalles o quitarla de la lista!
                </p>
            </div>
            <div style={Styles.galeria}>
                {
                    favoritos.length == 0 &&
                    <h3>No ha seleccionado como favorito ninguna película!</h3>
                }
                {
                    favoritos.length > 0 && 
                    <div>
                        {favoritos.map((movie_id) => (
                            <FavoriteCard MovieId={movie_id}></FavoriteCard>
                        ))}
                    </div>
                }
            </div>
            <div className={Styles.boton}>
                <div className={Styles.quitar} onClick={() => {}}><h3>Quitar de favoritos</h3></div>
            </div>
        </>
    )
}
