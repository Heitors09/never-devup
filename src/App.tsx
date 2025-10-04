import "./App.css";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Highlighter } from "./components/magicui/highlighter";
import { Steps } from "./components/steps";

function App() {
	return (
		<div className="text-white pb-12">
			<Header />
			<Hero />
			<Steps />
			<Contact />
			<div className="my-12 md:px-12  lg:px-32 px-5">
				<Highlighter isView action="underline" color="#84cc16">
					<h2 className="text-4xl   uppercase font-bold">Portfólio</h2>
				</Highlighter>
				<div className="w-full  flex gap-4">
					<div className="w-[400px] rounded-[8px] h-72 bg-white/10 my-11">
						<img src="" />
					</div>
					<div className="w-[400px] rounded-[8px] h-72 bg-white/10 my-11"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
