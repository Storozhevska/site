import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Олена К.",
      age: "32 роки", 
      text: "Після групового курсу з Юлією я нарешті навчилася говорити 'ні' без почуття провини. Це кардинально змінило мої стосунки з колегами та близькими. Відчуваю себе набагато впевненіше.",
      course: "Груповий курс, 2024"
    },
    {
      name: "Михайло П.",
      age: "28 років",
      text: "Думав, що групова терапія — це не для мене, але атмосфера, яку створює Юлія, дуже підтримуюча. Навчився краще розуміти свої емоції та не приховувати їх від партнера.",
      course: "Груповий курс, 2024"
    },
    {
      name: "Ірина Л.",
      age: "45 років",
      text: "Гештальт-терапія допомогла мені пережити складний період після розлучення. Юлія дуже делікатно направляла процес, і я відкрила в собі ресурси, про які не підозрювала.",
      course: "Індивідуальна терапія"
    }
  ];

  const successStory = {
    title: "Історія Анни: від тривоги до внутрішньої гармонії",
    problem: "Анна звернулася до мене з хронічною тривогою та проблемами у стосунках. Вона відчувала постійне напруження та не могла довіряти партнеру.",
    process: "Протягом 10 сесій групової терапії Анна поступово навчилася розпізнавати свої потреби та виражати їх. Ми працювали з її страхами та віруваннями про себе.",
    result: "Сьогодні Анна каже, що відчуває себе 'цілісною'. Вона побудувала здорові кордони у стосунках та знайшла роботу, яка їй справді підходить."
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6">Відгуки клієнтів</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Справжні історії людей, які пройшли шлях особистісного зростання
            </p>
          </div>

          {/* Client Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-2xl p-6 relative border border-stone-100">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-4xl text-amber-300 opacity-50">"</div>
                
                <p className="text-stone-700 leading-relaxed mb-6 relative z-10">
                  {testimonial.text}
                </p>
                
                <div className="border-t border-stone-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-stone-800">{testimonial.name}</p>
                      <p className="text-stone-500 text-sm">{testimonial.age}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-stone-600 text-sm">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Story */}
          <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative enso circle */}
            <div className="absolute top-6 right-6 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-400">
                <path
                  d="M30 60 C30 30, 90 30, 90 60 C90 90, 30 90, 30 60"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl text-stone-800 mb-8 text-center">
                {successStory.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg text-stone-800 mb-3 text-center">Проблема</h4>
                  <p className="text-stone-600 text-center leading-relaxed">
                    {successStory.problem}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-lg text-stone-800 mb-3 text-center">Процес</h4>
                  <p className="text-stone-600 text-center leading-relaxed">
                    {successStory.process}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg text-stone-800 mb-3 text-center">Результат</h4>
                  <p className="text-stone-600 text-center leading-relaxed">
                    {successStory.result}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">10</div>
                <p className="text-stone-600">Років досвіду</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">150+</div>
                <p className="text-stone-600">Групових курсів</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">98%</div>
                <p className="text-stone-600">Рекомендують друзям</p>
              </div>
            </div>
          </div>

          {/* Privacy note */}
          <div className="mt-12 text-center p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p className="text-stone-500 text-sm">
              * Імена клієнтів змінено для захисту конфіденційності. 
              Всі відгуки публікуються з дозволу клієнтів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}