import React from "react";

const SecFallback = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#11110f] text-(--secondary) font-mono overflow-hidden">
      {/* DOSSIER FILE */}
      <div className="relative w-64 h-80 border border-(--secondary)/30 bg-[#181713] overflow-hidden isolate shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
        {/* INNER FILE PAPER */}
        <div className="absolute inset-4 border border-(--secondary)/20 bg-linear-to-b from-[#1c1b16] to-[#12110d] overflow-hidden">
          {/* STATIC DOCUMENT LINES (no animation repaint) */}
          <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_12px)]" />

          {/* ID BAR */}
          <div className="absolute top-3 left-3 w-16 h-2 bg-(--secondary)/40" />
          <div className="absolute top-7 left-3 w-24 h-2 bg-(--secondary)/30" />

          {/* THUMBPRINT BLOCK */}
          <div className="absolute bottom-5 right-4 w-10 h-10 rounded-full border border-(--secondary)/20 opacity-40" />
        </div>

        {/* FORENSIC SCAN BEAM */}
        <div className="absolute inset-0 will-change-transform animate-[filescan_3s_linear_infinite] pointer-events-none">
          <div className="h-8 w-full bg-linear-to-b from-transparent via-(--secondary)/40 to-transparent" />
        </div>

        {/* CORNER FORENSIC MARKERS */}
        <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-(--secondary)/60" />
        <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-(--secondary)/60" />
        <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-(--secondary)/60" />
        <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-(--secondary)/60" />
      </div>

      {/* HEADER */}
      <h1 className="mt-10 text-lg tracking-[0.45em] opacity-80 animate-pulse">
        CASE DOSSIER
      </h1>

      {/* TYPEWRITER LOG */}
      <p className="mt-3 text-xs tracking-[0.35em] border-r border-(--secondary) pr-1 whitespace-nowrap overflow-hidden animate-[type_6s_steps(26)_infinite]">
        RECONSTRUCTING EVIDENCE
      </p>

      {/* EVIDENCE PROCESS DOTS */}
      <div className="flex gap-2 mt-6">
        <span className="w-2 h-2 bg-(--secondary) rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-(--secondary) rounded-full animate-bounce [animation-delay:.15s]" />
        <span className="w-2 h-2 bg-(--secondary) rounded-full animate-bounce [animation-delay:.3s]" />
      </div>

      {/* FOOTER */}
      <p className="absolute bottom-10 text-[10px] tracking-[0.4em] text-(--secondary)/60 uppercase">
        compiling forensic timeline
      </p>
    </div>
  );
};

export default SecFallback;
