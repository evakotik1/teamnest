'use client'

import { X } from "lucide-react"
import { useState } from 'react';
import StartupInviteModal from "./Startup2InviteModal";

interface StartupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function StartupModal({isOpen, onClose}: StartupModalProps) {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    
    const openInviteModal = () => setIsInviteModalOpen(true);
    const closeInviteModal = () => setIsInviteModalOpen(false);
    const handleCloseAll = () => {
        setIsInviteModalOpen(false);
        onClose();
    };

    if (!isOpen) return null

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-[620px] w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="flex justify-between items-center p-4 bg-[#F6F7FA]">
                        <h2 className=" font-medium text-[#1C1C1C]">Просмотр стартапа</h2>
                        <button onClick={onClose}>
                            <X className="w-5 h-5 text-[#5F6368]" />
                        </button>
                    </div>
                    
                    <div className="relative">
                        <img 
                            src="IMGNotion.svg" 
                            alt="project" 
                            className='w-full object-fit: fill'
                        />
                    </div>

                    <div className="flex flex-col p-4 gap-4">
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-2'>
                                <div className="flex flex-col justify-center items-start">
                                    <p className=" font-medium text-xl">Название проекта</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-meduim ">Описание</h2>
                            <p className="text-[#5F6368]">Lorem ipsum dolor sit amet consectetur. Est pretium urna ut dui quis at turpis id. Tincidunt cursus sodales elit egestas vestibulum eget.</p>
                        </div>

                        <div className="flex flex-col items-start gap-1 p-0">
                            <div className="flex flex-row items-start gap-1">
                                <span className="text-[#5F6368]">Стадия проекта: </span>
                                <span className="text-[#000000]">Идея</span>
                            </div>
                            <div className="flex flex-row items-start gap-1">
                                <span className="text-[#5F6368]">Проект : </span>
                                <span className="underline text-[#0B76FA]">Ссылка на проект</span>
                            </div>
                            <div className="flex flex-row items-start gap-1">
                                <span className="text-[#5F6368]">Дата начала : </span>
                                <span className="text-[#000000]">07.08.2028</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-end gap-2.5 w-full pr-4 pb-4">
                        <div className="inline-flex border border-[#1C1C1C] rounded-2xl"> 
                            <button onClick={openInviteModal} className=" font-medium bg-[#1C1C1C] border-1 border-white/45 rounded-2xl text-white px-4 py-2.5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)]">
                                Смотреть вакансии
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            <StartupInviteModal 
                isOpen={isInviteModalOpen}
                onClose={closeInviteModal}
                onBack={closeInviteModal}
                onInvite={handleCloseAll}
            />
        </>
    )
}