import { ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";
import { Panel, SectionHeading } from "./section";

const questions = [
	{
		q: "Quanto tempo leva um projeto?",
		a: "Um site ou uma automação enxuta costuma andar em semanas. Um sistema, um CRM ou um projeto de IA pede um mapa antes do prazo. Na primeira conversa dizemos o que já dá para estimar e o que ainda precisa ser entendido.",
	},
	{
		q: "Como funciona o orçamento?",
		a: "Depois de entender o escopo, enviamos uma proposta com o que entra, o que fica de fora e a forma de pagamento. O combinado fica escrito antes de a construção começar.",
	},
	{
		q: "Dá para continuar um sistema que já existe?",
		a: "Sim. Entramos em sistemas, CRMs e sites que já estão no ar para corrigir, evoluir ou assumir a manutenção, desde que dê para entender o código e o objetivo.",
	},
	{
		q: "Vocês atendem qualquer segmento?",
		a: "Sim. O segmento do negócio muda. O jeito de construir permanece: escutar o problema e entregar a tecnologia que resolve.",
	},
	{
		q: "Por onde a conversa começa?",
		a: "Pelo problema. Sistemas, IA, automação, CRM ou site entram quando o caminho já está claro.",
	},
];

export function Faq() {
	return (
		<Panel id="duvidas">
			<Reveal>
				<SectionHeading
					eyebrow="Dúvidas"
					title="Antes de chamar, vale saber"
					short="O que costuma travar o primeiro contato."
					text="Respostas curtas para o que costuma travar o primeiro contato."
				/>
			</Reveal>
			<div className="mt-6 grid items-stretch gap-3 md:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-4">
				<Reveal className="h-full">
					<div className="h-52 overflow-hidden rounded-panel sm:h-64 lg:h-full">
						<img
							src="/faq/conversa.jpg"
							alt="Duas pessoas conversando sobre o que está no notebook."
							width={1600}
							height={1200}
							loading="lazy"
							decoding="async"
							className="h-full w-full object-cover object-[center_38%]"
						/>
					</div>
				</Reveal>
				<div className="grid content-start gap-2 md:gap-3">
				{questions.map((item, index) => (
					<Reveal key={item.q} delay={index * 0.05}>
						<details
							name="faq"
							className="group rounded-panel bg-muted px-4 py-3 md:px-5 md:py-4"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
								{item.q}
								<ChevronDown className="size-4 shrink-0 text-brand transition duration-300 group-open:rotate-180" />
							</summary>
							<p className="pt-3 text-sm leading-relaxed text-muted-foreground">
								{item.a}
							</p>
						</details>
					</Reveal>
				))}
				</div>
			</div>
		</Panel>
	);
}
