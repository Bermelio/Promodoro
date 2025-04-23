import { Link } from "react-router-dom";

function Navbar(){

    return (
    <>
        <Link to="/">
            <nav className="">
                <h1 className="bg-[#536878] justify-center flex p-3.5 font-bold text-2xl">Promodoro</h1>
            </nav>
        </Link>
    </>
    )
}

export default Navbar;