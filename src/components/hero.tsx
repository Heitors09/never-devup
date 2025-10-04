import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Highlighter } from "./magicui/highlighter";

export const Hero = () => {
	return (
		<div className="flex max-xl:flex-col-reverse max-xl:gap-12 px-5 md:px-12 lg:px-32 my-5  w-full">
			<main className="xl:w-[50%] flex flex-col justify-center gap-5">
				<h2 className="lg:text-7xl text-3xl md:text-5xl w-auto leading-tight font-bold  text-white/90">
					Desenvolvimento{" "}
					<Highlighter isView action="underline" color="#84cc16">
						Web
					</Highlighter>{" "}
					&{" "}
					<Highlighter isView action="underline" color="#84cc16">
						Mobile
					</Highlighter>{" "}
					para seu negócio
				</h2>
				<p className="lg:text-lg text-xs md:text-sm font-light max-w-[700px] text-white/90 leading-relaxed">
					Ajudamos você a transformar sua ideia em realidade, oferecendo suporte
					completo para estruturar e desenvolver seu projeto.
				</p>
				<div className="flex max-md:flex-col mt-4 items-center gap-4 md:gap-12 max-w-[560px]">
					<p className="text-white/70 text-sm font-medium tracking-wide uppercase">
						Email, WhatsApp e TikTok
					</p>
					<a
						href="#contato"
						className="md:w-52 bg-lime-600 flex font-bold text-primary-foreground hover:cursor-pointer shadow-xs hover:bg-lime-500/90 rounded-[8px] gap-2 items-center justify-center w-full h-12"
					>
						<p>Contate-nos</p>
						<ChevronDown className="size-5" />
					</a>
				</div>
			</main>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 1, ease: "easeOut" }}
				className="xl:w-[50%] flex  rounded-[8px] items-center justify-center "
			>
				<img alt="logo" className="rounded-[8px] " src="webpage-2.png" />
			</motion.div>
		</div>
	);
};
