export default function V1Flip() {
  return (
    <div className="relative overflow-hidden text-[#1A1612]">
      {/* perspective grid floor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.35) 2px, transparent 2px), linear-gradient(to bottom, rgba(0,0,0,0.35) 2px, transparent 2px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
        }}
      />

      {/* checkerboard top banner with marquee text */}
      <div
        className="h-14 w-full flex items-center justify-center font-bungee text-xs text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="bg-black px-6 py-2 font-bagel text-base text-white tracking-widest">
          ✦ DM AI · 用 AI 把想法變真的 · 私訊聊聊 ✦
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* nav */}
        <nav className="flex justify-between items-center mb-12 bg-white border-[3px] border-black rounded-full px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <span className="font-bagel text-3xl text-black">
            DM<span className="text-[#FBC02D]">.</span>AI
          </span>
          <div className="hidden sm:flex gap-6 font-bungee text-sm items-center">
            <a className="hover:text-[#FBC02D]">作品</a>
            <a className="hover:text-[#FBC02D]">服務</a>
            <a className="hover:text-[#FBC02D]">關於</a>
            <a className="bg-black text-white px-4 py-1.5 rounded-full font-bagel">
              私訊
            </a>
          </div>
        </nav>

        {/* hero */}
        <div className="grid sm:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div className="relative">
            <span className="absolute -top-6 -left-2 bg-[#FBC02D] text-black font-bungee text-xs px-3 py-1.5 rounded-full border-[3px] border-black -rotate-6 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              ✦ NEW LEVEL ✦
            </span>

            <h1 className="mb-6">
              <span className="block text-chunky text-white text-[3.4rem] sm:text-[4.5rem]">
                用{" "}
                <span className="font-marker text-[#FF50B4] text-[3.6rem] sm:text-[5rem] inline-block -rotate-3 [text-shadow:_3px_3px_0_#000]">
                  AI
                </span>{" "}
                把你的
              </span>
              <span className="block text-chunky-purple text-[3.4rem] sm:text-[4.5rem] mt-2">
                想法做成
              </span>
              <span className="block font-bagel text-[3.6rem] sm:text-[5rem] mt-2 italic">
                <span className="bg-black text-[#FBC02D] px-3 inline-block -rotate-1 [text-shadow:_4px_4px_0_#FF50B4]">
                  真的東西
                </span>
              </span>
            </h1>

            <p className="font-space-mono text-[14px] leading-relaxed mb-6 max-w-md bg-white/80 backdrop-blur px-4 py-2 border-2 border-black rounded-md inline-block">
              &gt; 網站、小工具、內容，我都能幫你做。
              <br />
              &gt; 不會寫 code 也沒關係，私訊聊聊。
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-black text-white font-bungee text-base px-7 py-3 rounded-full border-[3px] border-black hover:bg-[#FBC02D] hover:text-black transition shadow-[5px_5px_0_0_rgba(255,80,180,1)]">
                ▶ 私訊我
              </button>
              <button className="bg-white text-black font-bungee text-base px-7 py-3 rounded-full border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
                看作品
              </button>
            </div>
          </div>

          {/* DM character placeholder */}
          <div className="relative">
            <div className="aspect-square bg-[#FBC02D] border-[4px] border-black rounded-3xl flex items-center justify-center shadow-[10px_10px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
              {/* checkered corners */}
              <div
                className="absolute top-0 left-0 w-12 h-12"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-12 h-12"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="text-center relative z-10">
                <div className="text-7xl mb-3">🎮</div>
                <p className="font-bagel text-lg text-black">DM 角色</p>
                <p className="font-space-mono text-[10px] text-black/70">
                  [walking_loop.gif]
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 bg-[#FF50B4] text-white border-[3px] border-black px-3 py-1.5 rounded-full font-bungee text-xs shadow-[3px_3px_0_0_rgba(0,0,0,1)] rotate-6">
              ★ NEW ★
            </span>
            <span className="absolute -bottom-2 -left-2 bg-white border-[3px] border-black px-2.5 py-1 rounded-full font-marker text-sm -rotate-3">
              meow~
            </span>
          </div>
        </div>

        {/* works strip */}
        <div className="mt-16">
          <h2 className="font-bagel text-3xl text-black mb-6 inline-block bg-[#FBC02D] px-4 py-1 border-[3px] border-black -rotate-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            &gt;&gt; 我做的東西
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            {[
              { title: "脆生成器", tag: "AI 工具", color: "#FBC02D", emoji: "✦" },
              { title: "貓咪遊戲", tag: "互動", color: "#FF50B4", emoji: "★" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-white border-[3px] border-black rounded-2xl p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex justify-between items-center hover:-translate-y-1 hover:translate-x-1 transition"
              >
                <div>
                  <span
                    className="inline-block font-bungee text-[10px] px-2 py-1 rounded-full border-2 border-black mb-2"
                    style={{ background: w.color }}
                  >
                    {w.emoji} {w.tag}
                  </span>
                  <h3 className="font-bagel text-2xl text-black">{w.title}</h3>
                </div>
                <span className="font-bagel text-3xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* checkerboard bottom banner */}
      <div
        className="h-12 w-full mt-10"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
