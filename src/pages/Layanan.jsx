import {useEffect} from "react";

import Header from "../components/Header.jsx";
import BannerCTA from "../components/BannerCTA.jsx";
import BgLayanan from "../assets/bglayanan.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {delay} from "motion";

const Layanan = () => {

    useEffect(() => {
        document.title = "Layanan | Duasisi Sejahtera";
    }, [])

    return(
        <div className="relative flex flex-col">
            <style>
                {`
                    .swiper-pagination-bullet {
                        background-color: #facc15 !important;
                        opacity: 0.3;
                    }
                    
                    .swiper-pagination-bullet-active {
                        background-color: #facc15 !important;
                        opacity: 1;
                    }
                    
                    .swiper-button-next {
                        color: #facc15 !important;
                        opacity: 1;
                        
                    }

                    .swiper-button-prev {
                        color: #facc15 !important;
                        opacity: 1;

                    }
                `}
            </style>

            <div className="">
                <img src={BgLayanan} alt="bglayanan-image" className="absolute -z-20 w-full h-full object-cover"/>
                <div className="bg-black/80 flex flex-col justify-between">
                    <Header headerWidth="w-full"/>

                    <div className="w-full flex flex-col justify-between items-center">
                        <div className="px-6 md:px-12 lg:px-16 xl:px-20 3xl:px-60 py-10 xl:pb-20 w-full">
                            <Swiper
                                modules={[Pagination, Autoplay, Navigation]}
                                pagination={{clickable: true}}
                                navigation={true}
                                autoplay={{delay: 5000}}
                                className="">

                                    <SwiperSlide>
                                        <div className="px-20 flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-7xl">
                                            <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                            <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Konsultasi HRD</h1>
                                            <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left xl:max-w-3xl">
                                                Kami memberikan konsultasi untuk klien-klien kami untuk segala hal mengenai HRD. Dari tips untuk hiring, training, dan
                                                bahkan pengajian serta bonus. Kita menjaga standard yang sesuai dengan peraturan DEPNAKER Indonesia.</p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="px-20 flex flex-col justify-between items-center xl:items-start gap-4">
                                            <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                            <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Rekrut</h1>
                                            <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left 3xl:max-w-4xl">
                                                Kami meringankan beban departemen HRD Anda. Dengan database kami yang berkembang kami mempunyai
                                                simpanan data pelamar kerja yang akan disesuaikan dengan kebutuhan Anda. Mulai dari tahap
                                                pendidikkan, jenis kelamin, pengalaman kerja serta usia yang Anda butuhkan. HRD team kami akan menyortir
                                                dan menginterview mereka terlebih dahulu sebelum interview tahap terakhir di tempat Anda.</p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="px-20 pb-15 xl:pb-25 3xl:pb-40">
                                        <div className="flex flex-col justify-between items-center xl:items-start gap-4 xl:max-w-7xl">
                                            <h2 className="font-semibold text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left">Layanan Kami</h2>
                                            <h1 className="font-reguler 3xl:font-medium text-6xl sm:text-8xl xl:text-8xl 3xl:text-9xl text-white text-center xl:text-left">Benefit Outsourcing</h1>
                                            <p className="font-reguler text-md xl:text-lg 3xl:text-2xl text-white text-center xl:text-left 3xl:max-w-4xl">
                                                Sibuk dan pusing dengan posisi turnover tinggi ? Atau menghitung lembur serta denda dan komisi?
                                                Dengan outsourcing Anda sebagai perusahaan telah membantu beban pikiran besar yaitu tenaga kerja.
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
                                buttonClassName="hover:shadow-2xl cursor-pointer flex flex-row justify-center items-center gap-4 bg-black py-1 3xl:py-2 pl-4 3xl:pl-6 pr-1 3xl:pr-2 rounded-full w-fit self-center xl:self-end"
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
        </div>

    )
}

export default Layanan;