import { ChevronRight } from "lucide-react";

export const Header = () => {
	return (
		<div className="flex w-full justify-between items-center border-b border-[#0D1B2A] shadow-md bg-white/5 justify-between px-5 md:px-12 lg:px-32  w-full h-20">
			<img
				alt="logo"
				className=" w-32 hover:scale-102 duration-300 hover:cursor-pointer sm:w-36 md:w-56"
				src="logo-large.png"
			/>
			<a href="#contato" className="inline-flex items-center gap-2 bg-lime-600 font-bold text-primary-foreground hover:cursor-pointer shadow-xs hover:bg-lime-500/90 rounded-[8px] px-6 h-10">
				<p>Quero começar</p>
				<ChevronRight className="size-4" />
			</a>
		</div>
	);
};
