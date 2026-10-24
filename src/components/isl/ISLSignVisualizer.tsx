import React, { useState, useEffect } from 'react';
import { ISLSignItem } from '../../data/isl/signs';
import { Play, Pause, RotateCcw, FastForward } from 'lucide-react';

interface ISLSignVisualizerProps {
  sign: ISLSignItem;
  size?: 'normal' | 'large';
  showControls?: boolean;
}

export const ISLSignVisualizer: React.FC<ISLSignVisualizerProps> = ({
  sign,
  size = 'normal',
  showControls = true
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSlowMo, setIsSlowMo] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      const duration = isSlowMo ? 2200 : 1200;
      interval = setInterval(() => {
        setCurrentStepIdx(prev => (prev + 1) % sign.demonstration.steps.length);
      }, duration);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isSlowMo, sign.demonstration.steps.length]);

  const handleReplay = () => {
    setCurrentStepIdx(0);
    setIsPlaying(true);
  };

  const isLarge = size === 'large';

  return (
    <div className="flex flex-col items-center bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-md">
      {/* SVG Kinematic Canvas */}
      <div className={`relative w-full ${isLarge ? 'h-64 sm:h-80' : 'h-48 sm:h-56'} flex items-center justify-center p-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 select-none`}>
        {/* Animated Hand & Motion Vector Representation */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-w-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Torso Silhouette Guide */}
          <ellipse cx="200" cy="90" rx="35" ry="42" fill="#1E293B" stroke="#334155" strokeWidth="2" />
          <path d="M140 280 C140 180, 160 150, 200 150 C240 150, 260 180, 260 280" fill="#1E293B" stroke="#334155" strokeWidth="2" />

          {/* Dynamic Motion Vectors based on sign.demonstration.motionType */}
          {sign.demonstration.motionType === 'press' && (
            <g className={isPlaying ? 'animate-pulse' : ''}>
              {/* Hands pressed together in Namaste */}
              <path d="M185 190 C185 140, 195 120, 200 110 C205 120, 215 140, 215 190 Z" fill="#0F9D92" opacity="0.8" />
              <path d="M175 195 L195 120 M225 195 L205 120" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
              <circle cx="200" cy="110" r="8" fill="#FACC15" />
            </g>
          )}

          {sign.demonstration.motionType === 'linear_forward' && (
            <g>
              {/* Hand moving forward */}
              <circle cx="200" cy="130" r="14" fill="#0F9D92" />
              <path
                d="M200 145 L200 210 M190 200 L200 215 L210 200"
                stroke="#38BDF8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isPlaying ? 'animate-bounce' : ''}
              />
              <path d="M170 190 Q200 220 230 190" stroke="#FACC15" strokeWidth="2" strokeDasharray="4 4" />
            </g>
          )}

          {sign.demonstration.motionType === 'linear_down' && (
            <g>
              {/* Flat non-dominant palm */}
              <rect x="140" y="210" width="120" height="14" rx="7" fill="#64748B" />
              {/* Dominant fist lifting/landing */}
              <circle
                cx="200"
                cy={currentStepIdx === 0 ? "170" : "140"}
                r="22"
                fill="#0F9D92"
                className="transition-all duration-500"
              />
              <path d="M200 135 L200 100 M190 110 L200 95 L210 110" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
            </g>
          )}

          {sign.demonstration.motionType === 'tap' && (
            <g className={isPlaying ? 'animate-pulse' : ''}>
              <circle cx="170" cy="160" r="14" fill="#0F9D92" />
              <circle cx="230" cy="160" r="14" fill="#0F9D92" />
              <path d="M185 160 L215 160" stroke="#FACC15" strokeWidth="3" strokeDasharray="3 3" />
              <circle cx="200" cy="160" r="6" fill="#38BDF8" />
            </g>
          )}

          {sign.demonstration.motionType === 'circular' && (
            <g>
              <ellipse
                cx="200"
                cy="170"
                rx="45"
                ry="30"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeDasharray="6 6"
                className={isPlaying ? 'animate-spin origin-center' : ''}
              />
              <circle cx="200" cy="140" r="16" fill="#0F9D92" />
              <path d="M235 170 L245 165 L245 178 Z" fill="#FACC15" />
            </g>
          )}

          {sign.demonstration.motionType === 'wave' && (
            <g className={isPlaying ? 'animate-bounce' : ''}>
              <rect x="185" y="130" width="30" height="50" rx="15" fill="#0F9D92" />
              <path d="M160 140 Q170 120 185 140 M215 140 Q230 120 240 140" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
            </g>
          )}

          {/* Location badge text inside SVG */}
          <text x="200" y="275" fill="#94A3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
            {sign.demonstration.location}
          </text>
        </svg>

        {/* Step indicator badge */}
        <div className="absolute top-3 left-3 bg-slate-800/90 border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] font-bold text-teal-400">
          Step {currentStepIdx + 1} of {sign.demonstration.steps.length}
        </div>

        {/* Verified ISL Badge */}
        <div className="absolute top-3 right-3 bg-emerald-950/80 border border-emerald-700/60 rounded-lg px-2.5 py-1 text-[10px] font-bold text-emerald-300">
          ISLRTC Standard
        </div>
      </div>

      {/* Step Description Banner */}
      <div className="w-full bg-slate-800/80 px-4 py-2.5 border-t border-slate-700 text-center">
        <p className="text-xs sm:text-sm font-semibold text-slate-100">
          {sign.demonstration.steps[currentStepIdx]}
        </p>
      </div>

      {/* Media Playback Controls */}
      {showControls && (
        <div className="w-full px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause demonstration" : "Play demonstration"}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors touch-target"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={handleReplay}
              aria-label="Replay from start"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors touch-target"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsSlowMo(!isSlowMo)}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors ${
                isSlowMo
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <FastForward className="w-3 h-3 inline mr-1" />
              {isSlowMo ? 'Slow Motion (0.5x)' : '1.0x Speed'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
