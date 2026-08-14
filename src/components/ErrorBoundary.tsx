import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RotateCcw, MessageCircle } from 'lucide-react';
import { observability } from '../lib/observability';
import { LAWYER_DATA, getWhatsAppLink } from '../data';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    observability.captureException(error, {
      componentStack: errorInfo.componentStack,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] p-6 sm:p-12 flex items-center justify-center bg-[#02050a] text-white">
          <div className="max-w-md w-full border border-[#c5a059] bg-[#050a14] p-8 text-center space-y-6 shadow-2xl rounded-sm">
            <div className="w-16 h-16 border-2 border-[#c5a059] rounded-full mx-auto flex items-center justify-center text-[#c5a059] bg-[#080d17]">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-[#c5a059]">
                Ocorreu uma instabilidade pontual
              </h2>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Nossos sistemas de observabilidade já registraram este evento para análise. Você pode recarregar a página ou falar diretamente com o Dr. Marcelo via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recarregar</span>
              </button>

              <a
                href={getWhatsAppLink('Olá Dr. Marcelo, tive uma dúvida ao acessar o site e gostaria de orientação.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#c5a059] hover:bg-[#e6be6a] text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_2px_10px_rgba(197,160,89,0.3)]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
