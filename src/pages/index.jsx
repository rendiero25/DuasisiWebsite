import Button from "../components/Button.jsx";
import Slider from "../components/Slider.jsx";

import Header from "../components/Header.jsx";
import BannerCTA from "../components/BannerCTA.jsx";

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
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import Person4 from "../assets/person4.jpg";
import Person5 from "../assets/person5.jpg";


const Index = () => {
    return(
        <div className="">
            <div className="min-h-screen flex flex-col xl:flex-row">
                <div className="flex flex-col xl:w-70vw">
                    <Header headerWidth="w-full "/>

                    {/*HERO*/}
                    <div className="pt-10 xl:pt-14 flex flex-col xl:flex-row justify-between items-center xl:relative">
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
                            <div className="px-6 xl:px-20 3xl:px-60 flex flex-col justify-center items-center xl:items-start gap-10 xl:pt-18 3xl:pt-30">
                                <div className="flex flex-col justify-between items-center xl:items-start gap-2">
                                    <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">Dua Sisi adalah Partner Anda di dalam outsourcing</h2>
                                    <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-black text-center xl:text-left">sumber daya manusia</h1>
                                    <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-black text-center xl:text-left">Dua Sisi dibangun dengan filosofi keuntungan bersama.
                                        Dari arti dua pihak atau dua sisi, kami merasa HRD adalah
                                        bagian integral di perusahaan yang harus mementingkan dan
                                        mengatur hubungan antara perusahaan dan karyawan.</p>
                                </div>

                                <div className="flex flex-row justify-between items-center gap-6 xl:gap-10 xl:mt-5">
                                    <Button
                                        buttonClassName="flex flex-row justify-center items-center gap-4 bg-button py-1 pl-4 3xl:pl-6 pr-1 rounded-full"
                                        spanClassName="font-reguler text-black text-md 3xl:text-2xl"
                                        buttonName="Outsourcing"
                                        circleClassName="bg-black rounded-full p-3 xl:p-5"
                                        arrowClassName="size-4 3xl:size-6 text-button"
                                    />

                                    <a href="#" className="font-bold text-sm 3xl:text-xl text-black underline">Apa itu Outsourcing?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 xl:pt-0 xl:w-[85rem] 3xl:w-[100rem] h-auto">
                    <div className="relative flex flex-col justify-end items-center h-full">
                        <img src={OfficeActivity} alt="office-activity" className="w-full h-full object-cover"/>

                        <div className="absolute flex flex-col justify-between h-full px-8 xl:px-12 3xl:px-16 pb-8 3xl:pb-16 pt-4">
                            <Button
                                buttonClassName="invisible xl:visible flex flex-row justify-center items-center gap-4 bg-button py-1 pl-4 3xl:pl-6 pr-1 rounded-full w-fit self-end"
                                spanClassName="font-reguler text-black text-md 3xl:text-2xl"
                                buttonName="Konsultasi Yuk!"
                                circleClassName="bg-black rounded-full p-3 xl:p-5 3xl:p-4"
                                arrowClassName="size-4 text-button"
                            />

                            <p className="font-medium 3xl:font-light text-white text-sm sm:text-lg 3xl:text-2xl text-left leading-normal 3xl:pr-50">hampir semua kandidat yang kami
                                rekomendasikan langsung diterima bekerja.
                                Ini bukan sekadar angka—ini bukti nyata
                                bahwa kami paham apa yang dibutuhkan
                                perusahaan dan apa yang dicari para
                                pencari kerja.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*SECTION 2*/}
            <div className="-mt-10 pt-10 pb-[3rem]">
                <div className="px-6 xl:px-20 3xl:px-60 pt-25 3xl:pt-35 relative flex flex-col justify-between items-center bg-primary">
                    <div className="flex flex-col justify-between items-center xl:items-start gap-8 xl:gap-16 pb-[10rem] xl:pb-[25rem] 3xl:pb-[35rem] w-full">
                        <h2 className="font-semibold text-white text-3xl xl:text-6xl text-center xl:text-left 3xl:max-w-5xl">Mitra terpercaya lebih dari 10 tahun dalam berbagai industri</h2>

                        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-12 w-full">
                            <img src={Section2Image} alt="section2-image" className="xl:w-[27rem]"/>

                            <div className="flex flex-col justify-center items-center xl:items-start gap-10">
                                <p className="text-white font-reguler text-md xl:text-lg 3xl:text-2xl text-center xl:text-left xl:max-w-lg 3xl:max-w-2xl">
                                    Lebih dari 30+ perusahaan telah mempercayakan proses
                                    rekrutmen mereka kepada Dua Sisi. Dengan pendekatan
                                    yang cepat, akurat, dan human-centered, kami telah
                                    berhasil menyalurkan kandidat berkualitas tinggi dengan
                                    tingkat keberhasilan hingga 95%.
                                </p>

                                <div className="flex flex-row justify-center items-center gap-6 xl:gap-12">
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="text-white font-semibold text-7xl xl:text-8xl 3xl:text-9xl">30+</h3>
                                        <h3 className="text-white font-reguler text-xs xl:text-sm 3xl:text-lg">Perusahaan sudah dibantu</h3>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className="text-white font-semibold text-7xl xl:text-8xl 3xl:text-9xl">95%</h3>
                                        <h3 className="text-white font-reguler text-xs xl:text-sm 3xl:text-lg">Kandidat diterima</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bg-black size-15 3xl:size-95 rounded-full blur-[13rem] -ml-5 mt-8 3xl:mt-[50rem]"></div>
                            <div className="absolute bg-black size-20 3xl:size-95 rounded-full blur-[13rem] mt-30 3xl:-mt-[50rem] mr-5 3xl:-mr-[10rem] right-0"></div>
                        </div>
                    </div>
                </div>

                <div className="px-6 xl:px-20 3xl:px-60 -mt-25 xl:-mt-83 3xl:-mt-105">
                    <div className="">
                        <Swiper
                            direction={"horizontal"}
                            pagination={{clickable: true}}
                            modules={[Pagination, Autoplay]}
                            autoplay={{delay: 3000}}
                            className="mySwiper w-full">
                                <SwiperSlide><img src={Rekrut} alt="rekrut-slideshow1" className="w-full h-auto object-cover rounded-2xl xl:rounded-4xl"/></SwiperSlide>
                                <SwiperSlide><img src={Konsultasi} alt="rekrut-slideshow2" className="w-full h-auto object-cover rounded-2xl xl:rounded-4xl"/></SwiperSlide>
                                <SwiperSlide><img src={Outsourcing} alt="rekrut-slideshow3" className="w-full h-auto object-cover rounded-2xl xl:rounded-4xl"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/*SECTION 3*/}
            <div className="px-6 xl:px-20 3xl:px-60 pt-10 3xl:pt-25">
                <div className="flex flex-col justify-between items-center gap-8">
                    <div className="flex flex-col justify-between items-center gap-6">
                        <h2 className="font-semibold text-black text-3xl xl:text-6xl text-center xl:text-left">Satu solusi, semua layanan HR</h2>
                        <p className="text-black font-reguler text-md xl:text-lg 3xl:text-2xl text-center xl:max-w-4xl 3xl:max-w-7xl">
                            Kami tidak hanya menyalurkan tenaga kerja, kami bantu kelola semuanya, dari awal hingga akhir.
                            Mulai dari pencarian kandidat terbaik, penjadwalan interview, hingga bimbingan HRD yang tepat sasaran. <br/><br/>

                            Setelah kandidat masuk kerja, kami juga mengurus administrasi seperti invoice bulanan, pendaftaran BPJS,
                            hingga pelacakan cuti dan izin sakit. Semua dirancang untuk memudahkan operasional perusahaan Anda,
                            agar bisa fokus pada pertumbuhan bisnis.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between items-center pt-10 w-full">
                        <div className="flex flex-col xl:flex-wrap justify-between items-center xl:items-start gap-12 3xl:gap-20">
                            <div className="flex flex-col xl:flex-row justify-between items-start xl:gap-16 3xl:gap-50">
                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-70">
                                    <img src={Invoice} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl">Invoice Bulanan</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left">
                                            Mempermudah penghitungan biaya gaji dan BPJS
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-70">
                                    <img src={BPJS} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl ">Pendaftaran BPJS</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left xl:max-w-xs">
                                            Melakukan pendaftaran dan pembayaran untuk semua karyawan kontrak anda
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-80">
                                    <img src={Interview} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl">Penjadwalan Interview</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left xl:max-w-xs">
                                            Memudahankan untuk memfilter interview dengan menyiapkan
                                            kandidat yang terjadwal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-between items-start xl:gap-16 3xl:gap-50">
                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-70">
                                    <img src={Kandidat} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl">Pencarian Kandidat</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left">
                                            Dari Interview sampai pencarian dengan system yang baik
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-70">
                                    <img src={HRD} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl">Bimbingan HRD</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left">
                                            Memberikan guideline untuk peraturan HRD di tiap pekerjaan
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-center xl:items-start gap-2 3xl:gap-6 w-60 3xl:w-90">
                                    <img src={Tracking} alt="invoice-icon" className="size-10 xl:size-14 3xl:size-20"/>
                                    <div className="flex flex-col justify-between items-center xl:items-start 3xl:gap-2">
                                        <h3 className="text-black font-bold text-md xl:text-lg 3xl:text-3xl">Tracking Cuti & Ijin sakit</h3>
                                        <p className="text-black font-reguler text-sm xl:text-lg 3xl:text-2xl text-center xl:text-left">
                                            Mempermudah penghitungan biaya gaji dan BPJS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*TESTIMONIAL*/}
            <div className="px-6 xl:px-20 3xl:px-60 py-10 xl:py-25 3xl:py-35">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h2 className="text-black font-semibold text-3xl xl:text-6xl text-center xl:pb-5">Apa Kata Customer Kami</h2>

                    <Slider
                        testimonial1="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image1={Person1}
                        name1="Sugeng Pramono"
                        position1="HR Manager, PT. Aruna Digital"

                        testimonial2="Mulai dari BPJS, cuti, sampai urusan invoice, semua di-handle dengan rapi. Timnya responsif dan profesional."
                        image2={Person2}
                        name2="Ratna Fransisca"
                        position2="COO, Sinar Karya Logistik"

                        testimonial3="Dulu pusing cari karyawan, sekarang tinggal bilang ke Dua Sisi. Gak nyangka bisa semudah ini!"
                        image3={Person3}
                        name3="Kenny Recardo"
                        position3="Owner, Kedai Kopi Jakarta"

                        testimonial4="Mulai dari BPJS, cuti, sampai urusan invoice, semua di-handle dengan rapi. Timnya responsif dan profesional."
                        image4={Person4}
                        name4="Tania Maureen"
                        position4="Auditor, Bank Panin"

                        testimonial5="Rekrutmen jadi jauh lebih cepat dan tepat. Dua Sisi benar-benar paham kebutuhan kami. Kandidat yang direkomendasikan langsung cocok!"
                        image5={Person5}
                        name5="Eduard Grammy"
                        position5="HR Staff, PT. GSI Indonesia"
                    />
                </div>
            </div>

            {/*BANNER CTA*/}
            <div className="w-full relative flex flex-col ">
                <BannerCTA
                    mainClassName="bg-primary flex flex-col xl:flex-row justify-center items-center gap-8 3xl:gap-12 py-10 xl:py-20 3xl:py-30"
                    bannerCTAwords="Tertarik? Langsung Hubungi Kami"
                    bannerCTAwordsClassName="font-reguler text-white text-4xl xl:text-5xl 3xl:text-7xl text-center"
                    buttonClassName="flex flex-row justify-center items-center gap-4 bg-black py-1 3xl:py-2 pl-4 3xl:pl-6 pr-1 3xl:pr-2 rounded-full w-fit self-center xl:self-end"
                    circleClassName="bg-primary rounded-full p-3 3xl:p-4"
                    buttonName="Hubungi Kami"
                    spanClassName="font-reguler text-white text-md 3xl:text-2xl"
                    arrowClassName="size-4 3xl:size-6 text-black"
                />

                <div className="absolute bg-black size-15 3xl:size-25 rounded-full blur-[5rem] -ml-5 mt-8"></div>
                <div className="absolute bg-black size-20 3xl:size-35 rounded-full blur-[5rem] mt-30 3xl:mt-40 -mr-5 right-0"></div>
            </div>
        </div>
    )
}

export default Index;