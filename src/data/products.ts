export type ProductCategory = "masculino" | "feminino";
export type ProductType = "camisas" | "calças" | "shorts" | "blusas" | "vestidos" | "outros";

export interface Product {
  id: number;
  nome: string;
  marca: string;
  categoria: ProductCategory;
  tipo: ProductType;
  descricao: string;
  preco: number;
  imagem: string;
  imagens: string[];
  tamanhos: string[];
  disponibilidade: boolean;
  destaque: boolean;
}

export const products: Product[] = [
  { id: 1, nome: "Camisa Essencial Vinho", marca: "Lume", categoria: "masculino", tipo: "camisas", descricao: "Camisa de corte contemporâneo em tecido macio, feita para transitar do trabalho aos encontros do fim de semana.", preco: 189.9, imagem: "/images/produtos/camisa-vinho.jpg", imagens: ["/images/produtos/camisa-vinho.jpg", "/images/categorias/masculino.jpg"], tamanhos: ["P", "M", "G", "GG"], disponibilidade: true, destaque: true },
  { id: 2, nome: "Calça Alfaiataria Grafite", marca: "Vértice", categoria: "masculino", tipo: "calças", descricao: "Alfaiataria precisa, caimento reto e acabamento premium para composições sofisticadas.", preco: 259.9, imagem: "/images/produtos/calca-grafite.jpg", imagens: ["/images/produtos/calca-grafite.jpg", "/images/categorias/masculino.jpg"], tamanhos: ["38", "40", "42", "44"], disponibilidade: true, destaque: true },
  { id: 3, nome: "Polo Tricot Off-white", marca: "Nero", categoria: "masculino", tipo: "camisas", descricao: "Polo em tricot leve com toque agradável e visual refinado para os dias de meia-estação.", preco: 219.9, imagem: "/images/produtos/polo-offwhite.jpg", imagens: ["/images/produtos/polo-offwhite.jpg", "/images/categorias/masculino.jpg"], tamanhos: ["P", "M", "G"], disponibilidade: true, destaque: false },
  { id: 4, nome: "Short Alfaiataria Preto", marca: "Orbe", categoria: "masculino", tipo: "shorts", descricao: "Short estruturado e versátil, com acabamento limpo e conforto para produções casuais.", preco: 149.9, imagem: "/images/produtos/short-preto.jpg", imagens: ["/images/produtos/short-preto.jpg", "/images/categorias/masculino.jpg"], tamanhos: ["38", "40", "42", "44"], disponibilidade: true, destaque: false },
  { id: 5, nome: "Blusa Cetim Bordô", marca: "Auréa", categoria: "feminino", tipo: "blusas", descricao: "Blusa fluida em cetim com brilho discreto e mangas elegantes para ocasiões especiais.", preco: 179.9, imagem: "/images/produtos/blusa-vinho.jpg", imagens: ["/images/produtos/blusa-vinho.jpg", "/images/categorias/feminino.jpg"], tamanhos: ["P", "M", "G"], disponibilidade: true, destaque: true },
  { id: 6, nome: "Vestido Midi Noir", marca: "Maison F", categoria: "feminino", tipo: "vestidos", descricao: "Vestido midi de linhas puras e cintura marcada, uma peça atemporal para um guarda-roupa elegante.", preco: 329.9, imagem: "/images/produtos/vestido-preto.jpg", imagens: ["/images/produtos/vestido-preto.jpg", "/images/categorias/feminino.jpg"], tamanhos: ["PP", "P", "M", "G"], disponibilidade: true, destaque: true },
  { id: 7, nome: "Calça Pantalona Marfim", marca: "Essenza", categoria: "feminino", tipo: "calças", descricao: "Pantalona de cintura alta com movimento fluido e acabamento impecável.", preco: 249.9, imagem: "/images/produtos/calca-offwhite.jpg", imagens: ["/images/produtos/calca-offwhite.jpg", "/images/categorias/feminino.jpg"], tamanhos: ["36", "38", "40", "42"], disponibilidade: true, destaque: false },
  { id: 8, nome: "Short Alfaiataria Bordô", marca: "Auréa", categoria: "feminino", tipo: "shorts", descricao: "Short de alfaiataria com pregas frontais, conforto e presença em uma cor assinatura.", preco: 169.9, imagem: "/images/produtos/short-vinho.jpg", imagens: ["/images/produtos/short-vinho.jpg", "/images/categorias/feminino.jpg"], tamanhos: ["36", "38", "40", "42"], disponibilidade: false, destaque: false },
];

export const getProductById = (id: number) => products.find((product) => product.id === id);
