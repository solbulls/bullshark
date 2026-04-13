import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Fish, Droplets, TrendingUp } from 'lucide-react';

const CA = "BULLSHARK111111111111111111111111111111111";

// Solana Logo SVG
const SolanaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#paint0_linear)"/>
    <path d="M64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#paint1_linear)"/>
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#paint2_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="53.7" y1="272.5" x2="361.1" y2="272.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="53.7" y1="38.5" x2="361.1" y2="38.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="38.2" y1="154.5" x2="345.6" y2="154.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const [fedCount, setFedCount] = useState(0);
  const [isChomping, setIsChomping] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const feedShark = () => {
    setFedCount((prev) => prev + 1);
    setIsChomping(true);
    setTimeout(() => setIsChomping(false), 150);
  };

  // Calculate shark level based on feeds
  const sharkLevel = Math.floor(fedCount / 10) + 1;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-[#9945FF]/30 relative overflow-hidden flex flex-col">
      {/* Solana Themed Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9945FF]/20 via-[#020617] to-[#020617] pointer-events-none"></div>
      
      {/* Cool Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 font-display text-2xl tracking-wide">
          <SolanaLogo className="w-8 h-8" />
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">BULL</span>SHARK
          </div>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-bold text-slate-400 hover:text-[#14F195] transition-colors uppercase tracking-wider">DexScreener</a>
          <a href="#" className="text-sm font-bold text-slate-400 hover:text-[#14F195] transition-colors uppercase tracking-wider">Twitter</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10 w-full max-w-4xl mx-auto text-center">
        
        {/* Clean Logo / Mascot Area */}
        <motion.div 
          className="relative mb-8 cursor-pointer group"
          onClick={feedShark}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Solana Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9945FF]/40 to-[#14F195]/40 blur-[60px] rounded-full group-hover:blur-[80px] transition-all duration-500"></div>
          
          <motion.div 
            animate={isChomping ? { scale: 1.1, rotate: -5 } : { y: [0, -10, 0] }}
            transition={isChomping ? { duration: 0.1 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative text-[120px] md:text-[160px] leading-none drop-shadow-2xl select-none"
          >
            🦈
          </motion.div>
          {/* Level Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#020617] border border-[#14F195]/50 text-[#14F195] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(20,241,149,0.3)] tracking-widest uppercase">
            LVL {sharkLevel}
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display tracking-tight mb-4 uppercase"
        >
          The Apex Predator of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">Solana</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-medium"
        >
          Buy the dip. Sell the rip. No complicated tokenomics, just pure high-speed aquatic momentum on the fastest chain.
        </motion.p>

        {/* Contract Address Box - Premium Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl bg-[#0f172a]/80 border border-[#9945FF]/30 backdrop-blur-xl rounded-2xl p-2 pl-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(153,69,255,0.15)] mb-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] skew-x-12 pointer-events-none"></div>
          
          <div className="flex flex-col items-center md:items-start overflow-hidden w-full py-2 relative z-10">
            <span className="text-xs text-[#14F195] font-bold uppercase tracking-widest mb-1">Solana Contract Address</span>
            <code className="text-slate-200 font-mono text-sm md:text-base truncate w-full text-center md:text-left">
              {CA}
            </code>
          </div>
          <button 
            onClick={copyCA}
            className="w-full md:w-auto bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:opacity-90 text-slate-950 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shrink-0 relative z-10 shadow-lg"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {copied ? 'COPIED' : 'COPY CA'}
          </button>
        </motion.div>

        {/* Interactive Stats / Fun Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        >
          {/* Feed Interaction */}
          <div className="bg-[#0f172a]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#0f172a]/80 hover:border-[#14F195]/30 transition-all group">
            <div className="text-[#14F195] bg-[#14F195]/10 p-3 rounded-full group-hover:scale-110 transition-transform">
              <Fish size={24} />
            </div>
            <div className="text-center">
              <div className="text-3xl font-display mb-1">{fedCount}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Fishes Fed</div>
            </div>
            <button 
              onClick={feedShark}
              className="mt-2 text-sm bg-white/5 hover:bg-[#14F195]/20 hover:text-[#14F195] px-4 py-2 rounded-lg font-bold transition-colors w-full uppercase tracking-wide"
            >
              Feed Shark
            </button>
          </div>

          {/* Static Stat 1 */}
          <div className="bg-[#0f172a]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#0f172a]/80 hover:border-[#9945FF]/30 transition-all group">
            <div className="text-[#9945FF] bg-[#9945FF]/10 p-3 rounded-full group-hover:scale-110 transition-transform">
              <Droplets size={24} />
            </div>
            <div className="text-center">
              <div className="text-3xl font-display mb-1">0%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Buy/Sell Tax</div>
            </div>
          </div>

          {/* Static Stat 2 */}
          <div className="bg-[#0f172a]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#0f172a]/80 hover:border-[#14F195]/30 transition-all group">
            <div className="text-[#14F195] bg-[#14F195]/10 p-3 rounded-full group-hover:scale-110 transition-transform">
              <TrendingUp size={24} />
            </div>
            <div className="text-center">
              <div className="text-3xl font-display mb-1">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Liquidity Burned</div>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full p-6 text-center text-slate-600 text-sm font-bold tracking-widest uppercase relative z-10">
        © {new Date().getFullYear()} BULLSHARK ON SOLANA.
      </footer>
    </div>
  );
}
