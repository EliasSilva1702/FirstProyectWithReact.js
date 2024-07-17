
import { Link } from "react-router-dom"
import Contact from "./Contact"
const links = {
    home: '/',
    trends: './products', 
    contact: './Contact.jsx'
}

export default function Header() {

    return (
        
        <header className="bg-[#dee2e6] text-poppins font-medium flex items-center justify-center p-4 rounded-b-md shadow-md">
           
            <a href="/">
                <img
                    className="h-fit max-w-48 object-contain"
                    src="../../public/logo-web-byseconat.png" 
                    alt="Business logo"
                />
             </a>

            <ul className="flex items-center justify-center mx-auto gap-10">
                <a href={links.home}>Inicio</a>
                <a href={links.trends}>Trenging</a>
                <Link to='/contact' >Contact</Link>
            </ul>

            <ul className="flex items-center justify-center gap-7">
               <Link to='/login' className="cursor-pointer">Login</Link>
                <Link to='/register' className="cursor-pointer">Register</Link>
            </ul>
        </header>

    )

}