import SCELayout from '@/components/SCELayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, FileText, Building, Users, 
  Globe, History, BookOpen 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutPage = () => {
  return (
    <SCELayout>
      <div className="sce-section py-8">
        <h1 className="sce-title mb-6">О Фонде SCE</h1>
        <p className="mb-8">
          Фонд SCE (Secure, Control, Explore) — автономная организация, созданная для обнаружения, 
          изучения и содержания аномальных объектов, существ и явлений, представляющих угрозу 
          научной парадигме современного мира и, потенциально, человечеству в целом.
        </p>

        <Tabs defaultValue="mission" className="w-full mb-8">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="mission">Миссия</TabsTrigger>
            <TabsTrigger value="structure">Структура</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-sce-red mr-3" />
                  <CardTitle>Миссия и цели</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Основная миссия Фонда SCE — защитить человечество от последствий взаимодействия 
                  с аномальными явлениями и объектами, сохраняя при этом стабильность современной 
                  научной парадигмы и предотвращая массовую панику.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="border border-sce-red/20 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-sce-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">S</span>
                      Secure
                    </h3>
                    <p className="text-sm">
                      Обнаружение и изоляция аномальных объектов для предотвращения их воздействия на обычное население.
                    </p>
                  </div>
                  <div className="border border-sce-red/20 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-sce-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">C</span>
                      Control
                    </h3>
                    <p className="text-sm">
                      Разработка и поддержание протоколов содержания для минимизации рисков, связанных с аномальными объектами.
                    </p>
                  </div>
                  <div className="border border-sce-red/20 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-sce-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">E</span>
                      Explore
                    </h3>
                    <p className="text-sm">
                      Изучение аномальных объектов для расширения научного понимания и разработки новых технологий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="structure">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Building className="h-6 w-6 text-sce-red mr-3" />
                  <CardTitle>Структура организации</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="mb-4">
                  Фонд SCE организован как автономная глобальная организация с иерархической структурой, 
                  включающей несколько ключевых отделов, каждый из которых выполняет специфические функции.
                </p>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-sce-red/50 bg-sce-red/5">
                    <h3 className="font-bold flex items-center">
                      <Users className="h-5 w-5 mr-2 text-sce-red" />
                      Совет O5
                    </h3>
                    <p className="text-sm mt-1">
                      Высший руководящий орган из 13 директоров, определяющий стратегию и политику Фонда.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-sce-red/50 bg-sce-red/5">
                    <h3 className="font-bold flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-sce-red" />
                      Научный отдел
                    </h3>
                    <p className="text-sm mt-1">
                      Отвечает за изучение, классификацию и документирование аномальных объектов.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-sce-red/50 bg-sce-red/5">
                    <h3 className="font-bold flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-sce-red" />
                      Служба безопасности
                    </h3>
                    <p className="text-sm mt-1">
                      Обеспечивает защиту персонала, объектов и аномалий, а также проводит операции по обнаружению и изъятию.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-sce-red/50 bg-sce-red/5">
                    <h3 className="font-bold flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-sce-red" />
                      Административный отдел
                    </h3>
                    <p className="text-sm mt-1">
                      Управляет ресурсами, кадрами и логистикой, обеспечивая бесперебойную работу Фонда.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <History className="h-6 w-6 text-sce-red mr-3" />
                  <CardTitle>История фонда</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Фонд SCE был основан в начале ХХ века группой ученых, правительственных чиновников и 
                  бизнесменов после серии аномальных инцидентов, которые не могли быть объяснены 
                  в рамках существующей научной парадигмы.
                </p>
                <div className="relative border-l-2 border-sce-red/30 pl-6 space-y-6 mt-6">
                  <div>
                    <div className="absolute w-4 h-4 bg-sce-red rounded-full -left-[9px]"></div>
                    <h3 className="font-bold">1908: Основание</h3>
                    <p className="text-sm mt-1">
                      После Тунгусского события группа российских ученых создает первую организацию 
                      для изучения аномальных явлений.
                    </p>
                  </div>
                  <div>
                    <div className="absolute w-4 h-4 bg-sce-red rounded-full -left-[9px]"></div>
                    <h3 className="font-bold">1945: Международное расширение</h3>
                    <p className="text-sm mt-1">
                      После Второй мировой войны организация расширяется, включая в себя ученых из разных стран.
                    </p>
                  </div>
                  <div>
                    <div className="absolute w-4 h-4 bg-sce-red rounded-full -left-[9px]"></div>
                    <h3 className="font-bold">1976: Реорганизация</h3>
                    <p className="text-sm mt-1">
                      Формирование современной структуры с отделами и созданием Совета O5.
                    </p>
                  </div>
                  <div>
                    <div className="absolute w-4 h-4 bg-sce-red rounded-full -left-[9px]"></div>
                    <h3 className="font-bold">2005: Глобальная сеть</h3>
                    <p className="text-sm mt-1">
                      Создание глобальной сети исследовательских комплексов и полевых баз.
                    </p>
                  </div>
                  <div>
                    <div className="absolute w-4 h-4 bg-sce-red rounded-full -left-[9px]"></div>
                    <h3 className="font-bold">Настоящее время</h3>
                    <p className="text-sm mt-1">
                      Фонд SCE продолжает работу по обнаружению, изучению и содержанию аномальных объектов по всему миру.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="border-sce-red/20">
          <CardHeader>
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-sce-red mr-3" />
              <CardTitle>Доступные материалы</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Для получения дополнительной информации о Фонде SCE, пожалуйста, обратитесь к следующим разделам:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-sce-red/20 rounded-lg p-4 hover:bg-sce-red/5 transition-colors">
                <h3 className="font-bold mb-2">Классификация аномалий</h3>
                <p className="text-sm">
                  Подробная информация о системе классификации аномальных объектов, используемой в Фонде.
                </p>
              </div>
              <div className="border border-sce-red/20 rounded-lg p-4 hover:bg-sce-red/5 transition-colors">
                <h3 className="font-bold mb-2">Персонал и должности</h3>
                <p className="text-sm">
                  Иерархия и структура персонала Фонда SCE, должностные обязанности и уровни допуска.
                </p>
              </div>
              <div className="border border-sce-red/20 rounded-lg p-4 hover:bg-sce-red/5 transition-colors">
                <h3 className="font-bold mb-2">Протоколы и процедуры</h3>
                <p className="text-sm">
                  Обзор стандартных протоколов и процедур, применяемых в деятельности Фонда.
                </p>
              </div>
              <div className="border border-sce-red/20 rounded-lg p-4 hover:bg-sce-red/5 transition-colors">
                <h3 className="font-bold mb-2">Карьера в Фонде</h3>
                <p className="text-sm">
                  Информация для потенциальных сотрудников и процедуры отбора персонала.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SCELayout>
  );
};

export default AboutPage;