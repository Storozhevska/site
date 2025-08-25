import { RegistrationButton } from "./RegistrationButton";

const benefits = [
  {
    title: "Розуміння себе",
    description: "Глибоке усвідомлення своїх потреб, бажань та мотивацій через групову взаємодію",
    color: "from-amber-400 to-amber-500"
  },
  {
    title: "Емоційна зрілість", 
    description: "Навчання розпізнавати, приймати та екологічно виражати свої емоції",
    color: "from-rose-400 to-rose-500"
  },
  {
    title: "Здорові стосунки",
    description: "Покращення якості міжособистісних відносин через роботу з патернами спілкування",
    color: "from-green-400 to-green-500"
  },
  {
    title: "Впевненість",
    description: "Зростання самоповаги та впевненості через прийняття себе в групі",
    color: "from-blue-400 to-blue-500"
  },
  {
    title: "Стресостійкість",
    description: "Розвиток здорових механізмів подолання стресу та життєвих викликів",
    color: "from-purple-400 to-purple-500"
  },
  {
    title: "Автентичність",
    description: "Можливість бути справжнім собою без страху засудження чи відкидання",
    color: "from-teal-400 to-teal-500"
  }
];

export function Benefits() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-b from-stone-50 to-amber-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-stone-800 mb-6">Переваги терапії</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Що дає вам участь у психотерапевтичній групі та як це впливає на якість життя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <h3 className="text-xl text-stone-800 mb-4 text-center">{benefit.title}</h3>
                <p className="text-stone-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 max-w-4xl mx-auto">
              <h3 className="text-2xl text-stone-800 mb-6">Чому саме гештальт-терапія?</h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Гештальт-терапія фокусується на цілісності особистості та роботі з 'тут і тепер'. 
                Це дозволяє не тільки зрозуміти проблему, але й відчути та інтегрувати новий досвід 
                на рівні тіла, емоцій та розуму.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                У групі ви отримуєте підтримку однодумців та можливість практикувати нові 
                навички у безпечному середовищі.
              </p>
            </div>
          </div>

          {/* New section: Це для тебе, якщо */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-amber-50 via-white to-stone-50 rounded-3xl p-8 md:p-12 border border-amber-100 max-w-5xl mx-auto relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 opacity-15">
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
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-stone-800">Це для тебе, якщо:</h3>
                  </div>
                </div>

                {/* Goals list */}
                <div className="space-y-6 mb-10">
                  {[
                    "Ти хочеш нарешті зрозуміти, чого насправді прагнеш — і перестати жити на автоматі.",
                    "Ти хочеш знайти спокій, замість постійної тривоги, напруги чи провини.",
                    "Ти хочеш навчитися довіряти, відкриватися, відстоювати себе — без страху бути відкинутим.",
                    "Ти хочеш відпустити контроль — і жити не в напрузі, а в потоці.",
                    "Ти хочеш відчути підтримку та справжній зв'язок із людьми, без масок і ролей."
                  ].map((goal, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0 mt-3"></div>
                      <p className="text-lg text-stone-700 leading-relaxed">
                        {goal}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <RegistrationButton variant="primary" size="md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}