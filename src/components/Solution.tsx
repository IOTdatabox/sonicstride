import { fonts } from "@/utils/constants/Font"
import { useState, useEffect } from "react"
const Solution = () => {
    const [scale, setScale] = useState(1); // Initialize the scale

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Calculate scale based on scroll position
    //         const scrollY = window.scrollY;
    //         const newScale = 1 + scrollY / 1000; // Adjust divisor for sensitivity
    //         setScale(newScale);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Calculate scale based on scroll position
            const baseScale = 1 + scrollY / 1000;

            // Clamp the scale between 0.5 and 2 (or any desired range)
            const clampedScale = Math.max(0.5, Math.min(2, baseScale));

            setScale(clampedScale);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`bg-[url('/images/Rectangle2.png')] pb-[120px] bg-cover bg-center bg-no-repeat w-max-[1440px] mx-auto ${fonts.lato.className}`}>
            <div className="w-full pt-[120px] flex flex-col gap-[40px] justify-center items-center"
                style={{
                    background: "linear-gradient(180deg, #000 39.47%, rgba(255, 255, 255, 0.00) 90.24%)",
                }}
            >
                <p className="text-[#D9D9D9] text-center font-medium text-[48px] tracking-[0.96px]">
                    {`“We need a new solution in this distractive age.”`}
                </p>
                <p className="text-[#EDE9E7] text-center font-medium text-[24px] tracking-[0.48px]">
                    {`We’re constantly bombarded with media, leaving us disconnected from ourselves.`}
                </p>
                <div className="my-[60px] md:my-[120px] w-[360px] md:w-[430px] h-[360px] md:h-[430px] flex justify-center items-center"
                    style={{
                        width: `${150 * scale}px`, // Adjust base size
                        height: `${150 * scale}px`,
                        transition: 'transform 0.1s ease',


                        borderRadius: "431.025px",
                        background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.72) 100%)",
                        filter: "blur(1.4px)",
                    }}
                >

                </div>
            </div>
            <p className="text-[#EDE9E7] text-center font-black text-[36px] tracking-[0.72px]">
                {'Now , listen to your internal flow , anytime , anywhere.'}
            </p>
        </div>
    )
}

export default Solution