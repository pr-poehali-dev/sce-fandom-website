import { useParams, Link } from 'react-router-dom';
import SCELayout from '@/components/SCELayout';
import ClassificationBadge from '@/components/ClassificationBadge';
import { Separator } from '@/components/ui/separator';
import { FileWarning, Shield, AlertTriangle, Skull, FileText } from 'lucide-react';

const AnomalyDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // В реальном приложении данные будут загружаться из API
  // Это просто пример для демонстрации
  const anomaly = {
    id: id || '001',
    name: 'Кристалл телепортации',
    class: 'Евклид',
    containmentClass: 'Евклид',
    disruptionClass: 'Влаам',
    riskClass: 'Обратимое',
    location: 'Зона 19, Хранилище высокоценных объектов',
    responsible: 'Др. Алексей Петров',
    image: '/placeholder.svg',
    description: 
      'SCE-001 представляет собой тёмно-синий кристалл неправильной формы размером примерно 15x8x6 см и весом 2.3 кг. ' +
      'Материал кристалла не соответствует никаким известным минералам и демонстрирует аномальную молекулярную структуру. ' +
      'При активации SCE-001 способен телепортировать органические материалы на расстояние до 100 метров в произвольном направлении.',
    containment: 
      'SCE-001 должен храниться в свинцовом контейнере с толщиной стенок не менее 5 см, внутри запечатанной камеры размером 3x3x3 м. ' +
      'Комната должна быть окружена вакуумной прослойкой толщиной 1 м для предотвращения случайной телепортации. ' +
      'Доступ к объекту разрешен только персоналу с уровнем допуска 3 и выше после получения разрешения от руководителя проекта.',
    discovery: 
      'SCE-001 был обнаружен 12 марта 2015 года в пещере близ города [УДАЛЕНО], после серии сообщений о странных исчезновениях местных жителей. ' +
      'Операция по изъятию прошла успешно, без жертв. Местным властям сообщили о утечке токсичных веществ.',
    addendum: [
      {
        title: 'Протокол испытаний 001-А',
        content: 'При воздействии электрического тока напряжением свыше 1000В на SCE-001, радиус телепортации увеличивается до 250 метров.'
      },
      {
        title: 'Инцидент 001-1',
        content: 'В результате нарушения протокола безопасности техником █████ 23.07.2017, произошла неконтролируемая активация объекта, в результате которой погибло трое сотрудников.'
      }
    ]
  };

  return (
    <SCELayout>
      <div>
        {/* Навигационная цепочка */}
        <div className="text-sm text-sce-darkgray mb-4">
          <Link to="/" className="hover:text-sce-red">Главная</Link> &gt; {' '}
          <Link to="/anomalies" className="hover:text-sce-red">Аномалии</Link> &gt; {' '}
          <span>SCE-{anomaly.id}</span>
        </div>
        
        {/* Заголовок и метки безопасности */}
        <div className="sce-section">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="sce-title">SCE-{anomaly.id}: {anomaly.name}</h1>
            <div className="flex gap-2">
              <ClassificationBadge classification={anomaly.containmentClass} />
              <ClassificationBadge classification={anomaly.disruptionClass} className="bg-blue-600" />
              <ClassificationBadge classification={anomaly.riskClass} className="bg-purple-600" />
            </div>
          </div>
          
          <Separator className="my-4 border-sce-darkgray" />
          
          {/* Основная информация и изображение */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-lg font-bold flex items-center text-sce-red">
                  <Shield className="mr-2 h-5 w-5" /> Основная информация
                </h2>
                <p className="mt-2">{anomaly.description}</p>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-bold flex items-center text-sce-red">
                  <AlertTriangle className="mr-2 h-5 w-5" /> Содержание
                </h2>
                <p className="mt-2">{anomaly.containment}</p>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-bold flex items-center text-sce-red">
                  <FileText className="mr-2 h-5 w-5" /> Обнаружение
                </h2>
                <p className="mt-2">{anomaly.discovery}</p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="border border-sce-darkgray p-2 bg-white">
                <img 
                  src={anomaly.image} 
                  alt={`SCE-${anomaly.id}`} 
                  className="w-full object-cover mb-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                <div className="text-sm text-sce-darkgray">
                  <p><strong>Местоположение:</strong> {anomaly.location}</p>
                  <p><strong>Ответственный:</strong> {anomaly.responsible}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Дополнительная информация */}
        {anomaly.addendum && anomaly.addendum.length > 0 && (
          <div className="mt-6">
            <h2 className="sce-subtitle mb-4">Дополнительная информация</h2>
            {anomaly.addendum.map((item, index) => (
              <div key={index} className="sce-section mb-4">
                <h3 className="text-lg font-bold flex items-center">
                  <FileWarning className="mr-2 h-5 w-5 text-sce-red" /> 
                  {item.title}
                </h3>
                <p className="mt-2">{item.content}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Предупреждение о секретности */}
        <div className="mt-6 bg-sce-red text-white p-4 flex items-center">
          <Skull className="h-8 w-8 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg">СОВЕРШЕННО СЕКРЕТНО</h3>
            <p>Раскрытие информации об аномалии SCE-{anomaly.id} посторонним лицам строго запрещено и карается согласно протоколу "Амнезия".</p>
          </div>
        </div>
      </div>
    </SCELayout>
  );
};

export default AnomalyDetail;