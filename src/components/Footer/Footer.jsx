import React from 'react'
import Styles from './Footer.module.css'

export function Footer() {

  return (
    <div className={Styles.containerFooter}>

        <div className={Styles.container}>
            <h1 className={Styles.teamText}>Copyright: TODOS LOS DERECHOS RESERVADOS</h1>
        </div>

        <div className={Styles.container}>
            <h1 className={Styles.teamText}>Integrantes:</h1>
        </div>

        <div className={Styles.container}>
            <h1 className={Styles.teamText}>Roy Martin,</h1>
        </div>

        <div className={Styles.container}>
            <h1 className={Styles.teamText}>Serpa León,</h1>
        </div>

        <div className={Styles.container}>
            <h1 className={Styles.teamText}>Santiago Urdaneta</h1>
        </div>

    </div>
  )
}

