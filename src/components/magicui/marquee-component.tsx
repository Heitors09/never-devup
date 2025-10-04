import { cn } from "../../lib/utils";
import { Highlighter } from "./highlighter";
import { Marquee } from "./marquee";

const reviews = [
	{
		name: "Pedro",
		username: "@pedro",
		body: "Mano, nunca vi nada assim! Tá muito bom, sério mesmo.",
		img: "https://avatar.vercel.sh/pedro",
	},
	{
		name: "Mariana",
		username: "@mariana",
		body: "Caraca, fiquei até sem reação... isso aqui tá top demais!",
		img: "https://avatar.vercel.sh/mariana",
	},
	{
		name: "Lucas",
		username: "@lucas",
		body: "Sem condições, tá perfeito! Curti demais isso aqui.",
		img: "https://avatar.vercel.sh/lucas",
	},
	{
		name: "Ana",
		username: "@ana",
		body: "Não tenho nem palavras... só sei que tá sensacional!",
		img: "https://avatar.vercel.sh/ana",
	},
	{
		name: "Camila",
		username: "@camila",
		body: "Sério, tô impressionada. Que coisa boa de usar!",
		img: "https://avatar.vercel.sh/camila",
	},
	{
		name: "Rafael",
		username: "@rafael",
		body: "Muito brabo! Já virei fã disso aqui.",
		img: "https://avatar.vercel.sh/rafael",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 cursor-pointer  rounded-xl rounded-[8px] p-4 bg-white/10 ",
				// light styles
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export const MarqueeComponent = () => {
	return (
		<div className="my-2  ">
			<div className=" px-5  md:px-12 lg:px-32">
				<Highlighter isView action="underline" color="#84cc16">
					<h2 className="text-4xl  uppercase font-bold">Feedback</h2>
				</Highlighter>
			</div>

			<div className="relative my-8 flex w-full flex-col ">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
			</div>
		</div>
	);
};
