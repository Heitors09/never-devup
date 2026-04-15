import { ChevronRight } from "lucide-react";
import { Marquee } from "./magicui/marquee";

export const Header = () => {
	return (
		<>
			<div className="flex w-full justify-between items-center border-b border-[#0D1B2A] shadow-md bg-white/5 px-6 sm:px-5 md:px-12 lg:px-32 w-full h-16 sm:h-20">
				<img
					alt="logo"
					className="w-24 sm:w-36 md:w-56 hover:scale-102 duration-300 hover:cursor-pointer"
					src="logo-large.png"
				/>
				<a target="_blank" rel="noopener noreferrer" href="https://wa.me/558586598249?text=quero%20iniciar%20um%20projeto%20para%20o%20meu%20neg%C3%B3cio" className="inline-flex items-center gap-1 sm:gap-2 bg-lime-600 font-bold text-primary-foreground hover:cursor-pointer shadow-xs hover:bg-lime-500/90 rounded-[8px] px-4 sm:px-6 h-9 sm:h-10 text-xs sm:text-base transition-all">
					<p><span className="hidden xs:inline">Quero </span>começar</p>
					<ChevronRight className="size-3 sm:size-4" />
				</a>
			</div>
			<div className="bg-lime-600 text-white font-bold uppercase py-1.5 overflow-hidden border-b border-lime-700/50 shadow-inner">
				<Marquee pauseOnHover repeat={12} className="[--duration:20s] [--gap:3rem]">
					<div className="flex items-center gap-4 px-4">
						<span className="whitespace-nowrap flex items-center gap-2">
							OFERTA ESPECIAL PRA LOJISTAS DE MODA
							<span className="text-white/30 ml-2">|</span>
							<a href="#oferta" className="ml-2 underline decoration-2 underline-offset-4 hover:text-white/80 transition-colors">
								SAIBA MAIS
							</a>
						</span>
						<span className="text-white/30 ml-4">•</span>
					</div>
				</Marquee>
			</div>
		</>
	);
};
