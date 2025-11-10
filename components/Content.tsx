'use client'

import { useState } from 'react';
import { Search } from 'lucide-react';
import CardModal from './CardModal';
import StarButton from "./StarButton";

export default function Content() {
    
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const openModal = () => setIsCardModalOpen(true);
    const closeModal = () => setIsCardModalOpen(false);

    return(
        <div className='flex flex-col items-center py-9 md:p-4 gap-12 max-w-[1440px] mx-auto'>
            
            <div className="text-center mx-auto max-w-[1024px] gap-4">
                <h1 className=" font-semibold text-[28px] md:text-5xl bg-gradient-to-r from-[#5D5D5D] via-[#1C1C1C] to-[#5D5D5D] bg-clip-text text-transparent leading-tight md:leading-normal">
                    Кадры в поиске стартапа
                </h1>
                <p className=" text-[#5F6368] text-base md:text-xl mt-3 leading-relaxed mx-auto max-w-[680px]">
                    Разместите информацию о себе в каталоге — дайте стартапам возможность найти вас и пригласить в команду! Перспективные проекты уже рядом.
                </p>
            </div>

            <div className='flex flex-col md:flex-row items-stretch gap-4 md:gap-6 w-full max-w-[1440px]'>
    <div className='flex flex-col md:flex-row items-stretch gap-4 md:gap-6 w-full md:w-auto'>
        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] h-[48px] bg-[#F8F9FB]'>
            <span className=' text-[#1C1C1C]/50 text-sm'>Категория</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] h-[48px] bg-[#F8F9FB]'>
            <span className=' text-[#1C1C1C]/50 text-sm'>Специальность</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
    </div>
    <div className='flex justify-end items-center w-full md:flex-1'>
        <div className='flex justify-between items-center p-3 px-4 gap-1 border border-[#ECEDEE] rounded-xl w-full md:w-[335px] h-[48px] bg-[#F8F9FB]'>
            <input type='text' placeholder='Поиск специалиста' className=' text-[#1C1C1C]/50 text-sm outline-none w-full'/>
            <Search className="text-[#5F6368] h-5 w-5"/>
        </div>
    </div>
</div>

            <div className='flex flex-col items-start gap-6 w-full'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 w-full'>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 w-full'>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 w-full'>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                    <div onClick={openModal} className='flex flex-col items-start p-4 gap-4 bg-[#F8F9FB] border border-[#ECEDEE] rounded-[16px] w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <img src="/Anton.svg" alt="image" className='rounded-full'/>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className=" font-medium ">Антон Кучеренко</p>
                                        <p className="text-sm text-[#5F6368]">Бухгалтер</p>
                                    </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className='relative w-full'>
                            <span className=' text-[#5F6368] overflow-hidden'>Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget duis ut...</span>
                            <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
                        </div>

                        <div className="w-full h-px bg-[#1C1C1C0D]"></div>

                            <div className='flex flex-wrap md:flex-nowrap w-full gap-2'>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>HTML</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>CSS</span>
                                <span className='flex justify-center items-center px-1.5 py-1 gap-0.5 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm '>NodeJS</span>
                            </div>
                    </div>

                </div>

            </div>

            <CardModal 
                isOpen={isCardModalOpen}
                onClose={closeModal}
            />

        </div>

    )
}