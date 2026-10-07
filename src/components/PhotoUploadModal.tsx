import React, { useState, useRef } from 'react';
import { Upload, X, RotateCcw, Check, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSavePhoto: (newPhotoUrl: string) => void;
  onResetDefault: () => void;
  defaultPhoto: string;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
  onResetDefault,
  defaultPhoto,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentPhoto);
  const [dragActive, setDragActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setStatusMessage('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreviewUrl(result);
        setStatusMessage('Image loaded successfully! Click "Save as Hero Photo" to apply.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleSave = () => {
    onSavePhoto(previewUrl);
    onClose();
  };

  const handleReset = () => {
    onResetDefault();
    setPreviewUrl(defaultPhoto);
    setStatusMessage('Reset to the high-definition studio portrait.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Your Profile Photo</h3>
              <p className="text-xs text-slate-400">Upload or replace your hero portrait anytime</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-5">
          {/* Preview Box */}
          <div className="flex items-center gap-5 p-4 rounded-xl bg-slate-900/60 border border-white/5">
            <div className="relative w-24 h-32 rounded-lg overflow-hidden border border-emerald-500/30 shrink-0 bg-slate-950">
              <img
                src={previewUrl}
                alt="Nurul Hoque Preview"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs space-y-1.5 text-slate-300">
              <div className="font-medium text-white flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Currently Active Visual
              </div>
              <p className="text-slate-400 leading-relaxed">
                Your photo is automatically displayed in the Hero, About section, and meta previews. It is stored safely in your browser.
              </p>
            </div>
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-emerald-400 bg-emerald-500/5'
                : 'border-white/10 hover:border-emerald-500/40 bg-slate-900/40 hover:bg-slate-900/80'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-white/5 text-emerald-400 rounded-full">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-white">Click to browse or drag your photo here</span>
              <span className="text-xs text-slate-400">Supports JPG, PNG, WEBP high-resolution files</span>
            </div>
          </div>

          {statusMessage && (
            <p className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-lg text-center">
              {statusMessage}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors px-2 py-1.5 rounded hover:bg-white/5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Studio Portrait
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-500/20 transition-all"
            >
              Save as Hero Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
