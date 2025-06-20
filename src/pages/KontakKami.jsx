import { useState } from "react";

import Header from "../components/Header.jsx";

import {motion, useInView} from "motion/react";
import {useRef} from "react";

const KontakKami = () => {

    const ref15 = useRef(null);
    const ref16 = useRef(null);


    const isInView15 = useInView(ref15, { once: true });
    const isInView16 = useInView(ref16, { once: true });

    const [formData, setFormData] = useState({
        namaLengkap: '',
        email: '',
        subjek: '',
        pesan: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(formData.subjek);
        const body = encodeURIComponent(
            `Nama Lengkap: ${formData.namaLengkap}\n` +
            `Email: ${formData.email}\n\n` +
            `Pesan:\n${formData.pesan}`
        );

        const mailtoLink = `mailto:workspace.rendy@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return(
        <div className="flex flex-col justify-between items-center">
            <Header headerWidth="w-full"/>

            <div className="flex flex-col justify-between items-center w-full bg-gradient-to-br from-white via-white to-primary/30">
                <div className="px-6 xl:px-20 3xl:px-60 py-10 3xl:py-25 flex flex-col w-full xl:flex-row justify-between items-start gap-10 xl:gap-25">

                    <motion.div
                        ref={ref15}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView15 ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        id="animation"
                        className="flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-lg h-full"
                    >
                        <h1 className="font-bold text-5xl xl:text-7xl text-black text-center xl:text-left">Tersambung Langsung ke Tim Kami</h1>

                        <p className="font-semibold text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">
                            Kami siap membantu menjawab pertanyaan Anda,
                            mendiskusikan permasalahan Anda, atau memulai
                            kerja sama. Sampaikan pesan Anda melalui halaman
                            kontak kami dan dapatkan tanggapan secepatnya</p>

                        <h4 className="text-md font-reguler text-black text-center xl:text-left">Jl. Lapangan Bola No. 9C Kebun Jeruk, Jakarta Barat</h4>

                        <h4 className="text-md font-reguler text-black text-center xl:text-left">(021)-5366 6356 hrd.recruitment@duasisi.id</h4>
                    </motion.div>

                    <div className="w-full max-w-5xl">

                        <motion.form
                            ref={ref15}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView15 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            id="animation"
                            className="p-8"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 gap-6 mb-6">
                                <div>
                                    <label htmlFor="namaLengkap" className="block text-sm font-semibold text-black mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="namaLengkap"
                                        name="namaLengkap"
                                        value={formData.namaLengkap}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Masukkan nama lengkap Anda"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="contoh@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subjek" className="block text-sm font-semibold text-black mb-2">
                                    Subjek Pesan
                                </label>
                                <input
                                    type="text"
                                    id="subjek"
                                    name="subjek"
                                    value={formData.subjek}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Masukkan subjek pesan Anda"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="pesan" className="block text-sm font-semibold text-black mb-2">
                                    Isi Pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                                    placeholder="Tuliskan pesan Anda di sini..."
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-primary/90 text-white cursor-pointer font-semibold py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 "
                                >
                                    Kirim Pesan
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>

                {/*<div className="absolute self-end mt-[5rem] xl:mt-[45rem] bg-primary size-15 3xl:w-90 rounded-full blur-[1rem] xl:blur-[6rem]"></div>*/}

                <div className="w-full h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d75280.93721709731!2d106.76669!3d-6.197061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7224c7e71fb%3A0xc1f1a6ef106a4239!2sDua%20Sisi%20Sejahtera!5e1!3m2!1sid!2sid!4v1750342890824!5m2!1sid!2sid"
                        width="100%"
                        height="550"

                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default KontakKami;