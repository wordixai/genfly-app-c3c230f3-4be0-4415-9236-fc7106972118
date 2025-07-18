import { motion } from 'framer-motion';
import { ShoppingCart, Search, Heart } from 'lucide-react';
import PopButton from './PopButton';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 p-6 pop-dots overflow-hidden">
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="handwritten text-4xl font-bold text-white transform -rotate-2"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            POP SHOP
          </motion.h1>
          <div className="w-8 h-8 bg-yellow-300 rounded-full border-4 border-black float-animation"></div>
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          {['首页', '潮流服饰', '艺术品', '配饰'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="handwritten text-white text-lg font-bold hover:text-yellow-300 transition-colors transform hover:-rotate-1"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        <motion.div 
          className="flex space-x-4 items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Search className="w-6 h-6 text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Heart className="w-6 h-6 text-white cursor-pointer" />
          </motion.div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-black">
              3
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pop-dots-pink opacity-30"></div>
    </header>
  );
};

export default Header;