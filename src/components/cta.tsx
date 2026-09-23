import { WHATSAPP_URL } from "../lib/site";
import { Reveal } from "./reveal";
import { HexPattern } from "./section";

export function Cta() {
	return (
		<section className="scroll-mt-24 rounded-[1.25rem] border border-black/[0.04] bg-card p-2 shadow-[0_10px_30px_-20px_rgba(27,27,35,0.22)] md:scroll-mt-28 md:rounded-card md:p-4 dark:border-white/10">
			<div className="relative overflow-hidden rounded-[1.1rem] bg-[linear-gradient(110deg,#121218_0%,#1b1736_46%,#5554dc_100%)] px-4 py-6 text-white md:rounded-[1.35rem] md:px-12 md:py-16">
				<HexPattern light className="opacity-20" />
				<div
					aria-hidden
					className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-solid/40 blur-3xl"
				/>
				<Reveal className="relative grid items-center gap-8 md:grid-cols-[1.35fr_0.65fr] md:gap-10">
					<div className="min-w-0">
						<div className="flex items-start justify-between gap-4">
							<h2 className="min-w-0 text-[1.45rem] leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-[3.15rem]">
								<span className="block">Conta o problema.</span>
								<span className="mt-1 block sm:mt-2">
									A gente aponta
									<span className="block">a tecnologia.</span>
								</span>
							</h2>
							<div className="relative mt-0.5 grid size-14 shrink-0 place-items-center md:hidden">
								<div className="absolute inset-0 rounded-2xl border border-white/20" />
								<img src="/mark-white.png" alt="" className="relative w-7" />
							</div>
						</div>
						<p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:mt-4 md:text-base">
							<span className="md:hidden">
								Na conversa a gente aponta o primeiro passo.
							</span>
							<span className="hidden md:inline">
								Sistema, IA, automação, CRM ou site. Na conversa a gente diz o
								caminho e o que entra no primeiro passo.
							</span>
						</p>
						<div className="mt-5 flex flex-col gap-2 md:mt-8 md:flex-row md:gap-3">
							<a
								href="#contato"
								className="press inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#1b1b23] hover:brightness-95 md:h-12 md:w-auto md:px-6"
							>
								Começar agora
							</a>
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="press inline-flex h-11 w-full items-center justify-center rounded-full border border-white/35 px-5 text-sm font-semibold text-white hover:bg-white/10 md:h-12 md:w-auto md:px-6"
							>
								Chamar no WhatsApp
							</a>
						</div>
					</div>
					<div className="relative mx-auto hidden size-56 place-items-center md:grid">
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
