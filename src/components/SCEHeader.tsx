import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SCEHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b-2 border-sce-red">
      <div className="sce-container">
        {/* Верхний баннер */}
        <div className="py-4 flex flex-col items-center">
          <Link to="/" className="block">
            <h1 className="text-4xl font-bold text-sce-red">SCE FOUNDATION</h1>
            <p className="text-center text-sce-darkgray">Secure. Control. Explore.</p>
          </Link>
        </div>
        
        {/* Мобильная навигация */}
        <div className="md:hidden flex justify-end py-2">
          <button onClick={toggleMenu} className="text-sce-red">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Навигационное меню */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-sce-gray md:bg-transparent py-2`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0">
            <li><Link to="/" className="sce-nav-link">Главная</Link></li>
            <li><Link to="/anomalies" className="sce-nav-link">Аномалии</Link></li>
            <li><Link to="/stories" className="sce-nav-link">Рассказы</Link></li>
            <li><Link to="/personnel" className="sce-nav-link">Персонал</Link></li>
            <li><Link to="/facilities" className="sce-nav-link">Объекты</Link></li>
            <li><Link to="/protocols" className="sce-nav-link">Протоколы</Link></li>
            <li><Link to="/news" className="sce-nav-link">Новости</Link></li>
            <li><Link to="/about" className="sce-nav-link">О Фонде</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SCEHeader;