import { WHATSAPP_URL } from "../lib/site";
import { Reveal } from "./reveal";
import { HexPattern } from "./section";

const tags = ["Sistemas", "IA", "Automação", "CRM", "Sites"];

export function Hero() {
	return (
		<section
			id="topo"
			className="relative scroll-mt-28 rounded-card shadow-[0_18px_44px_-16px_rgba(27,27,35,0.22)] dark:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.55)]"
		>
			<div className="relative overflow-hidden rounded-card border border-black/[0.06] bg-card px-6 py-16 text-center md:px-12 md:py-24 dark:border-white/10">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_16%,rgba(98,99,241,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_16%,rgba(98,99,241,0.22),transparent_68%)]"
				/>
				<HexPattern className="hex-mask opacity-50" />

				<Reveal className="relative mx-auto flex max-w-3xl flex-col items-center">
					<img
						src="/mark-color.png"
						alt=""
						className="h-16 w-auto md:h-20 dark:hidden"
					/>
					<img
						src="/mark-white.png"
						alt=""
						className="hidden h-16 w-auto md:h-20 dark:block"
					/>
					<p className="mt-6 text-xs font-semibold tracking-[0.22em] text-brand uppercase">
						Software house
					</p>
					<div className="relative mt-4 w-full">
						<div
							aria-hidden
							className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-card/75 blur-xl dark:bg-card/80"
						/>
						<h1 className="relative text-4xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
							Do problema à{" "}
							<span className="mx-1 inline-block translate-y-[-2px] rounded-2xl bg-brand-solid px-3 py-1 text-white">
								tecnologia
							</span>{" "}
							que resolve.
						</h1>
						<p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed font-medium text-foreground/80 md:text-lg dark:text-foreground/90">
							Sistemas, inteligência artificial, automação, CRM e sites. A
							Neverdevup entra no problema e entrega a tecnologia que faz ele
							andar.
						</p>
					</div>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="#contato"
							className="press inline-flex h-12 items-center justify-center rounded-full bg-brand-solid px-6 text-sm font-semibold text-white shadow-[0_8px_16px_-6px_rgba(98,99,241,0.55)] hover:brightness-110"
						>
							Começar projeto
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="press inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground hover:bg-brand-soft"
						>
							Falar conosco
						</a>
					</div>
					<ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
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
