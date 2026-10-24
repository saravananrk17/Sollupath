import React from 'react';
import { ISLSignItem } from '../../data/isl/signs';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { X, Camera } from 'lucide-react';

interface ISLSignModalProps {
  sign: ISLSignItem | null;
  onClose: () => void;
  onOpenPractice?: (signId: string) => void;
}

export const ISLSignModal: React.FC<ISLSignModalProps> = ({
  sign,
  onClose,
  onOpenPractice
}) => {
  if (!sign) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`ISL Sign for ${sign.meaning}`}
      className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
              ISL
            </span>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">
                {sign.meaning}
              </h2>
              <span className="text-xs text-brand-teal font-semibold">
                {sign.tamilMeaning}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-brand-navy hover:bg-slate-100 rounded-xl transition-colors touch-target"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Visual Sign Kinematics */}
          <ISLSignVisualizer sign={sign} size="normal" showControls={true} />

          {/* Key Parameters */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <p>
              <strong className="text-brand-navy">Hand Shape:</strong> {sign.demonstration.handConfiguration}
            </p>
            <p>
              <strong className="text-brand-navy">Movement:</strong> {sign.demonstration.movement}
            </p>
            <p>
              <strong className="text-brand-navy">Facial/Head:</strong> {sign.demonstration.nonManual}
            </p>
            <p className="text-brand-muted pt-1 border-t border-slate-200">
              <strong>Context:</strong> {sign.usageNotes}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl flex items-center justify-between gap-3">
          {onOpenPractice ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenPractice(sign.id);
              }}
              className="px-4 py-2 bg-brand-teal hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center space-x-1.5 touch-target"
            >
              <Camera className="w-4 h-4" />
              <span>Practise this sign</span>
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-brand-navy hover:bg-brand-indigo text-white text-xs font-bold rounded-xl touch-target"
          >
            Back to Message
          </button>
        </div>
      </div>
    </div>
  );
};
