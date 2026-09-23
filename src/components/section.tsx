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
				"scroll-mt-28 rounded-card border border-black/[0.04] bg-card p-6 shadow-[0_10px_30px_-20px_rgba(27,27,35,0.22)] md:p-10 dark:border-white/10",
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
	align = "center",
}: {
	eyebrow: string;
	title: string;
	text?: string;
	align?: "center" | "left";
}) {
	return (
		<div
			className={cn(
				align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
			)}
		>
			<p className="text-sm font-semibold tracking-wide text-brand">
				{eyebrow}
			</p>
			<h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
				{title}
			</h2>
			{text ? (
				<p className="mt-4 text-base leading-relaxed text-muted-foreground">
					{text}
				</p>
			) : null}
		</div>
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
