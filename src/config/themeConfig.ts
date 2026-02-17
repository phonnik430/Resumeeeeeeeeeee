export const themeConfig = {
  // --- Global Settings ---
  global: {
    fontFamily: "Inter, sans-serif",
    borderRadius: "2.5rem",
  },

  // --- Page Specific Themes ---
  pages: {
    main: {
      background: "bg-grid-premium",
      primaryColor: "#2563eb", // Blue 600
      secondaryColor: "#7c3aed", // Violet 600
      accentColor: "#db2777", // Pink 600
      headerGradient: {
        from: "#1e293b", // Slate 800
        to: "#334155",   // Slate 700
      },
      card: {
        bg: "glass-card",
        iconBg: "bg-blue-50 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-400",
      }
    },
    coding: {
      background: "bg-[#020617]", // Ultra Dark Navy (Matched with Learning)
      primaryColor: "#3b82f6", // Blue 500
      accentColor: "#60a5fa", // Blue 400
      secondaryAccent: "#818cf8", // Indigo 400
      decorativeCircles: [
        "bg-blue-500/20",
        "bg-indigo-500/15",
        "bg-cyan-500/10"
      ],
      header: {
        gradient: "from-blue-400 via-indigo-400 to-cyan-400",
        iconBg: "bg-blue-500/10",
        glow: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
      },
      card: {
        bg: "bg-slate-900/40",
        blur: "backdrop-blur-3xl",
        border: "border-white/10",
        hoverBorder: "hover:border-blue-500/50",
        iconBg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-400",
        accentColor: "text-indigo-400",
        tagBg: "bg-blue-500/10",
        tagText: "text-blue-300",
      }
    },
    gaming: {
      background: "bg-[#020617]", // Ultra Dark Navy
      primaryColor: "#f43f5e", // Rose 500
      accentColor: "#fb7185", // Rose 400
      secondaryAccent: "#f59e0b", // Amber 500
      decorativeCircles: [
        "bg-rose-500/20",
        "bg-orange-500/15",
        "bg-purple-500/10"
      ],
      header: {
        gradient: "from-rose-400 via-orange-400 to-purple-400",
        iconBg: "bg-rose-500/10",
        glow: "shadow-[0_0_50px_rgba(244,63,94,0.4)]",
      },
      card: {
        bg: "bg-slate-900/40",
        blur: "backdrop-blur-3xl",
        border: "border-white/10",
        hoverBorder: "hover:border-rose-500/50",
        iconBg: "bg-gradient-to-br from-rose-500/20 to-orange-500/20",
        iconColor: "text-rose-400",
        accentColor: "text-orange-400",
        tagBg: "bg-rose-500/10",
        tagText: "text-rose-300",
      }
    },
    learning: {
      background: "bg-[#020617]", // Ultra Dark Navy
      primaryColor: "#818cf8", // Indigo 400
      accentColor: "#2dd4bf", // Teal 400
      secondaryAccent: "#fb7185", // Rose 400
      decorativeCircles: [
        "bg-indigo-500/20",
        "bg-teal-500/15",
        "bg-purple-500/10"
      ],
      header: {
        gradient: "from-indigo-400 via-teal-400 to-purple-400",
        iconBg: "bg-indigo-500/10",
        glow: "shadow-[0_0_50px_rgba(99,102,241,0.4)]",
        particleColor: "rgba(45,212,191,0.3)"
      },
      card: {
        bg: "bg-slate-900/40",
        blur: "backdrop-blur-3xl",
        border: "border-white/10",
        hoverBorder: "hover:border-teal-500/50",
        iconBg: "bg-gradient-to-br from-indigo-500/20 to-teal-500/20",
        iconColor: "text-teal-400",
        accentColor: "text-indigo-400",
        progressGradient: "from-indigo-600 via-teal-400 to-indigo-400",
        glowColor: "rgba(45,212,191,0.15)"
      }
    },
    music: {
      background: "bg-[#000000]",
      primaryColor: "#9333ea", // Purple 600
      secondaryColor: "#2563eb", // Blue 600
      accentColor: "#db2777", // Pink 600
      heroGradient: "from-purple-400 via-pink-400 to-blue-400",
      navGradient: "from-purple-600/20 to-blue-600/20",
      nebulas: [
        "bg-purple-600/20",
        "bg-blue-600/20",
        "bg-pink-600/15"
      ],
      card: {
        bg: "bg-white/[0.02]",
        blur: "backdrop-blur-2xl",
        iconColor: "text-purple-400",
        hoverGlow: "rgba(147,51,234,0.1)",
        barColor: "bg-purple-500/40",
        accentText: "text-purple-400",
        streakColor: "via-purple-500/40"
      }
    }
  }
};
