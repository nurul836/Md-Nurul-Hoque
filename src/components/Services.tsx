import React from 'react';
import {
  Layout,
  Building2,
  ShoppingBag,
  Zap,
  Cpu,
  CreditCard,
  GraduationCap,
  RefreshCw,
  Sliders,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              <span>Services & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Specialized WordPress Services Built for Real Growth.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            From conversion-focused sales funnels to complete corporate portals and online stores, each project is crafted with modern standards and zero-bloat performance.
          </p>
        </div>

        {/* 10 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-[#0f172a]/70 hover:bg-[#131d33] border border-white/8 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5 transform hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500/10 text-emerald-400 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400/80 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors truncate max-w-[170px]">
                  {service.recommendedFor}
                </span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0 hover:underline"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
