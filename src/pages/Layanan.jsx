import Header from "../components/Header.jsx";
import BannerCTA from "../components/BannerCTA.jsx";
import BgLayanan from "../assets/bglayanan.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import {delay} from "motion";

const Layanan = () => {
    return(
        <div className="relative flex flex-col">
            <img src={BgLayanan} alt="bglayanan-image" className="absolute -z-20 w-full h-full object-cover"/>
            <div className="bg-black/80 min-h-screen flex flex-col justify-between">
                <Header headerWidth="w-full"/>

                <div className="w-full flex flex-col justify-between items-center">
                    <div className="px-6 xl:px-20 3xl:px-60 py-10 xl:pb-20 w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{clickable: true}}
                            autoplay={{delay: 5000}}
                            className="">
                                <SwiperSlide>
                                    <div className="flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-2xl 3xl:max-w-5xl">
                                        <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                        <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Konsultasi HRD</h1>
                                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">
                                            Kami memberikan konsultasi untuk klien-klien kami untuk
                                            segala hal mengenai HRD. Dari tips untuk hiring, training, dan
                                            bahkan pengajian serta bonus. Kita menjaga standard yang
                                            sesuai dengan peraturan DEPNAKER Indonesia.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex flex-col justify-between items-center xl:items-start gap-4">
                                        <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                        <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Rekrut</h1>
                                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left 3xl:max-w-4xl">
                                            Kami meringankan beban departemen HRD anda. Dengan database kami yang berkembang kami mempunyai
                                            simpanan data pelamar kerja yang akan disesuaikan dengan kebutuhan anda. Mulai dari tahap
                                            pendidikkan, kelamin, pengalaman kerja serta usia yang anda butuhkan HRD team kami akan menyortir
                                            dan menginterview mereka terlebih dahulu sebelum interview tahap terakhir di tempat anda.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="pb-15 3xl:pb-30">
                                    <div className="flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-7xl">
                                        <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                        <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Benefit Outsourcing</h1>
                                        <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left 3xl:max-w-4xl">
                                            Sibuk dan Pusing dengan posisi turnover tinggi ? Atau menghitung lembur serta denda dan komisi?
                                            Dengan outsourcing anda sebagai perusahaan telah membantu beban pikiran besar yaitu tenaga kerja.
                                            Dengan outsourcing kita bisa menangani rekrut sampai pengajian.</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="grow-1 w-full relative flex flex-col">
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
                        <div className="absolute bg-black size-20 3xl:size-35 rounded-full blur-[5rem] mt-30 3xl:mt-40 -mr-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layanan;