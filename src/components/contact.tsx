import { Clock, Globe, MessageCircle } from "lucide-react";
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
						<div className="flex max-md:flex-col items-center gap-4">
							<img
								alt="logo"
								className="rounded-[8px] size-16"
								src="contact.png"
							/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								WhatsApp
								<span>88 8888-8888</span>
							</p>
						</div>
						<div className="flex max-md:flex-col items-center gap-4">
							<img
								alt="logo"
								className="rounded-[8px] size-16"
								src="mail.png"
							/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								Email
								<span>contato@contato.com</span>
							</p>
						</div>
						<div className="flex max-md:flex-col items-center gap-4">
							<img
								alt="logo"
								className="rounded-[8px] size-16"
								src="insta.png"
							/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								Instagram
								<span>instagram.com/instagram</span>
							</p>
						</div>
						<div className="flex max-md:flex-col items-center gap-4">
							<img
								alt="logo"
								className="rounded-[8px] size-16"
								src="social.png"
							/>
							<p className="text-white/70 max-md:text-center text-lg flex flex-col text-sm font-medium tracking-wide uppercase">
								TikTok
								<span>tiktok.com/contato</span>
							</p>
						</div>
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
