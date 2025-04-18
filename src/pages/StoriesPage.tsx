import SCELayout from '@/components/SCELayout';
import { Bookmark, File, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StoriesPage = () => {
  const stories = [
    {
      id: 1,
      title: 'Последний день',
      classification: 'Уровень 2',
      author: 'Д-р Харисон',
      date: '22.04.2023',
      description: 'Отчет о событиях в Комплексе Альфа во время последнего инцидента с SCE-1024.',
      tags: ['аномалия', 'хоррор', 'выживание']
    },
    {
      id: 2,
      title: 'Красный рассвет',
      classification: 'Уровень 3',
      author: 'Агент Волков',
      date: '15.03.2023',
      description: 'Полевой отчет оперативной группы "Сумрак" о событиях в зоне заражения SCE-1289.',
      tags: ['полевой отчет', 'боевой']
    },
    {
      id: 3,
      title: 'Эксперимент №47',
      classification: 'Уровень 4',
      author: 'Д-р Морозова',
      date: '05.02.2023',
      description: 'Документированные результаты тестов взаимодействия SCE-1092 и SCE-1344.',
      tags: ['эксперимент', 'научный']
    }
  ];

  return (
    <SCELayout>
      <div className="sce-section py-8">
        <h1 className="sce-title mb-6">Архив рассказов и отчетов</h1>
        <p className="mb-8">
          Собрание документальных записей, полевых отчетов и художественных произведений, 
          основанных на опыте взаимодействия с аномальными объектами.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="border-sce-red/20 hover:border-sce-red transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-sce-red/10 text-sce-red">
                    {story.classification}
                  </Badge>
                  <Bookmark className="h-5 w-5 text-sce-darkgray" />
                </div>
                <CardTitle className="text-xl font-bold">{story.title}</CardTitle>
                <div className="flex items-center text-sm text-sce-darkgray mt-2">
                  <File className="h-4 w-4 mr-1" />
                  <span>{story.author}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{story.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sce-darkgray mb-4">{story.description}</p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-sce-gray/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SCELayout>
  );
};

export default StoriesPage;