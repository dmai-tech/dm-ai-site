export default function V3StreetNeon() {
  return (
    <div className="relative overflow-hidden text-white">
      {/* neon grid bg */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(57,255,140,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(57,255,140,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(255,80,180,0.25), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(57,255,140,0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* nav */}
        <nav className="flex justify-between items-center mb-12 px-5 py-3 border border-[#39FF8C]/40 rounded-md bg-black/60 backdrop-blur">
          <span className="font-mono font-bold text-xl text-[#39FF8C]">
            &gt; DM_AI/<span className="text-[#FF50B4]">█</span>
          </span>
          <div className="hidden sm:flex gap-5 font-mono text-xs uppercase tracking-widest">
            <a className="text-white/70 hover:text-[#39FF8C]">[Works]</a>
            <a className="text-white/70 hover:text-[#39FF8C]">[Services]</a>
            <a className="text-white/70 hover:text-[#39FF8C]">[About]</a>
            <a className="px-3 py-1 bg-[#FF50B4] text-black font-bold">
              ▶ DM_ME
            </a>
          </div>
        </nav>

        {/* hero */}
        <div className="grid sm:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <div className="font-mono text-xs text-[#39FF8C] mb-4">
              [SYS:: DM AI / 創作者 :: ONLINE]
            </div>
            <h1 className="font-black text-5xl sm:text-7xl leading-[1.05] mb-6 uppercase">
              用 AI 把你的
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #39FF8C 0%, #FF50B4 60%, #B36AFF 100%)",
                }}
              >
                想法做成
              </span>
              <br />
              <span className="relative inline-block">
                真的東西
                <span
                  aria-hidden
                  className="absolute -inset-1 -z-10 blur-2xl opacity-60"
                  style={{ background: "#FF50B4" }}
                />
              </span>
            </h1>
            <p className="text-[15px] leading-relaxed mb-6 max-w-md text-white/70 font-mono">
              &gt; 網站、小工具、內容，我都能做。
              <br />
              &gt; 不會寫 code? no problem.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#39FF8C] text-black font-mono font-bold px-6 py-3 uppercase tracking-wider hover:bg-[#FF50B4] hover:text-white transition">
                ▶ INIT_DM
              </button>
              <button className="border border-white/40 text-white font-mono font-bold px-6 py-3 uppercase tracking-wider hover:border-[#39FF8C] hover:text-[#39FF8C]">
                [↓] view_works
              </button>
            </div>
          </div>

          {/* DM character box */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF50B4] blur-3xl opacity-40" />
            <div className="relative aspect-square border-2 border-[#39FF8C] bg-black/60 backdrop-blur p-6 flex items-center justify-center">
              {/* corner brackets */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-[#39FF8C]">
                [01]
              </span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-[#39FF8C]">
                [PLAYER]
              </span>
              <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#39FF8C]">
                ▮▮▮▯
              </span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#FF50B4]">
                LIVE
              </span>
              <div className="text-center">
                <div className="text-7xl mb-3">🎮</div>
                <p className="font-mono text-sm text-[#39FF8C]">DM_AVATAR</p>
                <p className="text-xs text-white/50 mt-1 font-mono">
                  [walking_loop.gif]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* works strip */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {[
            { title: "脆生成器", tag: "AI_TOOL", color: "#39FF8C" },
            { title: "貓咪遊戲", tag: "GAME", color: "#FF50B4" },
          ].map((w) => (
            <div
              key={w.title}
              className="border border-white/20 bg-black/40 backdrop-blur p-6 hover:border-[#39FF8C] transition flex justify-between items-center font-mono"
            >
              <div>
                <span
                  className="text-xs"
                  style={{ color: w.color }}
                >
                  [{w.tag}]
                </span>
                <h3 className="font-bold text-lg mt-1">{w.title}</h3>
              </div>
              <span style={{ color: w.color }}>{">"}_</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
