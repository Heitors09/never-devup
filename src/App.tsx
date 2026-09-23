import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Process } from "./components/process";
import { Projects } from "./components/projects";
import { Services } from "./components/services";

function App() {
	return (
		<div className="min-h-screen">
			<div className="sticky top-0 z-40 bg-canvas">
				<div className="mx-auto w-full max-w-6xl px-4 pt-4 pb-3 md:px-6">
					<Header />
				</div>
			</div>
			<main className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pt-2 pb-4 md:gap-6 md:px-6">
				<Hero />
				<About />
				<Services />
				<Projects />
				<Process />
				<Faq />
				<Cta />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
