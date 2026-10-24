import React, { useState } from 'react';
import { ISLSignItem } from '../../data/isl/signs';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { SignVideoPlayer } from '../video/SignVideoPlayer';
import { signLanguageRegistry } from '../../data/signLanguages/registry';
import { X, Camera, Video, Activity } from 'lucide-react';

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
  const [mediaTab, setMediaTab] = useState<'video' | 'kinematic'>('video');

  if (!sign) return null;

  const videoSignEntry = signLanguageRegistry.getSignByLinkedISLSignId(sign.id) ||
                         signLanguageRegistry.getSignById(sign.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`ISL Sign for ${sign.meaning}`}
      className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in">
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

        {/* Media Switcher Tabs */}
        <div className="px-5 pt-3 pb-1 bg-slate-50 border-b border-slate-100 flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setMediaTab('video')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all touch-target ${
              mediaTab === 'video'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Verified Video Player</span>
          </button>

          <button
            type="button"
            onClick={() => setMediaTab('kinematic')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all touch-target ${
              mediaTab === 'kinematic'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-600 hover:text-brand-navy hover:bg-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Kinematic Steps</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {mediaTab === 'video' && videoSignEntry ? (
            <SignVideoPlayer
              sign={videoSignEntry}
              autoPlay={true}
              loop={true}
              showSubtitlesDefault={true}
            />
          ) : (
            <ISLSignVisualizer sign={sign} size="normal" showControls={true} />
          )}

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
