import React from 'react'
import "./Features.css"
import Card from "./Card"
import Data from "./FeaturesApi"
import data from './FeaturesApi'
import index from 'react-typical'
export default function Features() {
    return (
        <>
           <section className="features top" id="features">
               <div className="container">
                   <div className="heading">

                     <h4>Features</h4> 
                     <h1>What i do</h1> 
                   </div>

                    <div className="content grid">
                        {data.map((val, index)=>{
                          return <Card key={index} image={val.image} title={val.title} desc={val.desc} />  
                        })}
                        
                    </div>
               </div>
               </section> 
        </>
    )
}
