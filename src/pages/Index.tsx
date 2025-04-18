import { Link } from 'react-router-dom';
import SCELayout from '@/components/SCELayout';
import AnomalyCard from '@/components/AnomalyCard';
import NewsItem from '@/components/NewsItem';
import { getAnomalies, getNews } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

const Index = () => {
  const featuredAnomalies = getAnomalies().slice(0, 3);
  const latestNews = getNews().slice(0, 2);

  return (
    <SCELayout>
      {/* Секция приветствия */}
      <section className="sce-section">
        <Alert className="mb-4 bg-sce-red text-white border-sce-darkred">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle>Внимание!</AlertTitle>
          <AlertDescription>
            Доступ к материалам фонда SCE ограничен. Несанкционированное распространение информации преследуется по закону.
          </AlertDescription>
        </Alert>
        
        <h1 className="sce-title mb-4">Фонд SCE: Secure. Control. Explore.</h1>
        <p className="mb-4">
          Добро пожаловать на официальный сайт Фонда SCE — организации, занимающейся обнаружением, сдерживанием 
          и изучением аномальных объектов и явлений, представляющих угрозу человечеству.
        </p>
        <p className="mb-4">
          Наша миссия: обеспечивать безопасность, контролировать распространение аномалий и исследовать неизвестное 
          для блага человечества.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link to="/anomalies" className="sce-button">Каталог аномалий</Link>
          <Link to="/about" className="bg-sce-darkgray text-black px-4 py-2 hover:bg-sce-gray">О Фонде SCE</Link>
        </div>
      </section>
      
      {/* Секция избранных аномалий */}
      <h2 className="sce-subtitle mt-8 mb-4">Недавно изученные аномалии</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAnomalies.map(anomaly => (
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
      <div className="text-center mt-4">
        <Link to="/anomalies" className="sce-nav-link">Смотреть все аномалии →</Link>
      </div>
      
      {/* Секция последних новостей */}
      <h2 className="sce-subtitle mt-8 mb-4">Последние новости Фонда</h2>
      {latestNews.map(news => (
        <NewsItem
          key={news.id}
          title={news.title}
          date={news.date}
          author={news.author}
          content={news.content}
          imageUrl={news.imageUrl}
        />
      ))}
      <div className="text-center mt-4">
        <Link to="/news" className="sce-nav-link">Все новости →</Link>
      </div>
    </SCELayout>
  );
};

export default Index;