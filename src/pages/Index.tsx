import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* 热门商品区域 */}
      <section className="py-20 bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 pop-dots">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="handwritten text-5xl font-bold text-gray-800 mb-4 transform -rotate-1">
              🔥 热门商品 🔥
            </h2>
            <p className="text-xl text-gray-700 font-bold">
              最受欢迎的波普艺术单品
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className="py-20 comic-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="bg-white p-12 pop-frame max-w-2xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="handwritten text-4xl font-bold text-gray-800 mb-6 transform rotate-1">
              加入POP SHOP大家庭！
            </h3>
            <p className="text-xl text-gray-700 mb-8 font-bold">
              订阅我们的newsletter，获取最新波普艺术商品信息
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="输入你的邮箱"
                className="flex-1 px-4 py-3 border-4 border-black handwritten text-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
              />
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 border-4 border-black handwritten text-lg font-bold hover:from-orange-600 hover:to-pink-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                订阅！
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-orange-600 text-white py-12 pop-dots-pink">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="handwritten text-3xl font-bold mb-4 transform -rotate-1">
              POP SHOP
            </h4>
            <p className="text-lg font-bold mb-4">
              让生活充满色彩，让时尚更有趣味！
            </p>
            <div className="flex justify-center space-x-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;