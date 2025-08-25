import { RegistrationButton } from "./RegistrationButton";

export function Schedule() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6">Розклад</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600">
              Зручний час для вашого особистого розвитку
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-stone-100">
              <h3 className="text-2xl text-stone-800 mb-6 text-center">Вечірня група</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">День тижня:</span>
                  <span className="text-stone-800">Четвер</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">Час:</span>
                  <span className="text-stone-800">19:00 - 20:30</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">Тривалість курсу:</span>
                  <span className="text-stone-800">10 тижнів</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-stone-600">Початок:</span>
                  <span className="text-stone-800">Дата у розгляді</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-stone-100">
              <h3 className="text-2xl text-stone-800 mb-6 text-center">Денна група</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">День тижня:</span>
                  <span className="text-stone-800">Вівторок</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">Час:</span>
                  <span className="text-stone-800">10:00-12:30</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">Тривалість курсу:</span>
                  <span className="text-stone-800">10 тижнів</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-stone-200">
                  <span className="text-stone-600">Ціна:</span>
                  <span className="text-stone-800 font-medium">280 євро за курс</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-stone-600">Початок:</span>
                  <span className="text-stone-800">11 вересня 2025</span>
                </div>
              </div>

              <div className="text-center">
                <RegistrationButton variant="primary" size="md" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-lg text-stone-700">
              <span className="text-amber-600">Важливо:</span> Кількість місць обмежена. 
              Реєстрація відбувається після попередньої індивідуальної зустрічі. Група може продовжитися за бажанням учасників.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}