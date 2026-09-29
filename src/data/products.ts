export type ProductCategory = "masculino" | "feminino";
export type ProductType = "camisas" | "calças" | "shorts" | "blusas" | "vestidos" | "outros";

export interface Product {
  id: number;
  nome: string;
  marca: string;
  categoria: ProductCategory;
  tipo: ProductType;
  descricao: string;
  preco: number | null;
  imagem: string;
  imagens: string[];
  tamanhos: string[];
  disponibilidade: boolean | null;
  destaque: boolean;
}

// O catálogo começa vazio: não publicar marcas, peças, preços ou estoque fictícios.
// Cada produto real pode ser acrescentado aqui quando os dados forem fornecidos.
export const products: Product[] = [];

export const getProductById = (id: number) => products.find((product) => product.id === id);
