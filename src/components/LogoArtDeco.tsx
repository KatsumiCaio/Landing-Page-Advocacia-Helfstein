import React from 'react';

interface LogoArtDecoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  inlineText?: boolean;
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
}

export const LogoArtDeco: React.FC<LogoArtDecoProps> = ({
  size = 'md',
  showSubtitle = true,
  inlineText = false,
  className = '',
  variant = 'full'
}) => {
  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }[size];

  const titleSizes = {
    sm: 'text-sm font-semibold tracking-wider',
    md: 'text-base sm:text-lg font-bold tracking-widest',
    lg: 'text-xl sm:text-2xl font-bold tracking-[0.2em]',
    xl: 'text-2xl sm:text-3xl font-extrabold tracking-[0.25em]'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-[0.18em]'
  }[size];

  const ArtDecoSymbol = (
    <div className={`relative flex items-center justify-center shrink-0 ${iconDimensions}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#F5DC7C" />
            <stop offset="100%" stopColor="#A37A2C" />
          </linearGradient>
          <linearGradient id="goldGradientRing" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A37A2C" />
            <stop offset="50%" stopColor="#FFF2B2" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <radialGradient id="crestDarkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#05080E" />
          </radialGradient>
        </defs>

        {/* Circular Outer Night Blue Disc */}
        <circle cx="50" cy="50" r="47" fill="url(#crestDarkGlow)" stroke="url(#goldGradient)" strokeWidth="1.75" />
        
        {/* Fine concentric Art Deco Rings */}
        <circle cx="50" cy="50" r="43.5" stroke="url(#goldGradientRing)" strokeWidth="0.75" strokeDasharray="1 1.5" />
        <circle cx="50" cy="50" r="40" stroke="url(#goldGradient)" strokeWidth="0.8" />

        {/* Art Deco Geometric Diamond / Scales Matrix */}
        <polygon points="50,14 86,50 50,86 14,50" stroke="url(#goldGradient)" strokeWidth="0.85" fill="none" opacity="0.85" />
        <polygon points="50,18 82,50 50,82 18,50" stroke="url(#goldGradientRing)" strokeWidth="0.5" fill="none" opacity="0.5" />
        
        {/* Horizontal & Vertical Cross Axis */}
        <line x1="50" y1="14" x2="50" y2="86" stroke="url(#goldGradient)" strokeWidth="0.75" opacity="0.6" />
        <line x1="14" y1="50" x2="86" y2="50" stroke="url(#goldGradient)" strokeWidth="0.75" opacity="0.6" />

        {/* Stylized Monogram "H" with Law Balance Axis */}
        {/* Left Column */}
        <line x1="37" y1="31" x2="37" y2="69" stroke="url(#goldGradient)" strokeWidth="2.4" strokeLinecap="square" />
        {/* Right Column */}
        <line x1="63" y1="31" x2="63" y2="69" stroke="url(#goldGradient)" strokeWidth="2.4" strokeLinecap="square" />
        {/* Crossbar */}
        <line x1="37" y1="50" x2="63" y2="50" stroke="url(#goldGradient)" strokeWidth="2" />

        {/* Art Deco Serifs and Accents */}
        <line x1="32" y1="31" x2="42" y2="31" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <line x1="32" y1="69" x2="42" y2="69" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <line x1="58" y1="31" x2="68" y2="31" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <line x1="58" y1="69" x2="68" y2="69" stroke="url(#goldGradient)" strokeWidth="1.5" />

        {/* Central Balance Diamond */}
        <polygon points="50,45 55,50 50,55 45,50" fill="url(#goldGradient)" />

        {/* 4 Cardinal Dots / Stars */}
        <circle cx="50" cy="22" r="1.5" fill="url(#goldGradient)" />
        <circle cx="50" cy="78" r="1.5" fill="url(#goldGradient)" />
        <circle cx="22" cy="50" r="1.5" fill="url(#goldGradient)" />
        <circle cx="78" cy="50" r="1.5" fill="url(#goldGradient)" />
      </svg>
    </div>
  );

  if (variant === 'icon') {
    return ArtDecoSymbol;
  }

  return (
    <div className={`flex ${inlineText ? 'flex-row items-center gap-3.5' : 'flex-col items-center text-center gap-2'} ${className}`}>
      {ArtDecoSymbol}
      <div className={inlineText ? 'text-left' : 'text-center'}>
        <div className={`font-serif-title uppercase gold-gradient-text leading-tight ${titleSizes}`}>
          Advocacia Helfstein
        </div>
        {showSubtitle && (
          <div className={`text-[#C5A059] uppercase font-light mt-0.5 tracking-wider ${subtitleSizes}`}>
            Dr. Marcelo Vieira Helfstein da Silva
          </div>
        )}
      </div>
    </div>
  );
};
