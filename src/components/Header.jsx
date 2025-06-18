import {useState} from "react";

import Button from "./Button.jsx";

import Logo from "../assets/logodss.png";
import LogoWhite from "../assets/logodsswhite.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = ({ headerWidth }) => {

    const [showmobilemenu, setShowMobileMenu] = useState(false);
    const isActiveMobileMenu = () => {setShowMobileMenu(true)};
    const IsNotActiveMobileMenu = () => {setShowMobileMenu(false)};

    return(
        <div className={headerWidth}>
            <div className="px-6 xl:pr-12 xl:pl-20">
                <div className="flex flex-row justify-between items-center pt-4">
                    <img src={Logo} alt="logo-dss" className="w-35 " />

                    <ul className="hidden xl:flex flex-row gap-4">
                        <li>Beranda</li>
                        <li>Tentang Kami</li>
                        <li>Layanan</li>
                        <li>Lowongan</li>
                        <li>Kontak Kami</li>
                    </ul>

                    <MdMenu className="size-8 xl:hidden" onClick={isActiveMobileMenu}/>
                </div>
            </div>

            {showmobilemenu && (
                <div className="xl:hidden absolute z-20 top-0 bg-black flex flex-col gap-4 justify-between items-start px-6 py-10 w-full h-screen">
                    <div className="flex flex-row justify-between items-center gap-4 w-full">
                        <img src={LogoWhite} alt="logo-dsswhite" className="w-50" />
                        <IoMdClose className="size-12 self-center text-white" onClick={IsNotActiveMobileMenu}/>
                    </div>


                    <ul className="flex flex-col gap-6 text-white font-reguler text-5xl">
                        <li>Beranda</li>
                        <li>Tentang Kami</li>
                        <li>Kontak</li>
                        <li>Layanan</li>
                        <li>Lowongan</li>
                        <li>Kontak Kami</li>
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