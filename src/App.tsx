import "./App.css";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { RetailPromo } from "./components/retail-promo";
import { Steps } from "./components/steps";

function App() {
	return (
		<div className="text-white pb-12">
			<Header />
			<Hero />
			<RetailPromo />
			<Steps />
			<Contact />
		</div>
	);
}

export default App;
