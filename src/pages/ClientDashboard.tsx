import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface ClientDashboardProps {
  clientPhone: string;
  onLogout: () => void;
}

const ClientDashboard = ({ clientPhone, onLogout }: ClientDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Данные клиента (в реальном приложении загружаются с сервера)
  const clientData = {
    name: "Иванов Иван Иванович",
    phone: clientPhone,
    email: "ivanov@example.com",
    status: "Активный клиент",
    registrationDate: "15.03.2024",
    totalCases: 3,
    activeCases: 2,
    completedCases: 1
  };

  const cases = [
    {
      id: 1,
      title: "Трудовой спор с работодателем",
      caseNumber: "#2024-001",
      type: "Трудовое право",
      status: "В работе",
      priority: "Высокий",
      startDate: "15.03.2024",
      lawyer: "Петрова А.В.",
      progress: 65,
      nextStep: "Подача апелляции",
      nextStepDate: "25.09.2024",
      description: "Споры по выплате заработной платы и компенсаций при увольнении"
    },
    {
      id: 2,
      title: "Договорные отношения с контрагентом",
      caseNumber: "#2024-002",
      type: "Гражданское право",
      status: "На рассмотрении",
      priority: "Средний",
      startDate: "10.04.2024",
      lawyer: "Сидоров В.П.",
      progress: 40,
      nextStep: "Ответ на претензию",
      nextStepDate: "30.09.2024",
      description: "Разрешение споров по исполнению договора поставки"
    },
    {
      id: 3,
      title: "Защита прав потребителя",
      caseNumber: "#2024-003",
      type: "Защита прав потребителей",
      status: "Завершено",
      priority: "Низкий",
      startDate: "05.02.2024",
      lawyer: "Козлова М.И.",
      progress: 100,
      nextStep: "Дело закрыто",
      nextStepDate: "01.08.2024",
      description: "Возврат денежных средств за некачественный товар"
    }
  ];

  const documents = [
    {
      id: 1,
      name: "Исковое заявление.pdf",
      caseNumber: "#2024-001",
      uploadDate: "16.03.2024",
      size: "1.2 MB",
      type: "Процессуальный документ"
    },
    {
      id: 2,
      name: "Договор услуг.pdf",
      caseNumber: "#2024-001",
      uploadDate: "15.03.2024",
      size: "856 KB",
      type: "Договор"
    },
    {
      id: 3,
      name: "Справка о доходах.pdf",
      caseNumber: "#2024-002",
      uploadDate: "12.04.2024",
      size: "324 KB",
      type: "Справка"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В работе":
        return "bg-blue-100 text-blue-800";
      case "На рассмотрении":
        return "bg-yellow-100 text-yellow-800";
      case "Завершено":
        return "bg-green-100 text-green-800";
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер клиентского кабинета */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Scale" className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Личный кабинет</h1>
              <p className="text-sm text-gray-600">{clientData.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">
              {clientData.status}
            </Badge>
            <Button variant="outline" size="sm" onClick={onLogout}>
              <Icon name="LogOut" className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Обзор */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Всего дел
              </CardTitle>
              <Icon name="Briefcase" className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{clientData.totalCases}</div>
              <p className="text-xs text-gray-500">с {clientData.registrationDate}</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Активные дела
              </CardTitle>
              <Icon name="Clock" className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{clientData.activeCases}</div>
              <p className="text-xs text-blue-600">в процессе</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Завершено дел
              </CardTitle>
              <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{clientData.completedCases}</div>
              <p className="text-xs text-green-600">успешно</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Документы
              </CardTitle>
              <Icon name="FileText" className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{documents.length}</div>
              <p className="text-xs text-gray-500">файлов</p>
            </CardContent>
          </Card>
        </div>

        {/* Основные разделы */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[480px]">
            <TabsTrigger value="overview" className="flex items-center">
              <Icon name="Home" className="h-4 w-4 mr-2" />
              Обзор
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center">
              <Icon name="Briefcase" className="h-4 w-4 mr-2" />
              Мои дела
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center">
              <Icon name="FileText" className="h-4 w-4 mr-2" />
              Документы
            </TabsTrigger>
          </TabsList>

          {/* Обзор */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Текущие активные дела */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Activity" className="h-5 w-5 mr-2" />
                    Активные дела
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cases.filter(c => c.status !== "Завершено").map((case_) => (
                    <div key={case_.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{case_.title}</h4>
                        <Badge className={getStatusColor(case_.status)}>
                          {case_.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{case_.caseNumber}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Прогресс</span>
                          <span className="font-medium">{case_.progress}%</span>
                        </div>
                        <Progress value={case_.progress} className="h-2" />
                      </div>
                      <div className="mt-3 text-sm">
                        <p className="text-gray-600">
                          <strong>Следующий шаг:</strong> {case_.nextStep}
                        </p>
                        <p className="text-gray-500">До {case_.nextStepDate}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Контактная информация */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" className="h-5 w-5 mr-2" />
                    Ваши данные
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">ФИО</span>
                      <span className="font-medium">{clientData.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Телефон</span>
                      <span className="font-medium">{clientData.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Email</span>
                      <span className="font-medium">{clientData.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Клиент с</span>
                      <span className="font-medium">{clientData.registrationDate}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3">Связаться с нами</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Phone" className="h-4 w-4 mr-2" />
                        +7 (495) 123-45-67
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Mail" className="h-4 w-4 mr-2" />
                        info@legalfirm.ru
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Дела */}
          <TabsContent value="cases" className="space-y-6">
            <div className="space-y-6">
              {cases.map((case_) => (
                <Card key={case_.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {case_.title}
                        </h3>
                        <p className="text-sm text-gray-600">{case_.caseNumber}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getStatusColor(case_.status)}>
                          {case_.status}
                        </Badge>
                        <Badge className={getPriorityColor(case_.priority)}>
                          {case_.priority}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{case_.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Тип дела:</span>
                        <p className="font-medium">{case_.type}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Ведущий юрист:</span>
                        <p className="font-medium">{case_.lawyer}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Дата начала:</span>
                        <p className="font-medium">{case_.startDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Следующий шаг:</span>
                        <p className="font-medium">{case_.nextStepDate}</p>
                      </div>
                    </div>

                    {case_.status !== "Завершено" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Прогресс дела</span>
                          <span className="font-medium">{case_.progress}%</span>
                        </div>
                        <Progress value={case_.progress} className="h-3" />
                      </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1">
                        {case_.nextStep}
                      </h4>
                      <p className="text-sm text-blue-700">
                        Планируемая дата: {case_.nextStepDate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Документы */}
          <TabsContent value="documents" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="FileText" className="h-8 w-8 text-blue-500 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-600">{doc.type}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Дело: {doc.caseNumber}
                        </p>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                          <span>{doc.size}</span>
                          <span>{doc.uploadDate}</span>
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

export default ClientDashboard;