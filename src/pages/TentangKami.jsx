import Header from "../components/Header.jsx";

const TentangKami = () => {
    return(
        <div className="">
            <div className="min-h-screen bg-primary">
                <Header headerWidth="w-full"/>

                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col justify-center items-center xl:items-start gap-8">
                            <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">Apa itu jasa</h2>
                            <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-black text-center xl:text-left">Outsourcing?</h1>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangKami;