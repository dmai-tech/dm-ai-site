import V4Win from "./V4Win";

export const metadata = { title: "DM AI · Windows Mockup" };

const palettes = [
  {
    n: "P1",
    name: "經典 Win98",
    bg: "#008080",
    chrome: "#C0C0C0",
    title: "#000080",
    accent: "#FFFF00",
    text: "#000000",
  },
  {
    n: "P2",
    name: "Win XP Bliss",
    bg: "#3A6EA5",
    chrome: "#ECE9D8",
    title: "#0050AB",
    accent: "#FFB400",
    text: "#000000",
  },
  {
    n: "P3",
    name: "Mac OS 9 米奶",
    bg: "#A8C5E0",
    chrome: "#F5F1E4",
    title: "#7CA3CC",
    accent: "#FF6347",
    text: "#1A1A1A",
  },
  {
    n: "P4",
    name: "Bratz 銀粉",
    bg: "#FF8AB8",
    chrome: "#D9D9D9",
    title: "#9B30FF",
    accent: "#00FFD0",
    text: "#1A1A1A",
  },
  {
    n: "P5",
    name: "Cyber 紫綠",
    bg: "#1A0033",
    chrome: "#2D2D2D",
    title: "#9B30FF",
    accent: "#39FF8C",
    text: "#FFFFFF",
  },
];

export default function WindowsMockup() {
  return (
    <div className="bg-[#008080] min-h-screen pb-20">
      <header className="text-center py-8 bg-black">
        <p className="font-mono text-[11px] tracking-[0.4em] text-white/60 mb-2">
          // INTERNAL :: WINDOWS_STYLE
        </p>
        <h1 className="text-2xl text-white font-bold">DM AI · 視窗風 + 配色</h1>
        <p className="text-white/70 text-sm mt-3">
          上方挑配色 (P1-P5) · 下方看 Windows 98 風 demo (用 P1)
        </p>
      </header>

      {/* 配色色票 */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-white font-bold mb-4">▼ 5 個配色色票（選 1 個告訴我）</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {palettes.map((p) => (
            <div
              key={p.n}
              className="border-2 border-black"
              style={{ background: p.chrome }}
            >
              <div
                className="px-2 py-1 flex justify-between items-center text-xs font-bold"
                style={{ background: p.title, color: "#FFFFFF" }}
              >
                <span>{p.n}_{p.name}</span>
                <span className="flex gap-0.5">
                  <span className="w-3 h-3 bg-[#C0C0C0] border border-black inline-block" />
                  <span className="w-3 h-3 bg-[#C0C0C0] border border-black inline-block" />
                  <span className="w-3 h-3 bg-[#C0C0C0] border border-black inline-block" />
                </span>
              </div>
              <div className="p-3" style={{ color: p.text }}>
                <div className="grid grid-cols-5 gap-1 mb-2">
                  <div className="aspect-square" style={{ background: p.bg }} title="bg" />
                  <div className="aspect-square" style={{ background: p.chrome }} title="chrome" />
                  <div className="aspect-square" style={{ background: p.title }} title="title bar" />
                  <div className="aspect-square" style={{ background: p.accent }} title="accent" />
                  <div className="aspect-square" style={{ background: p.text }} title="text" />
                </div>
                <p className="text-[10px] font-mono">
                  bg / chrome / title / accent / text
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Win 98 風 mockup */}
      <section className="max-w-5xl mx-auto p-6 mt-8">
        <h2 className="text-white font-bold mb-4">
          ▼ Windows 98 風 demo (套 P1 經典色 — 你選哪組我都可以套)
        </h2>
        <V4Win />
      </section>

      <footer className="max-w-5xl mx-auto p-6 mt-8 text-center">
        <div className="bg-[#C0C0C0] border-2 border-black p-4 inline-block">
          <p className="text-black font-bold mb-2">看完跟 Claude 說：</p>
          <p className="text-black text-sm">
            「P1 配色」/「Win 風結構 OK」/「字體 X 不對」/「再換一個方向」
          </p>
        </div>
      </footer>
    </div>
  );
}
