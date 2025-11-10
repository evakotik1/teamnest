'use client';

import { useState } from "react";

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
    if (!isOpen) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onClose}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div 
                    className="bg-white rounded-2xl overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex justify-between items-center p-6 border-b border-[#ECEDEE] bg-[#F6F7FA] rounded-t-2xl">
                        <h2 className="font-medium text-xl">
                            Обратная связь
                        </h2>
                        <button 
                            onClick={onClose}
                            className="text-[#5F6368] hover transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">

                        <div>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#ECEDEE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                                placeholder="Имя"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#ECEDEE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                                placeholder="Почта"
                            />
                        </div>

                        <div>
                            <textarea 
                                className="w-full px-4 py-3 bg-[#F8F9FB] border border-[#ECEDEE] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1C1C1C] resize-none"
                                rows={4}
                                placeholder="Ваш вопрос"
                            />
                        </div>

                        <div className="flex items-start gap-3">
                            <input 
                                type="checkbox"
                                className="mt-0.5 w-4 h-4 rounded"
                            />
                            <span className="text-sm text-[#5F6368] leading-relaxed">
                                Я принимаю условия <span className="text-[#0B76FA] font-medium">публичной оферты</span> и подтверждаю своё согласие с ними.
                            </span>
                        </div>

                        <div className="flex flex-col justify-center items-end">
                            <div className="inline-flex border border-[#1C1C1C] rounded-2xl"> 
                                <button type="submit" className="font-medium bg-[#1C1C1C] border border-white/45 rounded-2xl text-white px-4 py-2.5 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)]">
                                    Задать вопрос
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}