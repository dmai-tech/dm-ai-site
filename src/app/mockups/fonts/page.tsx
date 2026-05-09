export const metadata = { title: "DM AI · Font Picker" };

const fonts = [
  {
    n: "F1",
    name: "Bagel Fat One + Permanent Marker（現用）",
    desc: "圓潤胖字 + 粉紅手寫 AI",
    enFont: '"Bagel Fat One", sans-serif',
    aiFont: '"Permanent Marker", cursive',
    zhFont: '"Noto Sans TC", sans-serif',
    zhWeight: 900,
  },
  {
    n: "F2",
    name: "Bungee + Bungee Shade（街頭+立體）",
    desc: "粗黑街頭體，AI 用立體陰影體",
    enFont: '"Bungee", sans-serif',
    aiFont: '"Bungee Shade", sans-serif',
    zhFont: '"Noto Sans TC", sans-serif',
    zhWeight: 900,
  },
  {
    n: "F3",
    name: "Modak + Bungee Outline（圓潤+空心）",
    desc: "童趣圓胖 + 空心輪廓 AI",
    enFont: '"Modak", sans-serif',
    aiFont: '"Bungee Outline", sans-serif',
    zhFont: '"ZCOOL QingKe HuangYou", "Noto Sans TC", sans-serif',
    zhWeight: 400,
  },
  {
    n: "F4",
    name: "Honk + Black Han Sans（3D+韓系）",
    desc: "Honk 3D 多色立體字 + 韓系緊湊黑體",
    enFont: '"Honk", system-ui',
    aiFont: '"Honk", system-ui',
    zhFont: '"Black Han Sans", "Noto Sans TC", sans-serif',
    zhWeight: 400,
  },
  {
    n: "F5",
    name: "Rampart One + Climate Crisis（建築+變體）",
    desc: "Rampart 建築立體 + Climate Crisis 拉伸 AI",
    enFont: '"Rampart One", sans-serif',
    aiFont: '"Climate Crisis", sans-serif',
    zhFont: '"ZCOOL XiaoWei", "Noto Serif TC", serif',
    zhWeight: 400,
  },
  {
    n: "F6",
    name: "Bowlby One + Pixelify Sans（厚黑+像素）",
    desc: "緊實厚黑體 + 像素風 AI",
    enFont: '"Bowlby One", sans-serif',
    aiFont: '"Pixelify Sans", monospace',
    zhFont: '"Noto Sans TC", sans-serif',
    zhWeight: 900,
  },
  {
    n: "F7",
    name: "Silkscreen + Bagel（像素+圓潤）",
    desc: "像素 retro 中文 + 圓潤英文",
    enFont: '"Bagel Fat One", sans-serif',
    aiFont: '"Silkscreen", monospace',
    zhFont: '"Long Cang", "Noto Sans TC", cursive',
    zhWeight: 400,
  },
];

export default function FontPicker() {
  return (
    <div className="bg-[#7B6FE0] min-h-screen">
      <header className="text-center py-10 bg-[#FBC02D] border-b-4 border-[#5A3DC9]">
        <p className="font-mono text-[11px] tracking-[0.4em] text-[#5A3DC9] mb-2">
          // INTERNAL :: FONT_PICKER
        </p>
        <h1 className="text-3xl text-[#5A3DC9] tracking-wider" style={{ fontFamily: '"Bagel Fat One", sans-serif' }}>
          DM AI · 字體選擇
        </h1>
        <p className="text-[#5A3DC9]/80 text-sm mt-3">
          7 個字體組合 · 同樣標題 · 滾動比較
        </p>
      </header>

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {fonts.map((f) => (
          <div
            key={f.n}
            className="bg-white border-[3px] border-[#5A3DC9] rounded-2xl p-8 shadow-[6px_6px_0_0_#FBC02D]"
          >
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <span
                className="bg-[#5A3DC9] text-[#FBC02D] px-3 py-1 rounded-full text-sm font-bold"
                style={{ fontFamily: '"Bagel Fat One", sans-serif' }}
              >
                {f.n}
              </span>
              <span className="font-bold text-[#5A3DC9]">{f.name}</span>
            </div>
            <p className="text-[#5A3DC9]/70 text-sm mb-6">{f.desc}</p>

            <div className="space-y-3">
              <div
                style={{
                  fontFamily: f.zhFont,
                  fontWeight: f.zhWeight,
                  color: "#FFFFFF",
                  WebkitTextStroke: "2px #5A3DC9",
                  paintOrder: "stroke fill",
                  textShadow: "4px 4px 0 #5A3DC9, 8px 8px 0 #FBC02D",
                  fontSize: "3.5rem",
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                }}
              >
                用{" "}
                <span
                  style={{
                    fontFamily: f.aiFont,
                    color: "#FBC02D",
                    WebkitTextStroke: "1.5px #5A3DC9",
                    textShadow: "3px 3px 0 #5A3DC9",
                    display: "inline-block",
                    transform: "rotate(-3deg)",
                  }}
                >
                  AI
                </span>{" "}
                把你的想法
              </div>
              <div
                style={{
                  fontFamily: f.zhFont,
                  fontWeight: f.zhWeight,
                  color: "#FBC02D",
                  WebkitTextStroke: "2px #5A3DC9",
                  paintOrder: "stroke fill",
                  textShadow: "4px 4px 0 #5A3DC9, 8px 8px 0 #FBC02D",
                  fontSize: "3.5rem",
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                }}
              >
                做成真的東西
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center py-12 mt-10 bg-[#FBC02D] border-t-4 border-[#5A3DC9]">
        <p className="text-[#5A3DC9] font-bold">
          看完跟 Claude 說「選 F1 / F2 / ... / F7」或「混搭」或「都不對」
        </p>
      </footer>
    </div>
  );
}
