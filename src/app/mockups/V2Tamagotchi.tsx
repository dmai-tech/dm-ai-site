export default function V2Tamagotchi() {
  return (
    <div className="relative overflow-hidden text-[#3D2A4A]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* nav */}
        <nav className="flex justify-between items-center mb-12">
          <span className="font-bold text-2xl tracking-wider text-[#5A3DC9]">
            DM ✿
          </span>
          <div className="hidden sm:flex gap-2">
            {["作品", "服務", "關於"].map((t) => (
              <a
                key={t}
                className="px-4 py-2 bg-white/70 backdrop-blur rounded-full border border-[#5A3DC9]/30 text-sm font-medium hover:bg-white"
              >
                {t}
              </a>
            ))}
            <a className="px-4 py-2 bg-[#5A3DC9] text-white rounded-full text-sm font-medium ml-2">
              私訊 ♡
            </a>
          </div>
        </nav>

        {/* hero — Tamagotchi screen frame */}
        <div className="grid sm:grid-cols-[1fr_1fr] gap-10 items-center">
          {/* text side */}
          <div>
            <div className="inline-block px-3 py-1 bg-[#FFB7D5] rounded-full mb-5 text-xs font-semibold border border-[#5A3DC9]/30">
              ✿ DM AI · ver. 2.0 ✿
            </div>
            <h1 className="font-bold text-5xl sm:text-6xl leading-[1.1] mb-6">
              用{" "}
              <span className="text-[#5A3DC9] underline decoration-wavy decoration-[#FFB7D5]">
                AI
              </span>{" "}
              把你的
              <br />
              想法做成真的
            </h1>
            <p className="text-[15px] leading-relaxed mb-6 max-w-md text-[#5A3DC9]/80">
              網站、小工具、內容，我都能幫你做。不會寫 code 也沒關係。
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#5A3DC9] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
                ♡ 私訊我
              </button>
              <button className="bg-white text-[#5A3DC9] font-semibold px-6 py-3 rounded-full border border-[#5A3DC9]/30">
                看看作品
              </button>
            </div>
          </div>

          {/* Tamagotchi LCD frame */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#FFB7D5] via-[#E0C8FF] to-[#A8D8FF] p-8 rounded-[60px] border-4 border-white shadow-2xl">
              <div className="bg-[#C4F6E0] rounded-[40px] p-6 border-4 border-[#5A3DC9]/40 aspect-square flex flex-col items-center justify-center">
                <div className="text-7xl mb-3">🎮</div>
                <p className="font-bold text-[#5A3DC9]">DM 角色</p>
                <p className="text-xs text-[#5A3DC9]/70 mt-1">（這裡放走路動畫）</p>
                <div className="mt-4 flex gap-1 text-[10px] font-mono text-[#5A3DC9]">
                  ▮▮▮▮▮▮▮▯▯▯ HP
                </div>
              </div>
              {/* tamagotchi buttons */}
              <div className="flex justify-center gap-4 mt-5">
                {["A", "B", "C"].map((b) => (
                  <div
                    key={b}
                    className="w-10 h-10 rounded-full bg-white border-2 border-[#5A3DC9]/40 flex items-center justify-center text-sm font-bold text-[#5A3DC9]"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* works pills */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {[
            { title: "脆生成器", tag: "AI 工具", emoji: "✿" },
            { title: "貓咪遊戲", tag: "互動", emoji: "♡" },
          ].map((w) => (
            <div
              key={w.title}
              className="bg-white p-6 rounded-3xl border border-[#5A3DC9]/20 hover:border-[#5A3DC9]/60 hover:shadow-lg transition flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB7D5] to-[#A8D8FF] flex items-center justify-center text-2xl">
                {w.emoji}
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#5A3DC9]/70 font-medium">{w.tag}</p>
                <h3 className="font-bold text-lg text-[#5A3DC9]">{w.title}</h3>
              </div>
              <span className="text-[#5A3DC9]">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
