import { WHATSAPP_URL } from "../lib/site";
import { Reveal } from "./reveal";
import { HexPattern } from "./section";

const tags = ["Sistemas", "IA", "Automação", "CRM", "Sites"];

export function Hero() {
	return (
		<section
			id="topo"
			className="relative scroll-mt-24 rounded-[1.25rem] shadow-[0_18px_44px_-16px_rgba(27,27,35,0.22)] md:scroll-mt-28 md:rounded-card dark:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.55)]"
		>
			<div className="relative overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-card px-4 py-8 text-center md:rounded-card md:px-12 md:py-24 dark:border-white/10">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_16%,rgba(98,99,241,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_16%,rgba(98,99,241,0.22),transparent_68%)]"
				/>
				<HexPattern className="hex-mask opacity-50" />

				<Reveal className="relative mx-auto flex max-w-3xl flex-col items-center">
					<img
						src="/mark-color.png"
						alt=""
						className="h-12 w-auto md:h-20 dark:hidden"
					/>
					<img
						src="/mark-white.png"
						alt=""
						className="hidden h-12 w-auto md:h-20 dark:block"
					/>
					<p className="mt-4 text-[0.68rem] font-semibold tracking-[0.18em] text-brand uppercase md:mt-6 md:text-xs md:tracking-[0.22em]">
						Software house
					</p>
					<div className="relative mt-3 w-full md:mt-4">
						<div
							aria-hidden
							className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-card/75 blur-xl dark:bg-card/80"
						/>
						<h1 className="relative text-[1.55rem] leading-[1.25] font-bold tracking-tight md:text-6xl md:leading-[1.12]">
							<span className="md:hidden">
								<span className="block">Do problema à</span>
								<span className="mt-1 block">
									<span className="inline-block translate-y-[-1px] rounded-xl bg-brand-solid px-2 py-0.5 text-[0.92em] text-white">
										tecnologia
									</span>{" "}
									que resolve.
								</span>
							</span>
							<span className="hidden text-balance md:inline">
								Do problema à{" "}
								<span className="mx-1 inline-block translate-y-[-2px] rounded-2xl bg-brand-solid px-3 py-1 text-white">
									tecnologia
								</span>{" "}
								que resolve.
							</span>
						</h1>
						<p className="relative mx-auto mt-3 max-w-sm text-sm leading-relaxed font-medium text-foreground/80 md:mt-6 md:max-w-2xl md:text-lg dark:text-foreground/90">
							<span className="md:hidden">
								Sistemas, IA, automação, CRM e sites.
							</span>
							<span className="hidden md:inline">
								Sistemas, inteligência artificial, automação, CRM e sites. A
								Neverdevup entra no problema e entrega a tecnologia que faz ele
								andar.
							</span>
						</p>
					</div>
					<div className="mt-5 flex w-full max-w-xs flex-col gap-2 sm:max-w-none sm:flex-row sm:justify-center md:mt-8 md:gap-3">
						<a
							href="#contato"
							className="press inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-solid px-5 text-sm font-semibold text-white shadow-[0_8px_16px_-6px_rgba(98,99,241,0.55)] hover:brightness-110 md:h-12 md:w-auto md:px-6"
						>
							Começar projeto
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="press inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-brand-soft md:h-12 md:w-auto md:px-6"
						>
							Falar conosco
						</a>
					</div>
					<ul className="mt-5 flex flex-wrap items-center justify-center gap-1.5 md:mt-8 md:gap-2">
						{tags.map((tag) => (
							<li
								key={tag}
								className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
							>
								{tag}
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
