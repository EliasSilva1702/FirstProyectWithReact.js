
import { Link } from "react-router-dom"

export default function Header() {

    return (
        
        <header className="bg-[#dee2e6] text-poppins font-semibold flex items-center justify-center p-4 rounded-b-md shadow-md">
           
            <a href="/">
                <img
                    className="h-fit max-w-48 object-contain"
                    src="../../public/logo-web-byseconat.png" 
                    alt="Business logo"
                />
             </a>

            <ul className="flex items-center justify-center mx-auto gap-10">
                <li className="cursor-pointer">Inicio</li>
                <li className="cursor-pointer">Trends</li>
                <li className="cursor-pointer">Contact</li>
            </ul>

            <ul className="flex items-center justify-center gap-7">
               <Link to='/login'> <li id="login" className="cursor-pointer">Login</li></Link>
                <Link to='/register'><li className="cursor-pointer">Register</li></Link>
            </ul>
        </header>

    )

}