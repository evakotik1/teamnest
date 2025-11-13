'use client'

import { X } from "lucide-react"
import { useState } from 'react';
import Image from 'next/image';
import InviteModal from "./Card2InviteModal";
import StarButton from "./StarButton";

type CardType = {
    id: number;
    name: string;
    position: string;
    description: string;
    skills: string[];
    avatar: string;
};

interface CardModalProps {
    isOpen: boolean;
    onClose: () => void;
    cardData: CardType | null;
}

export default function CardModal({isOpen, onClose, cardData}: CardModalProps) {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const openInviteModal = () => setIsInviteModalOpen(true);
    const closeInviteModal = () => setIsInviteModalOpen(false);
    const handleCloseAll = () => {
        setIsInviteModalOpen(false);
        onClose();
    }

    if (!isOpen || !cardData) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div 
                    className="bg-white rounded-2xl max-w-[620px] w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="flex justify-between items-center p-4 bg-[#F6F7FA]">
                        <h2 className="font-medium">Просмотр Кадра</h2>
                        <button onClick={onClose}>
                            <X className="w-5 h-5 text-[#5F6368]" />
                        </button>
                    </div>

                    <div className="flex flex-col items-start p-4 gap-4">

                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <Image 
                                    src={cardData.avatar} 
                                    alt={cardData.name} 
                                    width={48} 
                                    height={48}
                                    className='rounded-full'
                                />
                                <div className="flex flex-col items-start">
                                    <p className="font-medium text-xl">{cardData.name}</p>
                                    <p className="text-base text-[#5F6368]">{cardData.position}</p>
                                </div>
                            </div>
                            <StarButton />
                        </div>

                        <div className="flex items-start gap-1">
                            <span className="text-[#5F6368]">Москва</span>
                            <span className="text-[#5F6368]">•</span>
                            <span className="text-[#5F6368]">19 лет</span>
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <p className="font-medium text-xl">Краткое резюме</p>
                            <p className="text-base text-[#5F6368]">{cardData.description}</p>
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <p className="font-medium text-xl">Образование</p>
                            <p className="text-base text-[#5F6368]">• 2005 - 2020 год</p>
                            <p className="text-base text-[#5F6368]">• МГУ им. М.В. Ломоносова</p>
                            <p className="text-base text-[#5F6368]">• Юридический факультет</p>
                        </div>

                        <div className='flex flex-wrap items-start gap-3'>
                            {cardData.skills.map((skill, index) => (
                                <span 
                                    key={index} 
                                    className='flex justify-center items-center px-1.5 py-1 w-[52px] h-[26px] bg-[#1C1C1C]/5 rounded-[16px] text-sm'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="w-full h-px bg-[#F4F4F4]"></div>

                        <div className="flex items-center gap-1">
                            <Image 
                                src="/Telegram-mini.svg" 
                                alt="Telegram" 
                                width={24} 
                                height={24}
                            />
                            <span className="">Telegram</span>
                            <a href="https://t.me/suwjuu" className="text-[#0B76FA]">@rNEZHu</a>
                        </div>

                        <div className="flex justify-end items-end gap-2.5 w-full">
                            <div className="inline-flex border border-[#1C1C1C] rounded-2xl"> 
                                <button 
                                    onClick={openInviteModal} 
                                    className="font-medium bg-[#1C1C1C] border-1 border-white/45 rounded-2xl text-white px-4 py-2.5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)]"
                                >
                                    Пригласить в проект
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InviteModal 
                isOpen={isInviteModalOpen}
                onClose={closeInviteModal}
                onBack={closeInviteModal}
                onInvite={handleCloseAll}
            />
        </>
    )
}


