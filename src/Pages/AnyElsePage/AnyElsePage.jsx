import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_URL } from '../../constants/urls'

import Styles from './AnyElsePage.module.css'

export function AnyElsePage() {
  return (
    <>
        <div className={Styles.contentBox}>

            <div className={Styles.contentPrinc}>

                <h1 className={Styles.principalMessage}>PAGE NOT FOUND!</h1>

            </div>

            <div className={Styles.content}>

                <Link to={HOME_URL} className = {Styles.links}>
                    <li><h1 className={Styles.comeHomeMessage}> Volver a HOME </h1> </li>
                </Link>

            </div>
            
        </div>
    
    </>
  )
}