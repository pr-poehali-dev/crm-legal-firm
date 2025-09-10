import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface ClientLoginProps {
  onLogin: (phone: string) => void;
}

const ClientLogin = ({ onLogin }: ClientLoginProps) => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onLogin(phone);
        setIsLoading(false);
      }, 1000);
    }
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    
    let formatted = '+7 ';
    if (cleaned.length > 1) {
      formatted += `(${cleaned.slice(1, 4)}`;
    }
    if (cleaned.length > 4) {
      formatted += `) ${cleaned.slice(4, 7)}`;
    }
    if (cleaned.length > 7) {
      formatted += `-${cleaned.slice(7, 9)}`;
    }
    if (cleaned.length > 9) {
      formatted += `-${cleaned.slice(9, 11)}`;
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(formatPhone(value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <Icon name="Scale" className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Клиентский портал
          </h1>
          <p className="text-gray-600">
            Войдите в систему для просмотра информации о ваших делах
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-gray-800">
              Вход в личный кабинет
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Номер телефона
                </Label>
                <div className="relative">
                  <Icon 
                    name="Phone" 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                  />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="pl-11 h-12 text-lg"
                    maxLength={18}
                    required
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Введите номер телефона, указанный при заключении договора
                </p>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-medium bg-blue-600 hover:bg-blue-700"
                disabled={!phone.trim() || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                    Проверяем данные...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Icon name="LogIn" className="mr-2 h-5 w-5" />
                    Войти в кабинет
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Info" className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Безопасность данных</p>
                  <p>Все данные защищены и передаются по защищенному соединению. Доступ предоставляется только владельцу номера телефона.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Проблемы с входом? 
            <span className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline">
              Свяжитесь с нами
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;