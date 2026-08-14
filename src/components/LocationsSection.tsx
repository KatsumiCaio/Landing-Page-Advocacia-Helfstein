import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';
import { OFFICE_LOCATIONS, LAWYER_DATA, getWhatsAppLink } from '../data';

export const LocationsSection: React.FC = () => {
  return (
    <section id="unidades" className="relative py-16 lg:py-24 bg-[#02050a] border-b border-[#c5a059]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-semibold">
              Onde Estamos
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#c5a059]">
            Unidades de Atendimento
          </h2>
          <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-1">
            Estrutura Completa em Capão Bonito, Itapetininga e Atendimento Digital para todo o Brasil
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="border border-[#c5a059] bg-[#050a14] p-6 sm:p-8 space-y-6 relative flex flex-col justify-between"
            >
              {/* Top Tag */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#c5a059]/30 pb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#c5a059] border border-[#c5a059]/30 px-2 py-0.5 bg-[#02050a] block w-fit mb-2">
                      {loc.type}
                    </span>
                    <h3 className="text-xl font-serif text-[#c5a059] font-bold">
                      {loc.city}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-[#c5a059] bg-[#080d17] flex items-center justify-center text-[#c5a059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-3 pt-2 text-xs text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{loc.address}</p>
                      <p className="text-gray-400 text-[11px]">{loc.neighborhood}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>{loc.hours}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span className="font-mono text-[11px]">{loc.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#c5a059]/30 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getWhatsAppLink(`Olá Dr. Marcelo, gostaria de agendar uma consulta na unidade de ${loc.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Agendar Aqui</span>
                </a>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 border border-[#c5a059]/50 text-[#c5a059] hover:bg-[#0c1424] text-xs uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Como Chegar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Digital / National Service Panel */}
        <div className="mt-8 p-6 border border-[#c5a059]/30 bg-[#080d17] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif text-[#c5a059] font-bold uppercase tracking-wider">
              Atendimento Online em Todo o Brasil e Exterior
            </h4>
            <p className="text-xs text-gray-400">
              Reuniões por videoconferência com envio digital de documentos e assinatura eletrônica com validade jurídica integral.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá Dr. Marcelo, gostaria de um atendimento online.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-bold text-xs uppercase tracking-widest transition-all"
          >
            Consulta Virtual
          </a>
        </div>

      </div>
    </section>
  );
};
