import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
}

const NewsCard = ({ title, date, author, category, image, excerpt }: NewsCardProps) => {
  return (
    <Card className="border-sce-red/20 hover:border-sce-red transition-colors overflow-hidden flex flex-col">
      <div className="h-48 relative">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-sce-red text-white">
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex items-center text-sm text-sce-darkgray mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-1" />
          <span>{author}</span>
        </div>
        <p className="text-sce-darkgray mb-4 flex-1">{excerpt}</p>
        <button className="flex items-center text-sce-red hover:underline mt-auto">
          <span className="mr-1">Читать полностью</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;