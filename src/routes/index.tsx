import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { storeConfig } from "@/config/storeConfig";
import { ProductGrid } from "@/components/store/ProductGrid";
import { CategoryCard } from "@/components/store/CategoryCard";
import { Button } from "@/components/ui/button";

const description = "Conheça a Fabia Multimarcas, loja de roupas parceira do projeto Fashion AI, desenvolvido para apoiar o atendimento aos clientes.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Fabia Multimarcas — Loja de roupas" }, { name: "description", content: description }, { property: "og:title", content: "Fabia Multimarcas — Loja de roupas" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const goals = ["Automatizar demandas frequentes dos clientes", "Tornar o atendimento mais rápido", "Melhorar a experiência de atendimento", "Contribuir para o engajamento dos clientes", "Auxiliar na atração de público"];

function Index() {
  const featured = products.filter((product) => product.destaque);
  return <main>
    <section className="relative min-h-[min(46rem,calc(100svh-7rem))] overflow-hidden bg-charcoal">
      <img src="/images/banner/fabia-campanha.jpg" alt="Imagem ilustrativa de moda para a Fabia Multimarcas" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[68%_center] md:object-center" />
      <div className="absolute inset-0 bg-hero-shade" />
      <div className="relative mx-auto flex min-h-[min(46rem,calc(100svh-7rem))] max-w-7xl items-end px-5 pb-14 pt-28 md:items-center md:px-8"><div className="max-w-2xl text-on-image"><p className="text-xs font-medium uppercase tracking-[0.28em]">Loja de roupas</p><h1 className="mt-5 font-serif text-5xl leading-[0.93] md:text-7xl lg:text-8xl">Fabia<br />Multimarcas</h1><p className="mt-5 max-w-xl text-base text-on-image-muted md:text-xl">Uma loja de roupas voltada a uma experiência de atendimento cada vez melhor.</p><Button asChild variant="light" size="lg" className="mt-8"><a href="#sobre">Conheça a loja <ArrowRight /></a></Button></div></div>
    </section>
    <section id="sobre" className="border-b border-border bg-background"><div className="mx-auto grid max-w-7xl gap-7 px-5 py-16 md:grid-cols-[1fr_1.3fr] md:gap-20 md:px-8 md:py-24"><div><p className="eyebrow">A loja</p><h2 className="mt-3 font-serif text-4xl md:text-6xl">Sobre a Fabia Multimarcas</h2></div><div className="self-center space-y-5 text-base leading-relaxed text-muted-foreground"><p>A Fabia Multimarcas é uma loja de roupas parceira do projeto Fashion AI, desenvolvido para auxiliar no atendimento aos clientes.</p><p>O projeto busca responder demandas frequentes e contribuir para uma experiência de atendimento mais ágil, além de apoiar o engajamento e a atração de público.</p><p className="text-sm">Proprietária: <span className="font-medium text-foreground">{storeConfig.proprietaria}</span></p></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="mb-9 max-w-xl"><p className="eyebrow">Moda</p><h2 className="mt-3 font-serif text-4xl md:text-6xl">Explore por categoria</h2></div><div className="grid gap-5 md:grid-cols-2"><CategoryCard title="Masculino" description="Veja o espaço reservado para a moda masculina." image="/images/categorias/masculino.jpg" to="/masculino" /><CategoryCard title="Feminino" description="Veja o espaço reservado para a moda feminina." image="/images/categorias/feminino.jpg" to="/feminino" /></div></section>
    <section className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:gap-20 md:px-8 md:py-24"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Projeto relacionado</p><h2 className="mt-3 font-serif text-5xl md:text-7xl">Fashion AI</h2><p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/80">Uma solução desenvolvida para auxiliar a Fabia Multimarcas no atendimento aos clientes. Seus objetivos são:</p></div><ul className="self-center divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">{goals.map((goal, index) => <li key={goal} className="flex gap-5 py-4 text-sm md:text-base"><span className="text-primary-foreground/50">0{index + 1}</span><span>{goal}</span></li>)}</ul></div></section>
    <section className="bg-surface"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="mb-10"><p className="eyebrow">Catálogo</p><h2 className="mt-3 font-serif text-4xl md:text-6xl">Produtos</h2></div>{featured.length ? <ProductGrid products={featured} /> : <div className="border-t border-border pt-8"><p className="max-w-lg text-sm leading-relaxed text-muted-foreground">As informações dos produtos ainda não foram fornecidas. O catálogo será preenchido quando houver fotos, descrições e preços confirmados.</p><Button asChild variant="outline" className="mt-6"><Link to="/contato">Informações da loja <ArrowRight /></Link></Button></div>}</div></section>
  </main>;
}
