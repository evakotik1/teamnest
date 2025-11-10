import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<div
				className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
				// style={{ backgroundImage: "url('/Grid.svg')" }}
			></div>
			<main>
				<Header />
				<HeroSection />
				<AboutUs />
				<QuestionSection />
				<Footer />
			</main>
		</div>
	);
}
