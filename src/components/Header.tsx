import { PopButton } from './PopButton';
import { ComicDots } from './ComicDots';

export const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-pop-orange via-pop-pink to-pop-orange p-6 overflow-hidden">
      <ComicDots size="sm" color="yellow" className="opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="font-comic text-4xl font-black text-white drop-shadow-lg transform -rotate-2">
            POP SHOP! 🎨
          </h1>
          <div className="hidden md:block text-white font-handwritten text-lg animate-wiggle">
            ✨ 超酷潮流店 ✨
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-handwritten text-white text-lg hover:text-pop-yellow transition-colors transform hover:scale-110">
            首页
          </a>
          <a href="#" className="font-handwritten text-white text-lg hover:text-pop-yellow transition-colors transform hover:scale-110">
            商品
          </a>
          <a href="#" className="font-handwritten text-white text-lg hover:text-pop-yellow transition-colors transform hover:scale-110">
            关于
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <PopButton size="sm" variant="accent" className="hidden md:block">
            购物车 🛒
          </PopButton>
          <PopButton size="sm" variant="secondary">
            登录
          </PopButton>
        </div>
      </div>
    </header>
  );
};