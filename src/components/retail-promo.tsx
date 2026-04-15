import { ChevronRight, HeadphonesIcon, Laptop, Sparkles, Store } from "lucide-react";
import { Highlighter } from "./magicui/highlighter";

export const RetailPromo = () => {
	return (
		<div id="oferta" className=" w-full px-4 sm:px-5 md:px-12 lg:px-32">
			<div className="rounded-[8px] bg-gradient-to-tr from-[#0D1B2A] to-[#0F2233] py-10 px-6 md:py-24 md:px-12 w-full relative overflow-hidden">
				<div
					className="absolute -top-1 right-2 sm:right-10 md:right-30 flex flex-col items-center gap-1 sm:gap-2 bg-lime-600 text-white font-black text-[9px] sm:text-sm uppercase tracking-wider shadow-xl shadow-lime-700/50 px-3 sm:px-8 pt-3 sm:pt-4 pb-8 sm:pb-14 z-10 rotate-[1deg]"
					style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)" }}
				>
					<div className="w-1.5 h-1.5 sm:w-3.5 sm:h-3.5 rounded-full bg-lime-800 border-2 border-lime-900/80 flex-shrink-0" />
					<Sparkles className="size-3 sm:size-5 flex-shrink-0" />
					<span className="whitespace-nowrap text-center leading-tight text-[7px] sm:text-sm">Oferta<br/>Especial</span>
				</div>
				<h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-white/90 leading-tight pr-12 sm:pr-0">
				Sua marca de moda, crie sua <Highlighter isView action="underline" color="#84cc16">loja virtual </Highlighter> sob medida.
				</h2>

				<p className="text-white/70 max-w-2xl text-sm md:text-base mb-10 leading-relaxed">
					Levamos sua loja física para o mundo digital — ou modernizamos sua operação atual com nossa expertise em e-commerce. Desde a hospedagem até a gestão contínua de estoque.
				</p>

				<div className="grid lg:grid-cols-3 gap-6 w-full">
					<div className="w-full rounded-[8px] hover:bg-white/10 duration-200 p-6 flex flex-col gap-4 border border-white/5 bg-white/5">
							<Store className="size-7 size-16 text-lime-400" />
						<h3 className="text-xl font-bold">Nuvemshop & Plataformas</h3>
						<p className="text-white/70 text-sm leading-relaxed">
							Hospedagem e configuração completa em plataformas líderes como Nuvemshop. Deixamos tudo pronto para você vender.
						</p>
					</div>

					<div className="w-full rounded-[8px] hover:bg-white/10 duration-200 p-6 flex flex-col gap-4 border border-white/5 bg-white/5">
							<Laptop className="size-7 size-16 text-lime-400" />
						<h3 className="text-xl font-bold">E-commerce do Zero</h3>
						<p className="text-white/70 text-sm leading-relaxed">
							Desenvolvemos um projeto sob medida, focado na identidade da sua marca de moda e em alta taxa de conversão.
						</p>
					</div>

					<div className="w-full rounded-[8px] hover:bg-white/10 duration-200 p-6 flex flex-col gap-4 border border-white/5 bg-white/5">
							<HeadphonesIcon className="size-7 size-16 text-lime-400" />
						<h3 className="text-xl font-bold">Suporte & Gestão</h3>
						<p className="text-white/70 text-sm leading-relaxed">
							Não apenas criamos — nós cuidamos. Suporte contínuo, atualização de estoques e manutenção sempre que precisar.
						</p>
					</div>
				</div>
				<div className="mt-10 flex justify-end">
					<a
						target="_blank" rel="noopener noreferrer"
						href="https://wa.me/558592248448?text=quero%20come%C3%A7ar%20um%20projeto%20para%20minha%20loja"
						className="inline-flex items-center gap-2 bg-lime-600 font-bold text-primary-foreground hover:cursor-pointer shadow-xs hover:bg-lime-500/90 rounded-[8px] px-8 h-12"
					>
						<p>Quero criar minha loja</p>
						<ChevronRight className="size-5" />
					</a>
				</div>
			</div>
		</div>
	);
};
