import { Compass, Hammer, MessagesSquare, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { MobileText, Panel, SectionHeading } from "./section";

const steps = [
	{
		icon: MessagesSquare,
		number: "01",
		title: "Conversa",
		short: "Entender o contexto, o prazo e o resultado.",
		text: "Uma call ou uma mensagem para entender o contexto, o prazo e o resultado que importa.",
	},
	{
		icon: Compass,
		number: "02",
		title: "Direção",
		short: "Você aprova o caminho antes da construção.",
		text: "Organizamos o escopo, a experiência e a sequência. Você aprova o caminho antes da construção.",
	},
	{
		icon: Hammer,
		number: "03",
		title: "Construção",
		short: "Ciclos curtos, com o produto ganhando forma.",
		text: "Desenvolvemos em ciclos curtos. Você vê o produto ganhar forma e ajusta o que precisar.",
	},
	{
		icon: Sparkles,
		number: "04",
		title: "Evolução",
		short: "Publicamos e seguimos nas melhorias.",
		text: "Publicamos, acompanhamos o uso e seguimos nas melhorias que fazem diferença.",
	},
];

export function Process() {
	return (
		<Panel id="processo">
			<Reveal>
				<SectionHeading
					eyebrow="Processo"
					title="Do primeiro papo à versão no ar"
					short="Quatro etapas, na mesma ordem."
					text="Quatro etapas, sempre na mesma ordem, com você vendo cada passo do caminho."
				/>
			</Reveal>
			<div className="relative mt-6 grid gap-3 md:mt-12 md:grid-cols-4 md:gap-4">
				<div
					aria-hidden
					className="absolute top-8 right-8 left-8 hidden h-px bg-border md:block"
				/>
				{steps.map((step, index) => (
					<Reveal key={step.number} delay={index * 0.08}>
						<article className="relative h-full rounded-panel bg-muted p-3.5 md:p-5">
							<div className="flex items-center gap-3">
								<span className="relative grid size-10 place-items-center rounded-2xl border border-border bg-card text-sm font-bold text-brand md:size-12">
									{step.number}
								</span>
								<step.icon className="size-4 text-brand md:size-5" />
							</div>
							<h3 className="mt-3 text-base font-semibold md:mt-5 md:text-lg">
								{step.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								<MobileText short={step.short} text={step.text} />
							</p>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
