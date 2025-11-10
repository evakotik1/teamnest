import Header from "@/components/Header";
import Oleg from "../../public/IMG.png";

import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<main className="max-w-[1440px] mx-auto w-full relative flex justify-center flex-col items-center">
			<Header />
			<div className="w-[808px] h-[950px] mask-[linear-gradient(to_bottom,black_90%,transparent_100%)]">
				<Image src={Oleg} alt="kjfb" className="w-full h-full object-cover" />
			</div>

			<QuestionSection />
			<Footer />
		</main>
	);
}
