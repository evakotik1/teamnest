'use client'

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void
}

export default function RegistrationModal({isOpen, onClose}: RegistrationModalProps) {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose}>
                <div 
                    className="absolute top-16 right-4 bg-white rounded-2xl shadow-lg border border-[#ECEDEE] p-4 w-64 z-50 gap-4 flex flex-col items-start shadow-[0px_51px_31px_rgba(0,0,0,0.01),0px_23px_23px_rgba(0,0,0,0.02),0px_6px_13px_rgba(0,0,0,0.02)]"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="flex justify-center items-center gap-3">
                        <img src="/Anton.svg" alt="image" />
                        <div className="flex flex-col items-start">
                            <p className="font-medium text-[#1C1C1C]">Антон Кучеренко</p>
                            <p className="text-sm text-[#5F6368]">email@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex flex-col items-start w-full">
                            <div className="flex items-center py-2 gap-2 rounded-lg">
                                <img src="/circle-user-round.svg" alt="user" />
                                <span className="text-[#1C1C1C]">Мой профиль</span>
                            </div>
                            <div className="flex items-center py-2 gap-2 rounded-lg">
                                <img src="/folder-open.svg" alt="user" />
                                <span className="text-[#1C1C1C]">Мои проекты</span>
                            </div>
                            <div className="flex items-center py-2 gap-2 rounded-lg">
                                <img src="/notebook-tabs.svg" alt="user" />
                                <span className="text-[#1C1C1C]">Мои отклики</span>
                            </div>
                            <div className="flex items-center py-2 gap-2 rounded-lg">
                                <img src="/star.svg" alt="user" />
                                <span className="text-[#1C1C1C]">Избранное</span>
                            </div>
                        </div>

                        <div className="flex items-center py-2 gap-2 rounded-lg">
                            <img src="/log-out.svg" alt="user" />
                            <span className="text-[#FF3B30]">Выход</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}