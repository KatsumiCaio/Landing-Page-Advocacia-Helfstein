import React, { useState } from 'react';
import { Scale, FileText, Users, Landmark, ShieldCheck, Briefcase, ChevronRight, MessageCircle, Check, X, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS, getWhatsAppLink } from '../data';
import { PracticeArea } from '../types';

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#c5a059]' };
    switch (iconName) {
      case 'file-text':
        return <FileText {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'landmark':
        return <Landmark {...props} />;
      case 'briefcase':
        return <Briefcase {...props} />;
      case 'shield-check':
        return <ShieldCheck {...props} />;
      case 'scale':
      default:
        return <Scale {...props} />;
    }
  };

  return (
    <section id="areas" className="relative py-16 lg:py-24 bg-[#02050a] border-b border-[#c5a059]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-semibold">
                Especialidades Jurídicas
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#c5a059]">
              Áreas de Atuação
            </h2>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-1">
              Atuação Contenciosa e Preventiva de Alto Impacto
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá Dr. Marcelo, gostaria de saber se o senhor atende o meu tipo de caso.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#e6be6a] flex items-center gap-2 border-b border-[#c5a059] pb-1 w-fit transition-colors"
          >
            <span>Consultar Outras Áreas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Sleek Interface Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="p-6 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 border border-[#c5a059]/40 bg-[#02050a] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a059] border border-[#c5a059]/30 px-2 py-0.5 bg-[#02050a]">
                    Alta Complexidade
                  </span>
                </div>

                {/* Title and Summary */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-serif text-white group-hover:text-[#c5a059] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {area.shortDesc}
                  </p>
                </div>

                {/* Items List */}
                <ul className="space-y-1.5 pt-3 border-t border-[#c5a059]/20">
                  {area.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-300">
                      <span className="text-[#c5a059] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-5 mt-4 border-t border-[#c5a059]/20 space-y-2">
                <a
                  href={getWhatsAppLink(area.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Consultar Caso</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="w-full text-center py-1 text-[11px] uppercase tracking-wider text-[#c5a059] hover:text-[#e6be6a] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sleek Bottom Notice */}
        <div className="mt-10 p-6 border border-[#c5a059]/30 bg-[#050a14] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif text-[#c5a059]">
              Análise e Diagnóstico Jurídico Individualizado
            </h4>
            <p className="text-xs text-gray-400">
              Cada caso é avaliado de acordo com as peculiaridades dos fatos e documentos apresentados.
            </p>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-bold text-xs uppercase tracking-widest transition-all"
          >
            Falar com Dr. Marcelo
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#050a14] border-2 border-[#c5a059] p-6 sm:p-8 space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 p-1.5 bg-[#02050a] text-gray-400 hover:text-white border border-[#c5a059]/40"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#c5a059]/30 pb-4">
              <div className="w-10 h-10 border border-[#c5a059] bg-[#02050a] flex items-center justify-center">
                {getIcon(selectedArea.iconName)}
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                  {selectedArea.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Advocacia Especializada</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              {selectedArea.fullDesc}
            </p>

            <div className="space-y-2">
              <h4 className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold">
                Serviços Compreendidos:
              </h4>
              <ul className="space-y-1.5 bg-[#02050a] p-4 border border-[#c5a059]/20">
                {selectedArea.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink(selectedArea.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedArea(null)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Agendar Consulta Nesta Área</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="py-3 px-4 text-xs uppercase tracking-wider text-gray-400 hover:text-white border border-[#c5a059]/30"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
