export const PHONE_DISPLAY = "(85) 98659-8249";
export const PHONE_TEL = "+5585986598249";
export const WHATSAPP_NUMBER = "5585986598249";
export const EMAIL = "devupcontato@gmail.com";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, quero conversar sobre um projeto.")}`;

export const nav = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#servicos", label: "Serviços" },
	{ href: "#projetos", label: "Projetos" },
	{ href: "#processo", label: "Processo" },
	{ href: "#contato", label: "Contato" },
] as const;

export function whatsappMessage(text: string) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
