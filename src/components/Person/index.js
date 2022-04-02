import { sarlaccability } from "../../utils"

const Person = ({person}) => {

    let isSarlaccable = sarlaccability(person, 'person')

    return (
        <div className="person-container bg-neutral-200">
            <h2 className="text-3xl">{person.name}</h2>
            <div className="stats-container">
                <p>Profile:</p>
                <ul>
                    <li>Height: {person.height}</li>
                    <li>Mass: {person.mass}</li>
                    <li>Birth: {person.birth_year}</li>
                </ul>
                <div className="flex-col sarlacc">
                <p>Is {person.name} Sarlaccable?</p>
                <h2 className={isSarlaccable ? "edible" : "inedible"}>{isSarlaccable ? 'YES' : "NO"}</h2>
                </div>
            </div>
        </div>
    )
}

export default Person
