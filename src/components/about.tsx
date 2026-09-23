import { MessageCircle, Repeat, Route } from "lucide-react";
import { Reveal } from "./reveal";
import { Panel, SectionHeading } from "./section";

const points = [
	{
		icon: MessageCircle,
		title: "Conversa direta",
		text: "Você fala com quem constrói. A ideia, o prazo e a dúvida chegam no mesmo time.",
	},
	{
		icon: Route,
		title: "Caminho combinado",
		text: "O que entra, a ordem de construção e o que fica para depois ficam claros antes de começar.",
	},
	{
		icon: Repeat,
		title: "Depois do lançamento",
		text: "A primeira versão vai para o ar e o produto segue evoluindo com o uso real.",
	},
];

export function About() {
	return (
		<Panel id="sobre">
			<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
				<Reveal>
					<SectionHeading
						align="left"
						eyebrow="Sobre"
						title="Do problema à tecnologia que resolve."
						text="A Neverdevup escuta o que está travando o negócio e entrega a tecnologia que resolve: sistemas, inteligência artificial, automação, CRM e sites. O segmento muda. O jeito de trabalhar permanece: escutar, combinar o escopo e construir algo que as pessoas conseguem usar."
					/>
				</Reveal>
				<div className="grid gap-3">
					{points.map((point, index) => (
						<Reveal key={point.title} delay={index * 0.08}>
							<article className="flex gap-4 rounded-panel bg-muted p-5 transition duration-300 hover:-translate-y-1">
								<span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
									<point.icon className="size-5" />
								</span>
								<div>
									<h3 className="font-semibold">{point.title}</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{point.text}
									</p>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</Panel>
	);
}
