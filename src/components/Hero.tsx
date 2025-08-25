import { RegistrationButton } from "./RegistrationButton";

export function Hero() {
  return (
    <header className="h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Enso Circle */}
      <div className="absolute top-20 right-10 md:top-32 md:right-32 opacity-20" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-stone-400">
          <path
            d="M50 100 C50 50, 150 50, 150 100 C150 150, 50 150, 50 100"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
         <h1 className="text-2xl md:text-3xl lg:text-4xl text-stone-800 mb-8 leading-tight">
  Простір натхнення,<br />
  де ви зустрічаєте себе
</h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-stone-800 mb-8 leading-tight">
            Живу на повну
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Психотерапевтична група online для глибокого розуміння себе та гармонійних відносин
          </p>

          <div className="mb-8">
            <RegistrationButton variant="primary" size="lg" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-stone-700">Юлія Сторожевська</h2>
            <p className="text-lg text-stone-500">інтегративний підхід</p>
          </div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 left-20 opacity-20" aria-hidden="true">
        <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
      </div>
      
      {/* Decorative transition line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center w-full z-10" aria-hidden="true">
        <div className="flex items-center space-x-3 opacity-70">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-amber-400"></div>
          <div className="relative">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-amber-300 rounded-full animate-pulse opacity-50"></div>
          </div>
          <div className="w-6 md:w-8 h-px bg-amber-300"></div>
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
          <div className="w-6 md:w-8 h-px bg-amber-300"></div>
          <div className="relative">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-amber-300 rounded-full animate-pulse opacity-50"></div>
          </div>
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-amber-300/80 to-amber-400"></div>
        </div>
      </div>
    </header>
  );
}