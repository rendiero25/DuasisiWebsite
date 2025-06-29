import LogoWhite from "../assets/logodsswhite.png";
import IconWA from "../assets/wa.png";
import IconMail from "../assets/mail.png";
import IconIG from "../assets/ig.png";
import IconFB from "../assets/fb.png";

import {useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return(
        <div className="bg-black px-6 xl:px-20 3xl:px-60 pt-10 pb-6">
            <div className="flex flex-col justify-between items-center gap-12 py-5">
                <div className="flex flex-col xl:flex-row justify-between items-center xl:items-end gap-10 w-full">
                    <div className="flex flex-col justify-between items-center xl:items-start gap-6">
                        <h2 className="text-white font-medium leading-tight text-3xl xl:text-5xl text-center xl:text-left">Outsourcing atau jasa <br/> penyaluran tenaga kerja</h2>
                        <ul className="flex flex-wrap justify-center xl:justify-start items-center gap-4 text-white font-reguler text-sm 3xl:text-lg xl:max-w-md">
                            <li className="cursor-pointer" onClick={() => navigate("/")}>Beranda</li>
                            <li className="size-2 rounded-full bg-white"></li>
                            <li className="cursor-pointer" onClick={() => navigate("/tentang-kami")}>Tentang Kami</li>
                            <li className="size-2 rounded-full bg-white"></li>
                            <li className="cursor-pointer" onClick={() => navigate("/layanan")}>Layanan</li>
                            <li className="size-2 rounded-full bg-white"></li>
                            <li className="cursor-pointer" onClick={() => navigate("/lowongan")}>Lowongan</li>
                            <li className="size-2 rounded-full bg-white"></li>
                            <li className="cursor-pointer" onClick={() => navigate("/kontak-kami")}>Kontak Kami</li>
                        </ul>
                    </div>

                    <div className="max-w-2xl flex flex-col justify-between items-center xl:items-end gap-4">
                        <img src={LogoWhite} alt="logo-dsswhite" className="w-50 cursor-pointer" onClick={() => navigate("/")} />
                        <p className="font-reguler text-[#BBBBBB] text-sm 3xl:text-lg leading-normal text-center xl:text-right">
                            Neo Soho Residence, Letjen S. Parman St No.28, RT.3/RW.5, <br/>
                            South Tanjung Duren, Grogol petamburan, <br/>
                            West Jakarta City, Jakarta 11470, Indonesia</p>
                    </div>
                </div>

                <div className="border-1 border-[#C3C3C3] w-full"></div>

                <div className="flex flex-col xl:flex-row justify-between items-center gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <a href="https://wa.me/62895393369464?text=Halo%20Duasisi%20Sejahtera,%20Saya%20ingin%20konsultasi%20lebih%20lanjut">
                            <img src={IconWA} alt="icon-wa" className="w-6" />
                        </a>

                        <a href="https://www.instagram.com/duasisisejahtera">
                            <img src={IconIG} alt="icon-ig" className="w-6"/>
                        </a>
                    </div>

                    <p className="text-[#BBBBBB] text-sm font-reguler text-center xl:text-right">
                        Copyright C 2025 PT. Dua Sisi Sejahtera. All rights reserved. Developed by
                            <span>
                                <a href="https://www.rendiero.dev" className="text-white font-bold text-md"> Rendiero</a>
                            </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;