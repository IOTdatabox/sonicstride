import React from "react";

const Schedule = () => {
  return (
    <div
      className="w-full bg-[url('/img/case/schedule-form.png')] bg-cover bg-no-repeat max-lg:bg-center"
      id="freeConsultation"
    >
      <div className="container max-w-[1440px] px-5 mx-auto py-[100px] lg:px-10 xl:px-[63px]">
        <div>
          <h3 className="text-center text-white text-[36px] leading-[46px]">
            CONTACT US
          </h3>
        </div>
        <div className="mt-[25px] flex justify-center">
          <div className="bg-[#000915b3] p-[20px] sm:p-[50px] rounded-[24px] w-full sm:w-[631px] h-auto sm:h-[543px] ">
            <form>
              <div className="flex flex-col mb-[15px]">
                <label
                  htmlFor="Full Name"
                  className="text-[18px] leading-[28px] text-white lato-thin font-bold mb-[8px]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="outline-none text-coolGrey border border-coolGrey rounded-[150px] bg-transparent py-[14px] px-[20px]"
                  placeholder="Enter your full name here"
                  required
                />
              </div>
              <div className="flex flex-col mb-[15px]">
                <label
                  htmlFor="Email"
                  className="text-[18px] leading-[28px] text-white lato-thin font-bold mb-[8px]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="outline-none text-coolGrey border border-coolGrey rounded-[150px] bg-transparent py-[14px] px-[20px]"
                  placeholder="Enter your email address here"
                  required
                />
              </div>
              <div className="flex flex-col mb-[15px]">
                <label
                  htmlFor="message"
                  className="text-[18px] leading-[28px] text-white lato-thin font-bold mb-[8px]"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  color={5}
                  rows={4}
                  className="outline-none text-coolGrey border border-coolGrey rounded-[16px] bg-transparent py-[14px] px-[20px]"
                  placeholder="Enter your message.."
                />
              </div>

              <button
                type="submit"
                className="bg-primaryPink hover:bg-secondaryPink transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide w-full"
                aria-label="submit button"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
