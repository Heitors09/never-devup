import { Calculator, HeartHandshake, Kanban, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";
import { MobileText, Panel, SectionHeading } from "./section";

const projects: {
	icon: LucideIcon;
	image: string;
	focus: string;
	alt: string;
	name: string;
	short: string;
	description: string;
	stack: string;
	tags: string[];
	stats: { value: string; label: string }[];
	href?: string;
}[] = [
	{
		icon: HeartHandshake,
		image: "/projects/rebeca.jpg",
		focus: "object-[center_18%]",
		alt: "Landing page de Rebeca Dantas, psicologia clínica.",
		name: "Rebeca Dantas",
		short: "Um espaço seguro para se encontrar.",
		description:
			"Acolhimento e escuta, no presencial em Fortaleza e online para o Brasil.",
		stack: "Site • Consulta • Contato",
		tags: ["Site", "Psicologia", "Atendimento"],
		stats: [
			{ value: "2", label: "Formatos" },
			{ value: "CE", label: "Presencial" },
			{ value: "BR", label: "Online" },
		],
		href: "https://rebeca-dantas-lp.vercel.app/",
	},
	{
		icon: Scale,
		image: "/projects/evelyne.jpg",
		focus: "object-[center_18%]",
		alt: "Landing page da Dra. Evelyne Lira, direito previdenciário.",
		name: "Dra. Evelyne Lira",
		short: "Direito previdenciário com atendimento próximo.",
		description:
			"Benefícios, linguagem clara e a história de quem chega no centro.",
		stack: "Site • Previdência • WhatsApp",
		tags: ["Site", "Previdência", "Atendimento"],
		stats: [
			{ value: "+8", label: "Anos" },
			{ value: "3", label: "Áreas" },
			{ value: "55431", label: "OAB" },
		],
		href: "https://sitee-evelyne-lira.vercel.app/",
	},
	{
		icon: Kanban,
		image: "/projects/crm.jpg",
		focus: "object-center",
		alt: "Painel de um CRM com WhatsApp, inbox e funil de vendas.",
		name: "Implantação de CRM",
		short: "WhatsApp e o funil no mesmo CRM.",
		description:
			"Atendimento, reservas e leads no mesmo lugar, com WhatsApp e Instagram ligados ao funil.",
		stack: "Kommo • WhatsApp • Funil",
		tags: ["CRM", "WhatsApp", "Funil"],
		stats: [
			{ value: "API", label: "WhatsApp" },
			{ value: "Inbox", label: "Chat" },
			{ value: "Funil", label: "Vendas" },
		],
	},
	{
		icon: Calculator,
		image: "/projects/gerador.png",
		focus: "object-[center_24%]",
		alt: "Tela de um gerador de cotações de seguro.",
		name: "Gerador de cotações",
		short: "A cotação sai no próprio sistema.",
		description:
			"Seguro com veículos, coberturas e o orçamento gerado na hora. O uso fica só com o cliente.",
		stack: "Cotação • Veículos • Coberturas",
		tags: ["Sistema", "Seguro", "Cotação"],
		stats: [
			{ value: "6–12", label: "Meses" },
			{ value: "2", label: "Coberturas" },
			{ value: "Auto", label: "Seguro" },
		],
	},
];

export function Projects() {
	return (
		<Panel id="projetos">
			<Reveal>
				<SectionHeading
					eyebrow="Portfólio"
					title="Projetos que já saíram daqui"
					short="Trabalhos reais, de vários tipos."
					text={
						<>
							<span className="block">
								Sistemas, IA, automação, CRM e sites.
							</span>
							<span className="mt-1 block">Trabalhos reais, já no ar.</span>
						</>
					}
				/>
			</Reveal>
			<div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
				{projects.map((project, index) => (
					<Reveal key={project.name} delay={index * 0.08} className="h-full">
						<article
							className={`group relative flex h-full flex-col overflow-hidden rounded-panel ${project.href ? "cursor-pointer" : ""}`}
						>
							<img
								src={project.image}
								alt={project.alt}
								width={1024}
								height={480}
								loading="lazy"
								decoding="async"
								className={`absolute inset-0 h-full w-full object-cover ${project.focus}`}
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 bg-[#1b1b23]/52 backdrop-blur-[1px] transition duration-500 group-hover:opacity-0 group-hover:backdrop-blur-none"
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 bg-[linear-gradient(102deg,rgb(27_27_35/0.55)_0%,rgb(27_27_35/0.38)_34%,rgb(27_27_35/0.12)_58%,transparent_74%),linear-gradient(to_top,rgb(27_27_35/0.48)_0%,rgb(27_27_35/0.26)_30%,transparent_56%)] opacity-0 transition duration-500 group-hover:opacity-100"
							/>
							<div className="relative flex h-full flex-col p-3.5 text-white md:p-5">
								<div className="flex gap-3">
									<span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/12 text-white transition duration-500 group-hover:bg-[#1b1b23]/45 md:size-12">
										<project.icon className="size-4 md:size-5" />
									</span>
									<div className="min-w-0">
										<h3 className="text-base font-semibold transition duration-500 group-hover:[text-shadow:0_1px_8px_rgb(0_0_0/0.35)] md:text-lg">
											{project.name}
										</h3>
										<p className="mt-1 text-sm leading-relaxed text-white/75 transition duration-500 group-hover:text-white group-hover:[text-shadow:0_1px_8px_rgb(0_0_0/0.35)]">
											<MobileText
												short={project.short}
												text={project.description}
											/>
										</p>
									</div>
								</div>
								<p className="mt-4 text-xs font-medium text-white [text-shadow:0_1px_6px_rgb(0_0_0/0.35)]">
									{project.stack}
								</p>
								<ul className="mt-3 flex flex-wrap gap-1.5">
									{project.tags.map((tag) => (
										<li
											key={tag}
											className="rounded-full border border-white/15 bg-[#1b1b23]/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase"
										>
											{tag}
										</li>
									))}
								</ul>
								<ul className="mt-3 grid grid-cols-3 gap-1.5 md:mt-4 md:gap-2">
									{project.stats.map((stat) => (
										<li
											key={stat.label}
											className="rounded-xl border border-white/10 bg-white/10 px-1 py-2 text-center transition duration-500 group-hover:border-white/20 group-hover:bg-[#1b1b23]/45 md:rounded-2xl md:px-2 md:py-3"
										>
											<p className="text-sm font-bold text-white">
												{stat.value}
											</p>
											<p className="mt-1 text-[10px] leading-tight font-medium text-white/70">
												{stat.label}
											</p>
										</li>
									))}
								</ul>
								{project.href ? (
									<div className="mt-4 flex gap-2">
										<a
											href={project.href}
											target="_blank"
											rel="noopener noreferrer"
											className="press inline-flex h-11 flex-1 items-center justify-center rounded-full bg-brand-solid px-4 text-sm font-semibold text-white hover:brightness-110"
										>
											Ver projeto
										</a>
										<a
											href={project.href}
											target="_blank"
											rel="noopener noreferrer"
											className="press inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white transition duration-500 hover:bg-white/16 group-hover:border-white/35 group-hover:bg-[#1b1b23]/45"
										>
											Abrir
										</a>
									</div>
								) : null}
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</Panel>
	);
}
