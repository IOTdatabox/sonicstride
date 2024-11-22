import Image from "next/image"
import logo from '/public/images/Logo.svg'
import { fonts } from "@/utils/constants/Font"
import Link from "next/link"

const Header = () => {
    return (
        <div className="bg-[#141311]">
            <div className="max-w-[1440px] mx-auto h-[100px] pl-[36px] pr-[50px] flex flex-row justify-between items-center">
                <Link href={'/'}>
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </Link>
                <div className={`hidden md:flex flex-row gap-[70px] text-white ${fonts.lato.className}`}>
                    <p>Home</p>
                    <Link href={`/AboutUs`}>
                        <p>About us</p>
                    </Link>
                    <Link href={'/Plans'}>
                        <p>Plans</p>
                    </Link>
                </div>
                <Link href={'https://buymeacoffee.com/sonicstride.app'} target="_blank">
                    <div className="w-[160px] h-[40px] flex justify-center items-center bg-[#FAFAFA] border-[2px] border-[#D6602F] rounded-[100px] text-[#3A3A38] font-medium">
                        <p className={`${fonts.dm_sans.className}`}>Buy us a coffee</p>
                    </div>
                </Link>
            </div>
            <div className={`flex md:hidden pb-[20px] flex-row gap-[70px] justify-center text-white ${fonts.lato.className}`}>
                <p>Home</p>
                <Link href={`/AboutUs`}>
                    <p>About us</p>
                </Link>
                <Link href={'/Plans'}>
                    <p>Plans</p>
                </Link>
            </div>
        </div>
    )
}

export default Header