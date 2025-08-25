import juliaEmotionalPhoto from 'figma:asset/407c09d52334c70cb408f2ba9e53b0f3f83de2c5.png';

export function WhosItFor() {
  return (
    <section className="pt-10 pb-7 bg-gradient-to-b from-stone-50 to-amber-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="text-3xl text-amber-600 mr-3">✦</span>
              <h2 className="text-3xl md:text-4xl text-stone-800 font-light">Для кого ця група?</h2>
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Intro statement */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100 relative overflow-hidden">
              <div className="absolute top-8 right-8 opacity-10">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-amber-400">
                  <path
                    d="M20 40 C20 20, 60 20, 60 40 C60 60, 20 60, 20 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl text-stone-800 leading-relaxed text-center relative z-10 font-light">
                Для тебе, якщо ти хочеш <span className="text-amber-600 font-medium">краще розуміти себе</span> — 
                не на рівні теорії, а в живому досвіді.
              </p>
            </div>

            {/* Emotional situations grid */}
            <div className="grid gap-6">
              {[
                {
                  text: "Якщо ти втомився бути сильним. Зовні ти справляєшся, а всередині — порожнеча.",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-stone-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <path
                          d="M6 9 C6 6, 18 6, 18 9 L18 15 C18 18, 6 18, 6 15 Z"
                          fill="currentColor"
                          opacity="0.8"
                        />
                        <circle cx="9" cy="11" r="2" fill="currentColor" opacity="0.9"/>
                        <circle cx="15" cy="11" r="2" fill="currentColor" opacity="0.9"/>
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо давно не відчував легкості, навіть коли все «ніби добре».",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <path
                          d="M12 3 C8 6, 6 9, 8 12 C10 15, 12 12, 12 12 C12 12, 14 15, 16 12 C18 9, 16 6, 12 3 Z"
                          fill="currentColor"
                          opacity="0.9"
                        />
                        <path
                          d="M10 8 L14 8 M10 10 L14 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity="0.7"
                        />
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо здається, що живеш на паузі — без смаку, без дихання, без присутності.",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <rect x="8" y="6" width="3" height="12" rx="1.5" fill="currentColor" opacity="0.9"/>
                        <rect x="13" y="6" width="3" height="12" rx="1.5" fill="currentColor" opacity="0.9"/>
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо іноді з'являється думка: «Може, я просто такий?»",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-amber-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
                        <path d="M10 10 Q12 8, 14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                        <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.9"/>
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо не знаєш, що хочеш у стосунках і як сказати про себе",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <path
                          d="M8 12 C8 8, 16 8, 16 12 C16 14, 14 15, 12 15 C10 15, 8 14, 8 12 Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0.8"
                        />
                        <circle cx="6" cy="16" r="2" fill="currentColor" opacity="0.6"/>
                        <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.7"/>
                        <circle cx="18" cy="16" r="2" fill="currentColor" opacity="0.6"/>
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо від роботи — втома, а навіть відпочинок не насичає.",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-rose-400 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <path
                          d="M6 14 C6 10, 18 10, 18 14 C18 18, 6 18, 6 14 Z"
                          fill="currentColor"
                          opacity="0.7"
                        />
                        <circle cx="10" cy="12" r="1" fill="currentColor" opacity="0.9"/>
                        <circle cx="14" cy="12" r="1" fill="currentColor" opacity="0.9"/>
                        <path d="M9 15 Q12 17, 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                      </svg>
                    </div>
                  )
                },
                {
                  text: "Якщо ти вже щось розумієш про себе, але не знаєш, як це використовувати в житті.",
                  icon: (
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" className="text-white">
                        <path
                          d="M8 8 L12 4 L16 8 L20 12 L16 16 L12 20 L8 16 L4 12 Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0.8"
                        />
                        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6"/>
                        <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.9"/>
                      </svg>
                    </div>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-stone-100 hover:shadow-md transition-soft">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <p className="text-lg text-stone-700 leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* New section: "Це група де можна бути собою" */}
            <div className="bg-gradient-to-br from-rose-50/50 via-white to-amber-50/30 rounded-3xl p-8 md:p-12 shadow-soft border border-rose-100/50 relative overflow-hidden">
              {/* Soft decorative elements */}
              <div className="absolute top-8 left-8 opacity-10">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full blur-lg"></div>
              </div>
              <div className="absolute bottom-8 right-8 opacity-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full blur-md"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text content */}
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl text-stone-800 font-light leading-tight">
                    Це група, де можна <span className="text-rose-600 font-medium">бути собою</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-stone-700 leading-relaxed font-light">
                      Де ви можете <span className="text-amber-600 font-medium">зняти маски</span> та показати свою справжню сутність — 
                      з усіма переживаннями, сумнівами та мріями.
                    </p>
                    
                    <p className="text-lg text-stone-700 leading-relaxed font-light">
                      Тут немає потреби <span className="text-rose-600 font-medium">бути ідеальними</span>. 
                      Тут цінується ваша <span className="text-stone-700 font-medium">щирість</span> та готовність до справжнього контакту.
                    </p>
                    
                    <div className="bg-white rounded-2xl p-6 border border-rose-100/50 shadow-soft">
                      <p className="text-xl text-stone-800 font-light italic text-center">
                        "Простір, де ваша <span className="text-rose-600 font-medium">вразливість</span> стає <span className="text-amber-600 font-medium">силою</span>"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative max-w-sm mx-auto">
                    {/* Main photo container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
                      <img 
                        src={juliaEmotionalPhoto} 
                        alt="Юлія Сторожевська - простір для справжнього себе. Радість та автентичність" 
                        className="w-full h-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                    
                    {/* Floating elements around photo */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-100 to-white rounded-full opacity-80 blur-sm"></div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full opacity-70"></div>
                    
                    {/* Inspirational floating badges */}
                    <div className="absolute -top-2 right-8">
                      <div className="bg-white/90 backdrop-blur-soft px-3 py-1 rounded-full shadow-soft border border-rose-100/50">
                        <span className="text-rose-600 text-xs font-medium">Радість</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 left-8">
                      <div className="bg-white/90 backdrop-blur-soft px-3 py-1 rounded-full shadow-soft border border-amber-100/50">
                        <span className="text-amber-600 text-xs font-medium">Автентичність</span>
                      </div>
                    </div>

                    {/* Soft enso circle accent */}
                    <div className="absolute top-8 left-8 opacity-30">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
                        <path
                          d="M10 20 C10 10, 30 10, 30 20 C30 30, 10 30, 10 20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to authentic expression */}
            <div className="bg-gradient-to-r from-amber-50 via-white to-stone-50 rounded-3xl p-8 md:p-12 border border-amber-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 opacity-15">
                <div className="w-24 h-24 bg-amber-200 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-stone-400">
                  <path
                    d="M15 30 C15 15, 45 15, 45 30 C45 45, 15 45, 15 30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center space-y-6">
                <p className="text-xl md:text-2xl text-stone-800 leading-relaxed font-light">
                  Ця група — для тебе, якщо ти відчуваєш, що можеш жити 
                  <span className="text-amber-600 font-medium"> глибше, щиріше, вільніше</span>.
                </p>
                
                <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto font-light">
                  І хочеш нарешті навчитися бути собою — не на самоті, а в контакті з іншими.
                </p>
                
                <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-2xl p-6 inline-block shadow-soft">
                  <p className="text-xl text-amber-800 uppercase tracking-wider font-medium">
                    ЦЕ ПРО СПРАВЖНЄ ПРОЯВЛЕННЯ
                  </p>
                </div>
              </div>
            </div>

            {/* Visual divider */}
            <div className="flex items-center justify-center space-x-4 py-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-300 to-rose-300"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}