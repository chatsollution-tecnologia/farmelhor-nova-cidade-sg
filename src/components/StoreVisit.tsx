import React from 'react';
import { PHARMACY_DATA } from '../data/pharmacyData';
import { MessageCircle, Phone, MapPin, Navigation, Instagram, Building2, ExternalLink } from 'lucide-react';

export const StoreVisit: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column layout matching Page 2 of the reference PDF */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Address & Action Buttons */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
                <span>Está por perto? Visite nossa loja</span>
                <span className="text-emerald-600">😊</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                {PHARMACY_DATA.address.street}, {PHARMACY_DATA.address.number} — {PHARMACY_DATA.address.neighborhood}, {PHARMACY_DATA.address.city} - {PHARMACY_DATA.address.state}
              </p>
              <p className="text-xs text-red-600 font-bold">
                Ponto de referência: {PHARMACY_DATA.address.reference}
              </p>
            </div>

            {/* Stacked Action Buttons matching PDF reference */}
            <div className="space-y-3 max-w-sm">
              
              {/* WhatsApp Button (Green) */}
              <a
                href={PHARMACY_DATA.whatsAppPrimary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition-all"
                id="visit-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp: {PHARMACY_DATA.whatsAppPrimary.numberDisplay}</span>
              </a>

              {/* Landline Call Button (Dark Solid) */}
              <a
                href={PHARMACY_DATA.landlines[0].url}
                className="w-full flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-black text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-sm transition-all"
                id="visit-call-btn"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Ligar para {PHARMACY_DATA.landlines[0].numberDisplay}</span>
              </a>

              {/* Google Maps Route Button (Outline) */}
              <a
                href={PHARMACY_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-900 font-bold py-3.5 px-6 rounded-2xl border-2 border-slate-300 hover:border-slate-400 transition-all"
                id="visit-maps-btn"
              >
                <Navigation className="w-5 h-5 text-red-600" />
                <span>Como chegar (Google Maps)</span>
              </a>

              {/* Instagram Channel */}
              <a
                href={PHARMACY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-pink-600 py-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Siga-nos no Instagram: {PHARMACY_DATA.instagram.handle}</span>
              </a>

            </div>

          </div>

          {/* Right Column: Visual Card matching PDF page 2 layout */}
          <div className="md:col-span-5">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <div className="w-10 h-10 bg-white rounded-xl shadow-xs border border-slate-200 p-1 flex items-center justify-center shrink-0">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-2 h-5.5 bg-emerald-600 rounded-xs"></div>
                    <div className="absolute w-5.5 h-2 bg-red-600 rounded-xs"></div>
                    <div className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full z-10"></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-base text-slate-900">
                    {PHARMACY_DATA.tradeName}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    CNPJ: {PHARMACY_DATA.cnpjFormatted}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Endereço:</strong> {PHARMACY_DATA.address.fullFormatted}</span>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Telefone Fixo:</strong> {PHARMACY_DATA.landlines[0].numberDisplay}</span>
                </div>

                <div className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>WhatsApp:</strong> {PHARMACY_DATA.whatsAppPrimary.numberDisplay}</span>
                </div>

                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span><strong>Razão Social:</strong> {PHARMACY_DATA.legalName}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 text-center font-medium">
                Atendimento presencial e entregas no bairro.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
