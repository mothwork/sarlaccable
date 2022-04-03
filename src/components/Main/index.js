import React, { useEffect, useState } from "react";
import Person from "../Person";
import './People.css'

const Main = () => {

    const [peopleArray, setPeopleArray] = useState();

    useEffect(() => {

        // This will get all the people from SWAPI
        // It iterates through the paged sections of the returned JSON and Concats the results together.
        const getPeople = async () => {
            let res = await fetch('https:/swapi.dev/api/people/')
            if (res.ok) {
                let people = await res.json();

                let results = people.results;

                let next = people.next;

                while(next !== null){
                    let res = await fetch(next);

                    if (res.ok) {
                        let nextPeople = await res.json();

                        results = results.concat(nextPeople["results"]);

                        next = nextPeople.next;
                    };

                };

                setPeopleArray(results);
            } else {
                console.log('SWAPI is busy');
            };
        };
        getPeople();
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
