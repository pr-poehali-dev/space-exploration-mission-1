import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">МЕБЕЛЬ МИРУ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                Каталог
              </a>
              <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Ruler" className="w-3 h-3 mr-1" />
                    Индивидуальное изготовление
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Мебель,
                    <span className="text-primary block">созданная для вас</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Производство, продажа и установка корпусной мебели на заказ в Москве и Московской области.
                    Кухни, шкафы, гардеробные, детские, прихожие — любой сложности и под любой бюджет.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Записаться на замер
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/bb0dbaf1-6702-4ed1-adf8-35eacbc2559a.jpg"
                  alt="Кухня на заказ"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/9890049b-ff8f-4304-b4ef-c82d0d75a1e8.jpg"
                  alt="Шкаф-купе на заказ"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/8fc2eb1c-d804-4ffc-a5f1-3a1878bd5317.jpg"
                  alt="Детская мебель"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/ba450d9f-c82c-4cef-834b-d6d4c40cb308.jpg"
                  alt="Прихожая на заказ"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section id="advantages" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ МЕБЕЛЬ МИРУ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Мы делаем так, чтобы вам было максимально удобно — от замера до доставки и установки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Бесплатная доставка</h3>
              <p className="text-muted-foreground">
                Доставляем по Москве и Московской области бесплатно. Подъём на этаж при наличии грузового лифта — тоже без доплаты.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Ruler" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Замер на дому</h3>
              <p className="text-muted-foreground">
                Специалист приедет к вам с образцами всех материалов — никуда не нужно ехать. Замер и консультация бесплатно.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Gift" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Скидки и подарки</h3>
              <p className="text-muted-foreground">
                Скидки при заказе нескольких позиций, подарки и выгодные предложения для постоянных клиентов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">НАШИ ИЗДЕЛИЯ</h2>
            <Button variant="outline">Все позиции</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/bb0dbaf1-6702-4ed1-adf8-35eacbc2559a.jpg"
                  alt="Кухни"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Популярное</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Кухни</h3>
                <p className="text-muted-foreground mb-4">Прямые, угловые, П-образные — любой формы и размера</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Layers" className="w-4 h-4" />
                    Эконом — Премиум
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Settings" className="w-4 h-4" />
                    Под заказ
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/9890049b-ff8f-4304-b4ef-c82d0d75a1e8.jpg"
                  alt="Шкафы и гардеробные"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Хит продаж
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Шкафы и гардеробные</h3>
                <p className="text-muted-foreground mb-4">Встроенные, угловые, шкафы-купе и открытые гардеробные</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Layers" className="w-4 h-4" />
                    Любые материалы
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Settings" className="w-4 h-4" />
                    Под заказ
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/8fc2eb1c-d804-4ffc-a5f1-3a1878bd5317.jpg"
                  alt="Детские"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Детские
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Детские и прихожие</h3>
                <p className="text-muted-foreground mb-4">Безопасные материалы, яркие решения, максимум функциональности</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Shield" className="w-4 h-4" />
                    Безопасные материалы
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Settings" className="w-4 h-4" />
                    Под заказ
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Мебель, которую делают для людей</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  «Мебель Миру» — производство корпусной мебели на заказ. Мы не работаем по готовым шаблонам:
                  каждый проект создаётся индивидуально — под ваши размеры, предпочтения и бюджет.
                </p>
                <p>
                  Работаем с частными клиентами, дизайнерами и строительными компаниями. Используем фурнитуру
                  известных брендов и материалы от эконом до премиум-класса.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Нестандартные проекты</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">0 ₽</div>
                  <div className="text-muted-foreground">Замер и доставка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/4643c7d8-a873-45b9-973a-1c3f3e1a0540/files/ba450d9f-c82c-4cef-834b-d6d4c40cb308.jpg"
                  alt="Наши работы"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Хотите мебель точно под ваш интерьер?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Оставьте заявку — специалист приедет к вам с образцами, сделает замер и подберёт оптимальное решение.
            Замер бесплатный, без обязательств.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Записаться на замер
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">МЕБЕЛЬ МИРУ</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Производство корпусной мебели на заказ. Бесплатный замер, доставка и подъём по Москве и МО.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (905) 553-12-72 — Александр</p>
                <p>+7 (965) 634-54-44 — Вячеслав</p>
                <p>+7 (965) 637-06-96 — Менеджер Ирина</p>
                <p>Москва и МО</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Что делаем</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Кухни на заказ</p>
                <p>Шкафы и гардеробные</p>
                <p>Детские комнаты</p>
                <p>Прихожие и мебель в ванную</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Мебель Миру. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
