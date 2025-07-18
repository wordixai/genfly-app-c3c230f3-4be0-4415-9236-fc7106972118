export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "波普艺术T恤",
    price: "¥299",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "服饰"
  },
  {
    id: 2,
    name: "复古太阳镜",
    price: "¥199",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    category: "配饰"
  },
  {
    id: 3,
    name: "彩色帆布包",
    price: "¥159",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "包包"
  },
  {
    id: 4,
    name: "波普风运动鞋",
    price: "¥599",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "鞋子"
  },
  {
    id: 5,
    name: "艺术印花连衣裙",
    price: "¥399",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    category: "服饰"
  }
];