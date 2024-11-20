import Image from 'next/image';
import Link from 'next/link';
import { appleStoreUrl, googlePlayUrl } from '../utils/CompanyInfo';

export default function GoogleApple() {
    return (
        <div className="flex flex-row gap-4 items-start justify-start relative">
            <Link href={googlePlayUrl} target="_blank" className="bg-white rounded-2xl pt-2 xl:pr-8 sm:pr-4 pr-2 pb-2 sm:pl-4 pl-2 flex flex-row items-center justify-start relative">
                <div className="relative">
                    <Image
                        src="/img/logos-google-play-icon.svg"
                        width={48}
                        height={48}
                        alt="google_play_icon"
                    />
                </div>
                <div className="flex flex-col items-center justify-center relative">
                    <div className="text-secondary text-left xl:text-sm text-[12px] xl:leading-4 leading-3 font-medium relative">
                        Get it on
                    </div>
                    <div className="text-secondary text-left xl:text-xl text-base xl:leading-6 leading-5 font-medium relative">
                        Google Play
                    </div>
                </div>
            </Link>
            <Link href={appleStoreUrl} target="_blank" className="bg-secondary rounded-2xl border-solid border-white border pt-2 xl:pr-8 sm:pr-4 pr-2 pb-2 sm:pl-4 pl-2 flex flex-row items-center justify-start relative">
                <div className="relative sm:ml-0 ml-[-5px]">
                    <Image
                        src="/img/logos-apple-store-icon.svg"
                        width={48}
                        height={48}
                        alt="google_play_icon"
                    />
                </div>
                <div className="flex flex-col items-center justify-center align-item:center relative">
                    <div className="text-white text-left xl:text-sm text-[12px] xl:leading-4 leading-3 font-medium relative">
                        Download on the
                    </div>
                    <div className="text-white text-secondary text-left xl:text-xl text-base xl:leading-6 leading-5 font-medium relative">
                        App Store
                    </div>
                </div>
            </Link>
        </div>
    );
}
