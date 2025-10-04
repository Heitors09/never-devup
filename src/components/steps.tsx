import { ChevronRight } from "lucide-react";

export const Steps = () => {
	return (
		<div
			id="processo"
			className="px-32 grid  lg:grid-cols-2 justify-center xl:flex gap-4 w-full "
		>
			<div className=" md:w-full xl:size-96 flex p-6 flex-col justify-center items-center gap-4">
				<ChevronRight className="size-20" />
				<h2 className="text-4xl ">Nosso processo</h2>
				<p className="text-center">
					Ajudamos você a entender sua necessidade e tornamos ela em um projeto
					real
				</p>
			</div>
			<div className="md:w-full lg:size-96 shadow-2xl rounded-[8px] hover:cursor-pointer hover:bg-white/10 duration-200 p-6 flex flex-col justify-center items-center gap-4">
				<img alt="logo" className="rounded-[8px] size-36" src="chat.png" />
				<h2 className="text-4xl">Primeiro Contato</h2>
				<p className="text-center">
					Conversamos com você para entender sua ideia, seus objetivos e o
					impacto que deseja gerar.
				</p>
			</div>

			<div className="md:w-full lg:size-96 shadow-2xl hover:bg-white/10 duration-200 rounded-[8px] p-6 hover:cursor-pointer flex flex-col justify-center items-center gap-4">
				<img alt="logo" className="rounded-[8px] size-30" src="notes.png" />
				<h2 className="text-4xl text-center">Mapeamento de Necessidades</h2>
				<p className="text-center">
					Analisamos seus desafios e desenhamos juntos as soluções que melhor
					atendem à sua necessidade.
				</p>
			</div>

			<div className="md:w-full lg:size-96 hover:bg-white/10 duration-200 shadow-2xl rounded-[8px] p-6 flex flex-col hover:cursor-pointer justify-center items-center gap-4">
				<img alt="logo" className="rounded-[8px] size-30" src="webpage-3.png" />
				<h2 className="text-4xl text-center">Desenvolvimento do App</h2>
				<p className="text-center">
					Transformamos sua ideia em um aplicativo funcional, moderno e pronto
					para escalar junto com você.
				</p>
			</div>
		</div>
	);
};
