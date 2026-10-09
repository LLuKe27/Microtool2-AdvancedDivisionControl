/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { 
  BanknotesIcon, 
  BuildingLibraryIcon, 
  WalletIcon, 
  ArrowTrendingUpIcon, 
  ShieldCheckIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  SparklesIcon,
  EyeIcon,
  UserIcon,
  ShoppingBagIcon,
  ClockIcon,
  ScaleIcon,
  FaceSmileIcon,
  KeyIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

// Custom icons for specific categories
const UtensilsIcon = (props: React.ComponentProps<'svg'>) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h.008v.008H15.75V6.75ZM15.75 12.75h.008v.008H15.75v-.008ZM15.75 18.75h.008v.008H15.75v-.008ZM8.25 6.75h.008v.008H8.25V6.75ZM8.25 12.75h.008v.008H8.25v-.008ZM8.25 18.75h.008v.008H8.25v-.008Z" />
  </svg>
);

// --- Types & Interfaces ---
interface BreakdownItem {
  label: string;
  value: number;
  icon?: React.ElementType;
}

interface BankCardProps {
  name: string;
  colorTheme: 'yellow' | 'orange' | 'purple' | 'blue';
  totalValue: number;
  items: BreakdownItem[];
  percentageOfTotal: string;
  emptyStateLabel?: string; // New prop for content inside empty boxes
}

// --- Utility Functions ---
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

// --- Components ---

const BankCard: React.FC<BankCardProps> = ({ name, colorTheme, totalValue, items, percentageOfTotal, emptyStateLabel }) => {
  const themeStyles = {
    yellow: {
      border: 'border-yellow-500/50',
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-400',
      badge: 'bg-yellow-500/20 text-yellow-300',
      divider: 'bg-yellow-500/20',
      emptyBorder: 'border-yellow-500/20',
      emptyBg: 'bg-yellow-500/5'
    },
    orange: {
      border: 'border-orange-500/50',
      bg: 'bg-orange-500/10',
      text: 'text-orange-400',
      badge: 'bg-orange-500/20 text-orange-300',
      divider: 'bg-orange-500/20',
      emptyBorder: 'border-orange-500/20',
      emptyBg: 'bg-orange-500/5'
    },
    purple: {
      border: 'border-purple-500/50',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-300',
      divider: 'bg-purple-500/20',
      emptyBorder: 'border-purple-500/20',
      emptyBg: 'bg-purple-500/5'
    },
    blue: {
      border: 'border-blue-500/50',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-300',
      divider: 'bg-blue-500/20',
      emptyBorder: 'border-blue-500/20',
      emptyBg: 'bg-blue-500/5'
    }
  };

  const theme = themeStyles[colorTheme];

  return (
    <div className={`relative overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] flex flex-col h-full`}>
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-lg ${theme.badge}`}>
            <BuildingLibraryIcon className="w-6 h-6" />
          </div>
          <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${theme.badge} uppercase tracking-tighter`}>
            {percentageOfTotal} DO TOTAL
          </span>
        </div>
        <h3 className={`text-[10px] font-bold tracking-widest uppercase ${theme.text} mb-1 opacity-80`}>
          BANCO
        </h3>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1">
          {name}
        </h2>
        <div className="mt-2 text-2xl font-light text-white leading-tight">
          {formatCurrency(totalValue)}
        </div>
      </div>

      <div className={`h-px w-full ${theme.divider}`} />

      {/* Render Items or Specific Label State */}
      {items.length > 0 ? (
        <div className="p-6 flex-1 flex flex-col justify-between min-h-[220px]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group py-3 border-b border-white/5 last:border-0 hover:bg-white/5 -mx-2 px-2 rounded-lg transition-colors">
              <div className="flex items-center gap-4">
                {item.icon && <item.icon className={`w-5 h-5 ${theme.text} opacity-80 group-hover:opacity-100 transition-opacity shrink-0`} />}
                <div className="flex flex-col">
                   <span className="text-xs font-bold tracking-wider text-zinc-300 group-hover:text-white transition-colors leading-tight uppercase">
                      {item.label}
                   </span>
                </div>
              </div>
              <span className="font-mono text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors whitespace-nowrap ml-2">
                {formatCurrency(item.value)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 flex-1 flex flex-col justify-end min-h-[220px]">
            <div className={`w-full h-full min-h-[140px] ${theme.emptyBg} rounded-xl border border-dashed ${theme.emptyBorder} flex flex-col items-center justify-center p-4 text-center group transition-colors duration-500`}>
                 {emptyStateLabel ? (
                   <>
                     <span className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] ${theme.text} opacity-80 group-hover:opacity-100 transition-all duration-300`}>
                        {emptyStateLabel}
                     </span>
                     <div className={`mt-2 w-8 h-0.5 rounded-full ${theme.divider} group-hover:w-16 transition-all duration-500`}></div>
                   </>
                 ) : (
                   <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                      Sem Caixas
                   </span>
                 )}
            </div>
        </div>
      )}
      
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${theme.bg.replace('/10', '')}`} />
    </div>
  );
};

const App: React.FC = () => {
  const [entryValue, setEntryValue] = useState<string>('');
  const total = parseFloat(entryValue) || 0;

  // --- NOVA LÓGICA DE CÁLCULO (UPDATE MÉDIO - 20/40/20/20) ---
  
  // 1. Divisão Primária
  const branchInter = total * 0.20;   // 20%
  const branchMP = total * 0.40;      // 40%
  const branchNubank = total * 0.20;  // 20%
  const branchCaixa = total * 0.20;   // 20%

  // 2. Detalhes BANCO MERCADO PAGO (40%)
  const mpGastosPessoais = branchMP * 0.375;  // 37.5%
  const mpAlimentacao = branchMP * 0.30;      // 30%
  const mpTransporte = branchMP * 0.20;       // 20% (Adjusted to close 100%)
  const mpReservaIntera = branchMP * 0.125;   // 12.5%

  // 3. Detalhes BANCO CAIXA (20%) - Credit Save agora é label
  
  // 4. Inter, Nubank e Caixa AppBank não possuem caixas (Uso Livre / Concentração / Credit Save)

  return (
    <div className="min-h-screen bg-zinc-950 bg-dot-grid text-zinc-50 selection:bg-blue-500/30 pb-20">
      
      {/* Header */}
      <div className="w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="p-1.5 bg-zinc-800 border border-zinc-700 rounded-lg">
                <BanknotesIcon className="w-5 h-5 text-zinc-400" />
             </div>
             <h1 className="font-bold text-base tracking-tight text-white hidden sm:block">
               DDP
             </h1>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">
            Deep Division Protocol
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        
        {/* Input Section */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
            Entrada de Capital (100%)
          </label>
          <div className="relative group">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-zinc-800 font-black group-focus-within:text-zinc-600 transition-colors">
              R$
            </span>
            <input
              type="number"
              placeholder="0,00"
              value={entryValue}
              onChange={(e) => setEntryValue(e.target.value)}
              className="w-full max-w-2xl bg-transparent text-center text-6xl sm:text-8xl font-black text-white placeholder-zinc-900 focus:outline-none focus:placeholder-zinc-800 py-4 pl-12 sm:pl-20"
            />
          </div>
        </div>

        {/* Cards Grid - Order: MERCADO PAGO, NUBANK, INTER, CAIXA */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* 1. BANCO MERCADO PAGO (Yellow) - 40% */}
          <BankCard 
            name="Banco"
            colorTheme="yellow"
            totalValue={branchMP}
            percentageOfTotal="40%"
            items={[
              { label: 'GASTOS PESSOAIS', value: mpGastosPessoais, icon: UserIcon },
              { label: 'ALIMENTAÇÃO PRINCIPAL', value: mpAlimentacao, icon: UtensilsIcon },
              { label: 'TRANSPORTE', value: mpTransporte, icon: TruckIcon },
              { label: 'RESERVA DE INTERA', value: mpReservaIntera, icon: ScaleIcon },
            ]}
          />

          {/* 2. BANCO NUBANK (Purple) - 20% - Concentração */}
          <BankCard 
            name="Banco"
            colorTheme="purple"
            totalValue={branchNubank}
            percentageOfTotal="20%"
            emptyStateLabel="CONCENTRAÇÃO DE RENDA"
            items={[]}
          />

          {/* 3. BANCO INTER (Orange) - 20% - Livre Financeiro */}
          <BankCard 
            name="Banco"
            colorTheme="orange"
            totalValue={branchInter}
            percentageOfTotal="20%"
            emptyStateLabel="LIVRE FINANCEIRO"
            items={[]}
          />

          {/* 4. BANCO CAIXA APPBANK (Blue) - 20% - Credit Save */}
          <BankCard 
            name="Banco"
            colorTheme="blue"
            totalValue={branchCaixa}
            percentageOfTotal="20%"
            emptyStateLabel="CREDIT SAVE"
            items={[]}
          />

        </div>

        {/* Informative Footer Section */}
        {total > 0 && (
          <div className="mt-20 border-t border-zinc-900 pt-10 animate-in fade-in duration-1000">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-600 font-mono uppercase">Infraestrutura</span>
                  <span className="text-sm text-zinc-300 font-medium">Update Médio Porte</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-600 font-mono uppercase">Status</span>
                  <span className="text-sm text-zinc-300 font-medium">Sistema Ativo</span>
                </div>
             </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
