import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { PopButton } from '@/components/PopButton';
import { ComicDots } from '@/components/ComicDots';

const mockProducts = [
  {
    id: 1,
    name: "波普艺术T恤",
    price: "¥299",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "服装",
    isNew: true
  },
  {
    id: 2,
    name: "彩虹帆布包",
    price: "¥189",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "配饰"
  },
  {
    id: 3,
    name: "复古海报画",
    price: "¥599",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    category: "艺术品",
    isNew: true
  },
  {
    id: 4,
    name: "潮流棒球帽",
    price: "¥159",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    category: "配饰"
  },
  {
    id: 5,
    name: "漫画风手机壳",
    price: "¥89",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
    category: "数码"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pop-orange via-pop-pink to-pop-purple">
      <Header />
      <Hero />
      
      {/* Products Section */}
      <section className="relative py-20 bg-gradient-to-r from-pop-yellow via-white to-pop-blue">
        <ComicDots size="lg" color="orange" className="opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-comic text-5xl font-black text-comic-black transform -rotate-1 drop-shadow-lg mb-4">
              🔥 热门商品 🔥
            </h2>
            <p className="font-handwritten text-xl text-comic-black/80 max-w-2xl mx-auto">
              精心挑选的波普艺术风格商品，每一件都充满创意与个性！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="animate-bounce-in" style={{ animationDelay: `${product.id * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <PopButton variant="primary" size="lg">
              🛍️ 查看全部商品
            </PopButton>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 bg-gradient-to-r from-pop-purple via-pop-pink to-pop-orange">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-comic text-4xl font-black text-white mb-12 transform rotate-1 drop-shadow-lg">
            🎯 热门分类 🎯
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["服装", "配饰", "艺术品", "数码"].map((category, index) => (
              <div key={category} className="group">
                <div className="bg-white rounded-2xl border-4 border-comic-black p-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-xl">
                  <div className="text-4xl mb-4">
                    {index === 0 && "👕"}
                    {index === 1 && "👜"}
                    {index === 2 && "🎨"}
                    {index === 3 && "📱"}
                  </div>
                  <h3 className="font-handwritten text-xl font-bold text-comic-black">
                    {category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-comic-black text-white py-16 relative overflow-hidden">
        <ComicDots size="sm" color="pink" className="opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-comic text-3xl font-black mb-4 transform -rotate-1">
            POP SHOP! 🎨
          </h3>
          <p className="font-handwritten text-lg mb-8">
            让艺术点亮生活，让潮流成为态度！
          </p>
          
          <div className="flex justify-center space-x-6 text-2xl">
            <span className="animate-bounce">🌟</span>
            <span className="animate-pulse">💫</span>
            <span className="animate-wiggle">⚡</span>
            <span className="animate-bounce">🎯</span>
            <span className="animate-pulse">🔥</span>
          </div>
          
          <div className="mt-8 text-sm opacity-80 font-handwritten">
            © 2024 Pop Shop. 用艺术创造美好生活 ✨
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;