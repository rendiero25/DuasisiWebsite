import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";

const DetailLowonganPekerjaan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobDetail, setJobDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nama: '',
        umur: '',
        pendidikanTerakhir: '',
        relevantExperience: '',
        cv: null
    });

    const pendidikanOptions = [
        'SMA/SMK',
        'D3 (Diploma)',
        'S1 (Sarjana)',
        'S2 (Magister)',
        'S3 (Doktor)'
    ];

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
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            nama: '',
            umur: '',
            pendidikanTerakhir: '',
            relevantExperience: '',
            cv: null
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Validasi form
        if (!formData.nama || !formData.umur || !formData.pendidikanTerakhir || !formData.relevantExperience) {
            alert('Mohon lengkapi semua field yang wajib diisi');
            return;
        }

        // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
        console.log('Form data:', formData);

        // Untuk sementara, kita tetap buka email seperti sebelumnya
        const subject = `Lamaran Pekerjaan - ${jobDetail.namaPekerjaan}`;
        const body = `Halo,

            Saya tertarik untuk melamar posisi ${jobDetail.namaPekerjaan} di ${jobDetail.namaPerusahaan}.
            
            Detail Pelamar:
            - Nama: ${formData.nama}
            - Umur: ${formData.umur} tahun
            - Pendidikan Terakhir: ${formData.pendidikanTerakhir}
            - Pengalaman Relevan: ${formData.relevantExperience}
            
            Mohon informasi lebih lanjut mengenai proses seleksi.
            
            Terima kasih.`;

        const mailtoLink = `mailto:hrd.recruitment@duasisi.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);

        // Tutup modal setelah submit
        handleCloseModal();
        // alert('Lamaran berhasil dikirim!');
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

            <div className="px-6 md:px-12 lg:px-16 py-10 xl:pb-25 xl:px-20 3xl:px-60 w-full">
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
                                    buttonClassName="flex flex-row justify-center items-center cursor-pointer gap-4 bg-primary py-1 pl-4 xl:pl-6 3xl:pl-6 pr-1 rounded-full w-fit self-end group hover:bg-black transition duration-400 ease"
                                    spanClassName="font-medium text-black group-hover:text-white text-md 3xl:text-xl transition duration-400 ease"
                                    buttonName="Kirim Lamaran"
                                    circleClassName="bg-black group-hover:bg-white rounded-full p-3 transition duration-400 ease"
                                    arrowClassName="size-4 text-primary group-hover:text-black transition duration-400 ease"
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
                                    <p className="text-gray-700 text-md md:text-lg leading-relaxed whitespace-pre-line">
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
                                        <span className="font-semibold text-gray-600 text-md md:text-lg">Gaji:</span>
                                        <span className="text-black font-medium text-md md:text-lg">{jobDetail.gaji}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600 text-md md:text-lg">Tipe Kerja:</span>
                                        <span className="text-black font-medium text-md md:text-lg">{jobDetail.tipeKerja}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600 text-md md:text-lg">Lokasi:</span>
                                        <span className="text-black font-medium text-md md:text-lg">{jobDetail.lokasi}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600 text-md md:text-lg">Deadline:</span>
                                        <span className="text-black font-medium text-md md:text-lg">{jobDetail.deadline}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-600 text-md md:text-lg">Posted:</span>
                                        <span className="text-black font-medium text-md md:text-lg">{jobDetail.postedDate}</span>
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
                                                <li key={index} className="flex items-start text-md md:text-lg">
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

            {/* Modal Form Lamaran */}
            {showModal && (
                <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">Form Lamaran Pekerjaan</h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>

                            <form onSubmit={handleSubmitForm} className="space-y-6">
                                {/* Nama */}
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>

                                {/* Umur */}
                                <div>
                                    <label htmlFor="umur" className="block text-sm font-medium text-gray-700 mb-2">
                                        Umur *
                                    </label>
                                    <input
                                        type="number"
                                        id="umur"
                                        name="umur"
                                        value={formData.umur}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Masukkan umur"
                                        min="17"
                                        max="65"
                                        required
                                    />
                                </div>

                                {/* Pendidikan Terakhir */}
                                <div>
                                    <label htmlFor="pendidikanTerakhir" className="block text-sm font-medium text-gray-700 mb-2">
                                        Pendidikan Terakhir *
                                    </label>
                                    <select
                                        id="pendidikanTerakhir"
                                        name="pendidikanTerakhir"
                                        value={formData.pendidikanTerakhir}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    >
                                        <option value="">Pilih Pendidikan Terakhir</option>
                                        {pendidikanOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Relevant Experience */}
                                <div>
                                    <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-700 mb-2">
                                        Pengalaman Relevan *
                                    </label>
                                    <textarea
                                        id="relevantExperience"
                                        name="relevantExperience"
                                        value={formData.relevantExperience}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Ceritakan pengalaman kerja yang relevan dengan posisi ini..."
                                        required
                                    />
                                </div>

                                {/* Upload CV */}
                                <div>
                                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload file CV di aplikasi email
                                    </label>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Format yang didukung: PDF, DOC, DOCX (Max 5MB)
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="cursor-pointer flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="cursor-pointer flex-1 px-4 py-2 bg-primary text-black rounded-md hover:bg-opacity-80 transition-colors font-medium"
                                    >
                                        Kirim Lamaran
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailLowonganPekerjaan;