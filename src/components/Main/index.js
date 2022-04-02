import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Person from "../Person";
import './People.css'

const Main = () => {

    const [peopleArray, setPeopleArray] = useState()

    useEffect(() => {
        const getPeople = async () => {
            let res = await fetch('https:/swapi.dev/api/people/')
            if (res.ok) {
                const people = await res.json()
                setPeopleArray(people.results)
            } else {
                console.log('SWAPI is busy')
            }
        }
        getPeople()
    }, [])




    if (peopleArray) {
        return (
        <>
            <div className="bg-neutral-700">
                <ul className="people-container">
                    {peopleArray.map(person => {
                        return (<li key={person.name}>
                            <Person person={person}/>
                        </li>)
                    })}
                </ul>
            </div>
        </>
        )
    } else {
        return (
            <div className="text-white text-center bg-neutral-700 mx-auto text-3xl h-screen">
                <p>Loading People</p>
            </div>
        )
    }


}

export default Main
