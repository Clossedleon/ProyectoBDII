import React, { useEffect, useMemo, useState } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
import { useUser } from "../../context/UserContext";
import Styles from "./FavoritesPage.module.css";
import { useMovies } from "../../hooks/useMovies";

export function FavoritesPage() {
  const [favoritos, setFavoritos] = useState([]);
  const { user, isLoading } = useUser();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    { if(!isLoading && !!user) {
        setFavoritos(user.likes);
        setUsuario(user);
    } else {
        console.log("espere")
    }
    }
  }, [user]);

  if (!!usuario) {
    return (
      <>
        <div className={Styles.titulo}>
          <h1>Favoritos</h1>
        </div>
        <div className={Styles.descripcion}>
          <p>
            Seleccione la película que desee para ver sus detalles o quitarla de
            la lista!
          </p>
        </div>
        <div className={Styles.galeria}>
          {favoritos.length == 0 && (
            <h3>No ha seleccionado como favorito ninguna película!</h3>
          )}
          {favoritos.length > 0 && (
            <div>
              {favoritos.map((movie_id) => (
                <FavoriteCard MovieId={movie_id} key={movie_id}></FavoriteCard>
              ))}
            </div>
          )}
        </div>
      </>
    );
  } else {
    <h1>Espere un momento...</h1>;
  }
}
