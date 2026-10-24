import React, { useRef, useState, useEffect } from 'react';
import { SignEntry } from '../../data/signLanguages/types';
import { getISLSignById } from '../../data/isl/signs';
import { ISLSignVisualizer } from '../isl/ISLSignVisualizer';
import {
  Play,
  Pause,
  RotateCcw,
  Gauge,
  Subtitles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface SignVideoPlayerProps {
  sign: SignEntry;
  autoPlay?: boolean;
  className?: string;
}

export const SignVideoPlayer: React.FC<SignVideoPlayerProps> = ({
  sign,
  autoPlay = true,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [videoFailed, setVideoFailed] = useState<boolean>(false);
  const [currentCaptionIdx, setCurrentCaptionIdx] = useState<number>(0);

  // Fallback linked ISL sign if available
  const linkedISLSign = sign.linkedISLSignId ? getISLSignById(sign.linkedISLSignId) : undefined;

  // Sync playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Caption progression simulation if kinematic fallback is active
  useEffect(() => {
    if (videoFailed || !sign.videoUrl) {
      let interval: any = null;
      if (isPlaying && sign.captions.length > 0) {
        const stepDuration = Math.round(1800 / playbackSpeed);
        interval = setInterval(() => {
          setCurrentCaptionIdx(prev => (prev + 1) % sign.captions.length);
        }, stepDuration);
      }
      return () => clearInterval(interval);
    }
  }, [isPlaying, videoFailed, sign.videoUrl, sign.captions.length, playbackSpeed]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;

      // Find active caption
      if (sign.captions.length > 0) {
        let activeIdx = 0;
        for (let i = sign.captions.length - 1; i >= 0; i--) {
          if (cur >= sign.captions[i].timeInSeconds) {
            activeIdx = i;
            break;
          }
        }
        setCurrentCaptionIdx(activeIdx);
      }
    }
  };

  const handleTogglePlay = () => {
    if (videoRef.current && !videoFailed) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current && !videoFailed) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      setCurrentCaptionIdx(0);
      setIsPlaying(true);
    }
  };

  const cyclePlaybackSpeed = () => {
    const speeds = [0.5, 0.75, 1.0, 1.25];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const activeCaption = sign.captions[currentCaptionIdx] || sign.captions[0];

  return (
    <div className={`bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col ${className}`}>
      {/* Video Viewport / Vector Kinematic Area */}
      <div className="relative w-full aspect-video max-h-[360px] bg-black flex items-center justify-center overflow-hidden">
        {/* HTML5 Video element */}
        {!videoFailed && sign.videoUrl ? (
          <video
            ref={videoRef}
            src={sign.videoUrl}
            poster={sign.posterUrl}
            playsInline
            muted
            loop
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-contain"
          />
        ) : (
          /* Offline / Fallback Vector Kinematic Visualizer */
          <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
            {linkedISLSign ? (
              <div className="w-full h-full flex items-center justify-center">
                <ISLSignVisualizer sign={linkedISLSign} size="large" showControls={false} />
              </div>
            ) : (
              <div className="flex flex-col items-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{sign.name.en}</h4>
                  <p className="text-xs text-slate-400 max-w-sm mt-1">{sign.meaning.en}</p>
                </div>
                {/* Fallback steps */}
                {sign.kinematicSteps && (
                  <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-700/80 max-w-md text-left text-xs text-slate-200">
                    <span className="font-bold text-teal-400 block mb-1">Step {currentCaptionIdx + 1} of {sign.kinematicSteps.length}:</span>
                    <span>{sign.kinematicSteps[currentCaptionIdx % sign.kinematicSteps.length]}</span>
                  </div>
                )}
              </div>
            )}

            {/* Offline notification badge */}
            <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-full text-[11px] text-teal-300 font-medium flex items-center space-x-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Vector Kinematics Active</span>
            </div>
          </div>
        )}

        {/* Live Closed Caption Overlay on Video */}
        {showCaptions && activeCaption && (
          <div className="absolute bottom-14 left-4 right-4 text-center pointer-events-none select-none z-10">
            <span className="inline-block px-4 py-2 rounded-xl bg-black/85 text-white font-medium text-xs sm:text-sm border border-white/20 shadow-lg backdrop-blur-sm max-w-lg">
              {activeCaption.text.en}
              {activeCaption.text.ta && (
                <span className="block text-[11px] text-teal-300 font-semibold mt-0.5">
                  {activeCaption.text.ta}
                </span>
              )}
            </span>
          </div>
        )}

        {/* Verification Status Pill in Top Right */}
        <div className="absolute top-3 right-3 z-10 flex items-center space-x-2">
          {sign.verificationStatus === 'verified' ? (
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>ISLRTC Verified</span>
            </span>
          ) : (
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>Educational Review</span>
            </span>
          )}
        </div>
      </div>

      {/* Accessible Player Controls Toolbar */}
      <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-between gap-2 text-white">
        <div className="flex items-center space-x-2">
          {/* Play / Pause */}
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? 'Pause sign video' : 'Play sign video'}
            className="p-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold transition-colors touch-target focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>

          {/* Replay */}
          <button
            type="button"
            onClick={handleReplay}
            aria-label="Replay sign from beginning"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors touch-target focus:outline-none focus:ring-2 focus:ring-teal-400"
            title="Replay"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Selector */}
          <button
            type="button"
            onClick={cyclePlaybackSpeed}
            aria-label={`Playback speed: currently ${playbackSpeed}x. Tap to change.`}
            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors touch-target flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            title="Adjust speed"
          >
            <Gauge className="w-3.5 h-3.5 text-teal-400" />
            <span>{playbackSpeed}x</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Captions Toggle */}
          <button
            type="button"
            onClick={() => setShowCaptions(!showCaptions)}
            aria-pressed={showCaptions}
            aria-label={showCaptions ? 'Hide closed captions' : 'Show closed captions'}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors touch-target flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              showCaptions
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Subtitles className="w-3.5 h-3.5" />
            <span>CC</span>
          </button>
        </div>
      </div>

      {/* Structured Permanent Captions and Educational Steps (Always readable regardless of video status) */}
      <div className="bg-slate-900/60 p-4 border-t border-slate-800/80 text-xs space-y-2">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">
            Step-by-Step Signing Guide
          </span>
          <span className="text-[11px] text-teal-400">
            {sign.regionalVariant || 'Standard'}
          </span>
        </div>

        {/* Sequential Captions List */}
        <div className="space-y-1.5">
          {sign.captions.map((cap, idx) => {
            const isActive = idx === currentCaptionIdx;
            return (
              <div
                key={idx}
                className={`p-2 rounded-xl transition-all flex items-start space-x-2 text-xs ${
                  isActive
                    ? 'bg-teal-950/60 border border-teal-500/40 text-teal-100 font-medium'
                    : 'bg-slate-950/40 text-slate-400 border border-transparent'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 font-bold ${
                  isActive ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p>{cap.text.en}</p>
                  {cap.text.ta && (
                    <p className="text-[11px] text-slate-400 mt-0.5">{cap.text.ta}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
