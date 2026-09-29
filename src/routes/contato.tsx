import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { storeConfig } from "@/config/storeConfig";

const description = "Informações de contato da Fabia Multimarcas. Canais, endereço e horário serão adicionados após confirmação.";
export const Route = createFileRoute("/contato")({ head: () => ({ meta: [{ title: "Contato — Fabia Multimarcas" }, { name: "description", content: description }, { property: "og:title", content: "Contato — Fabia Multimarcas" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: ContactPage });

function ContactPage() {
  const contacts = [
    { label: "WhatsApp", value: storeConfig.whatsappDisplay, href: storeConfig.whatsapp ? `https://wa.me/${storeConfig.whatsapp}` : null, Icon: MessageCircle },
    { label: "Instagram", value: storeConfig.instagram, href: storeConfig.instagramUrl, Icon: Instagram },
    { label: "E-mail", value: storeConfig.email, href: storeConfig.email ? `mailto:${storeConfig.email}` : null, Icon: Mail },
    { label: "Endereço", value: storeConfig.endereco, href: null, Icon: MapPin },
    { label: "Horário de funcionamento", value: storeConfig.horario, href: null, Icon: Clock },
  ];
  return <main><section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Fabia Multimarcas</p><h1 className="mt-3 font-serif text-5xl md:text-7xl">Entre em contato</h1><p className="mt-4 max-w-xl text-primary-foreground/75">Os canais de atendimento serão disponibilizados aqui quando forem confirmados pela loja.</p></div></section><section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1fr_1fr] lg:py-24"><div><p className="eyebrow">Canais</p><h2 className="mt-3 font-serif text-4xl">Fale com a Fabia</h2><div className="mt-8 grid gap-6 sm:grid-cols-2">{contacts.map(({ label, value, href, Icon }) => <div key={label} className="contact-line"><Icon className="text-primary" /><span><strong>{label}</strong>{href ? <a href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noreferrer" : undefined} className="mt-1 block text-sm text-primary underline underline-offset-4">{value}</a> : <small>{value ?? "Adicionar posteriormente"}</small>}</span></div>)}</div></div><div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><p className="eyebrow">Identificação</p><h2 className="mt-3 font-serif text-4xl">A loja</h2><dl className="mt-8 space-y-5 text-sm"><div><dt className="font-semibold">Nome</dt><dd className="mt-1 text-muted-foreground">{storeConfig.nome}</dd></div><div><dt className="font-semibold">Proprietária</dt><dd className="mt-1 text-muted-foreground">{storeConfig.proprietaria}</dd></div><div><dt className="font-semibold">CNPJ</dt><dd className="mt-1 text-muted-foreground">{storeConfig.cnpj}</dd></div></dl><div className="mt-12 border-t border-border pt-8"><p className="font-serif text-2xl">Localização</p><p className="mt-2 text-sm text-muted-foreground">O mapa poderá ser adicionado após a confirmação do endereço.</p></div></div></section></main>;
}
