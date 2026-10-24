import React, { useState, useRef, useEffect } from 'react';
import { ISL_SIGNS, getISLSignById } from '../../data/isl/signs';
import { ISLSignVisualizer } from './ISLSignVisualizer';
import { islRecognitionService, RecognitionFeedback } from '../../services/islRecognitionService';
import { islProgressService } from '../../services/islProgressService';
import { useApp } from '../../context/AppContext';
import {
  Camera,
  CameraOff,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Shield,
  MessageSquarePlus,
  Sparkles,
  Eye
} from 'lucide-react';

interface ISLPracticeWorkspaceProps {
  initialSignId?: string;
  onBackToDashboard: () => void;
}

export const ISLPracticeWorkspace: React.FC<ISLPracticeWorkspaceProps> = ({
  initialSignId,
  onBackToDashboard
}) => {
  const { addPhraseToMessage, setCurrentView } = useApp();
  const [selectedSignId, setSelectedSignId] = useState<string>(initialSignId || 'isl_help');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [recognitionFeedback, setRecognitionFeedback] = useState<RecognitionFeedback>({
    status: 'idle',
    message: 'Camera is currently off. You can practice with visual reference or enable camera.',
    advice: 'When ready, click "Start Camera Practice" for optional landmark guidance.'
  });
  const [isSelfAssessed, setIsSelfAssessed] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentSign = getISLSignById(selectedSignId) || ISL_SIGNS[0];
  const isSupportedForRecognition = islRecognitionService.isSignSupportedForPractice(currentSign.id);

  // Stop camera on unmount
  useEffect(() => {
    return () => {
      islRecognitionService.stopCamera();
    };
  }, []);

  const handleStartCamera = async () => {
    setCameraError(null);
    if (!videoRef.current || !canvasRef.current) return;

    try {
      const started = await islRecognitionService.startCamera(videoRef.current, canvasRef.current);
      if (started) {
        setIsCameraActive(true);
        islRecognitionService.setPracticeTarget(currentSign.id, (fb) => {
          setRecognitionFeedback(fb);
          if (fb.status === 'matched') {
            islProgressService.recordSignPractice(currentSign.id);
          }
        });
      }
    } catch (err: any) {
      setCameraError(err.message || 'Unable to access camera.');
      setIsCameraActive(false);
    }
  };

  const handleStopCamera = () => {
    islRecognitionService.stopCamera();
    setIsCameraActive(false);
  };

  const handleSignChange = (newSignId: string) => {
    setSelectedSignId(newSignId);
    setIsSelfAssessed(false);
    if (isCameraActive) {
      islRecognitionService.setPracticeTarget(newSignId, (fb) => {
        setRecognitionFeedback(fb);
        if (fb.status === 'matched') {
          islProgressService.recordSignPractice(newSignId);
        }
      });
    }
  };

  const handleConfirmAndAddToMessage = () => {
    if (currentSign.linkedPhraseId) {
      addPhraseToMessage(currentSign.linkedPhraseId);
      handleStopCamera();
      setCurrentView('quick');
    }
  };

  const handleSelfAssessedComplete = () => {
    islProgressService.recordSignPractice(currentSign.id);
    setIsSelfAssessed(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => {
              handleStopCamera();
              onBackToDashboard();
            }}
            aria-label="Back to dashboard"
            className="p-2 text-slate-500 hover:text-brand-navy rounded-xl hover:bg-slate-100 touch-target"
          >
            <ArrowLeft className="w-5 h-5 rtl-mirror" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center">
              <Camera className="w-6 h-6 mr-2 text-brand-teal" />
              Guided ISL Practice Studio
            </h1>
            <p className="text-xs text-brand-muted">
              Compare your sign against the verified ISLRTC standard with optional real-time feedback
            </p>
          </div>
        </div>

        {/* Practice Sign Selector Dropdown */}
        <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs">
          <span className="font-bold text-brand-navy">Practicing:</span>
          <select
            value={selectedSignId}
            onChange={(e) => handleSignChange(e.target.value)}
            className="bg-transparent font-medium text-brand-indigo cursor-pointer focus:outline-none"
          >
            {ISL_SIGNS.map(s => (
              <option key={s.id} value={s.id}>
                {s.meaning} ({s.tamilMeaning})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Practice Workspace: Two Interactive Viewports */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Reference ISL Demonstration */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-indigo">
                  Reference Demonstration
                </span>
                <h2 className="text-2xl font-bold text-brand-navy">
                  {currentSign.meaning}
                </h2>
                <p className="text-sm font-semibold text-brand-teal">
                  {currentSign.tamilMeaning}
                </p>
              </div>

              <div className="flex flex-col items-end space-y-1">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Verified Standard
                </span>
                {isSupportedForRecognition && (
                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                    Camera Guidance Supported
                  </span>
                )}
              </div>
            </div>

            {/* Reference Visualizer */}
            <ISLSignVisualizer sign={currentSign} size="large" showControls={true} />

            {/* Practice Guidance Notes */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-brand-navy flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-brand-teal" />
                Practice Tips for "{currentSign.meaning}":
              </p>
              <p className="leading-relaxed">{currentSign.practiceHints}</p>
              <p className="text-brand-muted">
                <strong>Location:</strong> {currentSign.demonstration.location} • <strong>Face:</strong> {currentSign.demonstration.nonManual}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: User Camera or Accessible Self-Practice Viewport */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-brand-navy">
                  Interactive Practice Window
                </h3>
                {isCameraActive && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mr-1"></span>
                    Camera Live (Local Only)
                  </span>
                )}
              </div>

              {isCameraActive ? (
                <button
                  type="button"
                  onClick={handleStopCamera}
                  className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 flex items-center space-x-1"
                >
                  <CameraOff className="w-3.5 h-3.5" />
                  <span>Stop Camera</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStartCamera}
                  className="px-3.5 py-1.5 bg-brand-navy hover:bg-brand-indigo text-white text-xs font-bold rounded-xl shadow-sm flex items-center space-x-1.5 transition-transform active:scale-95"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Start Camera Practice</span>
                </button>
              )}
            </div>

            {/* Video / Canvas Window or Non-Camera Accessible Fallback */}
            <div className="relative w-full h-64 sm:h-80 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
              {/* Actual Video and Canvas Elements */}
              <video
                ref={videoRef}
                playsInline
                muted
                className={`w-full h-full object-cover transform -scale-x-100 ${isCameraActive ? 'block' : 'hidden'}`}
              />
              <canvas
                ref={canvasRef}
                width={640}
                height={480}
                className="hidden" // Off-screen processing canvas
              />

              {/* Guide Overlay when camera is active */}
              {isCameraActive && (
                <div className="absolute inset-0 border-2 border-dashed border-teal-400/40 rounded-2xl pointer-events-none flex items-center justify-center">
                  <div className="w-48 h-60 border-2 border-teal-400/60 rounded-3xl flex items-center justify-center">
                    <span className="text-[10px] font-bold text-teal-300 bg-slate-900/80 px-2 py-1 rounded-full">
                      Signing Zone
                    </span>
                  </div>
                </div>
              )}

              {/* Non-Camera Alternative Display */}
              {!isCameraActive && (
                <div className="p-6 text-center text-slate-300 max-w-sm">
                  {cameraError ? (
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-rose-950 text-rose-400 flex items-center justify-center mx-auto">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <p className="text-xs text-rose-300 font-semibold">{cameraError}</p>
                      <p className="text-[11px] text-slate-400">
                        You can continue using visual self-guided practice without a camera.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-teal-400 flex items-center justify-center mx-auto border border-slate-800">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Accessible Self-Guided Practice
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Follow the reference demonstration on the left. Mirror the hand shape and spatial location in your natural pace.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleStartCamera}
                        className="px-4 py-2 bg-brand-teal hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md inline-flex items-center space-x-1.5"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Enable Camera for Optical Feedback</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Real-time Feedback & Status Banner */}
            <div className={`p-4 rounded-2xl border text-xs ${
              recognitionFeedback.status === 'matched'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : recognitionFeedback.status === 'detecting'
                ? 'bg-blue-50 border-blue-200 text-blue-900'
                : recognitionFeedback.status === 'no_hand'
                ? 'bg-amber-50 border-amber-200 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold flex items-center">
                  {recognitionFeedback.status === 'matched' ? (
                    <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                  ) : (
                    <HelpCircle className="w-4 h-4 mr-1 text-brand-indigo" />
                  )}
                  {recognitionFeedback.message}
                </span>

                {recognitionFeedback.confidenceScore && (
                  <span className="font-extrabold px-2 py-0.5 rounded-full bg-white text-[11px] shadow-sm">
                    {Math.round(recognitionFeedback.confidenceScore * 100)}% Confidence
                  </span>
                )}
              </div>
              <p className="text-slate-600 mt-1">{recognitionFeedback.advice}</p>

              {/* Two-Way Communication Integration: Push confirmed sign to Message Builder */}
              {recognitionFeedback.status === 'matched' && currentSign.linkedPhraseId && (
                <div className="mt-3 pt-3 border-t border-emerald-200 flex items-center justify-between">
                  <span className="font-semibold text-emerald-800 text-[11px]">
                    Confirmed match available for communication!
                  </span>
                  <button
                    type="button"
                    onClick={handleConfirmAndAddToMessage}
                    className="px-3.5 py-1.5 bg-brand-navy hover:bg-brand-indigo text-white font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 touch-target"
                  >
                    <MessageSquarePlus className="w-3.5 h-3.5" />
                    <span>Add to Sentence Builder →</span>
                  </button>
                </div>
              )}
            </div>

            {/* Non-Camera Self-Assessment Check Button */}
            {!isCameraActive && (
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSelfAssessedComplete}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 border transition-all touch-target ${
                    isSelfAssessed
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-white hover:bg-slate-50 text-brand-navy border-slate-300'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${isSelfAssessed ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{isSelfAssessed ? 'Practice Recorded in Progress!' : 'I Have Practiced This Sign (Record Practice)'}</span>
                </button>
              </div>
            )}

            {/* Camera Privacy Guarantee */}
            <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start space-x-2">
              <Shield className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
              <span>
                <strong>100% On-Device Privacy:</strong> Video frames are analyzed locally in your browser canvas. No video or images are stored or uploaded to external cloud servers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
