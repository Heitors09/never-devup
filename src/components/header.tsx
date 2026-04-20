import { ChevronRight, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Marquee } from "./magicui/marquee";

export const Header = () => {
	return (
		<>
			<div className="flex w-full justify-between items-center border-b border-[#0D1B2A] shadow-md bg-white/5 px-6 sm:px-5 md:px-12 lg:px-32 py-7">
				<img
					alt="logo"
					className="w-24 sm:w-36 md:w-56 hover:scale-102 duration-300 hover:cursor-pointer"
					src="logo-large.png"
				/>
				<a target="_blank" rel="noopener noreferrer" href="https://wa.me/558586598249?text=quero%20iniciar%20um%20projeto%20para%20o%20meu%20neg%C3%B3cio" className="inline-flex items-center gap-2 bg-lime-600 font-bold text-white hover:cursor-pointer shadow-lg shadow-lime-600/20 hover:bg-lime-500 rounded-[10px] px-6 h-10 transition-all duration-300 hover:scale-105 active:scale-95 text-xs sm:text-base">
					<p>começar</p>
					<ChevronRight className="size-3 sm:size-4" />
				</a>
			</div>
			<div className="relative bg-[#0D1B2A] text-white font-bold uppercase py-2.5 overflow-hidden border-y border-white/5 border-t-lime-500/20 border-b-lime-500/20">
				<motion.div
					initial={{ left: "-100%" }}
					animate={{ left: "200%" }}
					transition={{
						repeat: Infinity,
						duration: 4,
						ease: "linear",
						repeatDelay: 1.5
					}}
					className="absolute inset-y-0 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none z-0"
				/>

				<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_#84cc160a_0%,_transparent_60%)] pointer-events-none" />

				<Marquee pauseOnHover repeat={12} className="relative z-10 [--duration:25s] [--gap:4rem]">
					<div className="flex items-center gap-6 px-4">
						<Zap className="size-4 text-lime-400 animate-pulse" />
						<span className="whitespace-nowrap flex items-center gap-3 tracking-[0.15em] text-xs md:text-sm">
							OFERTA ESPECIAL PRA LOJISTAS DE MODA
							<a href="#oferta" className="ml-2 px-3 py-2 bg-lime-500 text-white rounded-full text-[10px] hover:bg-lime-400 transition-all hover:scale-105 active:scale-95">
								SAIBA MAIS
							</a>
						</span>
						<Sparkles className="size-4 text-lime-400/50" />
					</div>
				</Marquee>
			</div>
		</>
	);
};
