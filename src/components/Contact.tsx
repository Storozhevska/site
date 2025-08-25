export function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">Контакти</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-300">
              Готова відповісти на ваші запитання та розпочати спільну роботу
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6">Юлія Сторожевська</h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Сертифікований гештальт-психотерапевт. Працюю з індивідуальними клієнтами 
                  та веду групові програми для людей, які прагнуть глибшого самопізнання 
                  та особистісного зростання.
                </p>
              </div>

              {/* Social media section */}
              <div>
                <h4 className="text-xl mb-4 text-stone-200">Соціальні мережі</h4>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/storozhevskie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-rose-500/20 to-amber-400/20 border border-rose-400/30 rounded-xl text-stone-200 hover:text-white hover:from-rose-500/30 hover:to-amber-400/30 hover:border-rose-400/50 transition-all duration-300 hover:scale-105 hover:shadow-soft w-full"
                  >
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-light">@storozhevskie</span>
                  </a>

                  <a
                    href="https://t.me/storozhevskie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/30 rounded-xl text-stone-200 hover:text-white hover:from-blue-500/30 hover:to-cyan-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-soft w-full"
                  >
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="font-light text-sm">Телеграм-канал</span>
                      <span className="font-light text-xs text-stone-300">Цікаві статті та інформація</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 rounded-2xl p-8">
              <h3 className="text-xl mb-6">Години роботи</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-stone-700">
                  <span className="text-stone-300">Понеділок - П'ятниця</span>
                  <span className="text-white">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-700">
                  <span className="text-stone-300">Субота</span>
                  <span className="text-white">11:00 - 16:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-300">Неділя</span>
                  <span className="text-white">Вихідний</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-400/10 rounded-xl border border-amber-400/20">
                <p className="text-amber-300 text-center">
                  📞 Консультації лише за попереднім записом
                </p>
              </div>

              <div className="mt-6 p-4 bg-stone-700 rounded-xl">
                <p className="text-stone-300 text-sm text-center mb-3">
                  Важлива інформація про конфіденційність
                </p>
                <div className="space-y-2 text-xs text-stone-400">
                  <p>• Всі персональні дані клієнтів захищені згідно з GDPR та EAGT </p>
                  <p>• Інформація з сесій не передається третім особам</p>
                  <p>• Записи сесій не ведуться без письмової згоди</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-stone-800">
            {/* Individual therapy invitation */}
            <div className="mb-8 p-6 bg-gradient-to-r from-stone-800 to-amber-900/20 rounded-2xl border border-stone-700">
              <h4 className="text-xl text-stone-200 mb-3">Не готові до групової терапії?</h4>
              <p className="text-stone-300 leading-relaxed">
                Запрошую на індивідуальну терапію. Це може стати першим кроком до особистісного зростання 
                або підготовкою до майбутньої участі в групі. Зв'яжіться зі мною — разом знайдемо 
                найкращий для вас формат роботи.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-400">
                <span>Політика конфіденційності</span>
                <span>•</span>
                <span>Договір про надання послуг</span>
                <span>•</span>
                <span>Використання cookies</span>
              </div>
              <p className="text-stone-400">
                © 2025 Юлія Сторожевська. Гештальт-психотерапевт. Всі права захищені.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}