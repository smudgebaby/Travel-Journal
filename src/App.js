import React from "react"
import Head from "./Head"
import Section from "./Section"
import data from "./data"
import './App.css';

export default function App(){
    const cards = data.map(item => {
        return (
            <Section 
                key = {item.id}
                {...item}
                />
        )
    })
    
    return(
        <div>
            <Head />
            <section>
                {cards}
            </section>
        </div>
    )
}