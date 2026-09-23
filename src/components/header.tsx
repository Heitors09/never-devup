import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "../lib/site";
import { useTheme } from "../lib/theme";
import { cn } from "../lib/utils";
import { Logo } from "./logo";

export function Header() {
	const { theme, toggleTheme } = useTheme();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const close = () => setOpen(false);
		window.addEventListener("hashchange", close);
		return () => window.removeEventListener("hashchange", close);
	}, []);

	return (
		<header className="sticky top-0 z-40 bg-canvas">
			<div className="relative flex w-full items-center justify-between gap-3 rounded-card border border-black/[0.04] bg-card px-4 py-3 shadow-[0_8px_24px_-18px_rgba(27,27,35,0.28)] md:px-5 dark:border-white/10">
				<Logo />

				<nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="press rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition duration-300 hover:bg-brand-soft hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={
							theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
						}
						className="grid size-10 place-items-center rounded-full border border-border text-foreground hover:bg-brand-soft"
					>
						{theme === "dark" ? (
							<Sun className="size-4" />
						) : (
							<Moon className="size-4" />
						)}
					</button>
					<a
						href="#contato"
						className="press hidden h-10 items-center rounded-full bg-brand-solid px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(98,99,241,0.85)] hover:brightness-110 sm:inline-flex"
					>
						Começar
					</a>
					<button
						type="button"
						className="grid size-10 place-items-center rounded-full border border-border hover:bg-brand-soft lg:hidden"
						aria-expanded={open}
						aria-label={open ? "Fechar menu" : "Abrir menu"}
						onClick={() => setOpen((value) => !value)}
					>
						{open ? <X className="size-4" /> : <Menu className="size-4" />}
					</button>
				</div>

				{open ? (
					<nav
						className={cn(
							"absolute top-[calc(100%+0.5rem)] right-0 left-0 flex flex-col gap-1 rounded-card border border-black/[0.04] bg-card p-3 shadow-[0_24px_60px_-36px_rgba(27,27,35,0.45)] lg:hidden dark:border-white/10",
						)}
					>
						{nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="press rounded-panel px-4 py-3 text-sm font-medium text-foreground hover:bg-brand-soft"
							>
								{item.label}
							</a>
						))}
						<a
							href="#contato"
							className="press mt-1 inline-flex h-11 items-center justify-center rounded-full bg-brand-solid text-sm font-semibold text-white"
						>
							Começar
						</a>
					</nav>
				) : null}
			</div>
		</header>
	);
}
