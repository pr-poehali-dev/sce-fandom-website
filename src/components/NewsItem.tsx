import { formatDate } from '@/lib/utils';

interface NewsItemProps {
  title: string;
  date: Date;
  author: string;
  content: string;
  imageUrl?: string;
}

const NewsItem = ({ title, date, author, content, imageUrl }: NewsItemProps) => {
  return (
    <div className="border border-sce-darkgray bg-white mb-6">
      <div className="bg-sce-red text-white p-2 font-bold">
        <h3 className="text-lg">{title}</h3>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sce-darkgray text-sm mb-3">
          <span>Дата: {formatDate(date)}</span>
          <span>Автор: {author}</span>
        </div>
        
        {imageUrl && (
          <div className="mb-4">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full max-h-64 object-cover border border-sce-darkgray"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
        )}
        
        <div className="prose max-w-none">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;