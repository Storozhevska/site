import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContract, setShowContract] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const goToGroupRules = () => {
    setShowContract(false);
    setIsVisible(false);
    // Trigger navigation to rules page
    window.dispatchEvent(new CustomEvent('navigate-to-rules'));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white p-4 md:p-6 shadow-2xl z-50 border-t-2 border-amber-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg mb-2">Використання cookies та конфіденційність</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Цей сайт використовує cookies для покращення вашого досвіду користування. 
                Перед записом на консультацію, будь ласка, ознайомтеся з договором про надання психологічних послуг 
                та політикою конфіденційності. Продовжуючи користування сайтом, ви погоджуєтесь з використанням cookies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
              <button
                onClick={() => setShowContract(true)}
                className="px-4 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-xl hover:bg-amber-400 hover:text-stone-900 transition-colors text-sm"
              >
                Переглянути договір
              </button>
              <button
                onClick={rejectCookies}
                className="px-4 py-2 bg-stone-700 text-white rounded-xl hover:bg-stone-600 transition-colors text-sm"
              >
                Відхилити
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-amber-400 text-stone-900 rounded-xl hover:bg-amber-500 transition-colors text-sm"
              >
                Прийняти
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Modal */}
      {showContract && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-stone-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-stone-800">Договір про надання психологічних послуг</h2>
                <button
                  onClick={() => setShowContract(false)}
                  className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors"
                >
                  <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6 text-stone-700">
                <section>
                  <h3 className="text-lg text-stone-800 mb-3">1. Предмет договору</h3>
                  <p className="leading-relaxed">
                    Психолог надає Клієнту психологічні послуги у формі індивідуальних або групових консультацій 
                    з використанням гештальт-підходу. Послуги спрямовані на особистісне зростання, розвиток 
                    самопізнання та покращення якості життя Клієнта.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg text-stone-800 mb-3">2. Конфіденційність</h3>
                  <p className="leading-relaxed mb-3">
                    Психолог зобов'язується зберігати конфіденційність всієї інформації, отриманої під час 
                    надання послуг. Виключення становлять випадки:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Загроза життю Клієнта або інших осіб</li>
                    <li>Вимога суду або правоохоронних органів згідно з законодавством України</li>
                    <li>Письмова згода Клієнта на розголошення інформації</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg text-stone-800 mb-3">3. Права та обов'язки Клієнта</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-stone-800 mb-2">Клієнт має право:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Отримувати якісні психологічні послуги</li>
                        <li>На конфіденційність та повагу до особистості</li>
                        <li>Припинити сесію або курс терапії в будь-який момент</li>
                        <li>Отримувати інформацію про методи роботи психолога</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-stone-800 mb-2">Клієнт зобов'язується:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Своєчасно повідомляти про зміни в розкладі або скасування сесій</li>
                        <li>Дотримуватися умов групової роботи (для групових сесій)</li>
                        <li>Своєчасно оплачувати надані послуги</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg text-stone-800 mb-3">4. Вартість та оплата</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Індивідуальна консультація (50 хв): 2500 грн Україна чи 60 євро інші країни</li>
                    <li>Оплата здійснюється перед початком сесії або курсу</li>
                    <li>У разі скасування індивідуальної сесії менш ніж за 24 години — оплата не повертається</li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-stone-700 mb-2">
                      <strong>Правила психотерапевтичної групи:</strong>
                    </p>
                    <button
                      onClick={goToGroupRules}
                      className="text-amber-600 hover:text-amber-700 underline font-medium transition-colors"
                    >
                      Переглянути правила психотерапевтичної групи
                    </button>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg text-stone-800 mb-3">5. Обмеження та відповідальність</h3>
                  <p className="leading-relaxed">
                    Психологічні послуги не є медичним лікуванням. У разі потреби медичної допомоги 
                    психолог рекомендуватиме звернутися до відповідних спеціалістів. Психолог не несе 
                    відповідальності за рішення, прийняті Клієнтом самостійно.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg text-stone-800 mb-3">6. Контактна інформація</h3>
                  <div className="bg-stone-50 p-4 rounded-xl">
                    <p className="mb-3"><strong>Юлія Сторожевська</strong></p>
                    <p className="mb-2">Сертифікований гештальт-психотерапевт</p>
                    <div className="space-y-2">
                      <p>Email: julia.storozhevska@gmail.com</p>
                      <div className="flex items-center gap-2">
                        <span>Телеграм канал:</span>
                        <a 
                          href="https://t.me/storozhevskie" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors"
                        >
                          @storozhevskie
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="p-6 border-t border-stone-200 bg-stone-50">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowContract(false)}
                  className="px-6 py-2 bg-stone-200 text-stone-700 rounded-xl hover:bg-stone-300 transition-colors"
                >
                  Закрити
                </button>
                <button
                  onClick={() => {
                    setShowContract(false);
                    acceptCookies();
                  }}
                  className="px-6 py-2 bg-amber-400 text-stone-900 rounded-xl hover:bg-amber-500 transition-colors"
                >
                  Ознайомився та приймаю
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}