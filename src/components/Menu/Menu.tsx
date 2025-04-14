import { Link } from "react-router-dom";

function Menu() {

    return(
        <>
            <section className=" text-[#536878] text-2xl text-left">
                <h2 className="pl-5 pt-5">Menu:</h2>
                <div className="flex flex-col text-center text-base p-3 gap-3">
                    <Link to="/clock" className="flex flex-col text-center text-base p-3 gap-3">
                        <button className="m-2 p-3 bg-[#536878] rounded-lg shadow-md hover:bg-[#5d7e94] text-[#EAE0C8] transition">
                            25' x 4 - 5' Descanso 
                        </button>
                        <button className="m-2 p-3 bg-[#536878] rounded-lg shadow-md hover:bg-[#5d7e94] text-[#EAE0C8] transition">
                            30 x 4 - 10' Descanso 
                        </button>
                        <button className="m-2 p-3 bg-[#536878] rounded-lg shadow-md hover:bg-[#5d7e94] text-[#EAE0C8] transition">
                            35 x 4 - 15' Descanso 
                        </button>
                        <button className="m-2 p-3 bg-[#536878] rounded-lg shadow-md hover:bg-[#4C6D82] text-[#EAE0C8] transition">
                            Custom
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Menu;