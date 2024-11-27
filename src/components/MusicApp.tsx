import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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

    const { scrollY } = useScroll()
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

    const [containerTop, setContainerTop] = useState(0)

    useEffect(() => {
        if (containerRef) {
            const rect = containerRef.getBoundingClientRect()
            setContainerTop(rect.top + window.scrollY)
        }
    }, [containerRef])

    const opacity1 = useTransform(
        scrollY,
        [containerTop - 300, containerTop + 1000],
        [1, 0]
    )

    const opacity2 = useTransform(
        scrollY,
        [containerTop - 300, containerTop + 300],
        [0, 1]
    )

    return (
        <div className={`bg-[url('/images/musicapp.gif')] bg-cover bg-center ${fonts.lato.className}`}>
            <div className={`max-w-[1440px] mx-auto px-[5px] md:px-0`}>
                <div className="pt-0 md:pt-[285px] pl-0 md:pl-[80px] xl:pl-[280px] pr-0 md:pr-[70px] flex flex-col md:flex-row justify-between items-center">
                    <div className="relative w-full hidden md:flex">
                        <div
                            ref={setContainerRef}
                            id="image-container"
                            className="relative w-full h-[1180px] flex items-center justify-center"
                        >
                            <motion.div
                                style={{ opacity: opacity1 }}
                                className="absolute top-0 left-0"
                            >
                                <Image
                                    className="w-auto h-auto px-[25px]"
                                    src={Phone1}
                                    alt="Phone1"
                                />
                            </motion.div>
                            <motion.div
                                style={{ opacity: opacity2 }}
                                className="absolute top-0 left-0 mt-[500px]"
                            >
                                <Image
                                    className="w-auto h-auto"
                                    src={Phone2}
                                    alt="Phone2"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-auto md:w-[850px] flex flex-col gap-[80px] md:gap-[130px] text-center md:text-left'>
                        <p className='text-white font-bold text-[42px] leading-[52px] tracking-[-0.4px]'>
                            {'Introducing Sonicstride, an interactive music Apps.'}
                        </p>
                        {
                            appData.map((item, index) => (
                                <div key={index} className='flex flex-col gap-[10px] text-left pl-[10px]'>
                                    <p className='text-white font-bold text-[29px] leading-[26px] tracking-[2px] uppercase'>
                                        {item.title}
                                    </p>
                                    <p className='text-white font-normal text-[20px] leading-[26px] tracking-[4px] mt-12'>
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-[150px] md:pt-[370px] pl-0 md:pl-[200px] flex flex-row justify-between text-center md:text-left'>
                    <div className='w-[470px] flex flex-col gap-[50px] text-[#EBEAED] font-medium text-[20px] leading-[32px]'>
                        <p className='text-[42px] font-bold leading-[52px]'>{'Where Artistry Meets Adaptability'}</p>
                        <p className='text-[22px]'>{'we redefine the way you experience music. Our carefully curated creators and dynamic scenario selection ensure every note resonates with your mood, activity, and style. '}</p>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='text-[22px] font-bold pl-[25px]'>{'Elite Creator Collaboration'}</p>
                            <p>{'Collaborate with our wxclusive lineup of premium creators , from experimrntal sound to profession musicians.'}</p>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='text-[sspx] font-bold pl-[25px]'>{'Adaptive Mode Selector'}</p>
                            <p>{`Music was recommended based on your scenario , whether you're seeking inspiration, focus, or relaxation, we've got you covered.`}</p>
                        </div>
                    </div>
                </div>
                <div className='pt-[150px] md:pt-[370px] pb-[100px] pl-0 md:px-[50px] lg:px-[100px] flex flex-col gap-[60px] justify-between text-center md:text-left'>
                    <p className='text-white font-bold text-[42px] leading-[52px] text-center tracking-[-0.4px]'>
                        {'Testimonials'}
                    </p>
                    <div className='flex flex-col md:flex-row gap-[40px] justify-between'>
                        {
                            TestimonialsData.map((item, index) => (
                                <div key={index} className='flex flex-row gap-[20px] items-start'>
                                    <Image
                                        src={item.image}
                                        alt='Avatar'
                                    />
                                    <div className='w-auto flex flex-col gap-[30px] text-left'>
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