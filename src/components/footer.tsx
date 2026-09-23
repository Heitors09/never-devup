import { EMAIL, PHONE_DISPLAY, PHONE_TEL, nav } from "../lib/site";
import { Logo } from "./logo";

export function Footer() {
	return (
		<footer className="pb-10">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
				<div className="flex flex-col gap-6 border-t border-border pt-8">
					<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
						<Logo />
						<nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Rodapé">
							{nav.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="text-sm font-medium text-muted-foreground transition duration-300 hover:text-foreground"
								>
									{item.label}
								</a>
							))}
							<a
								href="#duvidas"
								className="text-sm font-medium text-muted-foreground transition duration-300 hover:text-foreground"
							>
								Dúvidas
							</a>
						</nav>
					</div>
					<div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
						<p>Do problema à tecnologia que resolve.</p>
						<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
							<a
								href={`tel:${PHONE_TEL}`}
								className="transition duration-300 hover:text-foreground"
							>
								{PHONE_DISPLAY}
							</a>
							<span aria-hidden className="text-border">
								/
							</span>
							<a
								href={`mailto:${EMAIL}`}
								className="transition duration-300 hover:text-foreground"
							>
								{EMAIL}
							</a>
							<span aria-hidden className="text-border">
								/
							</span>
							<p>© {new Date().getFullYear()} Neverdevup</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
