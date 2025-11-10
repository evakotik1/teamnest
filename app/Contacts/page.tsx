import Header from "@/components/Header";

import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
    <main className="max-w-[1440px] mx-auto w-full">
        <Header />
        
        <QuestionSection />
        <Footer />
    </main>
    ); 
}