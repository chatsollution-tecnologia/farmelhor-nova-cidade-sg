import React from 'react';
import { PHARMACY_DATA } from '../data/pharmacyData';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-red-950 text-red-100 py-10 px-4 sm:px-6 lg:px-8 border-t border-red-900 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Footer Info Grid matching PDF Page 2 structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-red-900/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-lg p-0.5 flex items-center justify-center shrink-0">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute w-1.5 h-4 bg-emerald-600 rounded-xs"></div>
                  <div className="absolute w-4 h-1.5 bg-red-600 rounded-xs"></div>
                  <div className="absolute w-1 h-1 bg-amber-400 rounded-full z-10"></div>
                </div>
              </div>
              <span className="font-heading font-black text-lg text-white">
                <span className="text-red-400">Far</span>
                <span className="text-emerald-400">Melhor</span>
                <span className="text-slate-200 text-xs font-bold block -mt-1">Nova Cidade SG</span>
              </span>
            </div>
            <p className="text-xs text-red-200 leading-relaxed">
              Cuidado e confiança perto de você. Atendimento em Nova Cidade e região, São Gonçalo/RJ.
            </p>
          </div>

          {/* Column 2: Address */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Endereço
            </h4>
            <p className="text-xs text-red-200 leading-relaxed">
              {PHARMACY_DATA.address.street}, {PHARMACY_DATA.address.number}<br />
              {PHARMACY_DATA.address.neighborhood} — {PHARMACY_DATA.address.city}/{PHARMACY_DATA.address.state}
            </p>
            <p className="text-[11px] text-amber-300 font-semibold">
              {PHARMACY_DATA.address.reference}
            </p>
          </div>

          {/* Column 3: Contact & Corporate info */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Contato & Empresa
            </h4>
            <div className="text-xs text-red-200 space-y-1">
              <div><strong>Razão Social:</strong> {PHARMACY_DATA.legalName}</div>
              <div className="font-mono"><strong>CNPJ:</strong> {PHARMACY_DATA.cnpjFormatted}</div>
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-red-300" />
                <a href={`mailto:${PHARMACY_DATA.email}`} className="hover:underline text-white">
                  {PHARMACY_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{PHARMACY_DATA.whatsAppPrimary.numberDisplay} | {PHARMACY_DATA.landlines[0].numberDisplay}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-300">
          <div>
            © 2026 {PHARMACY_DATA.tradeName} ({PHARMACY_DATA.legalName}) — Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-emerald-300 hover:text-white font-semibold transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-red-700">•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="text-red-200 hover:text-white font-semibold transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
