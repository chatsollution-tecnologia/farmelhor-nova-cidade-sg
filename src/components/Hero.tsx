import React from 'react';
import { PHARMACY_DATA } from '../data/pharmacyData';
import { MessageCircle, ShieldCheck, HeartHandshake, Truck, MapPin } from 'lucide-react';
const heroImage = `${import.meta.env.BASE_URL}WhatsApp%20Image%202026-07-22%20at%2018.02.56.jpeg`;

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#9b141a] text-white overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Motorcycle Character */}
          <div className="md:col-span-6 lg:col-span-6 flex items-center justify-center md:justify-start shrink-0">
            <img
              src={heroImage}
              alt="FarMelhor Nova Cidade SG - Entregador de Motocicleta"
              referrerPolicy="no-referrer"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain select-none pointer-events-none"
            />
          </div>

          {/* Right Column: Title, Subtitle, WhatsApp Button & Badges */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start text-left space-y-5 lg:space-y-6">
            
            {/* Top Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-full shadow-xs text-xs sm:text-sm font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Farmácia confiável • Há 24 anos em Nova Cidade</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
              Cuidado e confiança perto de você
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-red-100 leading-relaxed">
              Atendimento para Nova Cidade e região, em São Gonçalo.
            </p>

            {/* Primary Action Button: Falar no WhatsApp */}
            <div className="pt-2 w-full space-y-4">
              <a
                href={PHARMACY_DATA.whatsAppPrimary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-black text-lg sm:text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 transition-all group w-full sm:w-auto"
                id="hero-whatsapp-main-btn"
              >
                <MessageCircle className="w-6 h-6 fill-current group-hover:animate-bounce" />
                <span>Falar no WhatsApp</span>
              </a>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-red-100 pt-1">
                <span className="flex items-center gap-1.5 bg-red-950/40 backdrop-blur-xs px-3 py-1 rounded-lg border border-red-400/30">
                  <Truck className="w-3.5 h-3.5 text-emerald-300" /> Entregas no Bairro
                </span>
                <span className="flex items-center gap-1.5 bg-red-950/40 backdrop-blur-xs px-3 py-1 rounded-lg border border-red-400/30">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-300" /> Farmácia Popular
                </span>
                <span className="flex items-center gap-1.5 bg-red-950/40 backdrop-blur-xs px-3 py-1 rounded-lg border border-red-400/30">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" /> Frente Mercado Novo Rio
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
