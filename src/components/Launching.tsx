import Image from 'next/image'
import Bell from '/public/images/Bell.png'
import { fonts } from '@/utils/constants/Font'
import { useState } from 'react';
import { toast } from 'react-toastify';
const Launching = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter an email address.');
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                toast.error('Subscription failed. Please try again.');
                throw new Error('Failed to subscribe');
            }
            toast.success('Subscribed successfully!');
            setEmail('');
        } catch (error: unknown) {
            console.error('Error during subscription:', error);
            toast.error('Error occurred. Please try again.');
        }
    };


    return (
        <div className={`bg-[#141311] ${fonts.lato.className}`}>
            <div className="w-full md:w-[386px] mx-auto py-[60px] flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="text-white text-center font-bold text-[40px] leading-[52px]">
                        {'Get notified when we’re launching !'}
                    </p>
                    <p className="text-white text-center font-light text-[16px] leading-[18px] tracking-[1px] px-4">
                        {'You’ll get access to the early access, news, and updates of Sonicstride.'}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='justify-items-center px-4'>
                    <input
                        type="email"
                        className="block py-2.5 px-4 mb-8 w-full h-[50px] text-sm text-white bg-[rgba(255,_255,_255,_0.10)] rounded-[72px] border border-white focus:ring-primary-yellow focus:border-primary-yellow focus:outline-none"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type='submit' className="w-[160px] py-[14px] rounded-[50px] bg-white flex flex-row gap-[10px] justify-center items-center cursor-pointer ">
                        <p className="text-black text-center font-bold text-[16px] leading-normal capitalize">
                            {'Notify Me!'}
                        </p>
                        <Image
                            src={Bell}
                            alt="Bell"
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Launching