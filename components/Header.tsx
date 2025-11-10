'use client'

import Image from "next/image";
import Link from "next/link";
import logo from '@/public/Logo.svg';
import { useState, useEffect, useRef} from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); 
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false); 
    };

    return ( 
        <header className="relative">

            <div className="flex justify-center pt-4 md:px-16">
                
                <div className="flex items-center justify-between gap-12 p-3 mx-auto bg-[#1C1C1C] min-h-[69px] rounded-2xl shadow-[0px_51px_31px_rgba(0,0,0,0.01),0px_23px_23px_rgba(0,0,0,0.02),0px_6px_13px_rgba(0,0,0,0.02)] w-full md:w-auto"> 
                    
                    <Link href='/' className="flex-shrink-0">
                        <Image
                            src={logo} 
                            alt="Logo" 
                            width={164} 
                            height={24} 
                            className="w-32 md:w-40"
                        />
                    </Link>

                    <div className="hidden md:flex  flex-row items-center gap-6">
                        <div className="text-white">
                            <a href="/Frames">Кадры</a>
                        </div>
                        <div className="text-white">
                            <a href="/Startups">Стартапы</a>
                        </div>
                        <div className="text-white">
                            <a href="/Contacts">Контакты</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 flex-shrink-0 justify-end relative" ref={dropdownRef}>
                        {!isLoggedIn ? (
                            <button 
                                onClick={handleLogin}
                                className="bg-white rounded-xl px-4 py-2.5 text-black font-medium hover:bg-gray-200 transition-colors">
                                Зарегистрироваться
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                                    <img src="/Anton.svg" alt="Avatar" className="h-8 w-8"/>
                                    <Menu size={24} />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-8 z-50">
                                        <div className="top-16 right-4 bg-white rounded-2xl shadow-lg border border-[#ECEDEE] p-4 w-[225px] z-50 gap-4 flex flex-col items-start shadow-[0px_51px_31px_rgba(0,0,0,0.01),0px_23px_23px_rgba(0,0,0,0.02),0px_6px_13px_rgba(0,0,0,0.02)]"
                                            onClick={(e) => e.stopPropagation()}>
                                            <div className="flex justify-center items-center gap-3">
                                                <img src="/Anton.svg" alt="Avatar" />
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className=" font-medium text-[#1C1C1C]">Антон Кучеренко</p>
                                                    <p className="text-sm text-[#5F6368]">email@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start gap-2">
                                                <div className="flex flex-col items-start">
                                                    <div className="flex items-center py-2 gap-2 rounded-lg">
                                                        <img src="/circle-user-round.svg" alt="user" />
                                                        <span className=" text-[#1C1C1C]">Мой профиль</span>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-2 rounded-lg">
                                                        <img src="/folder-open.svg" alt="projects" />
                                                        <span className=" text-[#1C1C1C]">Мои проекты</span>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-2 rounded-lg">
                                                        <img src="/notebook-tabs.svg" alt="responses" />
                                                        <span className=" text-[#1C1C1C]">Мои отклики</span>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-2 rounded-lg">
                                                        <img src="/star.svg" alt="favorites" />
                                                        <span className=" text-[#1C1C1C]">Избранное</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center py-2 gap-2 rounded-lg">
                                                    <img src="/log-out.svg" alt="logout" />
                                                    <span className=" text-[#FF3B30]">Выход</span>
                                                </div>               
                                            </div>                         
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <button 
                        className="md:hidden flex justify-center items-center w-8 h-8"
                        onClick={toggleMobileMenu}
                        aria-label="Открыть меню">
                        <Menu size={24} className="text-white"/>
                    </button>

                    {isMobileMenuOpen && (
                        <div ref={mobileMenuRef}
                            className="md:hidden fixed inset-0 bg-white z-40 pt-4 px-4">
                            <div className="flex items-center justify-between p-3 bg-[#1C1C1C] min-h-[69px] rounded-2xl shadow-[0px_51px_31px_rgba(0,0,0,0.01),0px_23px_23px_rgba(0,0,0,0.02),0px_6px_13px_rgba(0,0,0,0.02)] w-full">
                                <Link href='/' className="flex-shrink-0" onClick={closeMobileMenu}>
                                    <Image
                                        src={logo} 
                                        alt="Logo" 
                                        width={164} 
                                        height={24} 
                                        className="w-32"
                                    />
                                </Link>
                                <button 
                                    className="flex flex-col justify-center items-center w-8 h-8"
                                    onClick={closeMobileMenu}
                                    aria-label="Закрыть меню">
                                    <span className="w-6 h-0.5 bg-white mb-1.5 rotate-45 translate-y-2"></span>
                                    <span className="w-6 h-0.5 bg-white mb-1.5 opacity-0"></span>
                                    <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-2"></span>
                                </button>
                            </div>

                            <div className="flex flex-col h-[calc(100vh-120px)] py-9 px-4">
                                <nav className="flex flex-col gap-4">
                                    <a 
                                        href="/Frames" 
                                        className=" text-[#1C1C1C] text-xl"
                                        onClick={closeMobileMenu}>
                                        Кадры
                                    </a>
                                    <a 
                                        href="/Startups" 
                                        className=" text-[#1C1C1C] text-xl"
                                        onClick={closeMobileMenu}>
                                        Стартапы
                                    </a>
                                    <a 
                                        href="/Contacts" 
                                        className=" text-[#1C1C1C] text-xl"
                                        onClick={closeMobileMenu}>
                                        Контакты
                                    </a>
                                </nav>

                                {!isLoggedIn ? (
                                    <div className="mt-auto">
                                        <div className="inline-flex border border-[#1C1C1C] rounded-2xl w-full"> 
                                            <button onClick={handleLogin} className=" font-medium bg-[#1C1C1C] border border-white/45 rounded-2xl text-white px-4 py-2.5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)] w-full">
                                                Зарегистрироваться
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-auto">
                                        <div className="w-full gap-6 flex flex-col items-start">
                                            <div className="w-full h-px bg-[#F4F4F4] mt-4"></div>
                                            <div className="flex justify-center items-center gap-4">
                                                <img src="/Anton.svg" alt="Avatar" className="h-12 w-12 rounded-full"/>
                                                <div className="flex flex-col justify-center items-start">
                                                    <p className=" font-medium text-[#1C1C1C] text-xl">Антон Кучеренко</p>
                                                    <p className="text-lg text-[#5F6368]">email@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start w-full">
                                                <div className="flex items-center py-2 gap-4 rounded-lg w-full">
                                                    <img src="/circle-user-round.svg" alt="user" className="h-6 w-6"/>
                                                    <span className=" text-[#1C1C1C] text-xl">Мой профиль</span>
                                                </div>
                                                <div className="flex items-center py-2 gap-4 rounded-lg w-full">
                                                    <img src="/folder-open.svg" alt="projects" className="h-6 w-6"/>
                                                    <span className=" text-[#1C1C1C] text-xl">Мои проекты</span>
                                                </div>
                                                <div className="flex items-center py-2 gap-4 rounded-lg w-full">
                                                    <img src="/notebook-tabs.svg" alt="responses" className="h-6 w-6"/>
                                                    <span className=" text-[#1C1C1C] text-xl">Мои отклики</span>
                                                </div>
                                                <div className="flex items-center py-2 gap-4 rounded-lg w-full">
                                                    <img src="/star.svg" alt="favorites" className="h-6 w-6"/>
                                                    <span className=" text-[#1C1C1C] text-xl">Избранное</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center py-2 gap-4 rounded-lg w-full cursor-pointer" onClick={handleLogout}>
                                                <img src="/log-out.svg" alt="logout" className="h-6 w-6"/>
                                                <span className=" text-[#FF3B30] text-xl">Выход</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}