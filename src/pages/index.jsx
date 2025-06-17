import Button from "../components/Button.jsx";
import Slider from "../components/Slider.jsx";

import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import OfficeActivity from "../assets/officeactivity.png";
import Section2Image from "../assets/section2image.png";
import Rekrut from "../assets/rekrut.png";
import Konsultasi from "../assets/konsultasihrd.png";
import Outsourcing from "../assets/outsourcing.png";
import Invoice from "../assets/invoice.png";
import BPJS from "../assets/bpjs.png";
import Interview from "../assets/interview.png";
import Kandidat from "../assets/kandidat.png";
import HRD from "../assets/hrd.png";
import Tracking from "../assets/tracking.png";

const Index = () => {
    return(
        <div className="pt-10">
            {/*HERO*/}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
                <div className="px-6 flex flex-col justify-center items-center xl:items-start gap-10">
                    <div className="flex flex-col justify-between items-center xl:items-start gap-2">
                        <h2 className="font-semibold text-md text-black text-center xl:text-left">Dua Sisi adalah Partner Anda di dalam outsourcing</h2>
                        <h1 className="font-reguler text-6xl text-black text-center xl:text-left">sumber daya manusia</h1>
                        <p className="font-reguler text-md text-black text-center xl:text-left">Dua Sisi dibangun dengan filosofi keuntungan bersama.
                            Dari arti dua pihak atau dua sisi, kami merasa HRD adalah
                            bagian integral di perusahaan yang harus mementingkan dan
                            mengatur hubungan antara perusahaan dan karyawan.</p>
                    </div>

                    <div className="flex flex-row justify-between items-center gap-6">
                        <Button buttonName="Outsourcing"/>

                        <a href="#" className="font-bold text-sm text-black underline">Apa itu Outsourcing?</a>
                    </div>
                </div>

                <div className="">
                    <div className="relative flex flex-col justify-end items-center">
                        <img src={OfficeActivity} alt="office-activity"/>
                        <p className="absolute font-medium text-white text-sm text-left p-8 leading-normal">hampir semua kandidat yang kami
                            rekomendasikan langsung diterima bekerja.
                            Ini bukan sekadar angka—ini bukti nyata
                            bahwa kami paham apa yang dibutuhkan
                            perusahaan dan apa yang dicari para
                            pencari kerja.</p>
                    </div>
                </div>
            </div>

            {/*SECTION 2*/}
            <div className="-mt-10 pt-10 pb-[3rem]">
                <div className="relative flex flex-col justify-between items-center px-6 pt-10 bg-primary">
                    <div className="flex flex-col justify-between items-center gap-8 pb-[10rem]">
                        <h2 className="font-semibold text-white text-3xl text-center xl:text-left">Mitra terpercaya lebih dari 10 tahun dalam berbagai industri</h2>

                        <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
                            <img src={Section2Image} alt="section2-image"/>

                            <div className="flex flex-col justify-center items-center gap-10">
                                <p className="text-white font-reguler text-md text-center xl:text-left">
                                    Lebih dari 30+ perusahaan telah mempercayakan proses
                                    rekrutmen mereka kepada Dua Sisi. Dengan pendekatan
                                    yang cepat, akurat, dan human-centered, kami telah
                                    berhasil menyalurkan kandidat berkualitas tinggi dengan
                                    tingkat keberhasilan hingga 95%.
                                </p>

                                <div className="flex flex-row justify-center items-center gap-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="text-white font-semibol text-7xl">30+</h3>
                                        <h3 className="text-white font-reguler text-xs">Perusahaan sudah dibantu</h3>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="text-white font-semibol text-7xl">95%</h3>
                                        <h3 className="text-white font-reguler text-xs">Kandidat diterima</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 -mt-25">
                    <div className="">
                        <Swiper
                            direction={"horizontal"}
                            pagination={{clickable: true}}
                            modules={[Pagination, Autoplay]}
                            autoplay={{delay: 3000}}
                            className="mySwiper w-full">
                                <SwiperSlide><img src={Rekrut} alt="rekrut-slideshow1" className="w-full h-auto object-cover rounded-2xl"/></SwiperSlide>
                                <SwiperSlide><img src={Konsultasi} alt="rekrut-slideshow2" className="w-full h-auto object-cover rounded-2xl"/></SwiperSlide>
                                <SwiperSlide><img src={Outsourcing} alt="rekrut-slideshow3" className="w-full h-auto object-cover rounded-2xl"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/*SECTION 3*/}
            <div className="px-6">
                <div className="flex flex-col justify-between items-center gap-8">
                    <div className="flex flex-col justify-between items-center gap-6">
                        <h2 className="text-black font-semibold text-3xl text-center">Satu solusi, semua layanan HR</h2>
                        <p className="text-black font-reguler text-md text-center xl:text-left">
                            Kami tidak hanya menyalurkan tenaga kerja, kami bantu kelola semuanya, dari awal hingga akhir.
                            Mulai dari pencarian kandidat terbaik, penjadwalan interview, hingga bimbingan HRD yang tepat sasaran. <br/><br/>

                            Setelah kandidat masuk kerja, kami juga mengurus administrasi seperti invoice bulanan, pendaftaran BPJS,
                            hingga pelacakan cuti dan izin sakit. Semua dirancang untuk memudahkan operasional perusahaan Anda,
                            agar bisa fokus pada pertumbuhan bisnis.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between items-center gap-6">
                        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8">
                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={Invoice} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Invoice Bulanan</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Mempermudah penghitungan biaya gaji dan BPJS
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={BPJS} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Pendaftaran BPJS</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Melakukan pendaftaran dan pembayaran untuk semua karyawan kontrak anda
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={Interview} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Penjadwalan Interview</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Memudahankan untuk memfilter interview dengan menyiapkan
                                        kandidat yang terjadwal
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={Kandidat} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Pencarian Kandidat</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Dari Interview sampai pencarian dengan system yang baik
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={HRD} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Bimbingan HRD</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Memberikan guideline untuk peraturan HRD di tiap pekerjaan
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center xl:items-start gap-2 max-w-sm">
                                <img src={Tracking} alt="invoice-icon" className="size-10"/>
                                <div className="flex flex-col justify-between items-center xl:items-start">
                                    <h3 className="text-black font-bold text-md">Tracking Cuti & Ijin sakit</h3>
                                    <p className="text-black font-reguler text-sm text-center xl:text-left">
                                        Mempermudah penghitungan biaya gaji dan BPJS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*TESTIMONIAL*/}
            <div className="px-6 pt-10">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-black font-semibold text-3xl text-center">Apa Kata Customer Kami</h2>

                    <Slider
                        testimonial1="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image1={Kandidat}
                        name1="Sugeng Pramono"
                        position1="HR Manager, PT. Aruna Digital"

                        testimonial2="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image2={Kandidat}
                        name2="Sugeng Pramono"
                        position2="HR Manager, PT. Aruna Digital"

                        testimonial3="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image3={Kandidat}
                        name3="Sugeng Pramono"
                        position3="HR Manager, PT. Aruna Digital"

                        testimonial4="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image4={Kandidat}
                        name4="Sugeng Pramono"
                        position4="HR Manager, PT. Aruna Digital"

                        testimonial5="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image5={Kandidat}
                        name5="Sugeng Pramono"
                        position5="HR Manager, PT. Aruna Digital"
                    />
                </div>
            </div>
        </div>
    )
}

export default Index;