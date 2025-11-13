import Logo from '@/public/LogoFounder.svg'
import Oleg from '@/public/Oleg.svg'
import Image from "next/image";
import Photo1 from '@/public/LobovAlexandr1.svg'
import Photo2 from '@/public/LobovAlexandr2.svg'
import Photo3 from '@/public/LobovAlexandr3.svg'

export default function OlegFounder() {
    return (
        <div className='mt-5 md:mt-10'>
            <div className="relative">
                <div className="absolute flex flex-col justify-center items-center w-full max-w-[1312px] left-1/2 transform -translate-x-1/2">
                    <p style={{ fontFamily: 'var(--font-unbounded)' }} className="text-[78.1px] md:text-[258px] font-medium text-center w-full">Founder</p>
                    <div className="flex justify-between items-center w-full max-w-[1312px] font-semibold text-xl md:text-5xl px-4">
                        <p>Сёмин Олег</p>
                        <p>CEO</p>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='relative z-30 w-full max-w-[808px] h-[400px] md:h-[950px] mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] mx-auto'>
                        <div>
                            <Image src={Oleg} alt='Oleg' className="w-full h-full object-cover "/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mt-15">
                    <h1 className="font-medium text-2xl md:text-5xl">Создай свое будущее вместе с </h1>
                    <Image src={Logo} alt="Logo" className="w-48 md:w-64"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-40 mt-24 mb-10">
                <div className="flex flex-col items-center p-0 gap-4">
                    <div className="w-[256px] h-[256px] md:w-[320px] md:h-[320px]">
                        <Image src={Photo1} alt="Photo"/>
                    </div>
                    <div className="flex flex-col items-center gap-0">
                        <h1 className="text-[32px]">Лобов Александр</h1>
                        <p className="text-xl text-[#5F6368]">Технический директор</p>
                    </div>
                    <a href="mailto:nd@get-investor.ru">nd@get-investor.ru</a>
                </div>

                <div className="flex flex-col items-center p-0 gap-4">
                    <div className="w-[256px] h-[256px] md:w-[320px] md:h-[320px]">
                        <Image src={Photo2} alt="Photo"/>
                    </div>
                    <div className="flex flex-col items-center gap-0">
                        <h1 className="text-[32px]">Лобов Александр</h1>
                        <p className="text-xl text-[#5F6368]">Технический директор</p>
                    </div>
                    <a href="mailto:nd@get-investor.ru">nd@get-investor.ru</a>
                </div>

                <div className="flex flex-col items-center p-0 gap-4">
                    <div className="w-[256px] h-[256px] md:w-[320px] md:h-[320px]">
                        <Image src={Photo3} alt="Photo"/>
                    </div>
                    <div className="flex flex-col items-center gap-0">
                        <h1 className="text-[32px]">Лобов Александр</h1>
                        <p className="text-xl text-[#5F6368]">Технический директор</p>
                    </div>
                    <a href="mailto:nd@get-investor.ru">nd@get-investor.ru</a>
                </div>
            </div>
        </div>
    )
}