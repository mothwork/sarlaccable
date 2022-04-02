import { NavLink } from "react-router-dom"
import "./Splash.css"

const Splash = () => {
    return (
        <div className="splash-container min-h-screen">
            <div className="welcome-text">
                <h1>Sarlaccable</h1>
                <p>Find out if your favorite character can in fact be eaten by the Sarlacc Pit!</p>
                <NavLink to='/main'>
                    <button>Find Out</button>
                </NavLink>
            </div>
        </div>
    )
}


export default Splash
