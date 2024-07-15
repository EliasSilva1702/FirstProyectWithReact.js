import React from 'react'

function Register() {
  return (
    <form id="formLogin" action="post" className="flex flex-col items-center justify-center p-4 bg-[#2e3138] w-fit sm:w-96 mx-auto my-5 text-white rounded-md z-20 ">
    
    <h1 className="text-center text-2xl border-b px-4 pt-3 w-full ">Register</h1>

                <div className="my-4 flex flex-col justify-center w-full">


                    <label htmlFor="name" className='ml-3'>Name</label>

                    <input className="rounded-full px-4 py-2 text-black outline-none w-full"
                            type="text" 
                            />
                </div>

                <div className="m-4 flex flex-col justify-center w-full">

                    <label htmlFor="name" className='ml-3'>Last name</label>

                    <input className="rounded-full px-4 py-2 text-black outline-none"
                            type="text" 
                            />
                </div>

                <div className="m-4 flex flex-col justify-center w-full">

                    <label htmlFor="email" className='ml-3'>Email</label>

                    <input type="email" 
                            className="rounded-full px-4 py-2 text-black outline-none" 
                            />
                </div>

                <div className="m-4 flex flex-col justify-center w-full">

                    <label htmlFor="password" className='ml-3'>Password</label>

                    <input  type="password" 
                            className="rounded-full px-4 py-2 text-black outline-none" />
                </div>

                <div className="w-full">
                    <button className="bg-[#656d4a] hover:bg-[#a4ac86] hover:text-black hover:font-semibold px-4 py-3 rounded-md transition-all m-4 w-full mx-auto">Sing In</button>
                </div>
        </form>
  )
}

export default Register