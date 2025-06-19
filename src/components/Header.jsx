import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

import Button from "./Button.jsx";

import Logo from "../assets/logodss.png";
import LogoWhite from "../assets/logodsswhite.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = ({ headerWidth }) => {

    const [showmobilemenu, setShowMobileMenu] = useState(false);
    const isActiveMobileMenu = () => {setShowMobileMenu(true)};
    const IsNotActiveMobileMenu = () => {setShowMobileMenu(false)};

    const navigate = useNavigate();
    const location = useLocation();

    const visibleRoutes = ["/tentang-kami", "/layanan", "/lowongan", "/kontak-kami"]
    const isButtonVisible = visibleRoutes.includes(location.pathname);

    const visibleRoutesForAll = ["/", "/tentang-kami", "/lowongan", "/kontak-kami"]
    const isHeaderForAll = visibleRoutesForAll.includes(location.pathname);

    const visibleRouteWhite = ["/layanan"];
    const isHeaderVisibleWhite = visibleRouteWhite.includes(location.pathname);

    return(
        <div className={headerWidth}>
            {isHeaderForAll && (
                <div className="px-6 xl:pr-12 xl:pl-20 3xl:pl-60">
                    <div className="flex flex-row justify-between items-center pt-4 xl:py-8">
                        <img
                            src={Logo}
                            alt="logo-dss"
                            className="w-35 3xl:w-45"
                            onClick={() => navigate("/")} />

                        <ul className="hidden xl:flex flex-row gap-4 text-md 3xl:mr-5">
                            <li
                                onClick={() => navigate("/")}
                                className={`${location.pathname === "/" ? "font-bold" : ""} cursor-pointer`}
                            >Beranda
                            </li>

                            <li
                                onClick={() => navigate("/tentang-kami")}
                                className={`${location.pathname === "/tentang-kami" ? "font-bold" : ""} cursor-pointer`}
                            >Tentang Kami
                            </li>

                            <li
                                onClick={() => navigate("/layanan")}
                                className={`${location.pathname === "/layanan" ? "font-bold" : ""} cursor-pointer`}
                            >Layanan
                            </li>

                            <li
                                onClick={() => navigate("/lowongan")}
                                className={`${location.pathname === "/lowongan" ? "font-bold" : ""} cursor-pointer`}
                            >Lowongan
                            </li>

                            <li
                                onClick={() => navigate("/kontak-kami")}
                                className={`${location.pathname === "/kontak-kami" ? "font-bold" : ""} cursor-pointer`}
                            >Kontak Kami
                            </li>
                        </ul>

                        <MdMenu className="size-8 xl:hidden" onClick={isActiveMobileMenu}/>

                        {isButtonVisible && (
                            <Button
                                buttonClassName="hidden xl:flex xl:mr-20 3xl:mr-60 flex-row justify-center items-center gap-4 bg-button py-1 pl-4 3xl:pl-6 pr-1 rounded-full w-fit self-end"
                                spanClassName="font-reguler text-black text-md 3xl:text-2xl"
                                buttonName="Konsultasi Yuk!"
                                circleClassName="bg-black rounded-full p-2 3xl:p-3"
                                arrowClassName="size-4 text-button"
                            />
                        )}
                    </div>
                </div>
            )}

            {/*HEADER FOR LAYANAN PAGE*/}
            {isHeaderVisibleWhite && (
                <div className="px-6 xl:pr-12 xl:pl-20 3xl:pl-60">
                    <div className="flex flex-row justify-between items-center pt-4 xl:py-8">
                        <img
                            src={LogoWhite}
                            alt="logowhite-dss"
                            className="w-35 3xl:w-45"
                            onClick={() => navigate("/")} />

                        <ul className="hidden xl:flex flex-row gap-4 text-md 3xl:mr-5 text-white">
                            <li
                                onClick={() => navigate("/")}
                                className={`${location.pathname === "/" ? "font-bold" : ""} cursor-pointer`}
                            >Beranda
                            </li>

                            <li
                                onClick={() => navigate("/tentang-kami")}
                                className={`${location.pathname === "/tentang-kami" ? "font-bold" : ""} cursor-pointer`}
                            >Tentang Kami
                            </li>

                            <li
                                onClick={() => navigate("/layanan")}
                                className={`${location.pathname === "/layanan" ? "font-bold" : ""} cursor-pointer`}
                            >Layanan
                            </li>

                            <li
                                onClick={() => navigate("/lowongan")}
                                className={`${location.pathname === "/lowongan" ? "font-bold" : ""} cursor-pointer`}
                            >Lowongan
                            </li>

                            <li
                                onClick={() => navigate("/kontak-kami")}
                                className={`${location.pathname === "/kontak-kami" ? "font-bold" : ""} cursor-pointer`}
                            >Kontak Kami
                            </li>
                        </ul>

                        <MdMenu className="size-8 xl:hidden text-white" onClick={isActiveMobileMenu}/>

                        {isButtonVisible && (
                            <Button
                                buttonClassName="hidden xl:flex flex-row justify-center items-center gap-4 bg-button py-1 pl-4 3xl:pl-6 pr-1 rounded-full w-fit self-end"
                                spanClassName="font-reguler text-black text-md 3xl:text-2xl"
                                buttonName="Konsultasi Yuk!"
                                circleClassName="bg-black rounded-full p-2 3xl:p-3"
                                arrowClassName="size-4 text-button"
                            />
                        )}
                    </div>
                </div>
            )}

            {showmobilemenu && (
                <div className="xl:hidden absolute z-20 top-0 bg-black flex flex-col gap-4 justify-between items-start px-6 py-10 w-full h-screen">
                    <div className="flex flex-row justify-between items-center gap-4 w-full">
                        <img src={LogoWhite} alt="logo-dsswhite" className="w-50" onClick={() => navigate("/")}/>
                        <IoMdClose className="size-12 self-center text-white" onClick={IsNotActiveMobileMenu}/>
                    </div>

                    <ul className="flex flex-col gap-6 text-white font-reguler text-5xl">
                        <li onClick={() => navigate("/")}>Beranda</li>
                        <li onClick={() => navigate("/tentang-kami")}>Tentang Kami</li>
                        <li onClick={() => navigate("/layanan")}>Layanan</li>
                        <li onClick={() => navigate("/lowongan")}>Lowongan</li>
                        <li onClick={() => navigate("/kontak-kami")}>Kontak Kami</li>
                    </ul>

                    <Button
                        buttonClassName="flex flex-row justify-center items-center gap-4 bg-button py-2 pl-6 pr-2 rounded-full"
                        spanClassName="font-semibold text-black text-2xl"
                        buttonName="Outsourcing"
                        circleClassName="bg-black rounded-full p-4"
                        arrowClassName="size-6 text-button"
                    />
                </div>
            )}
        </div>
    )
}

export default Header;