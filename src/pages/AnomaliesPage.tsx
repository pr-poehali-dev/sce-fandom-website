import { useState } from 'react';
import SCELayout from '@/components/SCELayout';
import AnomalyCard from '@/components/AnomalyCard';
import { getAnomalies } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AnomaliesPage = () => {
  const allAnomalies = getAnomalies();
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('');

  // Фильтрация аномалий
  const filteredAnomalies = allAnomalies.filter(anomaly => {
    const matchesSearch = 
      anomaly.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.id.includes(searchTerm);
    
    const matchesClass = classFilter ? 
      anomaly.class.toLowerCase() === classFilter.toLowerCase() : 
      true;
      
    return matchesSearch && matchesClass;
  });

  return (
    <SCELayout>
      <h1 className="sce-title mb-6">Каталог аномалий</h1>
      
      {/* Фильтры и поиск */}
      <div className="sce-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Поиск аномалий</label>
            <Input
              type="text"
              placeholder="Введите номер или название аномалии..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-sce-darkgray"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Класс объекта</label>
            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Все классы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все классы</SelectItem>
                <SelectItem value="безопасный">Безопасный</SelectItem>
                <SelectItem value="евклид">Евклид</SelectItem>
                <SelectItem value="кетер">Кетер</SelectItem>
                <SelectItem value="нейтрализован">Нейтрализован</SelectItem>
                <SelectItem value="таумиэль">Таумиэль</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Результаты */}
      <div className="mt-6">
        <p className="mb-4 text-sce-darkgray">Найдено аномалий: {filteredAnomalies.length}</p>
        
        {filteredAnomalies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnomalies.map(anomaly => (
              <AnomalyCard
                key={anomaly.id}
                id={anomaly.id}
                name={anomaly.name}
                class={anomaly.class}
                thumbnail={anomaly.thumbnail}
                shortDescription={anomaly.shortDescription}
              />
            ))}
          </div>
        ) : (
          <div className="sce-section text-center py-10">
            <p className="text-lg">По вашему запросу ничего не найдено.</p>
            <p className="text-sm text-sce-darkgray mt-2">Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </SCELayout>
  );
};

export default AnomaliesPage;