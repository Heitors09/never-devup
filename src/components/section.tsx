import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export function Panel({
	id,
	children,
	className,
}: {
	id?: string;
	children: ReactNode;
	className?: string;
}) {
	return (
		<section
			id={id}
			className={cn(
				"scroll-mt-24 rounded-[1.25rem] border border-black/[0.04] bg-card p-4 shadow-[0_10px_30px_-20px_rgba(27,27,35,0.22)] md:scroll-mt-28 md:rounded-card md:p-10 dark:border-white/10",
				className,
			)}
		>
			{children}
		</section>
	);
}

export function SectionHeading({
	eyebrow,
	title,
	text,
	short,
	align = "center",
}: {
	eyebrow: string;
	title: string;
	text?: ReactNode;
	short?: string;
	align?: "center" | "left";
}) {
	return (
		<div
			className={cn(
				align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
			)}
		>
			<p className="text-xs font-semibold tracking-wide text-brand md:text-sm">
				{eyebrow}
			</p>
			<h2 className="mt-2 text-xl leading-tight font-bold tracking-tight text-balance md:mt-3 md:text-4xl">
				{title}
			</h2>
			{text ? (
				<div className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">
					{short ? <p className="md:hidden">{short}</p> : null}
					<div className={short ? "hidden md:block" : undefined}>{text}</div>
				</div>
			) : null}
		</div>
	);
}

export function MobileText({
	short,
	text,
}: {
	short: string;
	text: ReactNode;
}) {
	return (
		<>
			<span className="md:hidden">{short}</span>
			<span className="hidden md:block">{text}</span>
		</>
	);
}

export function HexPattern({
	className,
	light = false,
}: {
	className?: string;
	light?: boolean;
}) {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-0",
				light ? "hex-grid-light" : "hex-grid",
				className,
			)}
		/>
	);
}
