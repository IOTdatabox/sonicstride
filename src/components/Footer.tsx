import Image from "next/image"
import FooterLogo from '/public/images/FooterLogo.png'
import Instagram from '/public/images/instagram.png'
import Facebook from '/public/images/facebook.png'
import GooglePlus from '/public/images/Google-Plus.png'
import { fonts } from '@/utils/constants/Font'
import Link from "next/link"

const Footer = () => {
    const Links = [
        {
            text: 'Join us',
            link: '/#'
        },
        {
            text: 'Try demos',
            link: '/Demos'
        },
        {
            text: 'Plans',
            link: '/Plans'
        },
        {
            text: 'About us',
            link: '/AboutUs'
        },
        {
            text: 'Login',
            link: '/#'
        },
    ]
    return (
        <div className={`bg-[#141311] ${fonts.lato.className}`}>
            <div className="max-w-[1440px] mx-auto px-[120px] py-[85px] flex flex-col gap-[20px]">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <Image
                            src={FooterLogo}
                            alt="FooterLogo"
                        />
                    </Link>
                    <div className="flex flex-row gap-[50px]">
                        {
                            Links.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <p className="text-white font-normal text-[16px] leading-[26px]">
                                        {item.text}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="h-[2px] bg-white"></div>
                <div className="flex flex-row justify-between">
                    <p className="text-white font-normal text-[16px] leading-[26px]">
                        {'© 2024 Sonicstride. All rights reserved.'}
                    </p>
                    <div className="flex flex-row gap-[30px] items-center">
                        <Link href={'/#'}>
                            <Image
                                src={Instagram}
                                alt="Instagram"
                                width={22}
                                height={22}
                            />
                        </Link>
                        <Link href={'/#'}>
                            <Image
                                src={Facebook}
                                alt="FaceBook"
                                width={16}
                                height={18}
                            />
                        </Link>
                        <Link href={'mailto:jasmineow13@gmail.com'}>
                            <Image
                                src={GooglePlus}
                                alt="Google Plus"
                                width={24}
                                height={18}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer