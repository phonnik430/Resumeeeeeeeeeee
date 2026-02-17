"use client";
import Link from "next/link";
import React from "react";
import { Book, ArrowLeft, Target, Sparkles } from "lucide-react";
import { resumeConfig } from "../../config/resumeConfig";
import { themeConfig } from "../../config/themeConfig";

interface LearningSkill {
  name: string;
  progress: number;
  icon: React.ReactNode;
}

interface LearningSection {
  title: string;
  skills: LearningSkill[];
}

export default function LearningPage() {
  const { learningPage } = resumeConfig;
  const theme = themeConfig.pages.learning;

  if (!learningPage) return null;

  return (
    <div className={`min-h-screen pb-40 ${theme.background} relative overflow-hidden text-slate-100 selection:bg-teal-500/30`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(ellipse_at_50%_-20%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Epic Orbs */}
      <div className={`fixed -top-40 -right-40 w-[800px] h-[800px] ${theme.decorativeCircles[0]} rounded-full blur-[160px] animate-pulse-slow opacity-60`}></div>
      <div className={`fixed -bottom-40 -left-40 w-[700px] h-[700px] ${theme.decorativeCircles[1]} rounded-full blur-[140px] animate-float opacity-40`}></div>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] ${theme.decorativeCircles[2]} rounded-full blur-[200px] opacity-20`}></div>

      {/* Floating Particles (CSS Only) */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + i * 5}s`
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 relative z-10">
        <div className="flex justify-between items-center mb-16 md:mb-24">
          <Link 
            href="/" 
            className="group relative inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-2.5 md:py-3 bg-slate-900/50 backdrop-blur-2xl rounded-xl md:rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-500 text-teal-400" />
            <span className="font-black uppercase tracking-[0.2em] text-[10px] md:text-sm text-slate-300 group-hover:text-white transition-colors">Return to Me</span>
          </Link>
        </div>

        <header className="relative flex flex-col items-center text-center mb-24 md:mb-40">
          <div className="relative mb-10 md:mb-16 group">
            {/* Hexagon-like border effect */}
            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-tr from-indigo-500/20 via-teal-500/20 to-purple-500/20 rounded-[3rem] md:rounded-[4rem] blur-2xl md:blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            <div className={`relative p-8 md:p-14 ${theme.card.bg} ${theme.card.blur} rounded-[2.5rem] md:rounded-[3.5rem] border ${theme.card.border} ${theme.header.glow} animate-float transform group-hover:scale-105 transition-transform duration-700`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-teal-500/10 rounded-[2.5rem] md:rounded-[3.5rem]"></div>
              <Book size={48} strokeWidth={1} className={`${theme.card.iconColor} md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]`} />
            </div>
            {/* Orbiting element */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl md:rounded-2xl border border-teal-500/50 flex items-center justify-center animate-spin-slow">
              <Sparkles size={16} className="md:w-5 md:h-5 text-teal-400" />
            </div>
          </div>

          <div className="relative px-4">
            <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 tracking-tighter leading-none">
              KNOWLEDGE<br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.header.gradient} animate-gradient-x`}>
                ARCHIVE
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
              <span className="text-teal-400 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs">Accessing Secure Data</span>
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-teal-500"></div>
            </div>
            <p className="text-slate-400 font-medium text-lg md:text-2xl max-w-3xl leading-relaxed mx-auto italic">
              &quot;{learningPage.subtitle}&quot;
            </p>
          </div>
        </header>

        <div className="space-y-32 md:space-y-48 pb-20 md:pb-40">
          {(learningPage.sections as LearningSection[]).map((section, idx) => (
            <div key={section.title} className="relative">
              {/* Section Header with Perspective */}
              <div className="flex flex-col items-center mb-16 md:mb-24 relative">
                <div className="absolute -top-8 md:-top-12 text-7xl md:text-[12rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
                  0{idx + 1}
                </div>
                <div className={`h-1 md:h-1.5 w-24 md:w-32 bg-gradient-to-r ${theme.header.gradient} rounded-full mb-6 md:mb-8 shadow-[0_0_20px_rgba(45,212,191,0.5)]`}></div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4 md:gap-6 group cursor-default">
                  <span className="text-slate-500 group-hover:text-teal-400 transition-colors duration-500">/</span>
                  {section.title}
                  <span className="text-slate-500 group-hover:text-teal-400 transition-colors duration-500">/</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                {section.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`group relative ${theme.card.bg} ${theme.card.blur} p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border ${theme.card.border} ${theme.card.hoverBorder} transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]`}
                  >
                    {/* Perspective Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.05] via-transparent to-indigo-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] md:rounded-[4rem]"></div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 overflow-hidden pointer-events-none">
                      <div className="absolute top-6 md:top-8 right-[-35px] md:right-[-40px] w-[120px] md:w-[140px] py-1 bg-teal-500/10 border-y border-teal-500/20 rotate-45 flex justify-center">
                        <span className="text-[7px] md:text-[8px] font-black text-teal-400 uppercase tracking-widest">Active Node</span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-8 md:mb-12 relative z-10">
                      <div className="flex items-center gap-5 md:gap-8">
                        <div className={`relative p-5 md:p-8 ${theme.card.iconBg} rounded-[1.5rem] md:rounded-[2.5rem] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border border-white/5 shadow-2xl shadow-black/40`}>
                          <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          {React.isValidElement(skill.icon) && React.cloneElement(skill.icon as React.ReactElement<any>, { 
                            size: 24, 
                            className: "relative z-10 text-teal-300 md:w-10 md:h-10" 
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-3xl font-black text-white mb-1 md:mb-2 group-hover:text-teal-300 transition-colors duration-500">{skill.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                            <span className="text-[8px] md:text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Neural Interface v2.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-100 group-hover:bg-teal-500/10 transition-all duration-500">
                        <Target size={20} className="text-teal-400 md:w-8 md:h-8" />
                      </div>
                    </div>

                    <div className="space-y-8 md:space-y-10 relative z-10">
                      <div className="flex justify-between items-end">
                        <div className="space-y-3 md:space-y-4">
                          <span className="text-[9px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em] block">Efficiency Protocol</span>
                          <div className="flex gap-1.5 md:gap-2">
                            {[...Array(10)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1.5 md:h-2 w-3 md:w-4 rounded-sm transition-all duration-500 ${i * 10 < skill.progress ? 'bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]' : 'bg-white/5'}`}
                                style={{ transitionDelay: `${i * 50}s` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl md:text-5xl font-black text-white tabular-nums tracking-tighter group-hover:text-teal-300 transition-colors duration-500">
                            {skill.progress}<span className="text-lg md:text-xl text-teal-500/50">%</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative group/progress">
                        <div className="w-full bg-slate-950 h-4 md:h-6 rounded-xl md:rounded-2xl overflow-hidden p-1 md:p-1.5 border border-white/5 shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${theme.card.progressGradient} rounded-lg md:rounded-xl transition-all duration-[1.5s] ease-out relative shadow-[0_0_25px_rgba(45,212,191,0.3)]`}
                            style={{ width: `${skill.progress}%` }}
                          >
                            {/* Scanning Light Effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_3s_infinite] skew-x-[-20deg]"></div>
                          </div>
                        </div>
                        
                        {/* Data Markers */}
                        <div className="absolute -bottom-6 md:-bottom-8 left-0 w-full flex justify-between px-1 md:px-2 opacity-40 group-hover:opacity-100 transition-opacity">
                          <span className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
                            <div className="w-1 h-1 bg-slate-500 rounded-full"></div> 00_INIT
                          </span>
                          <span className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
                            MAX_CAP <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Futuristic Border Accents */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
