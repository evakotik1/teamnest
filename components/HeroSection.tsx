export default function HeroSection() {
    return(
        <div className='mt-39 flex flex-col items-center px-0 md:px-4 pb-72'>
            <div>
                <div className="flex flex-col items-center gap-6 px-0 md:px-16 mx-auto">
                    <span className="font-medium text-[#0B76FA] text-xl py-1 px-2 bg-[#0B76FA1A] rounded-[100]">Вместе сильнее!</span>
                    
                    <div className="text-center mx-auto max-w-[500px] md:max-w-[1000px]">
                        <h1 className="font-normal text-[28px] md:text-5xl text-[#5D5D5D] items-center">
                            TEAM 
                            <span className=" font-semibold bg-gradient-to-r from-[#5D5D5D] via-[#1C1C1C] to-[#5D5D5D] bg-clip-text text-transparent">
                                NEST объединяем амбициозных для создания больших проектов
                            </span>
                            
                        </h1>

                        <p className="text-[#5F6368] text-base md:text-xl mt-6 leading-relaxed mx-auto max-w-[680px] text-center">Мы объединяем{' '}
                            <span className="font-bold italic">амбициозных</span> и{' '}
                            <span className="font-bold italic">молодых</span> специалистов, чтобы запускать{' '}
                            <span className="font-bold italic">сильные команды</span> и воплощать{' '}
                            <span className="font-bold italic">смелые идеи</span> в жизнь.
                        </p>
                    </div>

                    <div className="w-full md:w-[237px] md:inline-flex md:border md:border-[#1C1C1C] md:rounded-xl md:max-w-[398px]"> 
                        <button className="font-medium bg-[#1C1C1C] border border-white/45 rounded-xl text-white px-4 py-3 shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.15)] w-full md:w-[237px]">
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}