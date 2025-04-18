import { Link } from 'react-router-dom';

const SCEFooter = () => {
  return (
    <footer className="bg-sce-black text-white py-6 mt-8">
      <div className="sce-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">SCE Foundation</h3>
            <p className="text-sm">Secure. Control. Explore.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} SCE Foundation</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Быстрые ссылки</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-sce-red">Главная</Link></li>
              <li><Link to="/anomalies" className="hover:text-sce-red">Аномалии</Link></li>
              <li><Link to="/stories" className="hover:text-sce-red">Рассказы</Link></li>
              <li><Link to="/personnel" className="hover:text-sce-red">Персонал</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Для персонала</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/login" className="hover:text-sce-red">Вход в систему</Link></li>
              <li><Link to="/regulations" className="hover:text-sce-red">Правила фонда</Link></li>
              <li><Link to="/contact" className="hover:text-sce-red">Связаться с нами</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-sce-darkgray text-center text-xs">
          <p>Данный сайт предназначен для развлекательных целей. Все описанные аномалии, персонал и объекты вымышлены.</p>
          <p className="mt-2">Фанд SCE Foundation вдохновлен SCP Foundation, но является независимым творческим проектом.</p>
        </div>
      </div>
    </footer>
  );
};

export default SCEFooter;