"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { resumeConfig } from '../config/resumeConfig';

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldPlayRef = useRef(true); // Control if music is allowed to play
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const { url, volume, loop } = resumeConfig.musicConfig; 

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // สร้าง Audio Instance เพียงครั้งเดียว (Singleton) เพื่อป้องกันเสียงซ้อน
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(url);
      audio.loop = loop;
      audio.volume = volume;
      audioRef.current = audio;

      const updateProgress = () => {
        if (audio.duration) {
          const p = (audio.currentTime / audio.duration) * 100;
          setProgress(p);
          setCurrentTime(formatTime(audio.currentTime));
        }
      };

      const setAudioData = () => {
        setDuration(formatTime(audio.duration));
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('loadedmetadata', setAudioData);
      
      // อัปเดตสถานะ isPlaying ตามจริงจาก audio element
      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // จัดการการโต้ตอบเพื่อเล่นเพลง (Autoplay Recovery)
  useEffect(() => {
    const startAudio = async () => {
      // If music is explicitly stopped (e.g. 404 page), do not attempt to play
      if (!shouldPlayRef.current) return;

      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setHasInteracted(true);
          cleanup();
        } catch (err) {
          // ยังเล่นไม่ได้ (Browser ยังบล็อกอยู่)
        }
      }
    };

    const cleanup = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('mousemove', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('keydown', startAudio);
    window.addEventListener('mousemove', startAudio);
    window.addEventListener('scroll', startAudio);
    window.addEventListener('touchstart', startAudio);

    return cleanup;
  }, []);

  useEffect(() => {
    const handleStop = () => {
      shouldPlayRef.current = false; // Disallow playing
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsVisible(false); // Hide the music player
      }
    };

    const handlePlay = () => {
      shouldPlayRef.current = true; // Allow playing
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Auto-play might be blocked, wait for interaction
          setHasInteracted(false);
        });
        setIsPlaying(true);
        setIsVisible(true); // Show the music player
      }
    };

    window.addEventListener('music:stop', handleStop);
    window.addEventListener('music:play', handlePlay);

    // Check if we are already on 404 page (missed event)
    if ((window as any).is404) {
      handleStop();
    }

    return () => {
      window.removeEventListener('music:stop', handleStop);
      window.removeEventListener('music:play', handlePlay);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = (Number(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(Number(e.target.value));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      <div className={`glass-card px-4 py-2 rounded-2xl flex flex-col gap-1 transition-all duration-500 overflow-hidden ${isPlaying ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest flex items-center gap-1">
            <Music size={10} className="animate-bounce" /> Now Playing
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            {currentTime} / {duration}
          </span>
        </div>
        
        <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden group/slider">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 h-full w-2 bg-white/40 blur-[2px]"></div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleMusic}
        className="glass-card p-3.5 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 group shadow-lg border border-white/10"
      >
        <div className="relative">
          {isPlaying && (
            <span className="absolute -inset-2 rounded-full bg-blue-500/10 animate-ping"></span>
          )}
          {isPlaying ? (
            <Volume2 size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
          ) : (
            <VolumeX size={22} className="text-slate-500 group-hover:text-slate-400 transition-colors" />
          )}
        </div>
      </button>
    </div>
  );
};
