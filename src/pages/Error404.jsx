import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta página no existe</p>
            <Link to="/">
            <button class="button">Volver al Inicio</button>
            </Link>
        </main>
    )
}

export default Page404