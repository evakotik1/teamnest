import Image from "next/image"
import VK from '@/public/VK.svg'
import TG from '@/public/Telegram.svg'
import Logo from '@/public/Logo-black.svg'

export default function Footer() {
    return(
        <>
            <footer className="hidden md:flex flex-col justify-center items-start p-12 gap-6 w-full max-w-[1440px] px-4 md:px-0 mx-auto">
                <div className="flex justify-between items-center w-full">
                    
                    <div className="flex items-center gap-6">
                        <a href="mailto:TeamNest@bk.ru" className=" text-xl ">TeamNest@bk.ru</a>
                        <Image src={VK} alt="VK"/>
                        <Image src={TG} alt="Telegram"/>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <a href="/partner" className=" text-xl ">{'{Партнер}'}</a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-1">
                            <a href="/partner" className=" text-xl ">{'{Партнер}'}</a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-1">
                            <a href="/partner" className=" text-xl ">{'{Партнер}'}</a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-1">
                            <a href="/partner" className=" text-xl ">{'{Партнер}'}</a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-[#F4F4F4]"></div>

                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-7">
                        <Image src={Logo} alt="Logo"/>
                        <div className=" flex items-center gap-6">
                            <a href="/Frames" className="">Кадры</a>
                            <a href="/Startups" className="">Стартапы</a>
                            <a href="/Contacts" className="">Контакты</a>
                        </div>
                    </div>
                    <span className=" ">©2023</span>
                </div>
            </footer>

            <footer className="flex md:hidden flex-col items-start py-8 md:p-6 gap-6 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col items-center gap-6 w-full">
                        <Image src={Logo} alt="Logo"/>
                        <div className=" flex flex-col items-center gap-4">
                            <a href="/Frames" className=" text-sm">Кадры</a>
                            <a href="/Startups" className=" text-sm">Стартапы</a>
                            <a href="/Contacts" className=" text-sm">Контакты</a>
                        </div>
                    </div>

                    <div className="w-full h-px bg-[#F4F4F4]"></div>

                    <div className="flex flex-col items-center gap-3 w-full">
                        <div className="flex items-center gap-2">
                            <a href="/partner" className=" text-base ">{'{Партнер}'}</a>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="/partner" className=" text-base ">{'{Партнер}'}</a>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="/partner" className=" text-base ">{'{Партнер}'}</a>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="/partner" className=" text-base ">{'{Партнер}'}</a>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </div>
                    </div>

                    <div className="w-full h-px bg-[#F4F4F4]"></div>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                            <a href="mailto:TeamNest@bk.ru" className=" text-base ">TeamNest@bk.ru</a>
                            <div className="flex items-center gap-2">
                                <Image src={VK} alt="VK" className="w-5 h-5"/>
                                <Image src={TG} alt="Telegram" className="w-5 h-5"/>
                            </div>
                        </div>
                        <span className="  text-sm">©2023</span>
                    </div>
                </div>
            </footer>
        </>
    )
}