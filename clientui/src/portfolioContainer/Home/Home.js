import React from 'react'
import Header from "./header/header"
import Profile from "./Profile"
import Footer from "./footer/Footer"
import Portfolio from '../../portfolioContainer/portfolio/Portfolio'
import Features from '../../portfolioContainer/features/Features'
// import Resume from "./portfolioContainer/Resume/Resume"
import Blog from "../Blog/Blog"
import Contact from "../../portfolioContainer/ContactMe/Contact"
import About from '../../portfolioContainer/AboutMe/About';
import "./Home.css"
export default function Home() {
    return (
        <div className="home-container" id="home">
            <Header/>
            <Profile/>
            <About/>
            {/* <Blog/> */}
            <Features/>
             <Contact/>
            <Footer/>

            
        </div>
    )
}
