"use client";

import React from "react";
import Link from "next/link";
import { Gamepad2, ArrowLeft, Trophy, Zap, Star } from "lucide-react";
import { resumeConfig } from "../../config/resumeConfig";
import { themeConfig } from "../../config/themeConfig";

interface Game {
  name: string;
  genre: string;
  style: string;
  icon: React.ReactNode;
  rating: number;
}

interface GamingPageData {
  title: string;
  subtitle: string;
  games: Game[];
}

export default function GamingPage() {
  const { gamingPage } = resumeConfig as { gamingPage: GamingPageData };
  const theme = themeConfig.pages.gaming;

  if (!gamingPage) return null;

  return (
    <div className={`min-h-screen pb-40 ${theme.background} relative overflow-hidden text-slate-100 selection:bg-rose-500/30`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(ellipse_at_50%_-20%,rgba(244,63,94,0.15),transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Epic Orbs */}
      <div className={`fixed -top-40 -right-40 w-[800px] h-[800px] ${theme.decorativeCircles[0]} rounded-full blur-[160px] animate-pulse-slow opacity-60`}></div>
      <div className={`fixed -bottom-40 -left-40 w-[700px] h-[700px] ${theme.decorativeCircles[1]} rounded-full blur-[140px] animate-float opacity-40`}></div>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] ${theme.decorativeCircles[2]} rounded-full blur-[200px] opacity-20`}></div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-rose-400 rounded-full animate-float opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + i * 5}s`
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12 md:mb-20">
          <Link 
            href="/" 
            className="group flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-500 backdrop-blur-xl"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform text-rose-400" />
            <span className="font-bold tracking-wide text-slate-300 group-hover:text-white text-sm md:text-base">Back to Me</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="relative mb-20 md:mb-32">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8 md:mb-10 group">
              <div className={`absolute -inset-6 md:-inset-8 bg-gradient-to-tr ${theme.header.gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700`}></div>
              <div className={`relative p-6 md:p-10 ${theme.card.bg} ${theme.card.blur} rounded-full border border-white/10 ${theme.header.glow} animate-float`}>
                <Gamepad2 className="w-10 h-10 md:w-16 md:h-16 text-rose-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
              <span className={`bg-clip-text text-transparent bg-gradient-to-b ${theme.header.gradient} drop-shadow-2xl`}>
                GAMING
              </span>
              <br />
              <span className="text-slate-200">UNIVERSE</span>
            </h1>
            
            <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl leading-relaxed px-4 md:px-0">
              {gamingPage.subtitle}
            </p>
          </div>
        </header>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-40">
          {gamingPage.games.map((game, index) => (
            <div 
              key={game.name} 
              className={`group relative ${theme.card.bg} ${theme.card.blur} p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border ${theme.card.border} ${theme.card.hoverBorder} transition-all duration-700 overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 ${theme.card.iconBg} rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8 md:mb-10">
                  <div className={`p-4 md:p-6 ${theme.card.iconBg} rounded-2xl md:rounded-[2rem] border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {React.isValidElement(game.icon) && React.cloneElement(game.icon as React.ReactElement<any>, { 
                      className: "relative z-10 text-rose-400 w-8 h-8 md:w-12 md:h-12" 
                    })}
                  </div>
                  <div className="flex gap-1 md:gap-1.5 bg-black/20 p-2 md:p-3 rounded-xl md:rounded-2xl backdrop-blur-md">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`md:w-4 md:h-4 ${i < game.rating ? "text-rose-400 fill-rose-400" : "text-slate-700"}`} 
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {game.name}
                </h3>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-2">
                    <span className="text-slate-500 font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] flex items-center gap-2">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div> 
                      Genre
                    </span>
                    <p className="text-slate-200 font-bold text-base md:text-lg">{game.genre}</p>
                  </div>
                  
                  <div className="space-y-1 md:space-y-2">
                    <span className="text-slate-500 font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] flex items-center gap-2">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div> 
                      Playstyle
                    </span>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-200 font-bold text-base md:text-lg">
                      <Zap size={16} className="md:w-[18px] md:h-[18px] text-orange-400" />
                      {game.style}
                    </div>
                  </div>
                </div>

                {/* Experience Bar Simulation */}
                <div className="mt-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Skill Mastery</span>
                    <span className="text-rose-400 font-bold text-sm">{game.rating * 20}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden p-[2px] border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-600 via-rose-400 to-orange-400 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                      style={{ width: `${game.rating * 20}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                <Trophy size={200} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Accent */}
        <div className="flex flex-col items-center gap-4 py-20 border-t border-white/5">
          <div className="w-1 h-20 bg-gradient-to-b from-rose-500 to-transparent opacity-20"></div>
          <p className="text-slate-500 font-bold tracking-[0.3em] text-sm">LEVEL COMPLETE</p>
        </div>
      </div>
    </div>
  );
}
