'use client'

import { X } from "lucide-react"

interface InviteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onBack: () => void;
    onInvite: () => void;
}

export default function InviteModal({ isOpen, onClose, onBack, onInvite}: InviteModalProps) {
    if (!isOpen) return null

    return (
        <>

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                <div className="bg-white rounded-2xl max-w-[620px] w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="flex justify-between items-center p-4 bg-[#F6F7FA]">
                        <h2 className=" font-medium">Просмотр Кадра</h2>
                        <button onClick={onClose}>
                            <X className = "w-5 h-5 text-[#5F6368]" />
                        </button>
                    </div>

                    <div className="flex flex-col items-start p-10 md:p-4 gap-4">
                        
                            <div className="flex flex-col sm:flex-row gap-4 w-full">

                                <div className="flex flex-col justify-center items-start bg-[#F8F9FB] border border-[#1C1C1C]/5 rounded-2xl overflow-hidden">
                                    <img src="/imageNotion.svg" alt="img" className="rounded-t-2xl w-full"/>
                                    <div className="flex flex-col items-start p-4 gap-1.5">
                                        <div className="flex flex-col justify-center items-start"> 
                                            <p className=" font-medium text-xl">Название проекта</p>
                                            <p className="text-base text-[#5F6368]">IT направление</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-start bg-[#F8F9FB] border border-[#1C1C1C]/5 rounded-2xl overflow-hidden">
                                    <img src="/imageNotion.svg" alt="img" className="rounded-t-2xl w-full"/>
                                    <div className="flex flex-col items-start p-4 gap-1.5">
                                        <div className="flex flex-col justify-center items-start"> 
                                            <p className=" font-medium text-xl">Название проекта</p>
                                            <p className="text-base text-[#5F6368]">IT направление</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full">

                                <div className="flex flex-col justify-center items-start bg-[#F8F9FB] border border-[#1C1C1C]/5 rounded-2xl overflow-hidden">
                                    <img src="/imageNotion.svg" alt="img" className="rounded-t-2xl w-full"/>
                                    <div className="flex flex-col items-start p-4 gap-1.5">
                                        <div className="flex flex-col justify-center items-start"> 
                                            <p className=" font-medium text-xl">Название проекта</p>
                                            <p className="text-base text-[#5F6368]">IT направление</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>

                    <div className="flex justify-end items-start gap-4 px-10 md:px-4 pb-4">
                        <button 
                            onClick={onBack}
                            className=" font-medium px-6 py-3 border border-[#1C1C1C] rounded-2xl hover:bg-gray-50 transition-colors">
                            Назад
                        </button>

                        <div className="inline-flex border border-[#1C1C1C] rounded-2xl"> 
                            <button onClick={onInvite} className=" font-medium bg-[#1C1C1C] border-1 border-white/45 rounded-2xl text-white px-4 py-2.5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)]">
                                Пригласить
                            </button>
                        </div>

                    </div>



                </div>


            </div>
        
        
        
        </>
    )
}