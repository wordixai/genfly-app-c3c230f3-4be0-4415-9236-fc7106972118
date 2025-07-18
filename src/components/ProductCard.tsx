import { PopFrame } from './PopFrame';
import { PopButton } from './PopButton';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <PopFrame variant="primary" size="md" className="hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
          {product.isNew && (
            <div className="absolute -top-3 -right-3 z-20 bg-pop-yellow text-comic-black font-comic font-black px-3 py-1 rounded-full border-3 border-comic-black transform rotate-12 animate-bounce-in">
              NEW!
            </div>
          )}
          
          <div className="aspect-square overflow-hidden rounded-lg border-4 border-comic-black relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-4 space-y-3">
            <div className="text-center">
              <span className="inline-block bg-pop-blue text-white px-3 py-1 rounded-full text-sm font-handwritten font-bold transform -rotate-1">
                {product.category}
              </span>
            </div>
            
            <h3 className="font-comic text-xl font-black text-comic-black text-center transform hover:scale-105 transition-transform">
              {product.name}
            </h3>
            
            <div className="text-center">
              <span className="font-handwritten text-2xl font-black text-pop-orange drop-shadow-lg">
                {product.price}
              </span>
            </div>

            <div className="flex gap-2 pt-2">
              <PopButton 
                variant="primary" 
                size="sm" 
                className="flex-1"
                bounce={false}
              >
                加入购物车
              </PopButton>
              <PopButton 
                variant="accent" 
                size="sm"
                bounce={false}
                className="shrink-0"
              >
                ❤️
              </PopButton>
            </div>
          </div>
        </div>
      </PopFrame>
    </div>
  );
};