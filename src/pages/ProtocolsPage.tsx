import SCELayout from '@/components/SCELayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileWarning, Shield, AlertTriangle, 
  FileText, Clock, ArrowRight 
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ProtocolsPage = () => {
  const protocols = [
    {
      id: 'containment',
      title: 'Протоколы содержания',
      icon: <Shield className="h-6 w-6 text-sce-red" />,
      description: 'Стандартные процедуры для безопасного содержания аномальных объектов различных классов.',
      items: [
        {
          id: 'content-1',
          title: 'Протокол "Стражник"',
          level: 'Уровень 2',
          description: 'Стандартные процедуры содержания для аномалий класса "Безопасный". Включает базовые меры безопасности, мониторинг и ограниченный доступ исследовательского персонала.',
          lastUpdate: '12.04.2023'
        },
        {
          id: 'content-2',
          title: 'Протокол "Щит"',
          level: 'Уровень 3',
          description: 'Усиленные процедуры содержания для аномалий класса "Евклид". Требует специализированного оборудования, расширенных систем безопасности и мониторинга в реальном времени.',
          lastUpdate: '05.03.2023'
        },
        {
          id: 'content-3',
          title: 'Протокол "Цербер"',
          level: 'Уровень 5',
          description: 'Протоколы максимальной изоляции для аномалий класса "Кетер". Включает многоуровневую систему сдерживания, автоматизированную защиту и процедуры аварийного уничтожения.',
          lastUpdate: '22.02.2023'
        }
      ]
    },
    {
      id: 'emergency',
      title: 'Протоколы чрезвычайных ситуаций',
      icon: <AlertTriangle className="h-6 w-6 text-sce-red" />,
      description: 'Процедуры реагирования на нарушения содержания и другие чрезвычайные ситуации.',
      items: [
        {
          id: 'emergency-1',
          title: 'Протокол "Красный рассвет"',
          level: 'Уровень 4',
          description: 'Действия при нарушении содержания объектов класса "Евклид". Включает процедуры эвакуации персонала, локализации зоны прорыва и мобилизации оперативных групп.',
          lastUpdate: '18.05.2023'
        },
        {
          id: 'emergency-2',
          title: 'Протокол "Омега"',
          level: 'Уровень 5',
          description: 'План действий при катастрофическом нарушении содержания объектов класса "Кетер". Включает протоколы ликвидации объекта, комплекса и всех материалов.',
          lastUpdate: '03.04.2023'
        },
        {
          id: 'emergency-3',
          title: 'Протокол "Аврора"',
          level: 'Уровень 5',
          description: 'Процедуры реагирования на сценарии конца света, вызванные аномальными явлениями. Включает активацию последнего убежища и меры по сохранению знаний человечества.',
          lastUpdate: '15.01.2023'
        }
      ]
    },
    {
      id: 'research',
      title: 'Исследовательские протоколы',
      icon: <FileText className="h-6 w-6 text-sce-red" />,
      description: 'Стандартизированные методы исследования аномальных объектов и явлений.',
      items: [
        {
          id: 'research-1',
          title: 'Протокол "Наблюдатель"',
          level: 'Уровень 1',
          description: 'Базовые процедуры первичного изучения и классификации новых аномальных объектов. Включает методы безопасного документирования и предварительной оценки.',
          lastUpdate: '20.05.2023'
        },
        {
          id: 'research-2',
          title: 'Протокол "Хранитель знаний"',
          level: 'Уровень 3',
          description: 'Методы безопасного изучения аномальных информационных объектов. Включает меры противодействия когнитивным опасностям и процедуры защиты исследователей.',
          lastUpdate: '09.04.2023'
        },
        {
          id: 'research-3',
          title: 'Протокол "Янус"',
          level: 'Уровень 4',
          description: 'Процедуры для исследования пространственно-временных аномалий. Включает методы стабилизации порталов и защиты от парадоксальных эффектов.',
          lastUpdate: '27.03.2023'
        }
      ]
    }
  ];

  return (
    <SCELayout>
      <div className="sce-section py-8">
        <div className="flex items-center mb-6">
          <FileWarning className="h-8 w-8 text-sce-red mr-3" />
          <h1 className="sce-title">Протоколы SCE Foundation</h1>
        </div>
        <p className="mb-8">
          Протоколы SCE Foundation — это стандартизированные наборы процедур, разработанные для обеспечения 
          безопасной работы с аномальными объектами. Соблюдение протоколов обязательно для всего персонала.
        </p>

        <div className="space-y-8">
          {protocols.map(category => (
            <Card key={category.id} className="border-sce-red/20">
              <CardHeader>
                <div className="flex items-center">
                  {category.icon}
                  <CardTitle className="ml-3 text-2xl font-bold">{category.title}</CardTitle>
                </div>
                <p className="text-sce-darkgray">{category.description}</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map(protocol => (
                    <AccordionItem key={protocol.id} value={protocol.id} className="border-sce-red/10">
                      <AccordionTrigger className="hover:text-sce-red">
                        <div className="flex items-center text-left">
                          <span className="font-bold">{protocol.title}</span>
                          <Badge className="ml-3 bg-sce-red/10 text-sce-red">
                            {protocol.level}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 pl-4 border-l-2 border-sce-red/20">
                          <p className="text-sce-darkgray mb-3">
                            {protocol.description}
                          </p>
                          <div className="flex items-center text-sm text-sce-darkgray">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Последнее обновление: {protocol.lastUpdate}</span>
                          </div>
                          <div className="mt-4">
                            <button className="flex items-center text-sce-red hover:underline">
                              <span className="mr-1">Запросить полный текст протокола</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SCELayout>
  );
};

export default ProtocolsPage;