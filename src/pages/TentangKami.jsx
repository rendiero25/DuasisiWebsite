import Header from "../components/Header.jsx";

import Employees from "../assets/employees.png";
import PelatihanHRDImage from "../assets/imagepelatihanhrd.png";

const TentangKami = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="bg-primary xl:min-h-screen">
                <Header headerWidth="w-full"/>

                <div className="px-6 xl:px-20 3xl:px-60 pt-10 xl:pt-25">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-12">
                            <div className="flex flex-col justify-center items-center xl:items-start gap-2">
                                <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Apa itu jasa</h2>
                                <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Outsourcing?</h1>
                            </div>

                            <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">
                                Outsourcing adalah Jasa Penyaluran Tenaga Kerja.
                                Kita bisa merekrut karyawan sesuai permintaan
                                anda sampai melakukan penghitungan gaji dan
                                denda karyawan tersebut. Karyawan tersebut akan
                                dianggap menjadi karyawan kontrak di perusahaan
                                anda yang kami urus.
                            </p>
                        </div>
                    </div>
                </div>

                <img src={Employees} alt="employees-image" className="pt-8 w-full h-auto object-cover"/>
            </div>

            <div className="relative flex flex-col w-full">
                <div className="px-6 xl:px-20 3xl:px-60 flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20 3xl:gap-30 pb-15 xl:pb-25 pt-15 xl:pt-25">
                    <img src={PelatihanHRDImage} alt="pelatihanhrd-image" className="w-[20rem] xl:w-[30rem]"/>

                    <div className="flex flex-col justify-center items-center xl:items-start gap-6">
                        <h2 className="font-semibold text-6xl text-black text-center xl:text-left">Pelatihan <br/> Karyawan HRD</h2>
                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">
                            Selain konsultasi kami juga bersedia melatih karyawan HRD
                            anda untuk mengikuti standar prosedur kami. Ini akan
                            menyangkut bagaimana menegur karyawan, memberikan
                            surat SP, membuat performance report, serta cara
                            interview 101.
                        </p>
                    </div>
                </div>

                <div className="absolute -z-20 w-full h-full flex flex-col">
                    <div className="bg-primary size-75 3xl:size-95 rounded-full blur-[10rem] self-end "></div>
                    <div className="bg-primary size-75 3xl:size-95 rounded-full blur-[10rem] self-start mt-[35rem] -ml-20"></div>
                </div>
            </div>
        </div>
    )
}

export default TentangKami;