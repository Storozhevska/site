import { RegistrationButton } from "./RegistrationButton";

const concerns = [
  {
    concern: "«А якщо я не зможу говорити?»",
    response: "Ви не повинні нічого казати. Іноді найцінніше — просто бути присутнім і слухати. Ваша мова з'явиться природно, коли відчуєте безпеку.",
    resource: "Право на мовчання"
  },
  {
    concern: "«А якщо я буду виглядати слабким?»",
    response: "У нашій групі вразливість — це сила. Тут ви зможете зняти маски перфекціонізму і відкрити справжню міць автентичності.",
    resource: "Сила у щирості"
  },
  {
    concern: "«А якщо інші не зрозуміють?»",
    response: "Кожен учасник проходить через схожі переживання. Тут є місце для будь-яких емоцій і досвіду — без засудження.",
    resource: "Прийняття різноманітності"
  },
  {
    concern: "«А якщо я не готовий до змін?»",
    response: "Зміни відбуваються у власному темпі. Група дає простір для дослідження, а не примушує до результату. Ви самі обираєте глибину.",
    resource: "Повага до ритму"
  }
];

export function WhatWillHappen() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-b from-rose-50/30 via-amber-50/20 to-stone-50/50 relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-40 h-40 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-light">Група - це</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto mb-8"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
              Місце, де ви нарешті зрозумієте, як це — бути у ресурсному середовищі
            </p>
          </div>

          {/* Main philosophy */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100/50 mb-16 relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-15">
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-rose-300">
                <path
                  d="M20 40 C20 20, 60 20, 60 40 C60 60, 20 60, 20 40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-10 space-y-8">
              <blockquote className="text-xl md:text-2xl text-stone-800 leading-relaxed font-light text-center">
                Ми часто ховаємося за вправами і діями, бо не хочемо стикатися з власними переживаннями...
              </blockquote>
              
              <div className="bg-gradient-to-r from-amber-50/50 to-rose-50/50 rounded-2xl p-8 border border-amber-100/50">
                <p className="text-lg text-stone-700 leading-relaxed text-center font-light">
                  Але <span className="text-rose-600 font-medium">найважливіші зміни відбуваються у нових відносинах</span> — 
                  в безпечному просторі, де ми переписуємо нейронні зв'язки та змінюємо саму сутність контакту.
                </p>
              </div>
            </div>
          </div>

          {/* Addressing concerns */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-stone-800 text-center mb-12 font-light">
              Ваші сумніви — це нормально
            </h3>
            
            <div className="space-y-8">
              {concerns.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-white to-stone-50/30 rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100/50 hover:shadow-md transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center md:text-left">
                      <p className="text-lg text-stone-600 italic font-light">{item.concern}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-lg text-stone-700 leading-relaxed mb-3 font-light">{item.response}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                        <span className="text-rose-600 font-medium">{item.resource}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What actually happens */}
          <div className="bg-gradient-to-br from-amber-50/30 via-white to-rose-50/30 rounded-3xl p-8 md:p-12 shadow-sm border border-amber-100/50 relative overflow-hidden">
            <div className="absolute bottom-4 left-4 opacity-10">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl text-stone-800 text-center mb-10 font-light">
                Що насправді відбувається
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-rose-600 font-medium">розмовляєте</span> — навчаєтеся виражати себе щиро</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-amber-600 font-medium">відчуваєте</span> — дозволяєте собі бути живими</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-stone-600 font-medium">слухаєте</span> — відкриваєте мудрість інших</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-rose-600 font-medium">даєте зворотний зв'язок</span> — навчаєтеся чесності</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-amber-600 font-medium">приймаєте підтримку</span> — дозволяєте собі бути слабкими</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-stone-700 font-light">Ви <span className="text-stone-600 font-medium">підтримуєте інших</span> — відкриваєте свою силу</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50/50 to-amber-50/50 rounded-2xl p-8 border border-rose-100/50 text-center mb-8">
                <p className="text-xl text-stone-800 leading-relaxed font-light mb-4">
                  Це <span className="text-rose-600 font-medium">еталон спілкування</span> в здорових кордонах
                </p>
                <p className="text-lg text-stone-600 font-light">
                  Максимально екологічно. Максимально по-справжньому.
                </p>
              </div>

              <div className="text-center">
                <RegistrationButton variant="secondary" size="md" />
              </div>
            </div>
          </div>

          {/* Research note */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100/50 max-w-3xl mx-auto">
              <p className="text-base text-stone-600 font-light leading-relaxed">
                <span className="text-stone-700 font-medium">Наукові дослідження показують:</span> 
                людський мозок синхронізується під час справжнього контакту. 
                Це прокачує ваш IQ та емоційний інтелект природним шляхом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}