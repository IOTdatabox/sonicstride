import { fonts } from "@/utils/constants/Font"

const Solution = () => {
    return (
        <div className={`bg-[url('/images/Rectangle2.png')] pb-[120px] bg-cover bg-center bg-no-repeat w-max-[1440px] mx-auto ${fonts.lato.className}`}>
            <div className="w-full pt-[120px] flex flex-col gap-[40px] items-center"
                style={{
                    background: "linear-gradient(180deg, #000 39.47%, rgba(255, 255, 255, 0.00) 90.24%)",
                }}
            >
                <p className="text-[#D9D9D9] font-medium text-[48px] tracking-[0.96px]">
                    {`“We need a new solution in this distractive age.”`}
                </p>
                <p className="text-[#EDE9E7] text-center font-medium text-[24px] tracking-[0.48px]">
                    {`We’re constantly bombarded with media, leaving us disconnected from ourselves.`}
                </p>
                <div className="my-[120px] w-[430px] h-[430px] flex justify-center items-center"
                    style={{
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