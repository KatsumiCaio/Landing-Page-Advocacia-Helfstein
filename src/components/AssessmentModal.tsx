import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, MessageCircle, ShieldCheck, Scale, Clock, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { LAWYER_DATA, PRACTICE_AREAS, getWhatsAppLink } from '../data';
import { transitions, interactiveTap, modalBackdropVariants, scaleUpVariants } from '../lib/motion';
import { rateLimiter, sanitizeInput } from '../lib/security';
import { observability } from '../lib/observability';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAreaId?: string;
  onOpenLegal?: (tab: 'termos' | 'privacidade') => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  initialAreaId,
  onOpenLegal,
}) => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState<string>(initialAreaId || 'civil-contratos');
  const [urgency, setUrgency] = useState<string>('Recebi uma notificação/intimação recente');
  const [locationPref, setLocationPref] = useState<string>('Online / WhatsApp');
  const [clientName, setClientName] = useState('');
  const [briefSummary, setBriefSummary] = useState('');
  const [agreedLgpd, setAgreedLgpd] = useState(true);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 4;
  const progressPercent = (step / totalSteps) * 100;

  const urgencyOptions = [
    { id: 'urgente', label: 'Urgência Imediata (prazo correndo / intimação)', icon: Clock },
    { id: 'notificacao', label: 'Recebi uma notificação recente ou cobrança', icon: ShieldCheck },
    { id: 'andamento', label: 'Já possuo processo e preciso de nova orientação', icon: Scale },
    { id: 'preventivo', label: 'Desejo orientação preventiva ou consultoria', icon: Sparkles },
  ];

  const locationOptions = [
    { id: 'online', label: 'Atendimento Online (WhatsApp / Vídeo)' },
    { id: 'capao', label: 'Presencial em Capão Bonito - SP' },
    { id: 'itapetininga', label: 'Presencial em Itapetininga - SP' },
  ];

  const currentAreaObj = PRACTICE_AREAS.find((a) => a.id === selectedArea) || PRACTICE_AREAS[0];

  const handleNext = () => {
    observability.trackEvent({
      name: 'assessment_step_next',
      category: 'interaction',
      properties: { fromStep: step, area: selectedArea },
    });
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRateLimitError(null);

    // Rate Limiting Security Check
    const rateCheck = rateLimiter.checkLimit('assessment_submission', { maxAttempts: 4, windowMs: 60000 });
    if (!rateCheck.allowed) {
      const waitSec = Math.ceil((rateCheck.retryAfterMs || 1000) / 1000);
      setRateLimitError(`Por segurança, aguarde ${waitSec}s antes de enviar nova solicitação.`);
      return;
    }

    const cleanName = sanitizeInput(clientName) || 'Cliente';
    const cleanSummary = sanitizeInput(briefSummary);

    setIsSubmitting(true);

    observability.trackEvent({
      name: 'assessment_completed',
      category: 'conversion',
      properties: {
        area: currentAreaObj.title,
        urgency,
        locationPref,
        hasSummary: Boolean(cleanSummary),
      },
    });

    const message = `*SOLICITAÇÃO DE CONSULTA - ADVOCACIA HELFSTEIN*
----------------------------------
*Cliente:* ${cleanName}
*Área Jurídica:* ${currentAreaObj.title}
*Situação:* ${urgency}
*Preferência de Atendimento:* ${locationPref}
${cleanSummary ? `*Resumo do Caso:* ${cleanSummary}` : ''}
----------------------------------
Olá Dr. Marcelo, preenchi o diagnóstico no site e gostaria de agendar meu atendimento.`;

    setTimeout(() => {
      window.open(getWhatsAppLink(message), '_blank');
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with Blur */}
        <motion.div
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          variants={scaleUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-xl bg-[#050a14] border-2 border-[#c5a059] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 my-8 overflow-hidden rounded-sm"
        >
          {/* Progress Header Bar */}
          <div className="bg-[#02050a] border-b border-[#c5a059]/30 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#c5a059] font-bold">
                  Diagnóstico Rápido • Etapa {step} de {totalSteps}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-[#c5a059] transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Smooth Animated Progress Track */}
            <div className="w-full bg-[#080d17] h-1.5 rounded-full overflow-hidden border border-[#c5a059]/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c5a059] to-[#e6be6a]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={transitions.springSmooth}
              />
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <AnimatePresence mode="wait">
              {/* STEP 1: Área de Atuação */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={transitions.easeFast}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                      1. Qual é a principal área do seu caso?
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      Selecione a categoria que melhor representa a sua necessidade jurídica.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {PRACTICE_AREAS.map((area) => {
                      const isSelected = selectedArea === area.id;
                      return (
                        <motion.button
                          key={area.id}
                          type="button"
                          onClick={() => setSelectedArea(area.id)}
                          whileTap={interactiveTap}
                          className={`p-3 text-left border rounded-sm transition-all flex items-start justify-between gap-2 ${
                            isSelected
                              ? 'bg-[#0c1424] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                              : 'bg-[#080d17] border-[#c5a059]/20 hover:border-[#c5a059]/50'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-serif font-bold text-white leading-tight">
                              {area.title}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1 line-clamp-2">
                              {area.shortDesc}
                            </p>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#c5a059] border-[#c5a059] text-black'
                                : 'border-[#c5a059]/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Momento e Urgência */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={transitions.easeFast}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                      2. Qual é a urgência da sua situação?
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      Isso ajuda o Dr. Marcelo a priorizar a análise do seu caso.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {urgencyOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = urgency === opt.label;
                      return (
                        <motion.button
                          key={opt.id}
                          type="button"
                          onClick={() => setUrgency(opt.label)}
                          whileTap={interactiveTap}
                          className={`w-full p-3.5 text-left border rounded-sm transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#0c1424] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                              : 'bg-[#080d17] border-[#c5a059]/20 hover:border-[#c5a059]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-[#c5a059] shrink-0" />
                            <span className="text-xs text-gray-200">{opt.label}</span>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#c5a059] border-[#c5a059] text-black'
                                : 'border-[#c5a059]/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Formato de Atendimento */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={transitions.easeFast}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                      3. Como prefere realizar seu atendimento?
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      Oferecemos estrutura física no interior de SP e atendimento digital para todo o país.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {locationOptions.map((loc) => {
                      const isSelected = locationPref === loc.label;
                      return (
                        <motion.button
                          key={loc.id}
                          type="button"
                          onClick={() => setLocationPref(loc.label)}
                          whileTap={interactiveTap}
                          className={`w-full p-3.5 text-left border rounded-sm transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#0c1424] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                              : 'bg-[#080d17] border-[#c5a059]/20 hover:border-[#c5a059]/50'
                          }`}
                        >
                          <span className="text-xs text-gray-200 font-medium">{loc.label}</span>
                          <div
                            className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#c5a059] border-[#c5a059] text-black'
                                : 'border-[#c5a059]/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Dados & Finalização */}
              {step === 4 && (
                <motion.form
                  key="step4"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={transitions.easeFast}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-serif text-[#c5a059] font-bold">
                      4. Quase pronto! Como podemos te chamar?
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      Preencha seu nome para gerarmos seu atendimento personalizado.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Ex: João da Silva"
                        className="w-full px-3.5 py-2.5 bg-[#02050a] border border-[#c5a059]/40 rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-1">
                        Breve resumo (opcional)
                      </label>
                      <textarea
                        rows={2}
                        value={briefSummary}
                        onChange={(e) => setBriefSummary(e.target.value)}
                        placeholder="Ex: Gostaria de saber como funciona o inventário em cartório..."
                        className="w-full px-3.5 py-2 bg-[#02050a] border border-[#c5a059]/40 rounded-sm text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059] resize-none"
                      />
                    </div>

                    {/* LGPD Consent */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 text-[11px] text-gray-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreedLgpd}
                          onChange={(e) => setAgreedLgpd(e.target.checked)}
                          className="mt-0.5 rounded border-[#c5a059] text-[#c5a059] focus:ring-[#c5a059] bg-[#02050a]"
                        />
                        <span>
                          Concordo com o tratamento dos meus dados para este contato, conforme a{' '}
                          {onOpenLegal ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenLegal('privacidade');
                              }}
                              className="text-[#c5a059] underline hover:text-[#e6be6a]"
                            >
                              Política de Privacidade (LGPD)
                            </button>
                          ) : (
                            <span className="text-[#c5a059]">Política de Privacidade (LGPD)</span>
                          )}
                          .
                        </span>
                      </label>
                    </div>

                    {/* Rate Limit Alert if any */}
                    {rateLimitError && (
                      <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-sm text-xs text-red-200 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{rateLimitError}</span>
                      </div>
                    )}

                    {/* Summary pill */}
                    <div className="p-3 bg-[#02050a] border border-[#c5a059]/30 rounded-sm text-[11px] text-gray-300 space-y-1">
                      <p>
                        <strong className="text-[#c5a059]">Área:</strong> {currentAreaObj.title}
                      </p>
                      <p>
                        <strong className="text-[#c5a059]">Formato:</strong> {locationPref}
                      </p>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Modal Footer Controls */}
          <div className="bg-[#02050a] border-t border-[#c5a059]/30 p-4 sm:p-5 flex items-center justify-between gap-3">
            {step > 1 ? (
              <motion.button
                type="button"
                onClick={handleBack}
                whileTap={interactiveTap}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-widest text-gray-300 hover:text-white border border-[#c5a059]/30 rounded-sm transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar</span>
              </motion.button>
            ) : (
              <span className="text-[10px] text-gray-500 font-mono">
                {LAWYER_DATA.oab}
              </span>
            )}

            {step < totalSteps ? (
              <motion.button
                type="button"
                onClick={handleNext}
                whileTap={interactiveTap}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest rounded-sm transition-all"
              >
                <span>Avançar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !clientName.trim() || !agreedLgpd}
                whileTap={interactiveTap}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c5a059] hover:bg-[#e6be6a] disabled:opacity-50 text-black font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-[0_2px_15px_rgba(197,160,89,0.3)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Preparando...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 fill-current text-black" />
                    <span>Enviar para Dr. Marcelo</span>
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
