import { Link } from 'react-router-dom';
import SCELayout from '@/components/SCELayout';
import { ShieldAlert } from 'lucide-react';

const NotFound = () => {
  return (
    <SCELayout>
      <div className="sce-section flex flex-col items-center justify-center py-12">
        <ShieldAlert className="text-sce-red w-16 h-16 mb-4" />
        <h1 className="sce-title mb-4">ОБЪЕКТ НЕ ОБНАРУЖЕН</h1>
        <p className="text-center mb-6 max-w-lg">
          Запрашиваемый документ не существует в базе данных фонда SCE или был перемещён в архив с ограниченным доступом.
        </p>
        <p className="text-center text-sce-darkred mb-8">
          Код ошибки: SCE-404-OBJECT-MISSING
        </p>
        <Link to="/" className="sce-button">
          Вернуться на главную
        </Link>
      </div>
    </SCELayout>
  );
};

export default NotFound;