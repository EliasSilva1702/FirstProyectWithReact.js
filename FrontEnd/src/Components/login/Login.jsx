export default function Login() {

    return (
    
        <form id="formLogin" action="post" className="flex flex-col items-center justify-center p-4 bg-[#2e3138] w-fit mx-auto my-5 text-white rounded-md z-20 ">
    
            <h1 className="text-center text-2xl border-b px-4 pt-3 w-full ">Login</h1>
    
        <div className="m-4 flex flex-col justify-center">
    
            <label htmlFor="name">Name</label>
    
            <input
                    className="rounded-sm px-2.5 py-2 text-black outline-none"
                    type="text" 
                    />
        </div>
    
        <div className="m-4 flex flex-col justify-center">
    
            <label htmlFor="email">Email</label>
    
            <input
                    type="email" 
                    className="rounded-sm px-2.5 py-2 text-black outline-none" 
                    />
        </div>
    
        <div className="m-4 flex flex-col justify-center">
    
            <label htmlFor="password">Password</label>
    
            <input  
                    type="password" 
                    className="rounded-sm px-2.5 py-2 text-black outline-none" />
        </div>
    
        <div className="mx-auto">
            <button className="bg-[#656d4a] hover:bg-[#a4ac86] px-4 py-1.5 rounded-md transition-all">Sing In</button>
        </div>
    </form>
    )
}