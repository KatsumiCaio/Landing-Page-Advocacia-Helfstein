import React, { useState } from 'react';
import {
  Scale,
  FileText,
  Users,
  Landmark,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  MessageCircle,
  Check,
  X,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS, getWhatsAppLink } from '../data';
import { PracticeArea } from '../types';
import {
  transitions,
  interactiveTap,
  modalBackdropVariants,
  scaleUpVariants,
  staggerFast,
} from '../lib/motion';

interface PracticeAreasProps {
  onOpenAssessmentForArea?: (areaId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenAssessmentForArea }) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'civil-contratos', label: 'Civil & Contratos' },
    { id: 'familia-sucessoes', label: 'Família & Inventários' },
    { id: 'tributario', label: 'Tributário & Fiscal' },
    { id: 'trabalho-empresarial', label: 'Trabalhista & Empresarial' },
    { id: 'consumidor-reparacao', label: 'Consumidor & Fraudes' },
  ];

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesFilter = activeFilter === 'all' || area.id === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
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

        {/* Interactive Filter Pills & Search Bar */}
        <div className="mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Filter Pills with Animated layoutId Indicator */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterCategories.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-semibold whitespace-nowrap rounded-sm transition-colors ${
                    isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white bg-[#080d17] border border-[#c5a059]/20'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={transitions.springSmooth}
                      className="absolute inset-0 bg-[#c5a059] rounded-sm -z-10 shadow-[0_0_12px_rgba(197,160,89,0.3)]"
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-3.5 h-3.5 text-[#c5a059] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por assunto ou termo..."
              className="w-full pl-8 pr-8 py-2 bg-[#080d17] border border-[#c5a059]/30 rounded-sm text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Sleek Interface Cards Grid with Layout Animations */}
        <motion.div
          layout
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredAreas.map((area) => (
              <motion.div
                key={area.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={transitions.springSmooth}
                whileHover={{ y: -3 }}
                className="p-6 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-all group flex flex-col justify-between rounded-sm relative"
              >
                <div className="space-y-4">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 border border-[#c5a059]/40 bg-[#02050a] flex items-center justify-center group-hover:border-[#c5a059] transition-colors rounded-sm">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#c5a059] border border-[#c5a059]/30 px-2 py-0.5 bg-[#02050a] font-mono">
                      Especializado
                    </span>
                  </div>

                  {/* Title and Summary */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-serif text-white group-hover:text-[#c5a059] transition-colors font-bold">
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
                        <span className="text-[#c5a059] mt-0.5 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-5 mt-4 border-t border-[#c5a059]/20 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <motion.a
                      href={getWhatsAppLink(area.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={interactiveTap}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-[11px] uppercase tracking-wider rounded-sm transition-colors text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                      <span>WhatsApp</span>
                    </motion.a>

                    {onOpenAssessmentForArea ? (
                      <motion.button
                        type="button"
                        onClick={() => onOpenAssessmentForArea(area.id)}
                        whileTap={interactiveTap}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#0c1424] hover:bg-[#131e33] border border-[#c5a059]/50 text-[#c5a059] hover:text-white font-semibold text-[11px] uppercase tracking-wider rounded-sm transition-colors"
                      >
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span>Avaliar</span>
                      </motion.button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedArea(area)}
                        className="flex items-center justify-center gap-1 py-2.5 px-2 bg-[#0c1424] border border-[#c5a059]/40 text-[#c5a059] text-[11px] uppercase tracking-wider rounded-sm"
                      >
                        <span>Detalhes</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className="w-full text-center py-1 text-[11px] uppercase tracking-wider text-gray-400 hover:text-[#c5a059] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Ver escopo completo do serviço</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAreas.length === 0 && (
          <div className="p-10 border border-[#c5a059]/20 bg-[#080d17] text-center space-y-3 rounded-sm my-6">
            <p className="text-sm text-gray-300">
              Nenhuma especialidade encontrada para o termo &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="text-xs font-bold text-[#c5a059] uppercase tracking-wider border-b border-[#c5a059]"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Sleek Bottom Notice */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={transitions.easeFast}
          className="mt-10 p-6 border border-[#c5a059]/30 bg-[#050a14] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif text-[#c5a059] font-bold">
              Análise e Diagnóstico Jurídico Individualizado
            </h4>
            <p className="text-xs text-gray-400 font-light">
              Cada caso é avaliado de acordo com as peculiaridades dos fatos e documentos apresentados.
            </p>
          </div>

          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={interactiveTap}
            whileHover={{ y: -1 }}
            className="shrink-0 px-6 py-3 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-bold text-xs uppercase tracking-widest transition-all rounded-sm"
          >
            Falar com Dr. Marcelo
          </motion.a>
        </motion.div>
      </div>

      {/* Detail Modal with AnimatePresence & Motion Backdrops */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedArea(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              variants={scaleUpVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-lg bg-[#050a14] border-2 border-[#c5a059] p-6 sm:p-8 space-y-6 shadow-2xl z-10 my-8 rounded-sm"
            >
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 p-1.5 bg-[#02050a] text-gray-400 hover:text-white border border-[#c5a059]/40 rounded-sm transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 border-b border-[#c5a059]/30 pb-4">
                <div className="w-10 h-10 border border-[#c5a059] bg-[#02050a] flex items-center justify-center rounded-sm">
                  {getIcon(selectedArea.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                    {selectedArea.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    Advocacia Especializada
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {selectedArea.fullDesc}
              </p>

              <div className="space-y-2">
                <h4 className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold">
                  Serviços Compreendidos:
                </h4>
                <ul className="space-y-1.5 bg-[#02050a] p-4 border border-[#c5a059]/20 rounded-sm">
                  {selectedArea.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={getWhatsAppLink(selectedArea.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedArea(null)}
                  whileTap={interactiveTap}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors rounded-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Agendar Consulta Nesta Área</span>
                </motion.a>
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="py-3 px-4 text-xs uppercase tracking-wider text-gray-400 hover:text-white border border-[#c5a059]/30 rounded-sm transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
