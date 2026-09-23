import { Bot, Globe, Layers, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Reveal } from "./reveal";
import { HexPattern, MobileText, Panel, SectionHeading } from "./section";

type Service = {
	icon: LucideIcon;
	title: string;
	short: string;
	text: string;
	tone: "dark" | "light";
	span: "third" | "half";
};

const services: Service[] = [
	{
		icon: Layers,
		title: "Sistemas",
		short: "Feito em volta do problema da operação.",
		text: "O sistema feito em volta do problema da operação, no lugar de uma ferramenta genérica.",
		tone: "dark",
		span: "third",
	},
	{
		icon: Bot,
		title: "IA",
		short: "No atendimento, na análise e nas decisões.",
		text: "Inteligência aplicada no atendimento, na análise e nas decisões que hoje dependem de alguém o tempo todo.",
		tone: "light",
		span: "third",
	},
	{
		icon: Zap,
		title: "Automação",
		short: "O trabalho repetido vira fluxo.",
		text: "O trabalho repetido vira fluxo. As pessoas ficam com o que pede julgamento.",
		tone: "light",
		span: "third",
	},
	{
		icon: Users,
		title: "CRM",
		short: "Clientes e o próximo passo no mesmo lugar.",
		text: "Clientes, histórico e o próximo passo no mesmo lugar, para a relação não se perder no caminho.",
		tone: "light",
		span: "half",
	},
	{
		icon: Globe,
		title: "Sites",
		short: "Explica o negócio e leva até o contato.",
		text: "A presença que explica o negócio e leva a pessoa até o contato, o sistema ou a venda.",
		tone: "dark",
		span: "half",
	},
];

export function Services() {
	return (
		<Panel id="servicos">
			<Reveal>
				<SectionHeading
					eyebrow="Serviços"
					title="A tecnologia certa para o problema"
					short="O ponto de partida é sempre o problema."
					text={
						<>
							<span className="block">
								O formato muda. O ponto de partida é sempre o problema.
							</span>
							<span className="mt-1 block">
								Sistemas, IA, automação, CRM e sites.
							</span>
						</>
					}
				/>
			</Reveal>
			<div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-6">
				{services.map((service, index) => (
					<Reveal
						key={service.title}
						delay={index * 0.06}
						className={cn(
							service.span === "third" && "lg:col-span-2",
							service.span === "half" && "lg:col-span-3",
							service.title === "Sites" && "md:col-span-2 lg:col-span-3",
						)}
					>
						<article
							className={cn(
								"group relative h-full overflow-hidden rounded-panel p-4 transition duration-300 hover:-translate-y-1 md:p-6",
								service.tone === "dark"
									? "bg-[linear-gradient(160deg,#17171d_0%,#2e2864_58%,#6263f1_145%)] text-white shadow-[0_18px_40px_-28px_rgba(98,99,241,0.8)]"
									: "bg-[#f5f6fe] text-foreground dark:bg-white/[0.04]",
							)}
						>
							{service.tone === "dark" ? (
								<HexPattern light className="opacity-25" />
							) : null}
							<service.icon
								aria-hidden
								className={cn(
									"pointer-events-none absolute -right-2 -bottom-3 size-28",
									service.tone === "dark"
										? "text-white/10"
										: "text-brand-solid/10",
								)}
							/>
							<div className="relative">
								<span
									className={cn(
										"grid size-12 place-items-center rounded-2xl",
										service.tone === "dark"
											? "bg-white/10 text-white"
											: "bg-brand-soft text-brand",
									)}
								>
									<service.icon className="size-5" />
								</span>
								<h3 className="mt-4 text-lg font-semibold md:mt-5 md:text-xl">
									{service.title}
								</h3>
								<p
									className={cn(
										"mt-2 max-w-md text-sm leading-relaxed",
										service.tone === "dark"
											? "text-white/75"
											: "text-muted-foreground",
									)}
								>
									<MobileText short={service.short} text={service.text} />
								</p>
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
