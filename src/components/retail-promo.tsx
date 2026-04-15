import { ChevronRight, HeadphonesIcon, Laptop, Sparkles, Store } from "lucide-react";
import { Highlighter } from "./magicui/highlighter";

export const RetailPromo = () => {
	return (
		<div className=" w-full">
			<div className="rounded-[8px] px-5 md:px-12 lg:px-32 bg-gradient-to-tr from-[#0D1B2A] to-[#0F2233] py-24 w-full relative">
				<div
					className="absolute -top-1 right-30 flex flex-col items-center gap-2 bg-lime-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-lime-700/50 px-8 pt-4 pb-14 z-10 rotate-[1deg]"
					style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)" }}
				>
					<div className="w-3.5 h-3.5 rounded-full bg-lime-800 border-2 border-lime-900/80 flex-shrink-0" />
					<Sparkles className="size-5 flex-shrink-0" />
					<span className="whitespace-nowrap text-center leading-tight">Oferta<br/>Especial</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">
				Sua marca de moda, crie sua <Highlighter  isView action="underline" color="#84cc16">loja virtual </Highlighter> sob medida.
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
						href="#contato"
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
