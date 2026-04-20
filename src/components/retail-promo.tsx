import { ChevronRight, HeadphonesIcon, Laptop, Sparkles, Store } from "lucide-react";
import { Highlighter } from "./magicui/highlighter";

export const RetailPromo = () => {
	return (
		<div id="oferta" className=" w-full max-md:mt-10 px-4 sm:px-5 md:px-12 lg:px-32">
			<div className="rounded-[12px] bg-gradient-to-br from-[#0D1B2A] via-[#0F2233] to-[#0D1B2A] py-10 px-6 md:py-12 md:px-12 w-full relative overflow-hidden border border-white/5 shadow-2xl">
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

				<div
					className="absolute -top-1 right-2 sm:right-10 flex flex-col items-center gap-2 bg-gradient-to-b from-lime-500 to-lime-700 text-white font-black text-[9px] sm:text-sm uppercase tracking-wider shadow-2xl shadow-lime-900/50 px-3 sm:px-8 pt-5 sm:pt-7 pb-10 sm:pb-16 z-20 rotate-[1deg] border-x border-white/10"
					style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)" }}
				>
					{/* Metallic Rivet Detail */}
					<div className="absolute top-2 w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-[#0D1B2A] border-[1.5px] border-white/20 shadow-inner flex items-center justify-center">
						<div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white/40" />
					</div>

					<Sparkles className="size-3 sm:size-5 text-white animate-pulse mb-0.5" />
					<span className="whitespace-nowrap text-center leading-tight">
						<span className="text-[7px] sm:text-xs opacity-90 block">Oferta</span>
						<span className="text-[10px] sm:text-xl font-black italic tracking-tighter">Especial</span>
					</span>
					
					{/* Internal Shine Gradient Overlay */}
					<div className="absolute inset-x-0 top-0 h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
				</div>

				<h2 className="text-xl sm:text-2xl md:text-5xl font-bold mb-6 text-white leading-tight pr-12 sm:pr-0 tracking-tight">
					Sua marca de moda, crie sua <Highlighter isView action="underline" color="#84cc16">loja virtual </Highlighter> sob medida.
				</h2>

				<p className="text-white/60 max-w-2xl text-sm md:text-lg mb-12 leading-relaxed font-light">
					Levamos sua loja física para o mundo digital — ou modernizamos sua operação atual com nossa expertise em e-commerce. Desde a hospedagem até a gestão contínua de estoque.
				</p>

				<div className="grid lg:grid-cols-3 gap-8 w-full">
					{/* Card 1 */}
					<div className="group relative w-full rounded-[16px] bg-white/[0.03] border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-md hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-500">
						<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-lime-500/10 group-hover:bg-lime-500/20 transition-all duration-500">
							<Store className="size-8 text-lime-400 group-hover:scale-110 transition-transform duration-500" />
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-xl font-bold text-white/90 group-hover:text-lime-400 transition-colors">Nuvemshop & Plataformas</h3>
							<p className="text-white/50 text-sm leading-relaxed">
								Hospedagem e configuração completa em plataformas líderes como Nuvemshop. Deixamos tudo pronto para você vender.
							</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="group relative w-full rounded-[16px] bg-white/[0.03] border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-md hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-500">
						<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-lime-500/10 group-hover:bg-lime-500/20 transition-all duration-500">
							<Laptop className="size-8 text-lime-400 group-hover:scale-110 transition-transform duration-500" />
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-xl font-bold text-white/90 group-hover:text-lime-400 transition-colors">E-commerce do Zero</h3>
							<p className="text-white/50 text-sm leading-relaxed">
								Desenvolvemos um projeto sob medida, focado na identidade da sua marca de moda e em alta taxa de conversão.
							</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="group relative w-full rounded-[16px] bg-white/[0.03] border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-md hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-500">
						<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-lime-500/10 group-hover:bg-lime-500/20 transition-all duration-500">
							<HeadphonesIcon className="size-8 text-lime-400 group-hover:scale-110 transition-transform duration-500" />
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-xl font-bold text-white/90 group-hover:text-lime-400 transition-colors">Suporte & Gestão</h3>
							<p className="text-white/50 text-sm leading-relaxed">
								Não apenas criamos — nós cuidamos. Suporte contínuo, atualização de estoques e manutenção sempre que precisar.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-14 flex justify-end">
					<a
						target="_blank" rel="noopener noreferrer"
						href="https://wa.me/558592248448?text=quero%20come%C3%A7ar%20um%20projeto%20para%20minha%20loja"
						className="group inline-flex items-center gap-3 bg-lime-600 font-bold text-white hover:cursor-pointer shadow-lg shadow-lime-600/20 hover:bg-lime-500 rounded-[10px] px-10 h-14 transition-all duration-300 hover:scale-105 active:scale-95"
					>
						<p>Quero criar minha loja</p>
						<ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
					</a>
				</div>
			</div>
		</div>
	);
};
