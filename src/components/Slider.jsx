import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({
                    testimonial1, testimonial2, testimonial3, testimonial4, testimonial5,
                    image1, image2, image3, image4, image5,
                    name1, name2, name3, name4, name5,
                    position1, position2, position3, position4, position5,
    }) => {

    return(
        <div className="w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                navigation={true}
                slidesPerView={1}
                breakpoints={{
                    1280: {
                        slidesPerView: 3,
                    }
                }}
                className="">
                    <SwiperSlide>
                        <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-4 w-full h-auto">
                            <p className="text-sm font-medium text-white text-left leading-normal">{testimonial1}</p>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <img src={image1} alt="persontesti1-image" className="size-12 rounded-full"/>
                                <div className="flex flex-col justify-between items-start gap-1">
                                    <h4 className="text-white font-bold text-sm">{name1}</h4>
                                    <h4 className="text-white font-reguler text-xs">{position1}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-4 w-full h-auto">
                            <p className="text-sm font-medium text-white text-left leading-normal">{testimonial2}</p>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <img src={image2} alt="persontesti1-image" className="size-12 rounded-full"/>
                                <div className="flex flex-col justify-between items-start gap-1">
                                    <h4 className="text-white font-bold text-sm">{name2}</h4>
                                    <h4 className="text-white font-reguler text-xs">{position2}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-4 w-full h-auto">
                            <p className="text-sm font-medium text-white text-left leading-normal">{testimonial3}</p>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <img src={image3} alt="persontesti1-image" className="size-12 rounded-full"/>
                                <div className="flex flex-col justify-between items-start gap-1">
                                    <h4 className="text-white font-bold text-sm">{name3}</h4>
                                    <h4 className="text-white font-reguler text-xs">{position3}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-4 w-full h-auto">
                            <p className="text-sm font-medium text-white text-left leading-normal">{testimonial4}</p>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <img src={image4} alt="persontesti1-image" className="size-12 rounded-full"/>
                                <div className="flex flex-col justify-between items-start gap-1">
                                    <h4 className="text-white font-bold text-sm">{name4}</h4>
                                    <h4 className="text-white font-reguler text-xs">{position4}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-4 w-full h-auto">
                            <p className="text-sm font-medium text-white text-left leading-normal">{testimonial5}</p>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <img src={image5} alt="persontesti1-image" className="size-12 rounded-full"/>
                                <div className="flex flex-col justify-between items-start gap-1">
                                    <h4 className="text-white font-bold text-sm">{name5}</h4>
                                    <h4 className="text-white font-reguler text-xs">{position5}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;