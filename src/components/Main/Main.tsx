import Clock from "../Clock/Clock";

function Main() {

    return(
        <>
            <section className="text-1xl justify-evenly flex">
                <div className="bg-[#536878] p-2.5 rounded-3xl m-6 text-center w-1/2 shadow-2xl">
                    <p>Solo:</p>
                    <br />
                    <button className="hover:bg-[#475763] w-full rounded-4xl ">Play</button>
                </div>
                <div className="bg-[#536878] p-2.5 rounded-3xl m-6 text-center w-1/2 shadow-2xl">
                    <p>En grupo:</p>
                    <br />
                    <button className="hover:bg-[#475763] w-full rounded-4xl ">Play</button>
                </div>
            </section>
            <Clock/>
        </>
    )
}

export default Main;