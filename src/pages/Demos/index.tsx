import Image from "next/image"
import SmallLogo from '/public/images/SmallLogo.png'
import { fonts } from "../../utils/constants/Font"
import Link from "next/link"
import Vector from '/public/images/Vector.png'
import BlackLogo from '/public/images/BlackLogo.png'

const Demos = () => {
    const DemosData = [
        {
            text: 'Inspiring journey',
            link: 'https://sonicstride-weblab.vercel.app/editor/preview/520e1dac-b053-4c2e-b5ed-1911d4df5226'
        },
        {
            text: 'Calming journey',
            link: 'https://sonicstride-weblab.vercel.app/editor/preview/ec2ea639-74a0-405c-8ea7-b4186d9cdda4'
        },
        {
            text: 'Motivation stroll',
            link: 'https://sonicstride-weblab.vercel.app/editor/preview/e6d2a6a9-7cce-43a8-af4d-3725490462a1'
        },
        {
            text: 'Relaxing journey',
            link: ''
        },
        {
            text: 'Morning Ritual',
            link: ''
        },
        {
            text: 'Morning Ritual',
            link: ''
        },
    ]

    return (
        <div className="bg-[url('/images/Rectangle5.png')] bg-cover bg-no-repeat">
            <div className="max-w-[1440px] mx-auto pt-[60px] px-[86px]">
                <div className="flex flex-row justify-between items-center">
                    <Link href={'/'}>
                        <Image
                            src={SmallLogo}
                            alt="SmallLogo"
                        />
                    </Link>
                    <Link href={"https://buymeacoffee.com/sonicstride.app"} target="_blank">
                        <div className="w-[160px] h-[40px] flex justify-center items-center bg-[#FAFAFA] border-[2px] border-[#D6602F] rounded-[100px] text-[#3A3A38] font-medium">
                            <p className={`${fonts.dm_sans.className}`}>Buy us a coffee</p>
                        </div>
                    </Link>
                </div>
                <div className="pt-[440px] pb-[200px]">
                    <div className="grid grid-cols-2 gap-y-[100px] justify-between">
                        {
                            DemosData.map((item, index) => (
                                <div key={index} className="w-[715px] h-[715px] py-[70px] flex flex-col justify-between items-center">
                                    <div className="w-[430px] h-[430px] bg-white rounded-full flex justify-center items-center">
                                        {
                                            item.link ? (
                                                <Link href={item.link} target="_blank">
                                                    <Image
                                                        src={Vector}
                                                        alt="Vector"
                                                    />
                                                </Link>
                                            ) : (
                                                <div className={`pt-[40px] flex flex-col gap-[33px] ${fonts.inter.className}`}>
                                                    <div className="flex flex-row gap-[24px]">
                                                        <Image
                                                            src={BlackLogo}
                                                            alt="BlackLogo"
                                                        />
                                                        <div>
                                                            <p className="text-black text-[40px] font-semibold leading-[42px] tracking-[0.4px]">sonicstride</p>
                                                            <p className="text-black text-[32px] font-thin leading-[42px] tracking-[0.32px]">premium artist</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-black text-center text-[20px] font-thin leading-[42px] tracking-[0.2px]">
                                                        {'coming soon..'}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className="text-white text-center font-normal text-[48px] leading-[45px]">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demos