import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, type ReactNode, useState } from "react";
import {
	EMAIL,
	PHONE_DISPLAY,
	PHONE_TEL,
	WHATSAPP_URL,
	whatsappMessage,
} from "../lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";
import { Panel, SectionHeading } from "./section";

type FormState = {
	name: string;
	email: string;
	phone: string;
	project: string;
	message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
	name: "",
	email: "",
	phone: "",
	project: "",
	message: "",
};

const fieldClass =
	"h-12 w-full rounded-2xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition duration-300 placeholder:text-muted-foreground/80 focus:border-brand-solid focus:bg-card focus:ring-4 focus:ring-brand-solid/15";

function validate(values: FormState): Errors {
	const errors: Errors = {};
	if (values.name.trim().length < 2) {
		errors.name = "Diga como podemos te chamar.";
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
		errors.email = "Informe um e-mail válido.";
	}
	if (values.phone.replace(/\D/g, "").length < 10) {
		errors.phone = "Informe um telefone com DDD.";
	}
	if (!values.project) {
		errors.project = "Escolha um tipo de projeto.";
	}
	if (values.message.trim().length < 10) {
		errors.message = "Conte um pouco mais sobre o que você precisa.";
	}
	return errors;
}

export function Contact() {
	const [values, setValues] = useState<FormState>(initial);
	const [errors, setErrors] = useState<Errors>({});
	const [sent, setSent] = useState(false);
	const [blocked, setBlocked] = useState(false);

	function update<K extends keyof FormState>(key: K, value: FormState[K]) {
		setValues((current) => ({ ...current, [key]: value }));
		setErrors((current) => ({ ...current, [key]: undefined }));
	}

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;

		const text = [
			`Olá, sou ${values.name.trim()}.`,
			`Projeto: ${values.project}`,
			`E-mail: ${values.email.trim()}`,
			`Telefone: ${values.phone.trim()}`,
			"",
			values.message.trim(),
		].join("\n");

		const popup = window.open(
			whatsappMessage(text),
			"_blank",
			"noopener,noreferrer",
		);
		setBlocked(!popup);
		setSent(true);
		setValues(initial);
	}

	return (
		<Panel id="contato">
			<div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
				<Reveal className="order-2 lg:order-1">
					<SectionHeading
						align="left"
						eyebrow="Contato"
						title="Vamos conversar sobre o seu projeto"
						text="Manda pelo formulário, WhatsApp ou e-mail. Em horário comercial, a resposta sai em até duas horas úteis."
					/>

					<form onSubmit={onSubmit} noValidate className="mt-8 grid gap-4">
						<div className="grid gap-4 sm:grid-cols-2">
							<Field label="Nome" error={errors.name} htmlFor="nome">
								<input
									id="nome"
									name="name"
									autoComplete="name"
									value={values.name}
									onChange={(event) => update("name", event.target.value)}
									className={fieldClass}
									placeholder="Seu nome"
									aria-invalid={Boolean(errors.name)}
								/>
							</Field>
							<Field label="E-mail" error={errors.email} htmlFor="email">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={values.email}
									onChange={(event) => update("email", event.target.value)}
									className={fieldClass}
									placeholder="voce@email.com"
									aria-invalid={Boolean(errors.email)}
								/>
							</Field>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							<Field label="Telefone" error={errors.phone} htmlFor="telefone">
								<input
									id="telefone"
									name="phone"
									type="tel"
									autoComplete="tel"
									value={values.phone}
									onChange={(event) => update("phone", event.target.value)}
									className={fieldClass}
									placeholder="(85) 90000-0000"
									aria-invalid={Boolean(errors.phone)}
								/>
							</Field>
							<Field label="Projeto" error={errors.project} htmlFor="projeto">
								<select
									id="projeto"
									name="project"
									value={values.project}
									onChange={(event) => update("project", event.target.value)}
									className={fieldClass}
									aria-invalid={Boolean(errors.project)}
								>
									<option value="">Tipo de projeto</option>
									<option>Sistemas</option>
									<option>IA</option>
									<option>Automação</option>
									<option>CRM</option>
									<option>Sites</option>
									<option>Ainda estou definindo</option>
								</select>
							</Field>
						</div>
						<Field label="Mensagem" error={errors.message} htmlFor="mensagem">
							<textarea
								id="mensagem"
								name="message"
								value={values.message}
								onChange={(event) => update("message", event.target.value)}
								className={`${fieldClass} h-32 resize-none py-3`}
								placeholder="Conta o problema, para quem e em que prazo."
								aria-invalid={Boolean(errors.message)}
							/>
						</Field>

						<button
							type="submit"
							className="inline-flex h-12 items-center justify-center rounded-full bg-brand-solid px-6 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(98,99,241,0.85)] hover:brightness-110"
						>
							Enviar pelo WhatsApp
						</button>
						<p className="text-xs leading-relaxed text-muted-foreground">
							A mensagem abre no WhatsApp com o que você escreveu, para a gente
							responder por lá.
						</p>
						{sent ? (
							<output className="rounded-2xl bg-brand-soft px-4 py-3 text-sm text-brand">
								Mensagem pronta.{" "}
								{blocked
									? `Se a janela não abriu, chama no ${PHONE_DISPLAY}.`
									: "Se o WhatsApp abriu, é só enviar."}
							</output>
						) : null}
					</form>
				</Reveal>

				<Reveal delay={0.08} className="order-1 lg:order-2">
					<aside className="flex h-full flex-col gap-4 rounded-panel bg-muted p-5 md:p-6">
						<h3 className="text-lg font-semibold">Canais</h3>
						<div className="grid gap-2">
							<Channel
								href={WHATSAPP_URL}
								external
								icon={<WhatsAppIcon className="size-5" />}
								label="WhatsApp"
								value={PHONE_DISPLAY}
							/>
							<Channel
								href={`tel:${PHONE_TEL}`}
								icon={<Phone className="size-5" />}
								label="Telefone"
								value={PHONE_DISPLAY}
							/>
							<Channel
								href={`mailto:${EMAIL}`}
								icon={<Mail className="size-5" />}
								label="E-mail"
								value={EMAIL}
							/>
						</div>

						<div className="mt-2 grid gap-3 border-t border-border pt-4 text-sm">
							<p className="flex items-start gap-3 text-muted-foreground">
								<Clock className="mt-0.5 size-4 shrink-0 text-brand" />
								<span>
									Segunda a sexta, 8h às 18h
									<span className="mt-1 block text-foreground">
										Resposta em até 2 horas úteis
									</span>
								</span>
							</p>
							<p className="flex items-start gap-3 text-muted-foreground">
								<MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
								<span>
									Atendimento remoto
									<span className="mt-1 block text-foreground">
										Projetos em todo o Brasil
									</span>
								</span>
							</p>
						</div>

						<div className="mt-auto flex gap-2 pt-2">
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="press grid size-11 place-items-center rounded-full bg-brand-solid text-white hover:brightness-110"
							>
								<WhatsAppIcon className="size-5" />
							</a>
							<a
								href={`mailto:${EMAIL}`}
								aria-label="E-mail"
								className="press grid size-11 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-brand-soft"
							>
								<Mail className="size-4" />
							</a>
							<a
								href={`tel:${PHONE_TEL}`}
								aria-label="Telefone"
								className="press grid size-11 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-brand-soft"
							>
								<Phone className="size-4" />
							</a>
						</div>
					</aside>
				</Reveal>
			</div>
		</Panel>
	);
}

function Field({
	label,
	htmlFor,
	error,
	children,
}: {
	label: string;
	htmlFor: string;
	error?: string;
	children: ReactNode;
}) {
	return (
		<label htmlFor={htmlFor} className="grid gap-2 text-sm font-medium">
			{label}
			{children}
			{error ? (
				<span className="text-xs font-normal text-red-500">{error}</span>
			) : null}
		</label>
	);
}

function Channel({
	href,
	icon,
	label,
	value,
	external = false,
}: {
	href: string;
	icon: ReactNode;
	label: string;
	value: string;
	external?: boolean;
}) {
	return (
		<a
			href={href}
			{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			className="press flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-card"
		>
			<span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
				{icon}
			</span>
			<span className="min-w-0">
				<span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
					{label}
				</span>
				<span className="block truncate font-semibold">{value}</span>
			</span>
		</a>
	);
}
