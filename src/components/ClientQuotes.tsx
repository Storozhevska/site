import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ClientQuotes() {
  const quotes = [
    "Здобула упевненість в собі і структурованість своїх думок",
    "Почала розуміти свої реакції на різні життєві ситуації",
    "Оцінювала людей за першим враженням. За 5 сесій першого ступеня групи побачила, як люди відкриваються з неочікуваних боків, що стоїть за деякими моїми та їхніми страхами, як це заважає/допомагає знайти взаємний контакт.",
    "Пройшли зажими в горлі",
    "Була розгубленою і чужою в цьому світі. Зараз відчуваю себе цілісніше, опорніше і спокійніше",
    "Тривога була постійної в моему житті. Зараз я вже 50% часу майже її не відчуваю",
    "В групі: зрозуміла, що сама насправді не бажаючи цього показувала себе не такою як я є, перестала оцінювати людей через власний досвід. В особистій терапії: зрозуміла, що я не винна в усьому на світі",
    "Мій шлях можна описувати багатьма «була» і «стала». Відбулась тотальна зміна поглядів і взаємодії зі світом.",
    "Стосовно мами: була впевнена, що вона холодна, беземоційна Снігова Королева, в точці Б - стала звичайною жінкою. Образ зник )))))"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6 font-light">Що пишуть клієнти</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Прямі повідомлення від учасників про їхні зміни
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main quote */}
            <div className="bg-gradient-to-br from-white via-rose-50/20 to-amber-50/30 rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50 relative overflow-hidden min-h-[280px] flex items-center">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 opacity-15">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-rose-300">
                  <path
                    d="M15 30 C15 15, 45 15, 45 30 C45 45, 15 45, 15 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full blur-lg"></div>
              </div>

              {/* Message bubble style */}
              <div className="relative z-10 w-full">
                <div className="bg-white/70 backdrop-blur-soft rounded-2xl p-6 md:p-8 shadow-soft border border-white/50 max-w-4xl mx-auto">
                  <div className="flex items-start space-x-4">
                    {/* Message bubble tail */}
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-rose-600">
                          <path
                            d="M8 12 C8 8, 16 8, 16 12 C16 14, 14 15, 12 15 C10 15, 8 14, 8 12 Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <circle cx="10" cy="10" r="1" fill="currentColor"/>
                          <circle cx="14" cy="10" r="1" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <blockquote className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
                        "{quotes[currentIndex]}"
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-right">
                    <div className="inline-flex items-center justify-center bg-rose-50/60 px-3 py-1 rounded-full border border-rose-100/50">
                      <span className="text-stone-600 text-sm font-light">Клієнт</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevQuote}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft border border-stone-100 flex items-center justify-center text-stone-600 hover:text-rose-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="Попередня цитата"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextQuote}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft border border-stone-100 flex items-center justify-center text-stone-600 hover:text-rose-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="Наступна цитата"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rose-400 w-8"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Перейти до цитати ${index + 1}`}
              />
            ))}
          </div>

          {/* Privacy note */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-stone-50 to-amber-50/30 rounded-2xl border border-stone-100/50">
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Цитати публікуються анонімно з дозволу клієнтів. 
              Кожна цитата — це справжній відгук про досвід роботи в психотерапевтичній групі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}