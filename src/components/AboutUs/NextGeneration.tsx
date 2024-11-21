import Image from "next/image"
import SmallLogo from '/public/images/SmallLogo.png'
import { fonts } from "@/utils/constants/Font"
import Link from "next/link"

const NextGeneration = () => {
    return (
        <div
            className={`bg-[url('/images/Rectangle4.png')] bg-cover bg-center bg-no-repeat w-full h-[821px] flex flex-col justify-center items-center ${fonts.lato.className}`}
        >
            <div
                className="absolute top-0 left-0 w-full"
                style={{
                    background: 'linear-gradient(180deg, #000 39.47%, rgba(255, 255, 255, 0.00) 90.24%)',
                    height: '821px'
                }}
            >
                <div className="max-w-[1440px] mx-auto pt-[91px] pl-[86px]">
                    <Link href={'/'}>
                        <Image
                            src={SmallLogo}
                            alt="SmallLogo"
                        />
                    </Link>
                    <p className="pt-[130px] text-white text-center font-medium text-[48px] leading-normal tracking-[0.96px]">
                        {'We are the next generation of innovators shaping the future of digital wellness through music.'}
                    </p>
                    <div className="flex justify-center">
                        <p className="w-[810px] pt-[50px] pb-[296px] text-[#EDE9E7] text-center font-normal text-[24px] leading-normal tracking-[0.48px]">
                            {'Our mission begins with a simple belief: music and technology together can create extraordinary experiences for better living.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextGeneration