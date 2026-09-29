import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/utils/format";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <Link to="/produto/$id" params={{ id: String(product.id) }} className="block overflow-hidden bg-surface">
        <img src={product.imagem} alt={product.nome} loading="lazy" width={600} height={760} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div><p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">{product.marca} · {product.tipo}</p><h3 className="mt-1 font-serif text-xl leading-tight">{product.nome}</h3></div>
           <p className="shrink-0 text-sm font-semibold">{product.preco === null ? "Preço a confirmar" : formatPrice(product.preco)}</p>
        </div>
        <Button asChild variant="link" className="mt-2 h-auto px-0 text-xs uppercase tracking-[0.14em]"><Link to="/produto/$id" params={{ id: String(product.id) }}>Ver produto <span aria-hidden>→</span></Link></Button>
      </div>
    </article>
  );
}
