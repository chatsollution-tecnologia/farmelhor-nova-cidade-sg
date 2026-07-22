import React, { useEffect } from 'react';
import { PRIVACY_POLICY_TEXT, TERMS_OF_USE_TEXT, PHARMACY_DATA } from '../data/pharmacyData';
import { X, ShieldCheck, FileText, Calendar, Building2, Mail, Printer, CheckCircle } from 'lucide-react';

interface LegalModalsProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms';
  onClose: () => void;
  onTabChange: (tab: 'privacy' | 'terms') => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Backdrop overlay close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50">
          
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${activeTab === 'privacy' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'}`}>
              {activeTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
                {activeTab === 'privacy' ? 'Política de Privacidade & LGPD' : 'Termos de Uso do Site'}
              </h2>
              <p className="text-xs text-slate-500">
                {PHARMACY_DATA.legalName} • CNPJ: {PHARMACY_DATA.cnpjFormatted}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-6 h-6" />
          </button>

        </div>

        {/* Tab Selection Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-100/80 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => onTabChange('privacy')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Política de Privacidade (LGPD)</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('terms')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'border-slate-800 text-slate-900 bg-white shadow-xs rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Termos de Uso</span>
          </button>
        </div>

        {/* Scrollable Document Content Area */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed max-h-[60vh]">
          
          {/* Metadata Banner inside document */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span><strong>Controlador:</strong> {PHARMACY_DATA.legalName} ({PHARMACY_DATA.tradeName})</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4 text-red-600" />
              <span><strong>Última Atualização:</strong> {PRIVACY_POLICY_TEXT.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span><strong>CNPJ:</strong> {PHARMACY_DATA.cnpjFormatted}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-slate-500" />
              <span><strong>Contato DPO:</strong> {PHARMACY_DATA.email}</span>
            </div>
          </div>

          {/* Privacy Policy Content */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium">
                Esta Política de Privacidade foi elaborada conforme os parâmetros da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) para transparência do atendimento.
              </div>

              {PRIVACY_POLICY_TEXT.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2 border-b border-slate-100 pb-4 last:border-b-0">
                  <h3 className="text-base font-bold text-slate-900 font-heading text-emerald-950">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Terms of Use Content */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="p-3.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 text-xs font-medium">
                Estes Termos de Uso regem a navegação e o acesso às informações institucionais disponibilizadas pela empresa HG FIGUEIREDO LTDA no site FarMelhor Nova Cidade SG.
              </div>

              {TERMS_OF_USE_TEXT.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2 border-b border-slate-100 pb-4 last:border-b-0">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Endereço: {PHARMACY_DATA.address.fullFormatted}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-extrabold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Entendido e Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
