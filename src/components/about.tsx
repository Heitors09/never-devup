import { Reveal } from "./reveal";
import { MobileText, Panel, SectionHeading } from "./section";

const points = [
	{
		image: "/about/conversa.jpg",
		alt: "Pessoa numa reunião online, com a chamada aberta no notebook.",
		position: "object-[center_45%]",
		title: "Conversa direta",
		short: "Você fala com quem constrói.",
		text: "Você fala com quem constrói. A ideia, o prazo e a dúvida chegam no mesmo time.",
	},
	{
		image: "/about/caminho.jpg",
		alt: "Equipe organizando o caminho do projeto em notas na parede.",
		position: "object-center",
		title: "Caminho combinado",
		short: "O caminho fica claro antes de começar.",
		text: (
			<>
				<span className="block">O que entra e a ordem de construção.</span>
				<span className="block">O depois fica claro antes de começar.</span>
			</>
		),
	},
	{
		image: "/about/lancamento.jpg",
		alt: "Três pessoas usando um produto no notebook depois de publicado.",
		position: "object-[center_42%]",
		title: "Depois do lançamento",
		short: "A primeira versão vai para o ar.",
		text: "A primeira versão vai para o ar e o produto segue evoluindo com o uso real.",
	},
];

export function About() {
	return (
		<Panel id="sobre">
			<Reveal>
				<SectionHeading
					eyebrow="Sobre"
					title="Do problema à tecnologia que resolve."
					short="A gente escuta o problema e entrega a tecnologia que resolve."
					text={
						<>
							<span className="block">
								A Neverdevup escuta o que está travando o negócio e entrega a
								tecnologia que resolve:
							</span>
							<span className="block">
								sistemas, inteligência artificial, automação, CRM e sites. O
								segmento muda.
							</span>
							<span className="block">
								Escutar, combinar o escopo e construir algo usável.
							</span>
						</>
					}
				/>
			</Reveal>
			<div className="mt-6 grid gap-3 md:mt-10 lg:grid-cols-3 lg:items-stretch">
				{points.map((point, index) => (
					<Reveal key={point.title} delay={index * 0.08} className="h-full">
						<article className="group flex h-full flex-col overflow-hidden rounded-panel bg-muted text-left transition duration-300 hover:-translate-y-1">
							<div className="aspect-[16/10] shrink-0 overflow-hidden">
								<img
									src={point.image}
									alt={point.alt}
									width={1400}
									height={875}
									loading="lazy"
									decoding="async"
									className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${point.position}`}
								/>
							</div>
							<div className="flex flex-1 flex-col p-3.5 md:p-5">
								<h3 className="font-semibold">{point.title}</h3>
								<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
									<MobileText short={point.short} text={point.text} />
								</p>
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
