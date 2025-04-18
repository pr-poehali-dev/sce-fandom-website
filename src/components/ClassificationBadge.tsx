import { cn } from '@/lib/utils';

interface ClassificationBadgeProps {
  classification: string;
  className?: string;
}

const ClassificationBadge = ({ classification, className }: ClassificationBadgeProps) => {
  // Определяем цвет фона в зависимости от классификации
  const getBgColor = (classification: string) => {
    const lowercased = classification.toLowerCase();
    
    if (lowercased.includes('безопасный')) return 'bg-green-700';
    if (lowercased.includes('евклид')) return 'bg-amber-500';
    if (lowercased.includes('кетер')) return 'bg-red-600';
    if (lowercased.includes('нейтрализован')) return 'bg-gray-500';
    if (lowercased.includes('таумиэль')) return 'bg-purple-700';
    
    return 'bg-blue-600'; // для неизвестных классификаций
  };

  return (
    <span className={cn(
      'px-2 py-1 text-white font-bold text-sm',
      getBgColor(classification),
      className
    )}>
      {classification}
    </span>
  );
};

export default ClassificationBadge;