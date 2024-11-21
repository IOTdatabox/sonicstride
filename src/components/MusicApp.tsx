import Image from 'next/image'
import Phone1 from '/public/images/Phone1.png'
import Phone2 from '/public/images/Phone2.png'
import Avatar1 from '/public/images/Avatar1.png'
import Avatar2 from '/public/images/Avatar2.png'
import { fonts } from '@/utils/constants/Font'


const MusicApp = () => {
    const appData = [
        {
            title: 'Dynamic Music player',
            description: 'Generates music in real-time based on your physiological and environmental data, adapting seamlessly to your mood, activity, and surroundings.'
        },
        {
            title: 'Deep Immersive Soundscape',
            description: 'Delivers a smooth, uninterrupted listening experience that harmonizes with your state of mind and movement, creating an immersive audio journey.'
        },
        {
            title: 'Sonic memory JOURNAL',
            description: 'Records your personalized music sessions, capturing your emotional and physical journey, Allowing you to revisit and reflect on your unique soundscapes.'
        }
    ]
    const TestimonialsData = [
        {
            image: Avatar1,
            text: 'Working out feels so different now. The music matches my pace perfectly,whether I’m running or taking it slow, and it keeps me pumped. The tracks are super fresh—feels like I’ve got my own DJ.',
            name: 'AMILIA CHEN',
            role: 'fitness enthusiast - singapore'
        },
        {
            image: Avatar2,
            text: 'Sonicstride transforms my commute into something I enjoy. The adaptive music keeps me calm in traffic or energized during busy mornings—it’s like it knows exactly what I need.',
            name: 'shi-jie pan',
            role: 'Freelance designer - taipei, taiwan'
        },
    ]
    return (
        <div className={`bg-[url('/images/Rectangle3.png')] bg-cover bg-center ${fonts.lato.className}`}>
            <div className={`max-w-[1440px] mx-auto`}>
                <div className="pt-[285px] pl-[280px] pr-[70px] flex flex-row justify-between items-center">
                    <div className='flex flex-col items-center'>
                        <Image
                            src={Phone1}
                            alt='Phone1'
                        />
                        <Image
                            className='mt-[-180px]'
                            src={Phone2}
                            alt='Phone2'
                        />
                    </div>
                    <div className='w-[575px] flex flex-col gap-[130px]'>
                        <p className='text-white font-bold text-[42px] leading-[52px] tracking-[-0.4px]'>
                            {'Introducing Sonicstride, an interactive music Apps.'}
                        </p>
                        {
                            appData.map((item, index) => (
                                <div key={index} className='flex flex-col gap-[10px]'>
                                    <p className='text-white font-bold text-[29px] leading-[26px] tracking-[2px] uppercase'>
                                        {item.title}
                                    </p>
                                    <p className='text-white font-normal text-[20px] leading-[26px] tracking-[4px]'>
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-[370px] pl-[200px] flex flex-row justify-between'>
                    <div className='w-[470px] flex flex-col gap-[50px] text-[#EBEAED] font-medium text-[20px] leading-[32px]'>
                        <p className='text-[42px] font-bold leading-[52px]'>{'Where Artistry Meets Adaptability'}</p>
                        <p className='text-[22px]'>{'we redefine the way you experience music. Our carefully curated creators and dynamic scenario selection ensure every note resonates with your mood, activity, and style. '}</p>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='text-[18px] pl-[25px]'>{'Elite Creator Collaboration'}</p>
                            <p>{'Collaborate with our wxclusive lineup of premium creators , from experimrntal sound to profession musicians.'}</p>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='text-[18px] pl-[25px]'>{'Adaptive Mode Selector'}</p>
                            <p>{`Music was recommended based on your scenario , whether you're seeking inspiration, focus, or relaxation, we've got you covered.`}</p>
                        </div>
                    </div>
                </div>
                <div className='pt-[200px] pb-[80px] flex flex-col gap-[100px] justify-center items-center'>
                    <p className='text-white font-bold text-[42px] leading-[52px] tracking-[-0.4px]'>
                        {'Testimonials'}
                    </p>
                    <div className='flex flex-row gap-[40px] justify-between items-center'>
                        {
                            TestimonialsData.map((item, index) => (
                                <div key={index} className='flex flex-row gap-[20px] items-start'>
                                    <Image
                                        src={item.image}
                                        alt='Avatar'
                                    />
                                    <div className='w-[450px] flex flex-col gap-[30px]'>
                                        <p className='text-white font-medium text-[22px] leading-[32px]'>
                                            {item.text}
                                        </p>
                                        <div className={`${fonts.dm_sans.className}`}>
                                            <p className='text-white font-bold text-[14px] leading-[26px] tracking-[2px] uppercase'>
                                                {item.name}
                                            </p>
                                            <p className='text-[#9C9191] font-bold text-[14px] leading-[26px] tracking-[2px] lowercase'>
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicApp