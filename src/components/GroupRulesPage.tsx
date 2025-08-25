export function GroupRulesPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-stone-50/50">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-rose-50/30 to-amber-50/30 py-8 border-b border-stone-100/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="flex items-center text-stone-600 hover:text-stone-800 mb-6 transition-soft font-light"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Повернутися до головної сторінки
            </button>
            <h1 className="text-3xl md:text-4xl text-stone-800 mb-4 font-light">
              Правила психотерапевтичної групи-online для глибокого розуміння себе та гармонійних відносин
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-3xl p-8 md:p-12 shadow-soft border border-rose-100/50">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <path d="M4 6 C4 4, 12 4, 12 6 C12 8, 8 12, 8 12 C8 12, 4 8, 4 6 Z" fill="currentColor" opacity="0.9"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl text-stone-800 mb-4 font-light">Ласкаво просимо</h2>
              </div>
              <p className="text-lg text-stone-700 leading-relaxed text-center font-light">
                Ці правила ставлять собі за мету зберігати цілісність групи і робити що відбувається в ній процеси корисними і безпечними.
              </p>
            </div>

            {/* Core Therapeutic Principles */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="8" cy="8" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Основні терапевтичні принципи</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50/50 to-stone-50/30 rounded-2xl p-6 border border-amber-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Фокус на "тут-і-зараз"</h3>
                  <p className="text-stone-700 font-light leading-relaxed">
                    Учасники обговорюють свої почуття та реакції у моменті, що відбувається в групі.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-rose-50/50 to-stone-50/30 rounded-2xl p-6 border border-rose-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Вираження почуттів словами</h3>
                  <p className="text-stone-700 font-light leading-relaxed">
                    Замість фізичних дій, емоції виражаються вербально. Наприклад, не можна кидати предмети, 
                    а потрібно говорити про свої почуття словами.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-stone-50/50 to-amber-50/30 rounded-2xl p-6 border border-stone-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Регулярність і своєчасність</h3>
                  <p className="text-stone-700 font-light leading-relaxed">
                    Важливо відвідувати групові зустрічі в призначений час та бути присутнім на всіх сесіях, 
                    або попереджати про відсутність.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50/50 to-stone-50/30 rounded-2xl p-6 border border-blue-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Обговорення пропусків</h3>
                  <p className="text-stone-700 font-light leading-relaxed">
                    Пропуски сесій можуть мати значення, тому їх слід обговорювати в групі. Суть даного пункту угоди полягає в тому, 
                    щоб забезпечити безперервність процесу групової психотерапії. Всякого разу, коли хто-небудь з учасників відсутній 
                    на зустрічі, вся група щось втрачає. Проте, група відтворює реальне життя, тому учасники мають можливість 
                    багато чому навчитися завдяки спільному обговоренню відсутності одне одного.
                  </p>
                </div>
              </div>
            </div>

            {/* Group Boundaries and Relationships */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <path d="M4 6 C4 3, 12 3, 12 6 C12 9, 8 13, 8 13 C8 13, 4 9, 4 6 Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Відсутність подвійних стосунків</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50/50 to-stone-50/30 rounded-2xl p-6 border border-rose-100/50">
                  <p className="text-stone-700 font-light leading-relaxed mb-4">
                    Поза групою рекомендується мінімізувати взаємодію, щоб зберегти терапевтичний простір. 
                    Ми виходимо з того, що контакти між учасниками групи за рамками сесій можуть відображати 
                    ваші спроби вирішити проблеми, які викликані взаємодією в групі.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 border border-rose-100/50">
                    <p className="text-stone-700 font-light leading-relaxed mb-4">
                      Тому важливо обговорювати в групі емоційно значущі для вас контакти один з одним за рамками сесій. 
                      Групова робота має терапевтичне призначення, а не соціальне, і це визначає її принципову відмінність 
                      від інших ситуацій, пов'язаних зі спілкуванням.
                    </p>
                    
                    <p className="text-stone-700 font-light leading-relaxed">
                      Коли люди діляться одна з одною своїми почуттями, включаючи ті, що пов'язані зі спілкуванням, 
                      у них виникає сильна потреба в тому, щоб реалізувати свої почуття в дії: вступати в дружні або любовні 
                      стосунки за рамках групи. Тому ми рекомендуємо протягом усього процесу групової терапії не вступати 
                      ні в які інші відносини з учасниками групи, крім терапевтичних.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality and Privacy */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <path d="M8 2 L8 2 C10 2, 12 3, 12 6 L12 10 C12 12, 10 14, 8 14 C6 14, 4 12, 4 10 L4 6 C4 3, 6 2, 8 2 Z" 
                            stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="8" cy="9" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Зберігати конфіденційність і анонімність учасників групи</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50/50 to-stone-50/30 rounded-2xl p-6 border border-green-100/50">
                  <p className="text-stone-700 font-light leading-relaxed mb-4">
                    Дозволяється говорити про те, що відбувалося на сесіях, з близькими для вас людьми. 
                    Якщо ви також проходите індивідуальну психотерапію, дуже важливо, щоб ви обговорювали свої враження 
                    про групові сесії з особистим психотерапевтом.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 border border-green-100/50">
                    <p className="text-green-800 font-medium text-center text-lg leading-relaxed">
                      Основна мета дотримання конфіденційності під час групової психотерапії – це повага до приватності 
                      інших учасників групи, тобто нерозголошення за межами групи їх імен і відомостей особистого характеру.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safe Space and Participation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <path d="M8 1 L10 6 L15 6 L11 9 L13 14 L8 11 L3 14 L5 9 L1 6 L6 6 Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Безпечний простір та участь</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-stone-50/50 to-amber-50/30 rounded-2xl p-6 border border-stone-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Дотримання правил</h3>
                    <p className="text-stone-700 font-light">
                      Всі учасники погоджуються з правилами групи на початку, що створює безпечний простір для роботи.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50/50 to-rose-50/30 rounded-2xl p-6 border border-amber-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Безпечний простір</h3>
                    <p className="text-stone-700 font-light">
                      Група повинна бути місцем, де учасники можуть вільно висловлювати свої емоції та думки без осуду.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50/50 to-stone-50/30 rounded-2xl p-6 border border-rose-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Взаємодія та зворотній зв'язок</h3>
                    <p className="text-stone-700 font-light">
                      Учасники вчаться взаємодіяти, отримувати зворотній зв'язок, бачити себе з боку, та розуміти реакції інших.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-stone-50/50 to-rose-50/30 rounded-2xl p-6 border border-stone-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Відкритість та чесність</h3>
                    <p className="text-stone-700 font-light">
                      Учасники заохочуються бути відвертими у вираженні своїх почуттів та думок.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50/50 to-stone-50/30 rounded-2xl p-6 border border-amber-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium text-center">Активна участь</h3>
                  <p className="text-stone-700 font-light leading-relaxed text-center">
                    Активна участь у груповій роботі, обговореннях та вправах є важливою для терапевтичного процесу.
                  </p>
                </div>
              </div>
            </div>

            {/* Group Composition and Closure */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                      <circle cx="4" cy="6" r="2" fill="currentColor"/>
                      <circle cx="12" cy="6" r="2" fill="currentColor"/>
                      <circle cx="8" cy="10" r="2" fill="currentColor"/>
                      <path d="M2 12 C2 10, 6 10, 6 12" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M10 12 C10 10, 14 10, 14 12" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M6 14 C6 12, 10 12, 10 14" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Склад групи та закриття</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50/50 to-stone-50/30 rounded-2xl p-6 border border-purple-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Правило двох сесій</h3>
                  <p className="text-stone-700 font-light leading-relaxed mb-4">
                    Нові учасники можуть приєднатися до групи <span className="font-medium text-purple-700">тільки протягом перших двох зустрічей</span>. 
                    Це дає можливість людям познайомитися з форматом та визначитися з участю.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 border border-purple-100/50">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg text-stone-800 mb-3 font-medium flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-sm text-green-600">1-2</span>
                          </div>
                          Перші дві сесії
                        </h4>
                        <ul className="space-y-2 text-stone-700 font-light">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Відкриті для нових учасників
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Знайомство з форматом
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Встановлення довіри
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg text-stone-800 mb-3 font-medium flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-sm text-purple-600">3-10</span>
                          </div>
                          Закрита група
                        </h4>
                        <ul className="space-y-2 text-stone-700 font-light">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Стабільний склад учасників
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Глибша групова динаміка
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Більша безпека та довіра
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Ефективніша терапевтична робота
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50/50 to-stone-50/30 rounded-2xl p-6 border border-amber-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Чому це важливо?</h3>
                  <div className="space-y-4">
                    <p className="text-stone-700 font-light leading-relaxed">
                      <span className="font-medium text-amber-700">Стабільність складу групи</span> є ключовим фактором для 
                      створення безпечного терапевтичного простору. Коли учасники знають, що група не буде змінюватися, 
                      вони можуть глибше відкриватися та довіряти процесу.
                    </p>
                    
                    <div className="bg-white rounded-xl p-4 border border-amber-100/50">
                      <p className="text-stone-700 font-light text-center italic">
                        "Після третьої сесії ми рухаємося як єдина команда до кінця програми, 
                        підтримуючи одне одного на шляху особистісного зростання."
                      </p>
                    </div>
                  </div>
                </div>

                {/* The modified section starts here */}
                
                <div className="bg-gradient-to-r from-blue-50/50 to-stone-50/30 rounded-2xl p-6 border border-blue-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Група може продовжуватися</h3>
                  <div className="space-y-4">
                    <p className="text-stone-700 font-light leading-relaxed">
                      Якщо більшість учасників виявить таке бажання. Це рішення приймається колективно наприкінці програми.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-green-100/50">
                        <h4 className="text-lg text-stone-800 mb-2 font-medium">Переваги продовження:</h4>
                        <ul className="space-y-1 text-stone-700 font-light text-sm">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Поглиблена робота з особистими темами
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Міцніші зв'язки між учасниками
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Закріплення здобутих навичок
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 border border-green-100/50">
                        <h4 className="text-lg text-stone-800 mb-2 font-medium">Умови продовження:</h4>
                        <ul className="space-y-1 text-stone-700 font-light text-sm">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Рішення приймається групою разом
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Мінімум 8 учасників мають бажання
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2 text-xs">•</span>
                            Окрема домовленість про умови
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-green-100/50 text-center">
                      <p className="text-stone-700 font-light italic">
                        "Групи, які продовжуються, часто стають ще більш глибокими та підтримуючими спільнотами 
                        для особистісного зростання та життєвих змін."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Continuation */}
            <div className="bg-gradient-to-r from-green-50/50 to-stone-50/30 rounded-2xl p-6 border border-green-100/50">
              <h3 className="text-xl text-stone-800 mb-4 font-medium">Продовження після 10 сесій</h3>
              <div className="space-y-4">
                <p className="text-stone-700 font-light leading-relaxed">
                  <span className="font-medium text-green-700">Група може продовжуватися</span> після завершення базового курсу з 10 сесій, 
                  якщо більшість учасників виявить таке бажання. Це рішення приймається колективно наприкінці програми.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-green-100/50">
                    <h4 className="text-lg text-stone-800 mb-2 font-medium">Переваги продовження:</h4>
                    <ul className="space-y-1 text-stone-700 font-light text-sm">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Поглиблена робота з особистими темами
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Міцніші зв'язки між учасниками
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Закріплення здобутих навичок
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-green-100/50">
                    <h4 className="text-lg text-stone-800 mb-2 font-medium">Умови продовження:</h4>
                    <ul className="space-y-1 text-stone-700 font-light text-sm">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Рішення приймається групою разом
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Мінімум 8 учасників мають бажання
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-xs">•</span>
                        Окрема домовленість про умови
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-green-100/50 text-center">
                  <p className="text-stone-700 font-light italic">
                    "Групи, які продовжуються, часто стають ще більш глибокими та підтримуючими спільнотами 
                    для особистісного зростання та життєвих змін."
                  </p>
                </div>
              </div>
            </div>

            {/* Why 10 Sessions and Payment Rationale */}
            <div className="bg-gradient-to-r from-blue-50/50 to-stone-50/30 rounded-2xl p-6 border border-blue-100/50">
              <h3 className="text-xl text-stone-800 mb-4 font-medium">Чому саме 10 сесій?</h3>
              <div className="space-y-4">
                <p className="text-stone-700 font-light leading-relaxed">
                  <span className="font-medium text-blue-700">10 сесій — це оптимальна кількість</span>, щоб ви змогли 
                  відчути терапевтичний процес, побачити свій розвиток та отримати стабільність у груповій роботі. 
                  Це достатньо часу для справжніх змін.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-blue-100/50 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                          <path d="M2 12 L14 4 M14 4 L10 4 M14 4 L14 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-lg text-stone-800 mb-2 font-medium">Відчути процес</h4>
                    <p className="text-stone-700 font-light text-sm">
                      Перші сесії — знайомство, наступні — глибока робота
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-blue-100/50 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                          <path d="M8 2 C8 2, 8 8, 8 14 M5 5 C5 5, 8 8, 8 8 M11 5 C11 5, 8 8, 8 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="8" cy="14" r="1" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-lg text-stone-800 mb-2 font-medium">Побачити розвиток</h4>
                    <p className="text-stone-700 font-light text-sm">
                      Зміни стають помітними після 4-5 сесії
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-blue-100/50 text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                          <path d="M8 1 L8 15 M4 5 L12 5 M5 9 L11 9 M6 13 L10 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-lg text-stone-800 mb-2 font-medium">Отримати стабільність</h4>
                    <p className="text-stone-700 font-light text-sm">
                      Закріплення нових навичок і патернів поведінки
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Rationale */}
            <div className="bg-gradient-to-r from-indigo-50/50 to-stone-50/30 rounded-2xl p-6 border border-indigo-100/50">
              <h3 className="text-xl text-stone-800 mb-4 font-medium">Чому оплата одразу за 10 сесій?</h3>
              <div className="space-y-4">
                <p className="text-stone-700 font-light leading-relaxed">
                  Ми пропонуємо оплату за весь курс з кількох важливих причин, які роблять психотерапію 
                  більш доступною та ефективною для вас:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-indigo-100/50">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-sm">💰</span>
                      </div>
                      <h4 className="text-lg text-stone-800 font-medium">Доступна ціна</h4>
                    </div>
                    <ul className="space-y-1 text-stone-700 font-light text-sm">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Нижча вартість за сесію порівняно з поодинокими зустрічами
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Можливість познайомитися з форматом групової терапії
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Економія порівняно з індивідуальною терапією
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-indigo-100/50">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-sm">🌐</span>
                      </div>
                      <h4 className="text-lg text-stone-800 font-medium">Продвиження онлайн терапії</h4>
                    </div>
                    <ul className="space-y-1 text-stone-700 font-light text-sm">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Робимо психотерапію більш доступною
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Розвиваємо культуру ментального здоров'я онлайн
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2 text-xs">•</span>
                        Даємо можливість спробувати без великих витрат
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-indigo-100/50">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-indigo-600 text-sm">🎯</span>
                    </div>
                    <h4 className="text-lg text-stone-800 font-medium">Психологічні переваги</h4>
                  </div>
                  <p className="text-stone-700 font-light text-sm leading-relaxed">
                    Коли ви оплачуєте весь курс, це створює внутрішню мотивацію до участі та зобов'язання перед собою. 
                    Ви інвестуєте у свій розвиток, що підсилює ефект від терапії та допомагає подолати опір.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-indigo-100/50 text-center">
                  <p className="text-stone-700 font-light italic">
                    "Наша мета — зробити якісну психотерапію доступною для більшої кількості людей. 
                    Пакетна оплата дозволяє нам утримувати демократичні ціни."
                  </p>
                </div>
              </div>
            </div>

            {/* Payment and Financial Terms */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💳</span>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Оплата та фінансові умови</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50/50 to-stone-50/30 rounded-2xl p-6 border border-amber-100/50">
                  <h3 className="text-xl text-stone-800 mb-3 font-medium">Оплата курсу</h3>
                  <ul className="space-y-3 text-stone-700 font-light">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Повна оплата курсу здійснюється до початку першої сесії
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Можлива оплата в розстрочку за домовленістю
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Оплата підтверджує ваше місце в групі та готовність до роботи
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
                  <h3 className="text-xl text-stone-800 mb-3 font-medium">Важливо знати</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="text-xs">!</span>
                      </div>
                      <div>
                        <p className="text-stone-800 font-medium mb-2">Кошти не повертаються</p>
                        <p className="text-stone-700 font-light">
                          Після початку курсу кошти не підлягають поверненню. Це пов'язано з груповою динамікою 
                          та необхідністю підтримувати стабільність складу групи.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="text-xs">!</span>
                      </div>
                      <div>
                        <p className="text-stone-800 font-medium mb-2">Пропуски не відпрацьовуються</p>
                        <p className="text-stone-700 font-light">
                          Кожна сесія є частиною цілісного процесу. Пропущені сесії не компенсуються 
                          індивідуальними зустрічами або поверненням коштів.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Responsibility */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Особиста відповідальність</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-stone-50/50 to-amber-50/30 rounded-2xl p-6 border border-stone-100/50">
                  <p className="text-lg text-stone-800 leading-relaxed mb-4 font-light">
                    <span className="text-stone-700 font-medium">Група — це простір, у який ви в першу чергу вкладаєтесь.</span> 
                    Ваша присутність, відкритість та готовність до роботи формують якість досвіду для всіх.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 border border-stone-100/50">
                    <h3 className="text-xl text-stone-800 mb-4 font-medium">Принцип дзеркала</h3>
                    <p className="text-stone-700 leading-relaxed font-light italic">
                      "Те, що ви робите в групі, ви робите і у житті"
                    </p>
                    <p className="text-stone-700 leading-relaxed mt-3 font-light">
                      Ваші патерни поведінки, реакції та способи взаємодії в групі відображають 
                      ваші життєві стратегії. Це дає унікальну можливість побачити та змінити їх.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Ваша відповідальність:</h3>
                    <ul className="space-y-2 text-stone-700 font-light">
                      <li className="flex items-start">
                        <span className="text-rose-400 mr-2">•</span>
                        Регулярна відвідуваність сесій
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-400 mr-2">•</span>
                        Пунктуальність та повага до часу групи
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-400 mr-2">•</span>
                        Щирість у вираженні своїх переживань
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-400 mr-2">•</span>
                        Готовність давати та отримувати зворотний зв'язок
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/30 rounded-2xl p-6 border border-amber-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Ми підтримуємо вас у:</h3>
                    <ul className="space-y-2 text-stone-700 font-light">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        Подоланні страхів та сорому
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        Вираженні складних емоцій
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        Побудові довіри до процесу
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        Інтеграції нового досвіду в життя
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Конфіденціальність</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50/50 to-stone-50/30 rounded-2xl p-6 border border-blue-100/50">
                  <h3 className="text-xl text-stone-800 mb-4 font-medium">Правило абсолютної таємниці</h3>
                  <p className="text-stone-700 leading-relaxed mb-4 font-light">
                    Все, що відбувається в групі, залишається в групі. Це основа довіри та безпеки нашого спільного простору.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 border border-blue-100/50">
                    <h4 className="text-lg text-stone-800 mb-3 font-medium">Це означає:</h4>
                    <ul className="space-y-3 text-stone-700 font-light">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Не розголошувати особисті історії інших учасників
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Не обговорювати процеси групи з третіми особами
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Поважати приватність кожного учасника
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        Не використовувати інформацію з групи поза її межами
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100/50">
                  <p className="text-stone-700 leading-relaxed font-light text-center italic">
                    "Довіра будується роками, але може бути втрачена за секунди. 
                    Ваша відповідальність — оберігати довіру кожного учасника."
                  </p>
                </div>
              </div>
            </div>

            {/* Group Dynamics and Boundaries */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🌸</span>
                </div>
                <h2 className="text-2xl text-stone-800 font-light">Групова динаміка та межі</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50/30 rounded-2xl p-6 border border-green-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Що підтримуємо:</h3>
                    <ul className="space-y-2 text-stone-700 font-light">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Щирість та автентичність
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Повагу до різних точок зору
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Конструктивний зворотний зв'язок
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Прийняття емоцій всіх учасників
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Взаємну підтримку та розуміння
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50/30 rounded-2xl p-6 border border-red-100/50">
                    <h3 className="text-lg text-stone-800 mb-3 font-medium">Неприйнятно:</h3>
                    <ul className="space-y-2 text-stone-700 font-light">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Агресія та образи
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Порушення конфіденціальності
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Романтичні стосунки між учасниками
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Алкоголь або наркотичні речовини
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Нав'язування своїх поглядів іншим
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support and Understanding */}
            <div className="bg-gradient-to-br from-amber-50/30 via-white to-rose-50/30 rounded-3xl p-8 md:p-12 shadow-soft border border-amber-100/50">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h2 className="text-2xl text-stone-800 mb-4 font-light">Це нормально</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-stone-700 leading-relaxed text-center font-light">
                  Ми розуміємо, що приєднання до групи може викликати тривогу. 
                  Це абсолютно природна реакція на новий досвід.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center border border-amber-100/50">
                    <div className="text-3xl mb-3">😌</div>
                    <h3 className="text-lg text-stone-800 mb-2 font-medium">Нервуватись</h3>
                    <p className="text-stone-600 font-light">Перед першою сесією це природно</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 text-center border border-amber-100/50">
                    <div className="text-3xl mb-3">🤔</div>
                    <h3 className="text-lg text-stone-800 mb-2 font-medium">Сумніватись</h3>
                    <p className="text-stone-600 font-light">Чи підходить вам цей формат</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 text-center border border-amber-100/50">
                    <div className="text-3xl mb-3">🕰️</div>
                    <h3 className="text-lg text-stone-800 mb-2 font-medium">Потребувати часу</h3>
                    <p className="text-stone-600 font-light">Щоб освоїтись у групі</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-rose-100/50 text-center">
                  <p className="text-xl text-stone-800 leading-relaxed font-light">
                    Пам'ятайте: <span className="text-rose-600 font-medium">кожен учасник пройшов через ці самі переживання.</span> 
                    Ми всі тут для того, щоб підтримувати один одного на цьому шляху.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Questions */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-stone-100/50 text-center">
              <h2 className="text-2xl text-stone-800 mb-6 font-light">Маєте питання?</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-8 font-light">
                Якщо у вас є запитання щодо правил або будь-яких аспектів групової роботи, 
                будь ласка, зв'яжіться зі мною. Краще обговорити все заздалегідь.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/julia_storozhevska" 
                  className="bg-gradient-to-r from-rose-500 to-amber-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-soft font-medium"
                >
                  Написати в Telegram
                </a>
                <a 
                  href="mailto:julia.storozhevska@email.com" 
                  className="bg-stone-100 text-stone-800 px-8 py-3 rounded-full hover:bg-stone-200 transition-soft font-medium"
                >
                  Надіслати email
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}