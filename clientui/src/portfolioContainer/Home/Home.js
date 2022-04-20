import React from 'react'
import Header from "./header/header"
import Profile from "./Profile"
import Footer from "./footer/Footer"
import "./Home.css"
export default function Home() {
    return (
        <div className="home-container" id="home">
            <Header/>
            <Profile/>
            <Footer/>

            
        </div>
    )
}
