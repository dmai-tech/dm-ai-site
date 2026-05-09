export default function V1Flip() {
  return (
    <div className="relative overflow-hidden text-[#1A1612]">
      {/* perspective grid floor */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "center bottom",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 50%, black 100%)",
        }}
      />

      {/* checkerboard top banner */}
      <div
        className="h-12 w-full"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* nav */}
        <nav className="flex justify-between items-center mb-12 bg-white border-2 border-black rounded-full px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <span className="font-black text-2xl italic">DM ✦</span>
          <div className="hidden sm:flex gap-6 font-bold text-sm">
            <a className="hover:text-[#FBC02D]">作品</a>
            <a className="hover:text-[#FBC02D]">服務</a>
            <a className="hover:text-[#FBC02D]">關於</a>
            <a className="bg-black text-white px-4 py-1 rounded-full">私訊</a>
          </div>
        </nav>

        {/* hero */}
        <div className="grid sm:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div className="relative">
            <span className="absolute -top-4 -left-2 bg-[#FBC02D] text-black font-black text-xs px-3 py-1 rounded-full border-2 border-black -rotate-6">
              ✦ COOL ✦
            </span>
            <h1 className="font-black text-5xl sm:text-6xl leading-[1.05] mb-6">
              用 <span className="bg-[#FBC02D] px-2 -rotate-2 inline-block">AI</span>
              <br />
              把你的想法
              <br />
              <span className="italic underline decoration-wavy decoration-black decoration-4">
                做成真的東西
              </span>
            </h1>
            <p className="text-[15px] leading-relaxed mb-6 max-w-md">
              網站、小工具、內容，我都能幫你做。不會寫 code 也沒關係。
            </p>
            <div className="flex gap-3">
              <button className="bg-black text-white font-bold px-6 py-3 rounded-full border-2 border-black hover:bg-[#FBC02D] hover:text-black transition">
                ▶ 私訊我
              </button>
              <button className="bg-white text-black font-bold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                看看作品
              </button>
            </div>
          </div>

          {/* DM character placeholder */}
          <div className="relative aspect-square bg-[#FBC02D] border-4 border-black rounded-3xl flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="text-center">
              <div className="text-7xl mb-3">🎮</div>
              <p className="font-black text-sm">DM 角色放這</p>
              <p className="text-xs">（瑪利歐風 + 走路動畫）</p>
            </div>
            <span className="absolute -top-3 -right-3 bg-white border-2 border-black px-3 py-1 rounded-full text-xs font-bold">
              ✦ 新作品 ✦
            </span>
          </div>
        </div>

        {/* works strip */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {[
            { title: "脆生成器", tag: "AI 工具", color: "#FBC02D" },
            { title: "貓咪遊戲", tag: "互動", color: "#FF7AB6" },
          ].map((w) => (
            <div
              key={w.title}
              className="bg-white border-2 border-black rounded-2xl p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex justify-between items-center hover:-translate-y-1 transition"
            >
              <div>
                <span
                  className="inline-block text-xs font-black px-2 py-1 rounded-full border-2 border-black mb-2"
                  style={{ background: w.color }}
                >
                  {w.tag}
                </span>
                <h3 className="font-black text-xl">{w.title}</h3>
              </div>
              <span className="text-2xl">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* checkerboard bottom banner */}
      <div
        className="h-10 w-full mt-10"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
