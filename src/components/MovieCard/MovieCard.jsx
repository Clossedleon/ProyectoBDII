import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MovieCard.module.css"
import { db } from '../../firebase/config'
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

export default function MovieCard({Movie, user}) {
    //console.log(Movie)
    const { id, poster_path, title, popularity, original_language } = Movie

    const arrayinfo = (data) => {
        for (var i = 0; i < data.length; i++) {
            if(data[i] == id) {
                return true
            }
        }
        return false
    }

    const addFavorite = async() =>{
        const ref = doc(db, "users", user.id);
        const snap = await getDoc(ref)
        const data = snap.data().likes
        const info = arrayinfo(data)
        if (!info) {
            await updateDoc(ref, {
                likes: arrayUnion(id)
            });
        } else {
            await updateDoc(ref, {
                likes: arrayRemove(id)});
        }
    }
    return (
        <div className={styles.caja}>
            <div className={styles.tarjeta}>
                
                <div className={styles.imagen}>
                    <Link to={`movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster de ${title}`} /></Link>
                </div>

                <div className={styles.info}>
                    
                    <div className={styles.content}>
                        
                        <Link to={`movie/${id}`} className={styles.title}><h1>{title}</h1></Link>
                        
                    </div>
                    <div className={styles.content}>

                        <h2 className={styles.whiteText}>{`Popularity: ${popularity}`}</h2>
                    
                    </div>
                    <div className={styles.content}>
                    
                        <h2 className={styles.whiteText}>{`Idioma original: ${original_language}`}</h2>

                    </div>
                    <div className={styles.title}>
                        <h2 onClick={addFavorite} className={styles.yellowText}>Añadir a Favoritos</h2>

                    </div>
                    
                    
                
                </div>

            </div>
        </div>
    )
}
