import { Link } from 'react-router-dom';

interface AnomalyCardProps {
  id: string;
  name: string;
  class: string;
  thumbnail?: string;
  shortDescription: string;
}

const AnomalyCard = ({ id, name, class: anomalyClass, thumbnail, shortDescription }: AnomalyCardProps) => {
  // Цвета классификации аномалий
  const classColors: Record<string, string> = {
    безопасный: 'bg-green-700',
    евклид: 'bg-amber-500',
    кетер: 'bg-red-600',
    нейтрализован: 'bg-gray-500',
    таумиэль: 'bg-purple-700',
    неклассифицировано: 'bg-blue-600',
  };

  const bgColor = classColors[anomalyClass.toLowerCase()] || 'bg-blue-600';

  return (
    <div className="border border-sce-darkgray bg-white">
      <div className={`${bgColor} text-white p-2 font-bold flex justify-between items-center`}>
        <span>SCE-{id}</span>
        <span>{anomalyClass}</span>
      </div>
      <div className="p-4">
        {thumbnail && (
          <div className="mb-3">
            <img 
              src={thumbnail} 
              alt={`SCE-${id}`} 
              className="w-full h-48 object-cover border border-sce-darkgray"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm mb-4">{shortDescription}</p>
        <Link to={`/anomaly/${id}`} className="sce-button inline-block text-center">
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default AnomalyCard;