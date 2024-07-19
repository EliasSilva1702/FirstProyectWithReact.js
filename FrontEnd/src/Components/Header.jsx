
import { Link } from "react-router-dom"
import { useState } from "react"
<style>
    
</style>
export default function Header(allProducts, setAllProducts) {


    const [active, setActive] = useState(false)
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
                <Link to="/">Inicio</Link>
                <Link to="/trending">Trenging</Link>
                <Link to='/contact' >Contact</Link>
            </ul>

            <ul className="flex items-center justify-center gap-7">

                <div className='relative cursor-pointer' onClick={() => setActive(!active)}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <div className="absolute top-[60%] left-4
                                  bg-[#000] text-[#fff] w-5 h-5 
                                    flex items-center justify-center rounded-full">

                        <p className="flex items-center justify-center">0</p>
                    </div>

                
                </div>
                <div className={`${active ? "" : "hidden"}`}
                style={
                    {
                        position: 'absolute',
                        top: '65px',
                        right: '6rem',
                    
                        backgroundColor:' #fff',
                        width: '400px',
                        zIndex: '1',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.20)',
                        borderRadius: '10px',
                    }
                }>

                    {
                        allProducts.length ? (
                            <>
                            <h1>hola</h1>
                            </>
                        ) : (
                            <>
                                <h1 className="text-center opacity-85 m-4">Shopping car is empty</h1>
                            </>
                        )
                    }
                  
                </div>


                <Link to='/login' className="cursor-pointer">Login</Link>
                <Link to='/register' className="cursor-pointer">Register</Link>
            </ul>
        </header>

    )

}