import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Данные для демонстрации
  const clients = [
    {
      id: 1,
      name: "ООО Технопром",
      contact: "Иванов И.И.",
      phone: "+7 (495) 123-45-67",
      status: "Активный",
      cases: 3,
    },
    {
      id: 2,
      name: "ИП Петров А.С.",
      contact: "Петров А.С.",
      phone: "+7 (495) 987-65-43",
      status: "Новый",
      cases: 1,
    },
    {
      id: 3,
      name: "АО Стройкомпания",
      contact: "Сидорова М.В.",
      phone: "+7 (495) 555-12-34",
      status: "Активный",
      cases: 2,
    },
  ];

  const cases = [
    {
      id: 1,
      title: "Трудовой спор #2024-001",
      client: "ООО Технопром",
      type: "Трудовое право",
      status: "В работе",
      deadline: "2024-09-25",
      priority: "Высокий",
    },
    {
      id: 2,
      title: "Налоговая проверка #2024-002",
      client: "ИП Петров А.С.",
      type: "Налоговое право",
      status: "Новое",
      deadline: "2024-09-30",
      priority: "Средний",
    },
    {
      id: 3,
      title: "Договорный спор #2024-003",
      client: "АО Стройкомпания",
      type: "Гражданское право",
      status: "На рассмотрении",
      deadline: "2024-10-05",
      priority: "Низкий",
    },
  ];

  const deadlines = [
    {
      id: 1,
      title: "Подача апелляции",
      case: "Трудовой спор #2024-001",
      date: "2024-09-15",
      daysLeft: 5,
      type: "critical",
    },
    {
      id: 2,
      title: "Ответ на претензию",
      case: "Налоговая проверка #2024-002",
      date: "2024-09-20",
      daysLeft: 10,
      type: "warning",
    },
    {
      id: 3,
      title: "Предварительное заседание",
      case: "Договорный спор #2024-003",
      date: "2024-09-25",
      daysLeft: 15,
      type: "normal",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
      case "В работе":
        return "bg-green-100 text-green-800";
      case "Новый":
      case "Новое":
        return "bg-blue-100 text-blue-800";
      case "На рассмотрении":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Высокий":
        return "bg-red-100 text-red-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Низкий":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDeadlineColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "normal":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Scale" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Legal CRM</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" className="h-4 w-4 mr-2" />
              Уведомления
            </Button>
            <Button size="sm">
              <Icon name="Plus" className="h-4 w-4 mr-2" />
              Новое дело
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Дашборд метрики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Всего клиентов
              </CardTitle>
              <Icon name="Users" className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <p className="text-xs text-green-600">+12% за месяц</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Активных дел
              </CardTitle>
              <Icon name="Briefcase" className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">43</div>
              <p className="text-xs text-blue-600">+3 новых</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Процессуальные сроки
              </CardTitle>
              <Icon name="Clock" className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <p className="text-xs text-red-600">требуют внимания</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Доход за месяц
              </CardTitle>
              <Icon name="DollarSign" className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2.4M ₽</div>
              <p className="text-xs text-green-600">+18% к прошлому месяцу</p>
            </CardContent>
          </Card>
        </div>

        {/* Критичные уведомления о сроках */}
        <Card className="mb-8 bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-800">
              <Icon name="AlertTriangle" className="h-5 w-5 mr-2" />
              Критичные процессуальные сроки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {deadlines
                .filter((d) => d.type === "critical")
                .map((deadline) => (
                  <div
                    key={deadline.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {deadline.title}
                      </p>
                      <p className="text-sm text-gray-600">{deadline.case}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-red-600">
                        {deadline.daysLeft} дней
                      </p>
                      <p className="text-xs text-gray-500">{deadline.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Основные разделы */}
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="clients" className="flex items-center">
              <Icon name="Users" className="h-4 w-4 mr-2" />
              Клиенты
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center">
              <Icon name="Briefcase" className="h-4 w-4 mr-2" />
              Дела
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center">
              <Icon name="Calendar" className="h-4 w-4 mr-2" />
              Календарь
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center">
              <Icon name="FileText" className="h-4 w-4 mr-2" />
              Документы
            </TabsTrigger>
          </TabsList>

          {/* Клиенты */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Управление клиентами
              </h2>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Поиск клиентов..."
                  className="w-64"
                />
                <Button>
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Добавить клиента
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {clients.map((client) => (
                <Card key={client.id} className="bg-white hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900">
                          {client.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          {client.contact}
                        </p>
                      </div>
                      <Badge className={getStatusColor(client.status)}>
                        {client.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Phone" className="h-4 w-4 mr-2" />
                        {client.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Briefcase" className="h-4 w-4 mr-2" />
                        {client.cases} активных дел
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="Eye" className="h-4 w-4 mr-1" />
                          Открыть
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="Edit" className="h-4 w-4 mr-1" />
                          Изменить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Дела */}
          <TabsContent value="cases" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Управление делами
              </h2>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Поиск дел..."
                  className="w-64"
                />
                <Button>
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Новое дело
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {cases.map((caseItem) => (
                <Card key={caseItem.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {caseItem.title}
                          </h3>
                          <Badge className={getStatusColor(caseItem.status)}>
                            {caseItem.status}
                          </Badge>
                          <Badge className={getPriorityColor(caseItem.priority)}>
                            {caseItem.priority}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Icon name="User" className="h-4 w-4 mr-2" />
                            {caseItem.client}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Tag" className="h-4 w-4 mr-2" />
                            {caseItem.type}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Calendar" className="h-4 w-4 mr-2" />
                            Срок: {caseItem.deadline}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" className="h-4 w-4 mr-1" />
                          Открыть
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" className="h-4 w-4 mr-1" />
                          Изменить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Календарь процессуальных сроков */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Календарь процессуальных сроков
              </h2>
              <Button>
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Добавить событие
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" className="h-5 w-5 mr-2" />
                    Ближайшие сроки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deadlines.map((deadline) => (
                      <div
                        key={deadline.id}
                        className={`p-4 rounded-lg border ${getDeadlineColor(
                          deadline.type
                        )}`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {deadline.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {deadline.case}
                            </p>
                          </div>
                          <div className="text-right">
                            <p
                              className={`text-sm font-medium ${
                                deadline.type === "critical"
                                  ? "text-red-600"
                                  : deadline.type === "warning"
                                  ? "text-yellow-600"
                                  : "text-green-600"
                              }`}
                            >
                              {deadline.daysLeft} дней
                            </p>
                            <p className="text-xs text-gray-500">
                              {deadline.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" className="h-5 w-5 mr-2" />
                    Статистика выполнения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Соблюдение сроков</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Завершенных дел</span>
                      <span className="font-medium">23/30</span>
                    </div>
                    <Progress value={77} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Активность за неделю</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Документы */}
          <TabsContent value="documents" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Управление документами
              </h2>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Поиск документов..."
                  className="w-64"
                />
                <Button>
                  <Icon name="Upload" className="h-4 w-4 mr-2" />
                  Загрузить документ
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  name: "Исковое заявление.pdf",
                  type: "Процессуальный документ",
                  size: "1.2 MB",
                  date: "12.09.2024",
                  case: "Трудовой спор #2024-001",
                },
                {
                  name: "Договор услуг.docx",
                  type: "Договор",
                  size: "568 KB",
                  date: "10.09.2024",
                  case: "Налоговая проверка #2024-002",
                },
                {
                  name: "Справка о доходах.pdf",
                  type: "Справка",
                  size: "234 KB",
                  date: "08.09.2024",
                  case: "Договорный спор #2024-003",
                },
              ].map((doc, index) => (
                <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="FileText" className="h-8 w-8 text-blue-500 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-600">{doc.type}</p>
                        <p className="text-xs text-gray-500 mt-1">{doc.case}</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                          <span>{doc.size}</span>
                          <span>{doc.date}</span>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Icon name="Download" className="h-3 w-3 mr-1" />
                            Скачать
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Icon name="Eye" className="h-3 w-3 mr-1" />
                            Просмотр
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;