import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../Footer/Footer'

export function LayoutFooter() {
  return (
    <main>

        <section className='body'>
            <Outlet/>
        </section>
        
        <Footer/>

    </main>
  )
}

