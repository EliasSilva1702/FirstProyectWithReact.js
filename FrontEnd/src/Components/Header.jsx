
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Header({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) {


    const [active, setActive] = useState(false)

    const onDeleteProduct = (product) => {

        const restults = allProducts.filter(item => item.id !== product.id);

        setTotal(total - product.price * product.quantity)
        setCountProducts(countProducts - product.quantity)
        setAllProducts(restults)
    }

    const colseMenuCar = () => {
        setActive(false)
    }

    const cleanShoppingCar = () => {
        setAllProducts([])
        setTotal(0)
        setCountProducts(0)
    }

    return (

        <header className="bg-[#dee2e6] text-poppins font-medium flex items-center justify-center p-4 rounded-b-md shadow-md">

            <Link to='/'>
                <img
                    className="h-fit max-w-48 object-contain"
                    src="../../public/logo-web-byseconat.png"
                    alt="Business logo"
                />
            </Link>


            <ul className="flex items-center justify-center mx-auto gap-10">
                <Link to="/">Inicio</Link>
                <Link to="/trending">Trenging</Link>
                <Link to='/contact' >Contact</Link>
            </ul>

            <ul className="flex items-center justify-center gap-7">

                <div className='relative cursor-pointer' onClick={() => setActive(!active)}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}"
                        stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <div className="absolute top-[60%] left-4
                                  bg-[#000] text-[#fff] w-5 h-5 
                                    flex items-center justify-center rounded-full">

                        <p className="flex items-center justify-center">{countProducts}</p>
                    </div>


                </div>
                <div className={`${active ? "" : "hidden"}`} style={
                    {
                        position: 'absolute',
                        top: '65px',
                        right: '6rem',

                        backgroundColor: ' #fff',
                        width: '500px',
                        zIndex: '1',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.20)',
                        borderRadius: '10px',
                        transition: 'all .3s ease-in'
                    }
                }>

                    {
                        allProducts.length ? (
                            <>
                                <div className="relative">

                                    <div className="absolute right-0 m-3 cursor-pointer transition-all hover:scale-110" onClick={colseMenuCar}>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </div>

                                    {allProducts.map(product => (

                                        <div className="" key={product.id}>

                                            <div className="flex items-center justify-center flex-col gap-5 py-5 px-10">
                                                <div className="flex items-center justify-between gap-5 border-b border-b-[#8d99ae] w-full p-4 text-sm">
                                                    <span>{product.quantity}</span>
                                                    <span>{product.name}</span>
                                                    <span>{product.price}</span>
                                                    <span>{product.color}</span>

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="size-6 transition-all hover:text-red-600 hover:cursor-pointer"
                                                        onClick={() => onDeleteProduct(product)}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />

                                                    </svg>



                                                </div>



                                            </div>
                                        </div>
                                    ))}

                                    <div className="text-center">Total: ${total}</div>

                                    <button className="flex items-center justify-center mx-auto gap-2 px-4 py-2 rounded-md w-fit text-white my-5 transition-all bg-black opacity-85 cursor-pointer
                                    hover:bg-[#22223b] hover:scale-105"
                                        onClick={cleanShoppingCar}>Clean Shopping car

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

                                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                        </svg>

                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-between">

                                <div className="absolute right-0 mr-4 cursor-pointer transition-all hover:scale-110" onClick={colseMenuCar}>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>
                                <h1 className=" mx-auto opacity-85 m-4">Shopping car is empty</h1>

                            </div>
                        )
                    }

                </div>


                <Link to='/login' className="cursor-pointer">Login</Link>
                <Link to='/register' className="cursor-pointer">Register</Link>
            </ul>
        </header >

    )

}