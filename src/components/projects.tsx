import {
	Bot,
	CalendarCheck,
	Globe,
	Layers,
	Users,
	Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";
import { Panel, SectionHeading } from "./section";

const projects: {
	icon: LucideIcon;
	name: string;
	description: string;
	stack: string;
	tags: string[];
	stats: { value: string; label: string }[];
}[] = [
	{
		icon: Layers,
		name: "Ateliê",
		description:
			"Pedidos, estoque e caixa de uma operação que antes vivia no caderno.",
		stack: "Sistema • Painel • Estoque",
		tags: ["Sistema", "Pedidos", "Operação"],
		stats: [
			{ value: "120+", label: "Pedidos no dia" },
			{ value: "4", label: "Lojas" },
			{ value: "2 min", label: "No caixa" },
		],
	},
	{
		icon: Bot,
		name: "Clara",
		description:
			"Atendimento com inteligência artificial em cima da base da própria empresa.",
		stack: "IA • WhatsApp • Base",
		tags: ["IA", "Atendimento", "WhatsApp"],
		stats: [
			{ value: "1,8 mil", label: "Respostas" },
			{ value: "40 s", label: "Tempo médio" },
			{ value: "18 h", label: "Liberadas" },
		],
	},
	{
		icon: Zap,
		name: "Trilha",
		description:
			"A rotina repetida virou fluxo, com alerta só quando alguém precisa agir.",
		stack: "Automação • Integrações • Alertas",
		tags: ["Automação", "Rotina", "Alertas"],
		stats: [
			{ value: "36", label: "Fluxos" },
			{ value: "9", label: "Integrações" },
			{ value: "0", label: "Planilhas" },
		],
	},
	{
		icon: Users,
		name: "Vínculo",
		description:
			"Clientes, histórico e o próximo passo no mesmo lugar, para a venda não se perder.",
		stack: "CRM • Funil • Histórico",
		tags: ["CRM", "Vendas", "Clientes"],
		stats: [
			{ value: "640", label: "Contas" },
			{ value: "3", label: "Etapas" },
			{ value: "1", label: "Próximo passo" },
		],
	},
	{
		icon: Globe,
		name: "Porta",
		description:
			"O site que explica a marca e leva a pessoa até o contato ou o sistema.",
		stack: "Site • Marca • Contato",
		tags: ["Site", "Marca", "Contato"],
		stats: [
			{ value: "12 s", label: "Até o contato" },
			{ value: "1", label: "Caminho" },
			{ value: "4", label: "Páginas" },
		],
	},
	{
		icon: CalendarCheck,
		name: "Oficina",
		description:
			"Agenda, equipe e o que entra no dia, sem recado perdido no grupo.",
		stack: "Sistema • Agenda • Equipe",
		tags: ["Sistema", "Agenda", "Equipe"],
		stats: [
			{ value: "80", label: "Horários" },
			{ value: "6", label: "Pessoas" },
			{ value: "1", label: "Fila do dia" },
		],
	},
];

export function Projects() {
	return (
		<Panel id="projetos">
			<Reveal>
				<SectionHeading
					eyebrow="Portfólio"
					title="O formato dos projetos que saem daqui"
					text="Nomes ilustrativos, por enquanto. Cada card mostra um sistema, uma IA, uma automação, um CRM ou um site no jeito que a gente entrega."
				/>
			</Reveal>
			<div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{projects.map((project, index) => (
					<Reveal key={project.name} delay={index * 0.05}>
						<article className="flex h-full flex-col rounded-panel border border-black/[0.04] bg-muted/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
							<div className="flex gap-3">
								<span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
									<project.icon className="size-5" />
								</span>
								<div className="min-w-0">
									<h3 className="text-lg font-semibold">{project.name}</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{project.description}
									</p>
								</div>
							</div>
							<p className="mt-4 text-xs font-medium text-muted-foreground">
								{project.stack}
							</p>
							<ul className="mt-3 flex flex-wrap gap-1.5">
								{project.tags.map((tag) => (
									<li
										key={tag}
										className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brand uppercase"
									>
										{tag}
									</li>
								))}
							</ul>
							<ul className="mt-4 grid grid-cols-3 gap-2">
								{project.stats.map((stat) => (
									<li
										key={stat.label}
										className="rounded-2xl border border-black/[0.04] bg-card px-2 py-3 text-center dark:border-white/10"
									>
										<p className="text-sm font-bold text-brand">{stat.value}</p>
										<p className="mt-1 text-[10px] leading-tight font-medium text-muted-foreground">
											{stat.label}
										</p>
									</li>
								))}
							</ul>
							<div className="mt-4 flex gap-2">
								<a
									href="#contato"
									className="press inline-flex h-11 flex-1 items-center justify-center rounded-full bg-brand-solid px-4 text-sm font-semibold text-white hover:brightness-110"
								>
									Ver projeto
								</a>
								<a
									href="#contato"
									className="press inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-brand-soft"
								>
									Abrir
								</a>
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
