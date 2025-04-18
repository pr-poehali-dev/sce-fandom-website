import SCELayout from '@/components/SCELayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Shield, Lock, Map } from 'lucide-react';

const FacilitiesPage = () => {
  const facilities = [
    {
      id: 1,
      name: 'Комплекс Альфа',
      type: 'Исследовательский центр',
      securityLevel: 'Максимальный',
      location: 'Центральная Россия',
      description: 'Основной исследовательский комплекс, специализирующийся на изучении аномалий класса "Кетер". Оснащен лабораториями повышенной безопасности и системами аварийного уничтожения.',
      containedObjects: ['SCE-1099', 'SCE-1245', 'SCE-1302'],
      status: 'Активен'
    },
    {
      id: 2,
      name: 'Сектор-17',
      type: 'Хранилище',
      securityLevel: 'Высокий',
      location: 'Сибирь',
      description: 'Подземное хранилище с системой криогенных камер для содержания нестабильных аномальных объектов. Автономная система жизнеобеспечения рассчитана на 5 лет изоляции.',
      containedObjects: ['SCE-1112', 'SCE-1320', 'SCE-1487'],
      status: 'Активен'
    },
    {
      id: 3,
      name: 'Оазис',
      type: 'Полевая база',
      securityLevel: 'Стандартный',
      location: 'Северный Кавказ',
      description: 'Мобильная полевая база для оперативной группы "Горизонт". Предназначена для обнаружения и первичного изучения новых аномалий в регионе.',
      containedObjects: [],
      status: 'Активен'
    }
  ];

  return (
    <SCELayout>
      <div className="sce-section py-8">
        <h1 className="sce-title mb-6">Объекты фонда SCE</h1>
        <p className="mb-8">
          Фонд SCE поддерживает сеть специализированных объектов для исследования, содержания и хранения аномальных материалов. 
          Каждый объект спроектирован с учетом специфики содержащихся в нем аномалий и оснащен необходимыми системами безопасности.
        </p>

        <div className="space-y-8">
          {facilities.map(facility => (
            <Card key={facility.id} className="border-sce-red/20 hover:border-sce-red transition-colors">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge 
                    variant="outline" 
                    className={`
                      ${facility.securityLevel === 'Максимальный' ? 'bg-sce-red/20 text-sce-red' : 
                        facility.securityLevel === 'Высокий' ? 'bg-amber-100 text-amber-800' : 
                        'bg-green-100 text-green-800'}
                    `}
                  >
                    {facility.securityLevel} уровень безопасности
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="bg-sce-red/10 text-sce-red"
                  >
                    {facility.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{facility.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-sce-darkgray" />
                    <span>{facility.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="h-5 w-5 mr-2 text-sce-darkgray" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-sce-darkgray" />
                    <span>Допуск: {facility.securityLevel}</span>
                  </div>
                </div>

                <p className="text-sce-darkgray">{facility.description}</p>

                {facility.containedObjects.length > 0 && (
                  <div>
                    <div className="flex items-center mb-2">
                      <Lock className="h-5 w-5 mr-2 text-sce-red" />
                      <h3 className="font-bold">Содержащиеся объекты:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {facility.containedObjects.map((obj, index) => (
                        <Badge key={index} className="bg-sce-red/10 text-sce-red border-sce-red/20">
                          {obj}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SCELayout>
  );
};

export default FacilitiesPage;