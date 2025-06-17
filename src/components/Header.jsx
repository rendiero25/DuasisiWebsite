import Logo from "../assets/logodss.png";
import { MdMenu } from "react-icons/md";

const Header = () => {
    return(
        <div className="px-6">
            <div className="flex flex-row justify-between items-center gap-2 pt-4">
                <img src={Logo} alt="logo-dss" className="w-35"/>

                <ul className="hidden xl:flex flex-row gap-2">
                    <li>Beranda</li>
                    <li>Tentang Kami</li>
                    <li>Kontak</li>
                    <li>Layanan</li>
                    <li>Lowongan</li>
                    <li>Kontak Kami</li>
                </ul>

                <MdMenu className="size-8 xl:hidden"/>
            </div>
        </div>
    )
}

export default Header;