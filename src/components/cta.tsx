import { WHATSAPP_URL } from "../lib/site";
import { Reveal } from "./reveal";
import { HexPattern } from "./section";

export function Cta() {
	return (
		<section className="scroll-mt-28 rounded-card border border-black/[0.04] bg-card p-3 shadow-[0_10px_30px_-20px_rgba(27,27,35,0.22)] md:p-4 dark:border-white/10">
			<div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(110deg,#121218_0%,#1b1736_46%,#5554dc_100%)] px-6 py-12 text-white md:px-12 md:py-16">
				<HexPattern light className="opacity-20" />
				<div
					aria-hidden
					className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-solid/40 blur-3xl"
				/>
				<Reveal className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
					<div>
						<h2 className="max-w-xl text-3xl font-bold tracking-tight text-balance md:text-5xl">
							Conta o problema. A gente aponta a tecnologia.
						</h2>
						<p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
							Sistema, IA, automação, CRM ou site. Na conversa a gente diz o
							caminho e o que entra no primeiro passo.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="#contato"
								className="press inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#1b1b23] hover:brightness-95"
							>
								Começar agora
							</a>
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="press inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white hover:bg-white/10"
							>
								Chamar no WhatsApp
							</a>
						</div>
					</div>
					<div className="relative mx-auto grid size-48 place-items-center md:size-56">
						<div className="absolute inset-0 rounded-[2rem] border border-white/15" />
						<div className="absolute inset-5 rounded-[1.6rem] border border-white/20" />
						<img
							src="/mark-white.png"
							alt=""
							className="relative w-28 md:w-32"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
