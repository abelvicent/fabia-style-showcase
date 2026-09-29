import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
export function CategoryCard({ title, description, image, to }: { title: string; description: string; image: string; to: "/masculino" | "/feminino" }) {
  return <article className="group relative min-h-[32rem] overflow-hidden bg-surface md:min-h-[42rem]">
    <img src={image} alt={`Coleção ${title.toLowerCase()}`} loading="lazy" width={1008} height={1264} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
    <div className="absolute inset-0 bg-image-shade" />
    <div className="absolute inset-x-0 bottom-0 p-6 text-on-image md:p-9"><p className="text-xs uppercase tracking-[0.22em]">Curadoria Fabia</p><h3 className="mt-2 font-serif text-4xl md:text-5xl">{title}</h3><p className="mt-2 max-w-sm text-sm text-on-image-muted">{description}</p><Button asChild variant="light" className="mt-5"><Link to={to}>Ver coleção <span aria-hidden>→</span></Link></Button></div>
  </article>;
}
