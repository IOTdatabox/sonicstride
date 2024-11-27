import Image from 'next/image'
import BigLogo from '/public/images/BigLogo.svg'
import { fonts } from '@/utils/constants/Font'
import Link from 'next/link'

const Experience = () => {
    return (
        
        <div className={`bg-[url('/images/experience.gif')] px-[5px] md:px-0 bg-cover bg-center bg-no-repeat w-full py-[80px] flex flex-col gap-[40px] justify-center items-center text-white`}>
            <Image
                src={BigLogo}
                alt='BigLogo'
            />
            <p className={`text-center text-white font-bold uppercase text-[16px] leading-[26px] tracking-[2px] shadow-[3px_4px_5.8px_rgba(255,255,255,0.91)] ${fonts.noto_sans_tc.className}`}>
                {'Sync your rhythm , find your flow'}
            </p>
            <p className={`w-auto text-center text-white font-bold text-[58px] leading-[70px] tracking-[-1px] ${fonts.lato.className}`}>
                {'Experience music that adapts to your physical and mental rhythms'}
            </p>
            <div className='mt-[80px] w-[245px] h-[50px] flex justify-center items-center bg-[#FAFAFA] rounded-[50px]'>
                <Link href={'/Demos'}>
                    <p className={`text-center text-black font-medium text-[16px] capitalize ${fonts.noto_sans_tc.className}`}>
                        {'Try Demos!'}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Experience