import Image from 'next/image'
import Avatar3 from '/public/images/Avatar3.png'
import Avatar4 from '/public/images/Avatar4.png'
import Avatar5 from '/public/images/Avatar5.png'
import Avatar6 from '/public/images/Avatar6.png'
import Avatar7 from '/public/images/Avatar7.png'
import { fonts } from '@/utils/constants/Font'
import FooterLogo from '/public/images/FooterLogo.png'
import Link from 'next/link'
import Linkedin from '/public/images/linkedin.png'


const TeamMembers = () => {
    const Members = [
        {
            image: Avatar3,
            name: 'Jasmine Ow',
            role1: 'CEO',
            role2: 'Groove Guru',
            link: 'https://www.linkedin.com/in/%E8%83%A1%E9%89%AB%E6%95%8F-jasmine-ow-853077175/'
        },
        {
            image: Avatar4,
            name: 'Waison Lee',
            role1: 'Founding Engineer',
            role2: 'code Wizard'
        },
        {
            image: Avatar5,
            name: 'Arton Strogonof',
            role1: 'Technical Advisor',
            role2: 'Oscillator Overlord'
        },
        {
            image: Avatar6,
            name: 'Tin Kang Wang',
            role1: 'R&D Engineer',
            role2: 'Romantic Violinist'
        },
        {
            image: Avatar7,
            name: 'Pin Xin Wang',
            role1: 'Music Director',
            role2: 'The Ivory Maestro'
        },
    ]
    return (
        <div className="bg-[#141311] py-[120px]">
            <div className="max-w-[1440px] mx-auto px-[120px]">
                <div className="w-[708px] flex flex-col">
                    <p className="text-white font-bold text-[42px] leading-[52px] tracking-[-0.4px]">
                        {'Team Members'}
                    </p>
                    <p className="text-white font-medium text-[22px] leading-[32px]">
                        {'Our passion drives us to blend code, design, rhythm, and movement, creating experiences that enhance everyday wellbeing.'}
                    </p>
                </div>
                <div className={`w-full pt-[80px] grid grid-cols-3 gap-y-[100px] items-center justify-between ${fonts.dm_sans.className}`}>
                    {
                        Members.map((item, index) => (
                            <div key={index} className="flex flex-col gap-[20px]">
                                <Image
                                    src={item.image}
                                    alt="Avatar"
                                />
                                <p className="text-white font-medium text-[30px] leading-[32px]">
                                    {item.name}
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-white font-normal text-[24px] leading-[26px]">
                                        {item.role1} /
                                    </p>
                                    <p className="text-white font-normal text-[24px] leading-[26px]">
                                        {item.role2}
                                    </p>
                                    <br />
                                    {
                                        item.link && (
                                            <Link href={item.link} target="_blank">
                                                <Image
                                                    src={Linkedin}
                                                    alt='Linkedin'
                                                />
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={`pt-[70px] flex flex-col justify-end items-end text-white text-right font-medium text-[22px] leading-[36px] ${fonts.lato.className}`}>
                    <p>
                        {'Have a vision to share?'}
                    </p>
                    <p>
                        {`Let's turn ideas into innovative experiences`}
                    </p>
                    <div className='mt-[30px] w-[220px] h-[50px] flex justify-center items-center bg-[#FAFAFA] rounded-[50px]'>
                        <p className={`text-black text-center font-medium text-[16px] capitalize ${fonts.noto_sans_tc.className}`}>
                            {'Join Us Now!'}
                        </p>
                    </div>
                </div>
                <div className='pt-[150px] flex justify-center items-center'>
                    <Image
                        src={FooterLogo}
                        alt='FooterLogo'
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamMembers