import { Compass, Hammer, MessagesSquare, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { Panel, SectionHeading } from "./section";

const steps = [
	{
		icon: MessagesSquare,
		number: "01",
		title: "Conversa",
		text: "Uma call ou uma mensagem para entender o contexto, o prazo e o resultado que importa.",
	},
	{
		icon: Compass,
		number: "02",
		title: "Direção",
		text: "Organizamos o escopo, a experiência e a sequência. Você aprova o caminho antes da construção.",
	},
	{
		icon: Hammer,
		number: "03",
		title: "Construção",
		text: "Desenvolvemos em ciclos curtos. Você vê o produto ganhar forma e ajusta o que precisar.",
	},
	{
		icon: Sparkles,
		number: "04",
		title: "Evolução",
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
					text="Quatro etapas, sempre na mesma ordem, com você vendo cada passo do caminho."
				/>
			</Reveal>
			<div className="relative mt-12 grid gap-4 md:grid-cols-4">
				<div
					aria-hidden
					className="absolute top-8 right-8 left-8 hidden h-px bg-border md:block"
				/>
				{steps.map((step, index) => (
					<Reveal key={step.number} delay={index * 0.08}>
						<article className="relative h-full rounded-panel bg-muted p-5">
							<div className="flex items-center gap-3">
								<span className="relative grid size-12 place-items-center rounded-2xl border border-border bg-card text-sm font-bold text-brand">
									{step.number}
								</span>
								<step.icon className="size-5 text-brand" />
							</div>
							<h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								{step.text}
							</p>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
