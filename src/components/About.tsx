import juliaPhoto from 'figma:asset/18c9c493042598f079e53016fcd4ffb98f9cd567.png';

export function About() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-b from-white via-rose-50/20 to-amber-50/30 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute bottom-40 right-10 opacity-10">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-light">Про мене</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto"></div>
          </div>

          {/* Main intro section with photo and basic text */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Photo Section */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                {/* Main photo container */}
                <div className="relative overflow-hidden rounded-3xl shadow-soft-lg bg-gradient-to-br from-stone-100 to-rose-100/50 p-1">
                  <img 
                    src={juliaPhoto} 
                    alt="Юлія Сторожевська - гештальт-психотерапевт. Професійність та теплота у кожному дотику" 
                    className="w-full h-auto rounded-3xl transition-all duration-700"
                    style={{
                      filter: 'contrast(1.05) brightness(1.02) saturate(0.95)',
                    }}
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full opacity-80 blur-sm"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full opacity-70"></div>
                
                {/* Soft accent elements */}
                <div className="absolute top-12 left-12 opacity-20">
                  <svg width="48" height="48" viewBox="0 0 48 48" className="text-white">
                    <path
                      d="M12 24 C12 12, 36 12, 36 24 C36 36, 12 36, 12 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Professional floating text */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-soft px-4 py-2 rounded-full shadow-soft border border-rose-100/50">
                    <span className="text-rose-600 text-sm font-medium">Професійність</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-8">
                  <div className="bg-white/90 backdrop-blur-soft px-4 py-2 rounded-full shadow-soft border border-amber-100/50">
                    <span className="text-amber-600 text-sm font-medium">Теплота</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-white to-rose-50/30 rounded-2xl p-6 shadow-soft border border-rose-100/50">
                  <p className="text-lg text-stone-700 leading-relaxed font-light">
                    Я — <span className="text-rose-600 font-medium">Юлія Сторожевська</span>, психотерапевт з глибоким розумінням того, 
                    як важливо створити простір, де ви можете <span className="text-amber-600 font-medium">зустріти справжню себе</span>.
                  </p>
                </div>
                
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  У моїй роботі я поєдную професійні знання з щирим бажанням допомогти людям 
                  відкрити свою <span className="text-stone-700 font-medium">внутрішню красу та силу</span>, знайти гармонію у відносинах з собою та іншими.
                </p>

                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  Гештальт-підхід дозволяє працювати з <span className="text-amber-600 font-medium">"тут і тепер"</span>, досліджуючи ваші справжні 
                  потреби та бажання в атмосфері <span className="text-rose-600 font-medium">безумовного прийняття</span> та підтримки.
                </p>
              </div>
            </div>
          </div>

          {/* Additional sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">

            {/* Credentials */}
            <div className="bg-gradient-to-br from-amber-50/50 via-white to-rose-50/30 rounded-3xl p-8 shadow-soft border border-amber-100/50 relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-15">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-amber-400">
                  <path
                    d="M15 30 C15 15, 45 15, 45 30 C45 45, 15 45, 15 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <h3 className="text-xl text-stone-800 mb-6 font-light">Моя освіта та досвід</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-700 font-light">Сертифікований гештальт-терапевт, тренер та супервізор (Міжрегіональний Інститут Гештальт Терапії та Мистецтва МІГІС акредетований нормам EAGT)</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-700 font-light">Магістр психології</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-700 font-light">10 років досвіду у створенні безпечних просторів для змін</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-700 font-light">Індивідуальна та групова терапія — експерт у роботі з контактом та полем</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-stone-400 to-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-700 font-light">Постійне професійне навчання та супервізії у провідних гештальт-терапевтів Світу</span>
                </div>
              </div>
            </div>

            {/* Personal approach */}
            <div className="bg-gradient-to-r from-white to-amber-50/30 rounded-2xl p-8 shadow-soft border-l-4 border-gradient-to-b from-rose-300 to-amber-300 relative overflow-hidden">
              <div className="absolute bottom-4 right-4 opacity-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-amber-300 rounded-full"></div>
              </div>
              
              <blockquote className="text-xl text-stone-700 leading-relaxed font-light relative z-10 mb-4">
                "Кожна людина має внутрішню <span className="text-rose-600 font-medium">мудрість</span> та здатність до <span className="text-amber-600 font-medium">зцілення</span>. 
                Моя роль — створити простір, де ви можете безпечно дослідити себе 
                та знайти <span className="text-stone-700 font-medium">власні відповіді</span>."
              </blockquote>
              <cite className="block text-stone-500 not-italic font-light relative z-10">— Юлія Сторожевська</cite>
            </div>

            {/* Core values */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-6 text-center shadow-soft border border-rose-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                    <path
                      d="M10 15 C6 12, 4 8, 6 6 C8 4, 10 6, 10 8 C10 6, 12 4, 14 6 C16 8, 14 12, 10 15 Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <circle cx="10" cy="7" r="1.5" fill="currentColor" opacity="0.7"/>
                    <circle cx="8" cy="9" r="1" fill="currentColor" opacity="0.6"/>
                    <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                <span className="text-rose-600 font-medium text-sm">Ніжність</span>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 text-center shadow-soft border border-amber-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                  <div className="w-2 h-2 bg-white/70 rounded-full ml-1"></div>
                </div>
                <span className="text-amber-600 font-medium text-sm">Мудрість</span>
              </div>
              <div className="bg-gradient-to-br from-stone-50 to-white rounded-xl p-6 text-center shadow-soft border border-stone-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                  <div className="w-4 h-1 bg-white rounded-full ml-1 rotate-90"></div>
                </div>
                <span className="text-stone-600 font-medium text-sm">Контакт</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}