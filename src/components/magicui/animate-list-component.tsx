"use client";

import { cn } from "../../lib/utils";
import { AnimatedList } from "./animated-list";

interface Item {
	name: string;
	description: string;
	icon: string;
	color: string;
	time: string;
}

let notifications = [
	{
		name: "Reunião com cliente",
		description: "Alinhando requisitos do novo projeto",
		time: "15m atrás",
		icon: "🤝",
		color: "#00C9A7",
	},
	{
		name: "Nova feature em progresso",
		description: "Equipe está desenvolvendo o app mobile",
		time: "10m atrás",
		icon: "💻",
		color: "#FFB800",
	},
	{
		name: "Código revisado",
		description: "Pull request aprovado no GitHub",
		time: "5m atrás",
		icon: "✅",
		color: "#FF3D71",
	},
	{
		name: "Deploy realizado",
		description: "Nova versão publicada em produção",
		time: "2m atrás",
		icon: "🚀",
		color: "#1E86FF",
	},
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
	return (
		<figure
			className={cn(
				"relative mx-auto min-h-fit w-full  cursor-pointer overflow-hidden rounded-2xl p-4",
				// animation styles
				"transition-all duration-200 ease-in-out hover:scale-[103%]",
				// light styles
				"bg-white/10 backdrop-blur-md  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			)}
		>
			<div className="flex flex-row items-center gap-3">
				<div
					className="flex size-10 items-center justify-center rounded-2xl"
					style={{
						backgroundColor: color,
					}}
				>
					<span className="text-lg">{icon}</span>
				</div>
				<div className="flex flex-col overflow-hidden">
					<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium  ">
						<span className="text-sm sm:text-lg">{name}</span>
						<span className="mx-1">·</span>
						<span className="text-xs text-gray-500">{time}</span>
					</figcaption>
					<p className="text-sm font-normal text-white/60">{description}</p>
				</div>
			</div>
		</figure>
	);
};

export function AnimatedListComponent({
	className,
}: {
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative flex h-[500px] w-full flex-col overflow-hidden ",
				className,
			)}
		>
			<AnimatedList>
				{notifications.map((item, idx) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Notification {...item} key={idx} />
				))}
			</AnimatedList>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
		</div>
	);
}
