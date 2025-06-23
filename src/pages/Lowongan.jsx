import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import { useInView } from "motion/react";
import {useRef} from "react";

import Header from "../components/Header.jsx";
import Video from "../assets/tutorial.mp4";
import BannerCTA from "../components/BannerCTA.jsx";
import PelatihanHRDImage from "../assets/imagepelatihanhrd.png";
import {motion} from "motion/react";

const Lowongan = () => {

    const ref13 = useRef(null);
    const ref14 = useRef(null);

    const isInView13 = useInView(ref13, { once: true });
    const isInView14 = useInView(ref14, { once: true });

    const [lowonganData, setLowonganData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    useEffect(() => {
        const fetchLowongan = async () => {
            try {
                const response = await fetch('/datalowongan.json');
                const result = await response.json();

                if (result.status === 'success') {
                    setLowonganData(result.data);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchLowongan();
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            setShowSearchResults(false);
            return;
        }

        const filtered = lowonganData.filter(job =>
            job.namaPekerjaan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.namaPerusahaan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.tipeKerja.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filtered);
        setShowSearchResults(true);
    }, [searchQuery, lowonganData]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleJobClick = (jobId) => {
        navigate(`/lowongan/detail-lowongan/${jobId}`);
    };

    return(
        <div className="flex flex-col justify-between items-center">
            <Header headerWidth="w-full"/>

            <div className="px-6 py-10 xl:py-25 xl:px-20 3xl:px-60 flex flex-col justify-between items-center gap-8 xl:gap-12 3xl:gap-16">
                <div className="flex flex-col justify-between items-center gap-10">
                    <motion.h2
                        ref={ref13}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView13 ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        id="animation"
                        className="font-semibold text-6xl sm:text-8xl text-black text-center"
                    >
                        Dapatkan Pekerjaan Anda Bersama Kami
                    </motion.h2>

                    <motion.p
                        ref={ref14}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView14 ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        id="animation"
                        className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left"
                    >
                        Temukan peluang terbaik, raih karier impian, dan mulai perjalanan suksesmu sekarang juga
                    </motion.p>
                </div>

                <div className="relative w-full">
                    {/* Search Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari pekerjaan, perusahaan, atau lokasi..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-6 py-4 xl:py-2 3xl:py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-black transition-colors duration-300 pl-14"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </div>
                    </div>

                    {/* Search Results Dropdown */}
                    {showSearchResults && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                            {searchResults.length > 0 ? (
                                <div className="p-2">
                                    <p className="text-sm text-gray-500 px-4 py-2 border-b">
                                        Ditemukan {searchResults.length} hasil pencarian
                                    </p>
                                    {searchResults.map((job) => (
                                        <div
                                            key={job.id}
                                            onClick={() => handleJobClick(job.id)}
                                            className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b last:border-b-0"
                                        >
                                            <img
                                                src={job.logoPerusahaan}
                                                alt={`${job.namaPerusahaan} logo`}
                                                className="w-12 h-12 rounded-full object-cover border border-gray-200"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-black text-sm line-clamp-1">
                                                    {job.namaPekerjaan}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {job.namaPerusahaan}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    📍 {job.lokasi} • 💼 {job.tipeKerja}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500">Tidak ada hasil pencarian untuk "{searchQuery}"</p>
                                    <p className="text-gray-400 text-sm mt-2">Coba kata kunci yang berbeda</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className=" flex flex-col xl:flex-row justify-between xl:justify-center items-center gap-8 xl:gap-12">
                    <div className="w-full max-w-4xl xl:w-1/2">
                        <video
                            className="w-full h-auto rounded-lg shadow-lg"
                            controls
                            preload="metadata"
                        >
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-xl">
                        <h3 className="font-semibold text-xl xl:text-5xl text-black">Tutorial Upload CV</h3>
                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">
                            Jika Anda kebingungan dalam mengupload/mengirim
                            CV, silahkan Anda menonton video ini terlebih dahulu
                            agar mempermudahkan Anda dalam mengirim CV. Happy Watching!
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gradient-to-tr from-primary via-primary to-black/80 py-10 xl:py-25 px-6 xl:px-20 3xl:px-60 flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 justify-center items-center w-full">
                    {loading ? (
                        // Loading skeleton
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-lg animate-pulse">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="h-3 bg-gray-300 rounded"></div>
                                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                                </div>
                                <div className="h-10 bg-gray-300 rounded"></div>
                            </div>
                        ))
                    ) : (
                        lowonganData.map((job) => (
                            <div key={job.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {/* Header Card dengan Logo dan Info Perusahaan */}
                                <div className="flex flex-col items-start gap-4 mb-4">
                                    <img
                                        src={job.logoPerusahaan}
                                        alt={`${job.namaPerusahaan} logo`}
                                        className="size-1/2 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg xl:text-2xl text-black mb-1 line-clamp-1">
                                            {job.namaPekerjaan}
                                        </h3>
                                        <p className="font-semibold text-black text-sm xl:text-lg">
                                            {job.namaPerusahaan}
                                        </p>
                                    </div>
                                </div>

                                {/* Alamat Perusahaan */}
                                <div className="mb-4">
                                    <p className="font-reguler text-black text-sm xl:text-lg leading-relaxed line-clamp-2">
                                        {job.alamatPerusahaan}
                                    </p>
                                </div>

                                {/* Info Tambahan */}
                                <div className="mb-4 space-y-1">
                                    <p className="text-xs xl:text-lg text-black font-reguler">
                                        {job.tipeKerja} • {job.lokasi}
                                    </p>
                                    <p className="text-xs xl:text-lg text-black font-reguler">
                                        {job.gaji}
                                    </p>
                                </div>

                                {/* Tombol Lihat Detail */}
                                <button
                                    className="w-full cursor-pointer bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    onClick={() => handleJobClick(job.id)}>
                                        Lihat Detail
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Jika tidak ada data */}
                {!loading && lowonganData.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white text-lg">Tidak ada lowongan tersedia saat ini.</p>
                    </div>
                )}

            </div>

            {/*BANNER CTA*/}
            <div className="w-full relative flex flex-col ">
                <BannerCTA
                    mainClassName="bg-yellow flex flex-col xl:flex-row justify-center items-center gap-8 3xl:gap-12 py-10 xl:py-20 3xl:py-30"
                    bannerCTAwords="Tertarik? Langsung Hubungi Kami"
                    bannerCTAwordsClassName="font-reguler text-black text-4xl xl:text-5xl 3xl:text-7xl text-center"
                    buttonClassName="hover:shadow-2xl cursor-pointer flex flex-row justify-center items-center gap-4 bg-black py-1 3xl:py-2 pl-4 3xl:pl-6 pr-1 3xl:pr-2 rounded-full w-fit self-center xl:self-end"
                    circleClassName="bg-primary rounded-full p-3 3xl:p-4"
                    buttonName="Hubungi Kami"
                    spanClassName="font-reguler text-white text-md 3xl:text-2xl"
                    arrowClassName="size-4 3xl:size-6 text-black"
                />

                <div className="absolute bg-black size-15 3xl:size-25 rounded-full blur-[5rem] -ml-5 mt-8"></div>
                <div className="absolute bg-black size-20 3xl:size-35 rounded-full blur-[6rem] mt-30 3xl:mt-50 -mr-5 3xl:ml-[110rem]"></div>
            </div>
        </div>
    )
}

export default Lowongan;