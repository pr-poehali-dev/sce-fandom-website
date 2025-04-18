import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('ru-RU', options);
}

// Имитация получения данных о аномалиях (в реальном приложении здесь был бы API запрос)
export const getAnomalies = () => {
  return [
    {
      id: '001',
      name: 'Кристалл телепортации',
      class: 'Евклид',
      thumbnail: '/placeholder.svg',
      shortDescription: 'Тёмно-синий кристалл, способный телепортировать органические материалы на расстояние до 100 метров.'
    },
    {
      id: '002',
      name: 'Говорящий кактус',
      class: 'Безопасный',
      thumbnail: '/placeholder.svg',
      shortDescription: 'Кактус вида Echinopsis pachanoi, способный воспроизводить человеческую речь на нескольких языках.'
    },
    {
      id: '003',
      name: 'Дверь в никуда',
      class: 'Кетер',
      thumbnail: '/placeholder.svg',
      shortDescription: 'Деревянная дверь, открывающаяся в альтернативные и часто опасные измерения.'
    },
  ];
};

// Имитация получения новостей
export const getNews = () => {
  return [
    {
      id: 1,
      title: 'Обнаружена новая аномалия в Сибири',
      date: new Date('2023-11-15'),
      author: 'Др. Волков',
      content: 'Экспедиционная группа SCE обнаружила новую аномалию в удаленном регионе Сибири. Аномалия проявляет свойства изменения гравитационного поля вокруг себя. В настоящее время территория оцеплена, ведутся дальнейшие исследования.',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Ежегодная конференция SCE состоится в декабре',
      date: new Date('2023-10-28'),
      author: 'Администрация SCE',
      content: 'Напоминаем всем сотрудникам класса допуска C и выше о ежегодной научной конференции, которая состоится 15-17 декабря. В программе: последние исследования аномалий, обсуждение новых протоколов содержания и многое другое.'
    }
  ];
};

// Функция генерации случайного идентификатора (для демонстрации)
export function generateId(): string {
  return Math.random().toString(36).substring(2, 8);
}