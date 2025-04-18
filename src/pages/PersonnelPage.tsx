import SCELayout from '@/components/SCELayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PersonnelPage = () => {
  const departments = [
    {
      id: 'scientific',
      name: 'Научный отдел',
      description: 'Отвечает за исследование и классификацию аномальных объектов.',
      personnel: [
        { id: 1, name: 'Д-р Александра Морозова', role: 'Директор научного отдела', status: 'Уровень 5', image: '/placeholder.svg' },
        { id: 2, name: 'Проф. Виктор Семенов', role: 'Ведущий исследователь', status: 'Уровень 4', image: '/placeholder.svg' },
        { id: 3, name: 'Д-р Ирина Петрова', role: 'Специалист по аномальной физике', status: 'Уровень 3', image: '/placeholder.svg' }
      ]
    },
    {
      id: 'security',
      name: 'Служба безопасности',
      description: 'Обеспечивает защиту персонала и объектов SCE Foundation.',
      personnel: [
        { id: 4, name: 'Полковник Игорь Волков', role: 'Глава службы безопасности', status: 'Уровень 5', image: '/placeholder.svg' },
        { id: 5, name: 'Майор Наталья Соколова', role: 'Командир оперативной группы "Зенит"', status: 'Уровень 4', image: '/placeholder.svg' },
        { id: 6, name: 'Капитан Сергей Орлов', role: 'Начальник охраны Комплекса Омега', status: 'Уровень 3', image: '/placeholder.svg' }
      ]
    },
    {
      id: 'administration',
      name: 'Административный отдел',
      description: 'Отвечает за координацию деятельности и распределение ресурсов.',
      personnel: [
        { id: 7, name: 'Директор Анатолий Крылов', role: 'Генеральный директор SCE', status: 'Уровень 5', image: '/placeholder.svg' },
        { id: 8, name: 'Елена Михайлова', role: 'Начальник отдела кадров', status: 'Уровень 4', image: '/placeholder.svg' },
        { id: 9, name: 'Дмитрий Васильев', role: 'Руководитель логистики', status: 'Уровень 3', image: '/placeholder.svg' }
      ]
    }
  ];

  return (
    <SCELayout>
      <div className="sce-section py-8">
        <h1 className="sce-title mb-6">Персонал SCE Foundation</h1>
        <p className="mb-8">
          Специалисты Фонда SCE — ключевой ресурс в изучении и контроле аномальных явлений. Каждый сотрудник прошел тщательный отбор и обладает высоким уровнем квалификации в своей области.
        </p>

        <Tabs defaultValue="scientific" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {departments.map(dept => (
              <TabsTrigger key={dept.id} value={dept.id} className="text-sm md:text-base">
                {dept.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map(dept => (
            <TabsContent key={dept.id} value={dept.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-sce-red mb-2">{dept.name}</h2>
                <p className="text-sce-darkgray">{dept.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.personnel.map(person => (
                  <Card key={person.id} className="border-sce-red/20 hover:border-sce-red transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="h-16 w-16 border-2 border-sce-red/20">
                        <AvatarImage src={person.image} alt={person.name} />
                        <AvatarFallback className="bg-sce-red/10 text-sce-red">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{person.name}</CardTitle>
                        <p className="text-sm text-sce-darkgray">{person.role}</p>
                        <Badge variant="outline" className="mt-1 bg-sce-red/10 text-sce-red">
                          {person.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sce-darkgray text-sm">
                        Авторизованный сотрудник SCE Foundation. Подробное личное дело доступно по запросу в Административном отделе.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SCELayout>
  );
};

export default PersonnelPage;