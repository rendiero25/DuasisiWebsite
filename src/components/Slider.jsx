import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({
                    testimonial1, testimonial2, testimonial3, testimonial4, testimonial5,
                    image1, image2, image3, image4, image5,
                    name1, name2, name3, name4, name5,
                    position1, position2, position3, position4, position5,
    }) => {

    return(
        <div className="w-full">
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
                        width: 15px !important;
                        height: 5px !important;
                        
                    }

                    .swiper-button-prev {
                        color: #facc15 !important;
                        opacity: 1;
                        width: 15px !important;
                        height: 5px !important;

                    }
                    
                    .swiper-button-next:after,
                    .swiper-button-prev:after {
                    font-size: 30px !important;
                `}
            </style>

            <div className="">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{clickable: true}}
                    navigation={true}
                    autoplay={{delay: 5000}}
                    spaceBetween={5}
                    slidesPerView={1}
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                        }
                    }}
                    className="mx-20">

                        <SwiperSlide className="pb-10 xl:pb-20">
                            <div className="pl-15">
                                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between items-start gap-4 w-full h-57 sm:h-50 3xl:h-70">
                                    <p className="text-sm md:text-lg lg:text-2xl xl:text-sm 3xl:text-xl font-medium text-white text-left leading-normal">{testimonial1}</p>
                                    <div className="flex flex-row justify-between items-center gap-2 3xl:gap-4">
                                        <img src={image1} alt="persontesti1-image" className="size-12 3xl:size-16 rounded-full object-cover"/>
                                        <div className="flex flex-col justify-between items-start gap-1">
                                            <h4 className="text-white font-bold text-sm 3xl:text-lg">{name1}</h4>
                                            <h4 className="text-white font-reguler text-xs 3xl:text-sm">{position1}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pl-15">
                                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between items-start gap-4 w-full h-57 sm:h-50 3xl:h-70">
                                    <p className="text-sm md:text-lg lg:text-2xl xl:text-sm 3xl:text-xl font-medium text-white text-left leading-normal">{testimonial2}</p>
                                    <div className="flex flex-row justify-between items-center gap-2 3xl:gap-4">
                                        <img src={image2} alt="persontesti1-image" className="size-12 3xl:size-16 rounded-full object-cover"/>
                                        <div className="flex flex-col justify-between items-start gap-1">
                                            <h4 className="text-white font-bold text-sm 3xl:text-lg">{name2}</h4>
                                            <h4 className="text-white font-reguler text-xs 3xl:text-sm">{position2}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="">
                            <div className="mx-15">
                                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between items-start gap-4 w-full h-57 sm:h-50 3xl:h-70">
                                    <p className="text-sm md:text-lg lg:text-2xl xl:text-sm 3xl:text-xl font-medium text-white text-left leading-normal">{testimonial3}</p>
                                    <div className="flex flex-row justify-between items-center gap-2">
                                        <img src={image3} alt="persontesti1-image" className="size-12 3xl:size-16 rounded-full object-cover"/>
                                        <div className="flex flex-col justify-between items-start gap-1">
                                            <h4 className="text-white font-bold text-sm 3xl:text-lg">{name3}</h4>
                                            <h4 className="text-white font-reguler text-xs 3xl:text-sm">{position3}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="">
                            <div className="pr-15">
                                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between items-start gap-4 w-full h-57 sm:h-50 3xl:h-70">
                                    <p className="text-sm md:text-lg lg:text-2xl xl:text-sm 3xl:text-xl font-medium text-white text-left leading-normal">{testimonial4}</p>
                                    <div className="flex flex-row justify-between items-center gap-2">
                                        <img src={image4} alt="persontesti1-image" className="size-12 3xl:size-16 rounded-full object-cover"/>
                                        <div className="flex flex-col justify-between items-start gap-1">
                                            <h4 className="text-white font-bold text-sm 3xl:text-lg">{name4}</h4>
                                            <h4 className="text-white font-reguler text-xs 3xl:text-sm">{position4}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="">
                            <div className="mr-15">
                                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between items-start gap-4 w-full h-57 sm:h-50 3xl:h-70">
                                    <p className="text-sm md:text-lg lg:text-2xl xl:text-sm 3xl:text-xl font-medium text-white text-left leading-normal">{testimonial5}</p>
                                    <div className="flex flex-row justify-between items-center gap-2">
                                        <img src={image5} alt="persontesti1-image" className="size-12 3xl:size-16 rounded-full object-cover"/>
                                        <div className="flex flex-col justify-between items-start gap-1">
                                            <h4 className="text-white font-bold text-sm 3xl:text-lg">{name5}</h4>
                                            <h4 className="text-white font-reguler text-xs 3xl:text-sm">{position5}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Slider;