import React, { useEffect, useState } from "react";
import axios from "axios";
//import { Link } from 'react-router-dom'
//import { AboutMe_URL, PROFILE_URL, SKILLS_URL } from '../../constants/urls'
import Styles from "./HomePage.module.css";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard/MovieCard";

export function HomePage() {
  const [page, setPage] = useState(1);
  const { getCommonMovies, getSoonMovies, Loading, movies } = useMovies();
  const [soon, setSoon] = useState(true);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "b31f4c0464d55846ae657ecfc7b9ef53";

  const [movies2, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  const [searching, setSearching] = useState(false);

  const fetchMovies = async (searchKey) => {
    console.log(searchKey);
    const type = searchKey ? "search" : "discover";
    console.log(type);
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    console.log(results);
    setMovies(results);
    //setMovie(results[0])
  };

  useEffect(() => {
    {
      soon ? getSoonMovies(page) : getCommonMovies(page);
    }
  }, [soon, page]);

  //console.log(movies)

  const searchMovies = (e) => {
    e.preventDefault();

    if (searchKey != "") {
      setSearching(true);
      fetchMovies(searchKey);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className={Styles.backgroundImage}>
        <div className={Styles.bienvenida}>
          <h1>Bienvenido a Cartelera Caracas!</h1>
          <h3>Todas tus películas a tu disposición</h3>
        </div>

        <div className={Styles.cajabuscar}>
          <form
            method="get"
            id="buscarform"
            onSubmit={searchMovies}
            className={Styles.cuadroSumiso}
          >
            <fieldset className={Styles.cajaPequeniaBuscar}>
              <input
                className={Styles.cuadroTexto}
                type="text"
                id="s"
                placeholder="Buscar Pelicula"
                onChange={(e) => setSearchKey(e.target.value)}
              />

              <button className={Styles.button2} onClick={searchMovies}>
                Buscar
              </button>

              <i className="search"></i>
            </fieldset>
          </form>
        </div>

        <div className={Styles.buttons}>
          <div
            className={Styles.button}
            onClick={() => {
              setSoon(false);
              setPage(1);
              setSearching(false);
            }}
          >
            Películas Comunes
          </div>
          <div
            className={Styles.button}
            onClick={() => {
              setSoon(true);
              setPage(1);
              setSearching(false);
            }}
          >
            Películas Próximas
          </div>
        </div>
      </div>

      <div className={Styles.listas}>
        <div className={Styles.title}>
          {!!searching ? (
            <h1>Resultados de búsqueda</h1>
          ) : (
            <h1>{soon ? "Películas por estrenar" : "Películas comunes"}</h1>
          )}
        </div>
        <div className={Styles.lista}>
          {!searching ? (
            <div className={Styles.pasarPag}>
              <div
                className={Styles.flecha}
                onClick={() => {
                  page == 1 ? setPage(1) : setPage(page - 1);
                }}
              >
                <img src="images/I.jpg" alt="izquierda" />
              </div>
            </div>
          ) : (
            <></>
          )}

          {!Loading ? (
            <div className={Styles.galeria}>
              {!!searching ? (
                <>
                  {movies2.length != 0 ? (
                    <>
                      {movies2.map((movie) => (
                        <MovieCard Movie={movie} key={movie.id}></MovieCard>
                      ))}
                    </>
                  ) : (
                    <h1>SIN RESULTADOS DE BUSQUEDA</h1>
                  )}
                </>
              ) : (
                <>
                  {movies.map((movie) => (
                    <MovieCard Movie={movie} key={movie.id}></MovieCard>
                  ))}
                </>
              )}
              ;
            </div>
          ) : (
            <div className={Styles.loading}>
              <h1>Loading...</h1>
            </div>
          )}

          {!searching ? (
            <div
              className={Styles.flecha}
              onClick={() => {
                page == 1000 ? setPage(1) : setPage(page + 1);
              }}
            >
              <img src="images/D.jpg" alt="derecha" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
