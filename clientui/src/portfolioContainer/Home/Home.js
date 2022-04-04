import React from 'react'
import Header from "./header/header"
import Profile from "./Profile"
import Footer from "./footer/Footer"
import "./Home.css"
export default function Home() {
    return (
        <div className="home-container">
            <Header/>
            <Profile/>
            <Footer/>

            
        </div>
    )
}
