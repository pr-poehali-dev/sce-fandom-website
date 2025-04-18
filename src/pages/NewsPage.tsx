import SCELayout from '@/components/SCELayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';
import NewsItem from '@/components/NewsItem';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Новый исследовательский комплекс в Арктике',
      date: '12.06.2023',
      author: 'Пресс-служба SCE',
      category: 'Инфраструктура',
      content: 'Фонд SCE завершил строительство нового исследовательского комплекса "Северное сияние" в Арктике. Объект предназначен для изучения аномалий, проявляющихся в условиях экстремально низких температур.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Успешное завершение операции "Тихий шторм"',
      date: '02.06.2023',
      author: 'Отдел безопасности',
      category: 'Операции',
      content: 'Оперативная группа "Буря" успешно завершила операцию по обнаружению и изъятию аномального объекта SCE-1567. Объект доставлен в Комплекс Альфа для дальнейшего изучения.',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Назначение нового главы Научного отдела',
      date: '25.05.2023',
      author: 'Администрация SCE',
      category: 'Персонал',
      content: 'Д-р Александра Морозова назначена новым директором Научного отдела. Ранее она возглавляла лабораторию аномальной физики и внесла значительный вклад в изучение пространственно-временных аномалий.',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Международная конференция по аномальным исследованиям',
      date: '18.05.2023',
      author: 'Научный отдел',
      category: 'События',
      content: 'С 10 по 15 июля в Москве пройдет закрытая международная конференция по методам исследования аномальных объектов. Участие примут представители ведущих мировых организаций сходного профиля.',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Публикация новых исследовательских протоколов',
      date: '10.05.2023',
      author: 'Научный отдел',
      category: 'Документация',
      content: 'Научный отдел опубликовал обновленные протоколы исследования аномалий класса "Евклид". Новые протоколы включают усовершенствованные меры безопасности на основе опыта инцидента SCE-1245-A.',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'Модернизация системы безопасности в Комплексе Альфа',
      date: '03.05.2023',
      author: 'Отдел безопасности',
      category: 'Инфраструктура',
      content: 'Завершена модернизация комплексной системы безопасности в главном исследовательском центре Фонда. Внедрены новые биометрические системы доступа и усилены меры по предотвращению нарушений содержания.',
      image: '/placeholder.svg'
    }
  ];

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <SCELayout>
      <div className="sce-section py-8">
        <div className="flex items-center mb-6">
          <Newspaper className="h-8 w-8 text-sce-red mr-3" />
          <h1 className="sce-title">Новости Фонда SCE</h1>
        </div>
        <p className="mb-8">
          Актуальная информация о деятельности Фонда: исследовательские проекты, 
          операции по обнаружению и изъятию аномалий, важные события и назначения.
        </p>

        {/* Главная новость */}
        <Card className="mb-8 border-sce-red">
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto relative">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <Badge className="mb-3 bg-sce-red text-white">
                {featuredNews.category}
              </Badge>
              <CardTitle className="text-2xl font-bold mb-3">
                {featuredNews.title}
              </CardTitle>
              <div className="flex items-center text-sm text-sce-darkgray mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredNews.date}</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span>{featuredNews.author}</span>
              </div>
              <p className="text-sce-darkgray mb-4">
                {featuredNews.content}
              </p>
              <button className="flex items-center text-sce-red hover:underline">
                <span className="mr-1">Читать полностью</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>

        {/* Остальные новости */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map(news => (
            <NewsItem 
              key={news.id}
              title={news.title}
              date={news.date}
              author={news.author}
              category={news.category}
              image={news.image}
              excerpt={news.content.substring(0, 100) + '...'}
            />
          ))}
        </div>
      </div>
    </SCELayout>
  );
};

export default NewsPage;