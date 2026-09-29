import { useState } from "react";
import type { ProductCategory, ProductType } from "@/data/products";
import { products } from "@/data/products";
import { ProductGrid } from "./ProductGrid";
import { Button } from "@/components/ui/button";

export function CatalogPage({ category, title, intro, filters }: { category: ProductCategory; title: string; intro: string; filters: { label: string; value: "todos" | ProductType }[] }) {
 const [active, setActive] = useState<"todos" | ProductType>("todos");
 const items = products.filter((p) => p.categoria === category && (active === "todos" || p.tipo === active));
  return <main><section className="border-b border-border bg-surface"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><p className="eyebrow">Moda</p><h1 className="mt-3 font-serif text-5xl md:text-7xl">{title}</h1><p className="mt-4 max-w-xl text-muted-foreground">{intro}</p></div></section><section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">{products.some((p) => p.categoria === category) && <div className="mb-10 flex gap-2 overflow-x-auto pb-2" aria-label="Filtros de produtos">{filters.map((filter) => <Button key={filter.value} variant={active === filter.value ? "default" : "outline"} onClick={() => setActive(filter.value)} className="shrink-0">{filter.label}</Button>)}</div>}{items.length ? <ProductGrid products={items} /> : <div className="border-t border-border py-20"><p className="eyebrow">Catálogo</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Produtos a adicionar</h2><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">As informações de peças, marcas, tamanhos, preços e disponibilidade ainda não foram fornecidas.</p></div>}</section></main>;
}
