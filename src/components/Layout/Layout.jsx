import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export function Layout() {
  return (
    <main>

        <UserContextProvider>

        <Navbar/>
        <section className='body'>
            <Outlet/>
            
        </section>
        
        {/* <h1>Footer</h1> */}
        
        </UserContextProvider>
    
    </main>
  )
}
