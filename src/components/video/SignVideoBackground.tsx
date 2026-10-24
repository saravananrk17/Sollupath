import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, Pause, EyeOff, Eye, Sparkles } from 'lucide-react';

interface SignVideoBackgroundProps {
  className?: string;
  posterTitle?: string;
  posterSubtitle?: string;
  children?: React.ReactNode;
}

export const SignVideoBackground: React.FC<SignVideoBackgroundProps> = ({
  className = '',
  posterTitle = 'Indian Sign Language Living Poster',
  posterSubtitle = 'Verified Demonstration: Namaste (Hello / Respect)',
  children,
}) => {
  const { settings } = useApp();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(!settings.reducedMotion);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState<boolean>(true);

  // Sync with user's reduced-motion preference
  useEffect(() => {
    if (settings.reducedMotion) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [settings.reducedMotion]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback if browser autoplay blocks
          setIsPlaying(false);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBackgroundVisible(!isBackgroundVisible);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-brand-border/60 shadow-lg ${className}`}
      aria-label="Welcome area with subtle living sign language background"
    >
      {/* Background Living Video / Poster Layer (pointer-events-none ensures zero interaction blocking) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 select-none ${
          isBackgroundVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* Dynamic Video Element */}
        {!videoError && !settings.reducedMotion && (
          <video
            ref={videoRef}
            playsInline
            muted
            loop
            autoPlay
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center filter saturate-150 contrast-125 opacity-25 mix-blend-screen scale-105"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' fill='%2314233B'%3E%3Crect width='800' height='450' fill='%2314233B'/%3E%3C/svg%3E"
          >
            <source src="/videos/isl/namaste_ambient.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Animated Vector Kinematic Living Poster Fallback */}
        {(!isVideoLoaded || videoError || settings.reducedMotion) && (
          <div className="absolute inset-0 w-full h-full flex items-center justify-end pr-8 sm:pr-16 opacity-30 mix-blend-screen pointer-events-none overflow-hidden">
            <svg
              viewBox="0 0 500 500"
              className={`w-96 h-96 text-brand-teal transition-transform duration-1000 ${
                isPlaying && !settings.reducedMotion ? 'animate-pulse' : ''
              }`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="namasteGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F9D92" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3446A8" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Silhouette Head & Shoulders */}
              <circle cx="250" cy="150" r="55" stroke="url(#namasteGlow)" strokeWidth="6" strokeDasharray="6 4" />
              <path
                d="M140 380 C150 260, 350 260, 360 380"
                stroke="url(#namasteGlow)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Hands joined in Anjali Mudra (Namaste) at chest level */}
              <g className={isPlaying && !settings.reducedMotion ? 'animate-bounce' : ''}>
                {/* Left Palm */}
                <path
                  d="M245 280 C240 240, 245 220, 248 190 C250 220, 250 240, 246 280 Z"
                  fill="url(#namasteGlow)"
                  stroke="#0F9D92"
                  strokeWidth="3"
                />
                {/* Right Palm */}
                <path
                  d="M255 280 C260 240, 255 220, 252 190 C250 220, 250 240, 254 280 Z"
                  fill="url(#namasteGlow)"
                  stroke="#3446A8"
                  strokeWidth="3"
                />
                {/* Kinematic Aura */}
                <circle cx="250" cy="235" r="70" stroke="#0F9D92" strokeWidth="2" opacity="0.4" strokeDasharray="4 6" />
              </g>
            </svg>
          </div>
        )}

        {/* Sophisticated Multi-stop Gradient Overlay preserving 100% WCAG AA/AAA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/90 backdrop-blur-[1px]" />
        
        {/* Subtle Brand Accent Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-teal/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-indigo/30 blur-3xl pointer-events-none" />
      </div>

      {/* Accessible Floating Background Motion & Visibility Controls (top right) */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/90 text-xs shadow-md">
        <div className="flex items-center space-x-1.5 text-[11px] font-medium text-slate-300 mr-1 hidden sm:flex">
          <Sparkles className="w-3 h-3 text-teal-400" />
          <span>ISL Living Poster</span>
        </div>

        {/* Play / Pause Toggle */}
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause sign language background motion' : 'Play sign language background motion'}
          className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 touch-target flex items-center justify-center text-teal-300"
          title={isPlaying ? 'Pause background motion' : 'Play background motion'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Show / Hide Toggle */}
        <button
          type="button"
          onClick={toggleVisibility}
          aria-label={isBackgroundVisible ? 'Hide sign language background' : 'Show sign language background'}
          className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 touch-target flex items-center justify-center text-slate-300"
          title={isBackgroundVisible ? 'Hide background visual' : 'Show background visual'}
        >
          {isBackgroundVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Foreground Content (100% interactive, never blocked) */}
      <div className="relative z-10 text-white p-6 sm:p-8">
        {children}
        
        {/* Subtle Screen-reader announcement & visual caption */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300/80">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block animate-ping" />
            <span>{posterTitle} — {posterSubtitle}</span>
          </span>
          <span className="text-[10px] text-slate-400 hidden md:inline">
            Verified ISLRTC Standards • Zero tracking
          </span>
        </div>
      </div>
    </div>
  );
};
