/**
 * Windows 98 風 mockup (P1 配色版)
 * 字體統一：Tahoma / Noto Sans TC (medium) — 不再多字體混搭
 */
export default function V4Win() {
  return (
    <div
      className="bg-[#008080] p-6 sm:p-10"
      style={{ fontFamily: 'Tahoma, "Noto Sans TC", sans-serif' }}
    >
      {/* desktop icons */}
      <div className="absolute top-32 left-4 hidden lg:flex flex-col gap-4 text-white text-xs text-center">
        <div className="w-16">
          <div className="w-12 h-12 bg-[#C0C0C0] border-2 border-white border-r-[#808080] border-b-[#808080] mx-auto mb-1 flex items-center justify-center text-2xl">
            📁
          </div>
          我的作品
        </div>
        <div className="w-16">
          <div className="w-12 h-12 bg-[#C0C0C0] border-2 border-white border-r-[#808080] border-b-[#808080] mx-auto mb-1 flex items-center justify-center text-2xl">
            💬
          </div>
          私訊我
        </div>
      </div>

      {/* main window */}
      <div className="max-w-3xl mx-auto bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] shadow-[3px_3px_0_0_#000]">
        {/* title bar */}
        <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <span className="text-base">🎮</span>
            <span className="font-bold text-sm">DM_AI_Creator.exe — 用 AI 把想法變真的</span>
          </div>
          <div className="flex gap-0.5">
            {["_", "□", "✕"].map((b, i) => (
              <button
                key={i}
                className="w-5 h-5 bg-[#C0C0C0] border border-white border-r-[#000] border-b-[#000] text-black text-xs font-bold leading-none flex items-center justify-center"
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* menu bar */}
        <div className="bg-[#C0C0C0] px-2 py-1 border-b border-[#808080] flex gap-4 text-xs text-black">
          <span><u>F</u>ile</span>
          <span><u>E</u>dit</span>
          <span><u>V</u>iew</span>
          <span><u>H</u>elp</span>
        </div>

        {/* content area */}
        <div className="bg-white border-2 border-[#808080] border-r-white border-b-white m-3 p-6">
          {/* hero */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {/* DM avatar window */}
            <div className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] p-1 shrink-0">
              <div className="bg-[#000080] text-white text-[10px] px-2 py-0.5 mb-1 flex justify-between items-center">
                <span>DM.bmp</span>
                <span>✕</span>
              </div>
              <div className="w-32 h-32 bg-[#5BCEFA] border border-[#808080] flex items-center justify-center">
                <span className="text-6xl">🎮</span>
              </div>
            </div>

            {/* title */}
            <div>
              <h1 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-tight text-black mb-2">
                用 <span className="bg-[#FFFF00] px-2">AI</span> 把你的
                <br />
                想法做成真的
              </h1>
              <p className="text-sm text-black/80 leading-relaxed">
                網站、小工具、內容，我都能幫你做。
                <br />
                不會寫 code 也沒關係，私訊聊聊。
              </p>
            </div>
          </div>

          {/* progress / status box */}
          <div className="mt-6 border border-[#808080] bg-[#C0C0C0] p-3">
            <div className="text-xs mb-1 text-black">DM_status.exe 載入中...</div>
            <div className="bg-white border border-[#808080] border-r-white border-b-white h-4 flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full mx-px"
                  style={{ width: "4%", background: i < 17 ? "#000080" : "transparent" }}
                />
              ))}
            </div>
            <div className="text-xs mt-1 text-black text-right">87% Ready</div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-6 py-2 text-black font-bold text-sm hover:bg-[#FFFF00] active:border-[#000] active:border-r-white active:border-b-white">
              ▶ 私訊我
            </button>
            <button className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-6 py-2 text-black font-bold text-sm">
              查看作品
            </button>
          </div>
        </div>

        {/* status bar */}
        <div className="bg-[#C0C0C0] px-2 py-1 border-t border-white text-xs text-black flex justify-between">
          <span>已連線 ◢◤ DM_AI v1.0</span>
          <span>頁面載入完成</span>
        </div>
      </div>

      {/* works as 3 mini windows */}
      <div className="max-w-3xl mx-auto mt-6 grid sm:grid-cols-2 gap-4">
        {[
          { title: "脆生成器", tag: "AI 工具", icon: "✦" },
          { title: "貓咪遊戲", tag: "互動", icon: "★" },
        ].map((w) => (
          <div
            key={w.title}
            className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000]"
          >
            <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 text-white text-xs font-bold flex justify-between">
              <span>
                {w.icon} {w.title}.app
              </span>
              <span>✕</span>
            </div>
            <div className="bg-white p-4 m-2 border-2 border-[#808080] border-r-white border-b-white">
              <p className="text-xs text-black/60 mb-1">{w.tag}</p>
              <h3 className="text-lg font-bold text-black">{w.title}</h3>
              <button className="mt-3 bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-3 py-1 text-xs text-black">
                Open →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* taskbar */}
      <div className="max-w-3xl mx-auto mt-6 bg-[#C0C0C0] border-t-2 border-white p-1 flex items-center gap-2">
        <button className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-3 py-1 text-xs font-bold text-black flex items-center gap-1">
          <span className="text-sm">⊞</span> Start
        </button>
        <div className="flex-1" />
        <div className="bg-[#C0C0C0] border-2 border-[#808080] border-r-white border-b-white px-2 py-1 text-xs text-black">
          🔊  ⏰ 23:36
        </div>
      </div>
    </div>
  );
}
