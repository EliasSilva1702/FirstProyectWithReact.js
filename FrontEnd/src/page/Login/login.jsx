
export default function Login() {
    
    return (

     <form id="formLogin" action="post" className="hidden flex-col items-center justify-center p-4 bg-[#2e3138] w-fit mx-auto my-5 text-white rounded-md z-20 ">

            <div className="m-4 flex flex-col justify-center">
                <label htmlFor="name">Name</label>
                <input type="text" className="rounded-sm px-2.5 py-2 text-black outline-none" />
            </div>

            <div className="m-4 flex flex-col justify-center">
                <label htmlFor="email">Email</label>
                <input type="email" className="rounded-sm px-2.5 py-2 text-black outline-none" />
            </div>

            <div className="m-4 flex flex-col justify-center">
                <label htmlFor="password">Password</label>
                <input type="password" className="rounded-sm px-2.5 py-2 text-black outline-none" />
            </div>

        </form>

    
    )
}