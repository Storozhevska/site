export function WhyTenSessions() {
  return (
    <section className="pt-8 pb-24 bg-gradient-to-r from-blue-50/50 to-stone-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 6 L10 10 L14 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-light">
              Чому саме 10 сесій?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-300 to-amber-300 mx-auto mb-8"></div>
            <p className="text-xl text-stone-700 leading-relaxed font-light max-w-3xl mx-auto">
              <span className="font-medium text-blue-700">10 сесій — це оптимальна кількість</span>, щоб ви змогли 
              відчути терапевтичний процес, побачити свій розвиток та отримати стабільність у груповій роботі. 
              Це достатньо часу для справжніх змін.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Відчути процес */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-blue-100/50 text-center hover-lift transition-soft">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                    <path d="M3 15 L17 5 M17 5 L13 5 M17 5 L17 9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-stone-800 mb-4 font-light">Відчути процес</h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Перші сесії — знайомство, наступні — глибока робота з особистими темами та взаємодією в групі
              </p>
            </div>

            {/* Побачити розвиток */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-green-100/50 text-center hover-lift transition-soft">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                    <path d="M10 3 C10 3, 10 10, 10 17 M7 7 C7 7, 10 10, 10 10 M13 7 C13 7, 10 10, 10 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="17" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-stone-800 mb-4 font-light">Побачити розвиток</h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Зміни стають помітними після 4-5 сесії, коли ви почнете розуміти свої патерни та реакції
              </p>
            </div>

            {/* Отримати стабільність */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-amber-100/50 text-center hover-lift transition-soft">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                    <path d="M10 2 L10 18 M5 6 L15 6 M6 10 L14 10 M7 14 L13 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-stone-800 mb-4 font-light">Отримати стабільність</h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Закріплення нових навичок і патернів поведінки, інтеграція змін у повсякденне життя
              </p>
            </div>

          </div>

          {/* Bottom explanation */}
          <div className="mt-16 bg-gradient-to-r from-white to-blue-50/30 rounded-3xl p-8 md:p-12 shadow-soft border border-blue-100/50">
            <div className="text-center">
              <p className="text-lg text-stone-700 leading-relaxed font-light mb-6">
                Кожна сесія будується на попередній, створюючи цілісний терапевтичний досвід. 
                Ви не просто відвідуєте зустрічі — ви проходите трансформаційний шлях особистісного зростання.
              </p>
              <div className="inline-flex items-center justify-center bg-blue-100/50 px-6 py-3 rounded-full">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                    <path d="M4 6 C4 4, 12 4, 12 6 C12 8, 8 12, 8 12 C8 12, 4 8, 4 6 Z" fill="currentColor" opacity="0.9"/>
                  </svg>
                </div>
                <span className="text-blue-700 font-medium">Кожна сесія — крок до нового себе</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}