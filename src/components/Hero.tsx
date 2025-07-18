import { PopButton } from './PopButton';
import { ComicDots } from './ComicDots';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pop-pink via-pop-orange to-pop-yellow min-h-[500px] flex items-center overflow-hidden">
      <ComicDots size="md" color="blue" className="opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div className="transform animate-bounce-in">
            <h1 className="font-comic text-6xl md:text-8xl font-black text-white drop-shadow-2xl transform -rotate-2">
              POW! 💥
            </h1>
            <h2 className="font-handwritten text-3xl md:text-5xl text-white mt-4 transform rotate-1">
              超级潮流来袭！
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-6 border-comic-black p-8 max-w-2xl mx-auto transform rotate-1 shadow-2xl">
            <p className="font-handwritten text-xl md:text-2xl text-comic-black font-bold leading-relaxed">
              🎨 发现最酷的波普艺术风格商品 <br />
              🌟 每一件都是独一无二的艺术品 <br />
              ⚡ 让你的生活充满色彩与活力！
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <PopButton variant="accent" size="lg">
              🚀 开始购物
            </PopButton>
            <PopButton variant="secondary" size="lg" bounce={false}>
              📱 查看新品
            </PopButton>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-spin">⭐</div>
      <div className="absolute bottom-10 right-10 text-5xl animate-bounce">🎯</div>
      <div className="absolute top-1/2 left-5 text-4xl animate-wiggle">💫</div>
      <div className="absolute top-1/4 right-1/4 text-3xl animate-pulse">🔥</div>
    </section>
  );
};