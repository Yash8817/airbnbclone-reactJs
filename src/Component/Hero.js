import React from "react";
import logo from '../Images/Group 77.png'

export default function Hero()
{
    return (
        <section className="hero">
            <img className="hero--photo" src={logo} />
            <h1 className="hero--header">Online Exprience</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}