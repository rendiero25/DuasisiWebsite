import Header from "../components/Header.jsx";

import Employees from "../assets/employees.png";
import PelatihanHRDImage from "../assets/imagepelatihanhrd.png";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const TentangKami = () => {

    const ref9 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);

    const isInView9 = useInView(ref9, { once: true });
    const isInView10 = useInView(ref10, { once: true });
    const isInView11 = useInView(ref11, { once: true });
    const isInView12 = useInView(ref12, { once: true });

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="bg-primary xl:min-h-screen">
                <Header headerWidth="w-full"/>

                <div className="px-6 xl:px-20 3xl:px-60 pt-10 xl:pt-25">
                    <div className="flex flex-col justify-center items-center gap-10">

                        <motion.div
                            ref={ref9}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView9 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="animation"
                            className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-12"
                        >
                            <div className="flex flex-col justify-center items-center xl:items-start gap-2">
                                <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Apa itu jasa</h2>
                                <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Outsourcing?</h1>
                            </div>

                            <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">
                                Outsourcing adalah Jasa Penyaluran Tenaga Kerja.
                                Kita bisa merekrut karyawan sesuai permintaan
                                Anda sampai melakukan penghitungan gaji dan
                                denda karyawan tersebut. Karyawan tersebut akan
                                dianggap menjadi karyawan kontrak di perusahaan
                                Anda yang kami urus.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <img src={Employees} alt="employees-image" className="pt-8 w-full h-auto object-cover"/>
            </div>

            <div className="relative flex flex-col w-full">
                <div className="px-6 xl:px-20 3xl:px-60 flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20 3xl:gap-30 pb-15 xl:pb-25 pt-15 xl:pt-25">
                    <motion.img
                        ref={ref10}
                        src={PelatihanHRDImage}
                        alt="pelatihanhrd-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView10 ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        id="animation"
                        className="w-[20rem] xl:w-[30rem]"
                    />

                    <div className="flex flex-col justify-center items-center xl:items-start gap-6">
                        <motion.h2
                            ref={ref11}
                            src={PelatihanHRDImage}
                            alt="pelatihanhrd-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView11 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            id="animation"
                            className="font-semibold text-6xl text-black text-center xl:text-left"
                        >
                            Pelatihan <br/> Karyawan HRD
                        </motion.h2>

                        <motion.p
                            ref={ref12}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView12 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            id="animation"
                            className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left"
                        >
                            Selain konsultasi kami juga bersedia melatih karyawan HRD
                            Anda untuk mengikuti standar prosedur kami. Ini akan
                            menyangkut bagaimana menegur karyawan, memberikan
                            surat SP, membuat performance report, serta cara
                            interview 101.
                        </motion.p>
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