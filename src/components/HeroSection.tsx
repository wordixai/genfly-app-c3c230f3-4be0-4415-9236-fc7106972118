import { motion } from 'framer-motion';
import PopButton from './PopButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-400 via-orange-400 to-pink-500 pop-dots overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="handwritten text-6xl lg:text-8xl font-bold text-white mb-6 transform -rotate-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              POP ART
              <br />
              时尚潮流！
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-white mb-8 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              发现最酷炫的波普艺术风格商品
              <br />
              让你的生活充满色彩与活力！
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <PopButton variant="primary" size="lg">
                🛍️ 开始购物
              </PopButton>
              <PopButton variant="secondary" size="lg">
                🎨 查看艺术品
              </PopButton>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="pop-frame bg-white p-8"
              animate={{ rotate: [1, -1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop"
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center"
              animate={{ y: [0, -20, 0], rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="handwritten text-2xl font-bold">WOW!</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full border-4 border-black"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pop-dots-pink opacity-20"></div>
    </section>
  );
};

export default HeroSection;