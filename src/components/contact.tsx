import { Clock, Contact2, Globe, MailIcon, MessageCircle } from "lucide-react";
import { AnimatedListComponent } from "./magicui/animate-list-component";
import { Highlighter } from "./magicui/highlighter";

export const Contact = () => {
	return (
		<div
			id="contato"
			className=" my-12 gap-8 flex flex-col md:px-12 lg:px-32 px-5"
		>
			<div className="md:flex md:items-center md:justify-between ">
				<Highlighter isView action="underline" color="#84cc16">
					<h2 className="text-4xl   uppercase font-bold">Contate-nos</h2>
				</Highlighter>
				<p className="text-white/70 mt-4  text-xs font-medium tracking-wide md:uppercase max-w-[500px]">
					se você tem interesse de colocar sua ideia em prática ou quiser tirar
					qualquer dúvida, entre em contato conosco via WhatsApp, Email ou
					nossas midias sociais.
				</p>
			</div>
			<div className="flex max-md:flex-col gap-4 justify-between">
				<aside className="w-full  flex flex-col gap-4">
					<div className="bg-white/10 flex flex-col max-md:items-center  w-full md:grid md:grid-cols-2 gap-8 rounded-[8px] p-8">
						<a target="_blank" rel="noopener noreferrer" href="https://wa.me/558586598249?text=quero%20iniciar%20um%20projeto%20para%20o%20meu%20neg%C3%B3cio" className="flex max-md:flex-col items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
						 <Contact2 className="size-10 text-[#C7F900]"/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								WhatsApp
								<span className="text-white font-bold">(85) 8659-8249</span>
							</p>
						</a>
						<a href="mailto:neverdevup73@gmail.com" className="flex max-md:flex-col items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
							<MailIcon className="size-10 text-[#C7F900]"/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								Email
								<span className="text-white font-bold">neverdevup73@gmail.com</span>
							</p>
						</a>
					</div>
					<div className="flex max-md:hidden max-md:flex-col max-md:gap-8 justify-between p-8">
						<div className="flex max-md:flex-col items-center gap-4">
							<Clock className="size-12" />
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								Atendimento
								<span>Seg-Sex 8h às 18h</span>
							</p>
						</div>
						<div className="flex max-md:flex-col items-center gap-4">
							<Globe className="size-12" />
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								Localização
								<span>100% Online</span>
							</p>
						</div>
						<div className="flex max-md:flex-col items-center gap-4">
							<MessageCircle className="size-12" />
							<p className="text-white/70 text-lg max-md:text-center flex flex-col text-sm font-medium tracking-wide uppercase">
								Resposta
								<span>Até 2h úteis</span>
							</p>
						</div>
					</div>
				</aside>
				<main className="w-full hidden md:block  h-full">
					<div className=" w-full h-[330px]  overflow-y-scroll   rounded-[8px] ">
						<div className="flex  w-full h-full  ">
							<AnimatedListComponent />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
