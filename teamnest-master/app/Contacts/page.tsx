import HeaderMain from "@/components/HeaderMain";
// import TeamContact from "@/components/Contacts";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";
// import Image from "next/image";
import OlegFounder from "@/components/OlegFounder";

export default function Home() {
	return (
		<main className="max-w-[1440px] mx-auto w-full overflow-x-hidden">
			<HeaderMain />
			<OlegFounder />
			<QuestionSection />
			<Footer />
		</main>
	);
}
