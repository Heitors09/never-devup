import { cn } from "../lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<a href="#topo" className={cn("inline-flex shrink-0", className)}>
			<img
				src="/logo-light.png"
				alt="Neverdevup"
				className="h-8 w-auto sm:h-9 dark:hidden"
			/>
			<img
				src="/logo-dark.png"
				alt=""
				aria-hidden
				className="hidden h-8 w-auto sm:h-9 dark:block"
			/>
		</a>
	);
}
