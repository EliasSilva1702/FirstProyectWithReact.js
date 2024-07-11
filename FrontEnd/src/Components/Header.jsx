import Login from "../page/Login/login"
function showlogin() {

    const btnLogin = document.getElementById("login")
    const formLogin = document.getElementById("formLogin")

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault()
        formLogin.classList.remove("hidden")
        formLogin.classList.add("flex")
    })
}

export default function Header() {

    return (
      <main>
        <header className="bg-[#e6ccb2] text-poppins font-semibold flex items-center justify-center p-4 rounded-b-md shadow-md">

        <a href="/">
            <img
                className="h-fit max-w-48 object-contain"
                src="../../public/logo-web-byseconat.png" 
                alt="Business logo"
             />
             </a>

            <ul className="flex items-center justify-center mx-auto gap-10">
                <li className="cursor-pointer">Inicio</li>
                <li className="cursor-pointer">Menus</li>
                <li className="cursor-pointer">Contacto</li>
            </ul>
            <ul className="flex items-center justify-center gap-7">
                <li id="login" className="cursor-pointer" onClick={showlogin}>Login</li>
                <li className="cursor-pointer">Register</li>
            </ul>

        </header>


        </main>
    )

}