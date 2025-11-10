export default function AboutUs() {
    return (
        <div className="flex flex-col items-center px-4 md:px-0 py-8 sm:py-12 gap-8 sm:gap-12 max-w-[1440px] mx-auto">

            <div className="flex flex-col items-center gap-4">
                <h1 className="font-semibold leading-[110%] bg-gradient-to-r from-[#5D5D5D] via-[#1C1C1C] via-49% to-[#5D5D5D] bg-clip-text text-transparent text-center max-w-[1024px] text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] max-w-4xl">Платформа для тех, кто хочет создавать, а не ждать</h1>
                <p className="text-xl text-[#5F6368] max-w-[700px] text-center">
                    <span className="block">Мы помогаем находить команду, запускать стартапы и делать первые шаги к настоящим изменениям</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 md:gap-8 ">

                <div className="flex flex-col bg-[#F8F9FB] border border-[#ECEDEE] rounded-2xl overflow-hidden flex-1 p-4 gap-4">
                    <div>
                        <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                            <img src="/people1.svg" alt="img" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6] flex-grow">
                        <h1 className="font-medium text-xl sm:text-2xl  leading-tight">Поиск команды</h1>
                        <p className="text-base text-[#5F6368] leading-relaxed flex-grow">TeamNest упрощает поиск единомышленников — здесь вы сможете найти разработчиков, дизайнеров, маркетологов и других специалистов, готовых взяться за реализацию идеи.</p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#F8F9FB] border border-[#ECEDEE] rounded-2xl overflow-hidden flex-1 p-4 gap-4 ">
                    <div>
                        <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                            <img src="/people2.svg" alt="img" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6] flex-grow">
                        <h1 className="font-medium text-xl sm:text-2xl leading-tight">Возможности для роста</h1>
                        <p className="text-base text-[#5F6368] leading-relaxed flex-grow">Платформа открыта для тех, кто ищет опыт, хочет развить навыки и узнать, что значит работать над стартапом изнутри.</p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#F8F9FB] border border-[#ECEDEE] rounded-2xl overflow-hidden flex-1 p-4 gap-4">
                    <div>
                        <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                            <img src="/people3.svg" alt="img" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6] flex-grow">
                        <h1 className="font-medium text-xl sm:text-2xl leading-tight">Сеть поддержки и развития</h1>
                        <p className="text-base text-[#5F6368] leading-relaxed flex-grow">Мы создаем сообщество, где можно найти не только команду, но и наставников, советчиков и будущих партнеров</p>
                    </div>
                </div>
            </div>

            <span className="font-normal text-center max-w-[1124px] text-base sm:text-lg lg:text-xl xl:text-2xl leading-[130%]">Наша миссия — дать каждому шанс воплотить идею в жизнь и получить поддержку на каждом этапе пути. Присоединяйтесь и начинайте строить будущее вместе с нами!</span>

        </div>
    )
}