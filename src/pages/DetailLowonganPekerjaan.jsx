import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";

const DetailLowonganPekerjaan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobDetail, setJobDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobDetail = async () => {
            try {
                const response = await fetch('/datalowongan.json');
                const result = await response.json();

                if (result.status === 'success') {
                    const job = result.data.find(job => job.id === parseInt(id));
                    if (job) {
                        setJobDetail(job);
                    } else {
                        // Job not found, redirect back to lowongan page
                        navigate('/lowongan');
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching job detail:', error);
                setLoading(false);
                navigate('/lowongan');
            }
        };

        if (id) {
            fetchJobDetail();
        }
    }, [id, navigate]);

    const handleKirimLamaran = () => {
        const subject = `Lamaran Pekerjaan - ${jobDetail.namaPekerjaan}`;
        const body = `Halo, Saya tertarik untuk melamar posisi ${jobDetail.namaPekerjaan} di ${jobDetail.namaPerusahaan}. Mohon informasi lebih lanjut mengenai proses seleksi. Terima kasih.`;

        const mailtoLink = `mailto:workspace.rendy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header headerWidth="w-full"/>
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
                </div>
            </div>
        );
    }

    if (!jobDetail) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header headerWidth="w-full"/>
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pekerjaan tidak ditemukan</h2>
                        <button
                            onClick={() => navigate('/lowongan')}
                            className="hidden cursor-pointer xl:flex text-black px-6 py-3 rounded-lg hover:bg-primary transition-colors"
                        >
                            Kembali ke Lowongan
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-white via-white to-primary/40">
            <Header headerWidth="w-full"/>

            <div className="px-6 py-10 xl:pb-25 xl:px-20 3xl:px-60 w-full">
                <div className="w-full flex flex-col gap-4">

                    {/* Back Button */}
                    <div className="hidden xl:flex justify-center self-start">
                        <button
                            onClick={() => navigate('/lowongan')}
                            className="text-black cursor-pointer font-semibold hover:bg-primary py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            ← &nbsp; Kembali ke Lowongan
                        </button>
                    </div>

                    {/* Div Pertama - Info Perusahaan */}
                    <div className="py-8">
                        <div className="flex flex-col xl:flex-row justify-between items-end gap-6 w-full">
                            <div className="flex flex-col justify-between items-start gap-6">
                                <img
                                    src={jobDetail.logoPerusahaan}
                                    alt={`${jobDetail.namaPerusahaan} logo`}
                                    className="size-2/5 object-cover"
                                />

                                <div className="flex flex-col justify-between items-start">
                                    <h1 className="font-bold text-3xl xl:text-5xl text-black mb-3">
                                        {jobDetail.namaPekerjaan}
                                    </h1>
                                    <h2 className="font-semibold text-xl xl:text-2xl text-black mb-2">
                                        {jobDetail.namaPerusahaan}
                                    </h2>
                                    <p className="text-black text-lg xl:text-xl flex">
                                        {jobDetail.alamatPerusahaan}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex justify-start xl:justify-end">
                                <Button
                                    buttonClassName="flex flex-row justify-center items-center cursor-pointer gap-4 bg-primary py-1 pl-4 xl:pl-6 3xl:pl-6 pr-1 rounded-full w-fit self-end group hover:bg-black"
                                    spanClassName="font-medium text-black group-hover:text-white text-md 3xl:text-xl"
                                    buttonName="Kirim Lamaran"
                                    circleClassName="bg-black group-hover:bg-white rounded-full p-3"
                                    arrowClassName="size-4 text-primary group-hover:text-black"
                                    functionButton={handleKirimLamaran}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Div Ketiga - Detail Pekerjaan */}
                    <div className="flex flex-col xl:flex-row justify-between items-start gap-4">
                        {/* Div Pertama - Deskripsi Pekerjaan */}
                        <div className="flex flex-col gap-4">
                            <div className="xl:col-span-2 rounded-lg p-8 border border-gray-200">
                                <h3 className="font-bold text-2xl text-black mb-4 border-gray-200 pb-2">
                                    Deskripsi Pekerjaan
                                </h3>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {jobDetail.deskripsiPekerjaan}
                                    </p>
                                </div>
                            </div>

                            {/* Detail Pekerjaan */}
                            <div className="rounded-lg p-6 border border-gray-200">
                                <h4 className="font-bold text-xl text-black mb-4 border-gray-200 pb-2">
                                    Detail Pekerjaan
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600">Gaji:</span>
                                        <span className="text-black font-medium">{jobDetail.gaji}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600">Tipe Kerja:</span>
                                        <span className="text-black font-medium">{jobDetail.tipeKerja}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600">Lokasi:</span>
                                        <span className="text-black font-medium">{jobDetail.lokasi}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600">Deadline:</span>
                                        <span className="text-black font-medium">{jobDetail.deadline}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600">Posted:</span>
                                        <span className="text-black font-medium">{jobDetail.postedDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Div Kedua - Info Tambahan */}
                        <div className="space-y-6">

                            {/* Persyaratan Khusus */}
                            <div className="rounded-lg p-6 border border-gray-200">
                                <h4 className="font-bold text-xl text-black mb-4 border-gray-200 pb-2">
                                    Persyaratan Khusus
                                </h4>
                                <div className="space-y-2">
                                    {jobDetail.persyaratanKhusus && jobDetail.persyaratanKhusus.length > 0 ? (
                                        <ul className="text-gray-700 space-y-1">
                                            {jobDetail.persyaratanKhusus.map((requirement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 text-black">•</span>
                                                    <span>{requirement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500 italic">Tidak ada persyaratan khusus</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:hidden text-center">
                        <button
                            onClick={() => navigate('/lowongan')}
                            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Kembali ke Lowongan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailLowonganPekerjaan;