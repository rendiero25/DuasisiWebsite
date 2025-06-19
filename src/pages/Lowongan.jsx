import {useState, useEffect} from "react";

import Header from "../components/Header.jsx";
import Video from "../assets/tutorial.mp4";

const Lowongan = () => {

    const [lowonganData, setLowonganData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return(
        <div className="flex flex-col justify-between items-center">
            <Header headerWidth="w-full"/>

            <div className="px-6 py-10 xl:px-20 3xl:px-60 flex flex-col justify-between items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-10">
                    <h2 className="font-semibold text-6xl sm:text-8xl text-black text-center">Dapatkan Pekerjaan Anda Bersama Kami</h2>
                    <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">
                        Temukan peluang terbaik, raih karier impian, dan mulai perjalanan suksesmu sekarang juga</p>
                </div>

                <div></div>

                <div className="flex flex-col justify-between items-center gap-8">
                    <div className="w-full max-w-4xl">
                        <video
                            className="w-full h-auto rounded-lg shadow-lg"
                            controls
                            preload="metadata"
                        >
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                    <div className="flex flex-col justify-between items-center xl:items-start gap-4">
                        <h3 className="font-semibold text-xl text-black">Tutorial Upload CV</h3>
                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">
                            Jika anda kebingungan dalam mengupload/mengirim
                            CV, silahkan anda menonton video ini terlebih dahulu
                            agar mempermudahkan anda dalam mengirim CV. Happy Watching
                        </p>
                    </div>
                </div>
            </div>

            <div id="containerjobpost" className="bg-primary py-4 grid grid-col-1 xl:grid-cols-3 justify-between items-center">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
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
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={job.logoPerusahaan}
                                        alt={`${job.namaPerusahaan} logo`}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-black mb-1 line-clamp-1">
                                            {job.namaPekerjaan}
                                        </h3>
                                        <p className="font-semibold text-gray-700 text-sm">
                                            {job.namaPerusahaan}
                                        </p>
                                    </div>
                                </div>

                                {/* Alamat Perusahaan */}
                                <div className="mb-4">
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                        📍 {job.alamatPerusahaan}
                                    </p>
                                </div>

                                {/* Info Tambahan */}
                                <div className="mb-4 space-y-1">
                                    <p className="text-xs text-gray-500">
                                        💼 {job.tipeKerja} • 📍 {job.lokasi}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        💰 {job.gaji}
                                    </p>
                                </div>

                                {/* Tombol Lihat Detail */}
                                <button
                                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    onClick={() => {
                                        // Implementasi untuk melihat detail
                                        console.log('Lihat detail job:', job.id);
                                        // Bisa redirect ke halaman detail atau open modal
                                    }}
                                >
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
        </div>
    )
}

export default Lowongan;