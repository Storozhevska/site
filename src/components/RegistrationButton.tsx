interface RegistrationButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function RegistrationButton({ 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: RegistrationButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-soft-lg transform";
  
  const variants = {
    primary: "bg-gradient-to-r from-rose-400 to-amber-300 text-white hover:from-rose-500 hover:to-amber-400 shadow-soft",
    secondary: "bg-white/80 backdrop-blur-sm border border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300",
    outline: "border-2 border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400"
  };

  const sizes = {
    sm: "px-6 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-4"
  };

  return (
    <a
      href="https://t.me/yuliyastor"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <svg 
        className="w-5 h-5" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
      Записатися на групу
    </a>
  );
}