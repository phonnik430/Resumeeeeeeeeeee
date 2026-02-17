"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Music, ArrowLeft, Disc, Mic2, Radio, Cloud, ExternalLink, Play, Pause } from "lucide-react";
import { resumeConfig } from "../../config/resumeConfig";
import { themeConfig } from "../../config/themeConfig";

export default function MusicPage() {
  const { musicPage } = resumeConfig;
  const theme = themeConfig.pages.music;

  if (!musicPage) return null;

  const openTrack = (url: string) => {
    window.open(url, '_blank');
  };

  const isSoundCloud = (url: string) => url.includes("soundcloud.com");
  const isSpotify = (url: string) => url.includes("spotify.com");
  const isYouTube = (url: string) => url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className={`min-h-screen pb-32 ${theme.background} relative overflow-hidden text-white selection:bg-purple-500/30`}>
      {/* Cinematic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Nebulas */}
        <div className={`absolute top-[-20%] left-[-10%] w-[70%] h-[70%] ${theme.nebulas[0]} rounded-full blur-[160px] animate-[pulse_10s_ease-in-out_infinite]`}></div>
        <div className={`absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] ${theme.nebulas[1]} rounded-full blur-[160px] animate-[pulse_12s_ease-in-out_infinite_1s]`}></div>
        <div className={`absolute top-[20%] right-[10%] w-[40%] h-[40%] ${theme.nebulas[2]} rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite_2s]`}></div>
        
        {/* Star Particles */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        
        {/* Ultra-Modern Navigation */}
        <div className="flex justify-between items-center mb-16 md:mb-24 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Link 
            href="/" 
            className="group relative px-5 md:px-6 py-2.5 md:py-3 overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl transition-all hover:border-white/20"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.navGradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative flex items-center gap-3">
              <ArrowLeft size={16} className="md:w-[18px] md:h-[18px] group-hover:-translate-x-1 transition-transform" />
              <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">Return to Me</span>
            </div>
          </Link>
        </div>

        {/* Cinematic Hero Section */}
        <header className="relative mb-20 md:mb-32 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="relative group perspective-1000">
              {/* Outer Glow */}
              <div className={`absolute -inset-8 bg-gradient-to-r ${theme.navGradient.replace('/20', '/40')} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse`}></div>
              
              {/* Spinning Disc Container */}
              <div className="relative w-56 h-56 md:w-80 md:h-80 transition-transform duration-700 preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-12">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black rounded-full border-4 border-white/10 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full border-2 border-white/5 p-12 md:p-16 flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,#1e293b_0%,#000_100%)]">
                    {/* Vinyl Grooves */}
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-full border border-white/5" style={{ margin: `${i * 8}%` }}></div>
                    ))}
                    <Disc className={`${theme.card.iconColor}/80 animate-[spin_12s_linear_infinite] relative z-10 w-24 h-24 md:w-[120px] md:h-[120px]`} />
                  </div>
                </div>
                {/* Center Hole */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 bg-black rounded-full border border-white/20 shadow-inner z-20"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="font-black text-[8px] md:text-[10px] uppercase tracking-widest">System Active</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 px-4 md:px-0">
              <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${theme.navGradient} border border-white/10 backdrop-blur-xl`}>
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r ${theme.heroGradient}`}>
                  Audio Experience Protocol
                </span>
              </div>
              <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-none">
                <span className="block overflow-hidden">
                  <span className="block animate-in slide-in-from-bottom-full duration-700 delay-500">SONIC</span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${theme.heroGradient} animate-in slide-in-from-bottom-full duration-700 delay-700`}>ENTITY</span>
                </span>
              </h1>
              <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
                {musicPage.subtitle}
              </p>
            </div>
          </div>
        </header>

        {/* Tracks Grid - The "Grand Gallery" */}
        <section className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Audio Fragments</h2>
              <div className="flex gap-2">
                <div className={`h-1 w-16 md:w-20 ${theme.card.barColor} rounded-full`}></div>
                <div className="h-1 w-6 md:w-8 bg-blue-600 rounded-full opacity-50"></div>
                <div className="h-1 w-3 md:w-4 bg-pink-600 rounded-full opacity-30"></div>
              </div>
            </div>
            <div className="md:block">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500">Selective Resonance • {musicPage.tracks.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
            {musicPage.tracks.map((track, index) => (
              <div 
                key={index} 
                onClick={() => openTrack(track.audioUrl)}
                className="group relative perspective-1000"
              >
                {/* 3D Card Background */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative h-full ${theme.card.bg} ${theme.card.blur} border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 group-hover:bg-white/[0.05] group-hover:-translate-y-4 group-hover:rotate-x-6 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_40px_${theme.card.hoverGlow}] overflow-hidden`}>
                  
                  {/* Decorative Light Streak */}
                  <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${theme.card.streakColor} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
                  
                  <div className="relative z-10 space-y-6 md:space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="relative">
                        <div className={`absolute -inset-4 ${theme.card.barColor.replace('bg-', 'bg-')}/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-slate-900 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-slate-400 group-hover:${theme.card.iconColor} transition-all duration-500 shadow-2xl group-hover:scale-110 group-hover:rotate-12 border border-white/5`}>
                          {isYouTube(track.audioUrl) ? <Radio className="w-8 h-8 md:w-10 md:h-10" /> : 
                           isSoundCloud(track.audioUrl) ? <Cloud className="w-8 h-8 md:w-10 md:h-10" /> : 
                           isSpotify(track.audioUrl) ? <Mic2 className="w-8 h-8 md:w-10 md:h-10" /> : 
                           <Disc className="w-8 h-8 md:w-10 md:h-10" />}
                        </div>
                      </div>
                      <div className="p-2.5 md:p-3 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-white/10 transition-colors group-hover:scale-110 group-hover:rotate-6">
                        <ExternalLink size={18} className="md:w-5 md:h-5 text-slate-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      <div className={`inline-block px-3 py-1 rounded-lg ${theme.card.barColor}/10 border border-purple-500/20`}>
                        <span className={`text-[9px] md:text-[10px] font-black ${theme.card.accentText} uppercase tracking-widest`}>{track.genre}</span>
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-black leading-tight group-hover:${theme.card.accentText} transition-colors line-clamp-2`}>
                        {track.name}
                      </h3>
                      <p className="text-slate-500 font-bold text-sm md:text-base uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">
                        {track.artist}
                      </p>
                    </div>

                    <div className="pt-6 md:pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex gap-1.5 items-end h-6">
                        <div className={`w-1 md:w-1.5 h-2 md:h-3 ${theme.card.barColor} rounded-full group-hover:animate-[music-bar_0.6s_ease-in-out_infinite]`}></div>
                        <div className={`w-1 md:w-1.5 h-5 md:h-6 ${theme.card.barColor} rounded-full group-hover:animate-[music-bar_0.8s_ease-in-out_infinite]`}></div>
                        <div className={`w-1 md:w-1.5 h-3 md:h-4 ${theme.card.barColor} rounded-full group-hover:animate-[music-bar_0.5s_ease-in-out_infinite]`}></div>
                        <div className={`w-1 md:w-1.5 h-4 md:h-5 ${theme.card.barColor} rounded-full group-hover:animate-[music-bar_0.7s_ease-in-out_infinite]`}></div>
                      </div>
                      <span className={`text-[9px] md:text-[10px] font-black text-slate-600 group-hover:${theme.card.accentText} transition-colors uppercase tracking-[0.2em] md:tracking-[0.3em]`}>Launch Core</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
