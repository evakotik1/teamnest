'use client'

import { useState } from 'react';
import { Search } from 'lucide-react';
import StarButton from "./StarButton";
import StartupModal from "./StartupModal";

export default function StartupBlock() {
    const [isStartupModalOpen, setIsStartupModalOpen] = useState(false);
    const openModal = () => { setIsStartupModalOpen(true); };
    const closeModal = () => { setIsStartupModalOpen(false); };

    return(
        <div className='flex flex-col items-center py-8 md:px-4 gap-8 md:gap-12 max-w-[1440px] mx-auto'>
            
            <div className="block md:hidden text-center mx-auto">
                    <h1 className=" font-semibold text-[28px] max-w-[398px] px-0 items-center bg-gradient-to-r from-[#5D5D5D] via-[#1C1C1C] to-[#5D5D5D] bg-clip-text text-transparent leading-tight ">
                        Платформа для тех, кто хочет создавать, а не ждать
                    </h1>
                    <p className=" text-[#5F6368] text-base mt-6 leading-relaxed mx-auto max-w-[680px] text-center px-4">
                        Мы помогаем находить команду, запускать стартапы и делать первые шаги к настоящим изменениям.
                    </p>
            </div>

            <div className="hidden md:block text-center mx-auto max-w-[1024px]">
                    <h1 className="font-semibold text-5xl items-center bg-gradient-to-r from-[#5D5D5D] via-[#1C1C1C] to-[#5D5D5D] bg-clip-text text-transparent">
                        Стартапы в поисках команды
                    </h1>
                    <p className=" text-[#5F6368] text-xl mt-6 leading-relaxed mx-auto max-w-[680px] text-center leading-[100%]">
                        Если вы ищете человека в команду, разместите информацию о вашем проекте в каталоге, чтобы её смогли найти соискатели
                    </p>
            </div>

            <div className='flex flex-col md:flex-row md:items-start gap-4 md:gap-6 w-full max-w-[1440px]'>
                    <div className='flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full max-w-[1440px]'>
                        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] bg-[#F8F9FB]'>
                            <span className=' text-[#1C1C1C]/50 text-sm'>Категория</span>
                            <svg xmlns="http:  www.w3.org/200/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down text-[#1C1C1C]"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] bg-[#F8F9FB]'>
                            <span className=' text-[#1C1C1C]/50 text-sm'>Специальность</span>
                            <svg xmlns="http:  www.w3.org/200/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down text-[#1C1C1C]"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                    <div className='flex justify-end items-center w-full md:w-[644px]'>
                        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] bg-[#F8F9FB]'>
                            <input type='text' placeholder='Поиск специалиста' className=' text-[#1C1C1C]/50 text-sm outline-none w-full'/>
                            <Search className="text-[#5F6368] h-5 w-5"/>
                        </div>
                    </div>
            </div>

            <div className='flex flex-col items-start gap-4 md:gap-6 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full'>
                    
                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>
                    </div>

                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>
                    </div>

                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>
                    </div>

                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-4  gap-4 md:gap-6 w-full'>
                    
                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>
                    </div>

                    <div onClick={openModal} className='block md:hidden relative flex flex-col items-start gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        
                    <div className='relative w-full'>
                        <img src="MobilkaNotion.svg" alt="img" className='w-full rounded-lg'/>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-3 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px]'>
                            <span className='text-sm text-white '>IT направление</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 w-full'>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl '>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm '>Идея</span>
                        </div>

                    </div>

                    <div onClick={openModal} className='hidden md:flex relative flex flex-col items-start pb-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full cursor-pointer'>
                        <div className='absolute top-3 right-3 flex flex-row justify-center items-center py-1 px-1.5 gap-0.5 bg-[#1C1C1C]/25 backdrop-blur-[5px] rounded-[16px] z-10'>
                            <span className='text-sm text-white '>IT-направление</span>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <img src="IMG.svg" alt="img" className='w-full'/>
                            <div className="flex justify-between items-center gap-4 pt-2 px-4 w-full">
                                <div className='flex items-center gap-2'>
                                    <h1 className=' font-medium text-xl text-[#1C1C1C]'>Название проекта</h1>
                                </div>
                                <StarButton />
                            </div>
                            <div className='relative px-4 w-full'>
                                <span className=' text-[#5F6368] overflow-hidden block'>
                                    Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget...
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#1C1C1C0D] px-4"></div>
                        <div className='flex items-start gap-2 px-4'>
                            <div className='flex flex-row justify-center items-center py-1 px-1.5 gap-1 h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm text-[#1C1C1C]'>
                                <img src="calendar-days.svg" alt="calendar" />
                                <span className='flex justify-center items-center py-1 gap-0.5'>07.08.2025</span>
                            </div>
                            <span className='flex justify-center items-center px-1.5 py-1 h-[26px] gap-0.5 bg-[#1C1C1C]/5 rounded-[16px] text-sm text-[#1C1C1C]'>Идея</span>
                        </div>
                    </div>

                </div>
            </div>

            <StartupModal isOpen={isStartupModalOpen} onClose={closeModal} />
        </div>
    )
}