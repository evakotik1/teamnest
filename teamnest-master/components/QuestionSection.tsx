'use client';

import Image from 'next/image';
import { useState } from 'react';
import FeedbackModal from './FeedbackModal';
import Sobaka from '@/public/sobaka.svg'
import Cobaka from '@/public/Cobaka.svg'

export default function QuestionSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="md:hidden flex flex-col items-center px-4 py-8 w-full max-w-[1440px] mx-auto">
                <div className="p-4 w-full max-w-[400px] h-[400px] bg-[#F8F9FB] rounded-2xl border border-[#ECEDEE] relative overflow-hidden flex flex-col justify-between">
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image 
                            src={Cobaka} 
                            alt="sobaka" 
                            className="w-[368px] h-[368px] object-contain"
                        />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-[28px] font-medium font-sf-pro">
                            Остались вопросы?
                        </h2>
                        <p className="text-[#5F6368] max-w-[350px] font-sf-pro mt-4">
                            Хотите стать нашим автором или задать любой другой вопрос?
                            <br/>
                            Напишите нам!
                        </p>
                    </div>

                    <div className="relative z-10 w-full max-w-[400px] inline-flex border border-[#1C1C1C] rounded-xl">
                        <button
                            onClick={openModal}
                            className="font-medium bg-[#1C1C1C] border border-white/45 rounded-xl text-white px-4 py-3 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)] w-full">
                            Задать вопрос
                        </button>
                    </div>

                    <FeedbackModal 
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center py-8 md:py-16 w-full max-w-[1440px] mx-auto">
                <div className="p-4 md:p-8 h-80 md:w-full bg-[#F8F9FB] rounded-2xl border border-[#ECEDEE] relative overflow-hidden flex flex-col justify-between">
                    
                    <div className="absolute md:right-4 md:top-4 md:bottom-0 flex justify-center">
                        <Image src={Sobaka} alt="sobaka" className="w-full mt-4 md:mt-0"/>
                    </div>

                    <div className="relative z-10">
                        <h2 className="md:text-[56px] text-[28px] font-medium font-sf-pro">
                            Остались вопросы?
                        </h2>
                        <p className="text-[#5F6368] md:max-w-lg max-w-[350px] font-sf-pro mt-4">
                            Хотите стать нашим автором или задать любой другой вопрос?
                            <br/>
                            Напишите нам!
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:max-w-[176px] md:inline-flex md:border md:border-[#1C1C1C] md:rounded-xl">
                        <button
                            onClick={openModal}
                            className="font-medium bg-[#1C1C1C] border border-white/45 rounded-xl text-white px-4 py-3 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)] w-full md:max-w-[176px]">
                            Задать вопрос
                        </button>
                    </div>

                    <FeedbackModal 
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                </div>
            </div>
        </>
    )
}