import Header from "@/components/Header";
import StartupBlock from "@/components/StartupsBlock";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
    <main className="max-w-[1440px] mx-auto w-full">
        <Header />
        <StartupBlock />
        <QuestionSection />
        <Footer />
    </main>
    ); 
}