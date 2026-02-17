"use client";
import Link from "next/link";
import { Code, ArrowLeft, Cpu, Rocket, Sparkles, Terminal, ChevronRight } from "lucide-react";
import { resumeConfig } from "../../config/resumeConfig";
import { themeConfig } from "../../config/themeConfig";
import React from "react";

interface Project {
  name: string;
  icon: React.ReactNode;
  desc: string;
  tech: string;
  link?: string;
}

export default function CodingPage() {
  const { codingPage } = resumeConfig;
  const theme = themeConfig.pages.coding;

  if (!codingPage) return null;

  return (
    <div className={`min-h-screen pb-40 ${theme.background} relative overflow-hidden text-slate-100 selection:bg-blue-500/30`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(ellipse_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
      
      {/* Animated Epic Orbs */}
      <div className={`fixed -top-40 -right-40 w-[800px] h-[800px] ${theme.decorativeCircles[0]} rounded-full blur-[160px] animate-pulse-slow opacity-60`}></div>
      <div className={`fixed -bottom-40 -left-40 w-[700px] h-[700px] ${theme.decorativeCircles[1]} rounded-full blur-[140px] animate-float opacity-40`}></div>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] ${theme.decorativeCircles[2]} rounded-full blur-[200px] opacity-20`}></div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + i * 5}s`
          }}
        ></div>
      ))}

      <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex justify-between items-center mb-16 md:mb-24">
          <Link 
            href="/" 
            className="group relative inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-2.5 md:py-3 bg-slate-900/50 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-2 transition-transform duration-500 text-blue-400" />
            <span className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-slate-300 group-hover:text-white transition-colors">Return to Me</span>
          </Link>
        </div>

        <header className="relative flex flex-col items-center text-center mb-20 md:mb-32">
          <div className="relative mb-10 md:mb-12 group">
            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-[3rem] md:rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            <div className={`relative p-8 md:p-12 ${theme.card.bg} ${theme.card.blur} rounded-[2.5rem] md:rounded-[3rem] border ${theme.card.border} ${theme.header.glow} animate-float transform group-hover:scale-105 transition-transform duration-700`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-[2.5rem] md:rounded-[3rem]"></div>
              <Code strokeWidth={1.5} className={`${theme.card.iconColor} drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] w-12 h-12 md:w-16 md:h-16`} />
            </div>
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-lg md:rounded-xl border border-blue-500/50 flex items-center justify-center animate-spin-slow">
              <Sparkles size={16} className="md:w-[18px] md:h-[18px] text-blue-400" />
            </div>
          </div>

          <div className="relative px-4 md:px-0">
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-none">
              SYSTEM<br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.header.gradient} animate-gradient-x`}>
                DEVELOPMENT
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px]">Production Environment v4.0</span>
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
            <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {codingPage.subtitle}
            </p>
          </div>
        </header>

        {codingPage.projects.length > 0 ? (
          <div className="grid gap-8 md:gap-12">
            {(codingPage.projects as Project[]).map((project, idx) => (
              <div 
                key={project.name} 
                className={`group relative ${theme.card.bg} ${theme.card.blur} p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border ${theme.card.border} ${theme.card.hoverBorder} transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden`}
              >
                {/* Decorative Background ID */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-6xl md:text-[10rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
                  0{idx + 1}
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
                  <div className={`relative p-6 md:p-10 ${theme.card.iconBg} rounded-[2rem] md:rounded-[2.5rem] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-white/5 shadow-2xl`}>
                    <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {React.isValidElement(project.icon) && React.cloneElement(project.icon as React.ReactElement<any>, { 
                      className: "relative z-10 text-blue-300 w-10 h-10 md:w-12 md:h-12" 
                    })}
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-2.5 md:gap-3">
                        <Terminal size={14} className="md:w-4 md:h-4 text-blue-500/50" />
                        <span className="text-[9px] md:text-[10px] font-black text-blue-500/50 uppercase tracking-[0.2em] md:tracking-[0.3em]">Project Manifest</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors duration-500">{project.name}</h3>
                    </div>

                    <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-2xl">{project.desc}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                      {project.tech.split(", ").map((t) => (
                        <span 
                          key={t} 
                          className={`px-4 md:px-5 py-1.5 md:py-2 ${theme.card.tagBg} ${theme.card.tagText} text-[9px] md:text-[10px] font-black rounded-lg md:rounded-xl uppercase tracking-widest border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 md:pt-6 flex items-center justify-center md:justify-start">
                      {project.link ? (
                        <Link 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] group/btn transition-colors"
                        >
                          Inspect Core <ChevronRight size={14} className="md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <button className="flex items-center gap-2 text-blue-400 hover:text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] group/btn transition-colors">
                          Inspect Core <ChevronRight size={14} className="md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Perspective Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`${theme.card.bg} ${theme.card.blur} p-24 rounded-[4rem] border ${theme.card.border} flex flex-col items-center text-center gap-12 relative overflow-hidden group`}>
            <div className="relative z-10 space-y-8">
              <div className="relative inline-block">
                <div className={`p-14 ${theme.card.iconBg} rounded-[3rem] transition-all duration-700 group-hover:scale-110`}>
                  <Rocket size={100} strokeWidth={1} className="text-blue-500/20 group-hover:text-blue-400/40 transition-colors" />
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-white tracking-tight">
                  DEPLOYMENT <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.header.gradient}`}>IN PROGRESS</span>
                </h2>
                <p className="text-slate-400 font-medium text-lg max-w-md mx-auto leading-relaxed">
                  Systems are being initialized. New technical frameworks will be integrated into the archive shortly.
                </p>
              </div>
            </div>

            <div className="flex gap-4 relative z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
