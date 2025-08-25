import { RegistrationButton } from "./RegistrationButton";

export function CallToAction({ onRulesClick }: { onRulesClick?: () => void }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative enso circle */}
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="100" height="100" viewBox="0 0 100 100" className="text-amber-400">
                <path
                  d="M25 50 C25 25, 75 25, 75 50 C75 75, 25 75, 25 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6">
              Готові розпочати свій шлях?
            </h2>
            
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Зробіть перший крок до глибшого розуміння себе та гармонійніших відносин
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 max-w-2xl mx-auto">
                <h3 className="text-xl text-stone-800 mb-4">Як приєднатися:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">1</div>
                    <span className="text-stone-600">Зв'яжіться зі мною для знайомства</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">2</div>
                    <span className="text-stone-600">Пройдіть індивідуальну зустріч (20 хв)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">3</div>
                    <span className="text-stone-600">Приєднайтеся до групи, якщо відчуваєте готовність</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <RegistrationButton variant="primary" size="lg" />
                  
                  {onRulesClick && (
                    <button
                      onClick={onRulesClick}
                      className="bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 px-8 py-4 rounded-2xl transition-soft hover:shadow-md"
                    >
                      Правила групи
                    </button>
                  )}
                </div>
                
                <p className="text-stone-500 font-light">
                  Попередня зустріч: 300 грн (йде на благодійність)<br />
                  Індивідуальна консультація (50 хв): 2500 грн Україна чи 60 євро інші країни<br />
                  Груповий курс (10 сесій по 2,5-3 години): 280 євро (є зручна розстрочка)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}