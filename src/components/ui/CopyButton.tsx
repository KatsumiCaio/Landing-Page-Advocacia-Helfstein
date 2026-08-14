import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { interactiveTap, transitions } from '../../lib/motion';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  feedbackText?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label,
  feedbackText = 'Copiado!',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={interactiveTap}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm border transition-colors ${
        copied
          ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
          : 'bg-[#050a14] border-[#c5a059]/40 text-[#c5a059] hover:border-[#c5a059] hover:bg-[#0c1424]'
      } ${className}`}
      title="Copiar para a área de transferência"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={transitions.springSnappy}
            className="flex items-center gap-1 text-emerald-400"
          >
            <Check className="w-3 h-3 text-emerald-400" />
            <span>{feedbackText}</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={transitions.springSnappy}
            className="flex items-center gap-1"
          >
            <Copy className="w-3 h-3" />
            {label && <span>{label}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
