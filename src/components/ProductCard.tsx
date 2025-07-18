import { motion } from 'framer-motion';
import PopButton from './PopButton';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="pop-frame bg-white p-6 m-4 max-w-sm"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden border-4 border-black mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full handwritten text-sm font-bold border-2 border-black">
          {product.category}
        </div>
      </div>
      
      <h3 className="handwritten text-2xl font-bold text-gray-800 mb-2 transform -rotate-1">
        {product.name}
      </h3>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent handwritten">
          {product.price}
        </span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
      
      <PopButton variant="primary" size="md" className="w-full">
        加入购物车！
      </PopButton>
    </motion.div>
  );
};

export default ProductCard;