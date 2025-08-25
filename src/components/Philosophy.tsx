export function Philosophy() {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-amber-300">
          <path
            d="M15 30 C15 15, 45 15, 45 30 C45 45, 15 45, 15 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-10">
        <div className="w-32 h-32 bg-stone-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main philosophy text */}
          <div className="mb-16">
            <div className="space-y-8">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-stone-800 leading-relaxed">
                Психотерапія це вже не про пафос,<br />
                а про <span className="text-amber-600">статус та розвиток</span>.
              </blockquote>
              
              <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
                Бо тільки ті, які можуть оцінити свої вклади можуть бути в психотерапії
              </p>
              
              <div className="flex items-center justify-center space-x-6 my-12">
                <div className="w-16 h-0.5 bg-amber-300"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-16 h-0.5 bg-amber-300"></div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-stone-700 italic leading-relaxed max-w-3xl mx-auto">
                "Це не про гроші, а естетика життя"
              </blockquote>
            </div>
          </div>

          {/* Modern approach section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 relative">
            {/* Small decorative enso */}
            <div className="absolute top-6 right-6 opacity-20">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-stone-400">
                <path
                  d="M10 20 C10 10, 30 10, 30 20 C30 30, 10 30, 10 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                У час глобальної турбулентності люди прагнуть спокою, стабільності, безпеки.
              </p>
              
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl text-stone-800 mb-6">
                  Психотерапевтична група —
                </h3>
                <p className="text-xl text-stone-700 leading-relaxed mb-8">
                  дарує відчуття контролю й внутрішнього балансу: це свідомий крок у простір, де завжди добре.
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-100">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    <span className="text-amber-700">Без зайвого шуму, пафосу та перевантаження.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values highlight */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl text-stone-800 mb-3">Розвиток</h4>
              <p className="text-stone-600">Особистісне зростання як спосіб життя</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl text-stone-800 mb-3">Якість</h4>
              <p className="text-stone-600">Естетика життя та внутрішній баланс</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl text-stone-800 mb-3">Спокій</h4>
              <p className="text-stone-600">Безпечний простір для внутрішньої гармонії</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}