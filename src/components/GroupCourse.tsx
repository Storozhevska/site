import { InstagramButton } from "./InstagramButton";

export function GroupCourse() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-b from-amber-50/30 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6">Що буде на групі:</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              10 сесій для глибокого дослідження себе в підтримуючому груповому середовищі
            </p>
          </div>

          {/* New atmospheric description */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 mb-16 relative overflow-hidden">
            {/* Decorative enso circle */}
            <div className="absolute top-6 right-6 opacity-10">
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

            <div className="relative z-10 space-y-8">
              <blockquote className="text-xl md:text-2xl text-stone-800 leading-relaxed text-center">
                Це група де можна <span className="text-amber-600">бути собою</span> без зайвого навантаження 
                «бути кимось» чи «для чогось»
              </blockquote>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-stone-700 leading-relaxed text-center">
                  Де від тебе ніхто нічого не вимагає, ти просто живеш, дихаєш і насолоджуєшся простором, 
                  який ми будемо створювати разом.
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-6 border border-amber-100">
                  <p className="text-lg text-stone-700 leading-relaxed text-center italic">
                    Наша група прийшла на зміну жорстким формам і швидким темпам, щоб нагадати:<br />
                    <span className="text-amber-700 not-italic">краса — у спокої, сила — у м'якості, стиль — у гармонії з собою</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course details */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-amber-600">10</span>
                </div>
                <h3 className="text-xl text-stone-800 mb-2">Сесій</h3>
                <p className="text-stone-600">Структурована програма для поступового розвитку</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-amber-600">12-14</span>
                </div>
                <h3 className="text-xl text-stone-800 mb-2">Учасників</h3>
                <p className="text-stone-600">Інтимна група для безпечного дослідження</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg text-amber-600">2,5-3</span>
                </div>
                <h3 className="text-xl text-stone-800 mb-2">години</h3>
                <p className="text-stone-600">Достатньо часу для глибокої роботи</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-stone-800 text-center mb-8">Що ви отримаєте:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Розуміння своїх потреб</h4>
                    <p className="text-stone-600">Дослідження власних бажань та кордонів</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Навички спілкування</h4>
                    <p className="text-stone-600">Вміння виражати себе та слухати інших</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Емоційна грамотність</h4>
                    <p className="text-stone-600">Розпізнавання та прийняття своїх емоцій</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Підтримуюча спільнота</h4>
                    <p className="text-stone-600">Зв'язки з однодумцями на шляху росту</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Простір для автентичності</h4>
                    <p className="text-stone-600">Можливість бути справжнім собою без масок</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Внутрішній спокій</h4>
                    <p className="text-stone-600">Навчання знаходити силу в м'якості</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-lg text-stone-800 mb-2">Супровідний простір інсайтів</h4>
                    <p className="text-stone-600">Спеціальний чат з корисною інформацією для підтримки усвідомлення та розширення бачення між сесіями</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <InstagramButton variant="secondary" size="md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}