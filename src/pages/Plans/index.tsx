import Image from "next/image"
import SmallLogo from '/public/images/SmallLogo.png'
import { fonts } from "../../utils/constants/Font"
import Link from "next/link"

const Plans = () => {
    return (
        <div
            className={`bg-[url('/images/Rectangle4.png')] bg-cover bg-center bg-no-repeat w-full h-screen flex flex-col justify-center items-center ${fonts.lato.className}`}
        >
            <div
                className="absolute top-0 left-0 w-full h-screen"
                style={{
                    background: 'linear-gradient(180deg, #000 39.47%, rgba(255, 255, 255, 0.00) 90.24%)',
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
                    <div className="flex flex-col  items-center">
                        <p className="w-[810px] pt-[50px] text-[#EDE9E7] text-center font-normal text-[24px] leading-normal tracking-[0.48px]">
                            {`We're blending music and technology to enhance the overall wellness.`}
                        </p>
                        <br />
                        <p className="w-[810px] text-[#EDE9E7] text-center font-normal text-[24px] leading-normal tracking-[0.48px]">
                            {`For now, our product is our passion project, and we’re not charging anything. 
If you believe in our vision and want to support our journey, 
we'd be incredibly grateful for your support .`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans