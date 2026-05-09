/**
 * Windows 98 完整範例版 (P1 經典色)
 * 字體：Tahoma + Noto Sans TC
 * DM 走路 GIF 位置已預留 — 嘟嘟給檔我塞進去
 */

const DM_URL = "https://www.threads.com/@dm22ai22";

const works = [
  {
    title: "脆生成器",
    desc: "一鍵生成 Threads 貼文靈感，解決每天不知道發什麼的痛點。",
    url: "https://dmai-tech.vercel.app",
    tag: "AI 工具",
    icon: "✦",
  },
  {
    title: "貓咪遊戲",
    desc: "用 AI 寫 code 做的互動小遊戲，驗證「不會寫程式也能做出東西」。",
    url: "https://scary-cat-maze.vercel.app",
    tag: "遊戲",
    icon: "★",
  },
];

const services = [
  {
    title: "AI 家教 1 對 1",
    desc: "從零開始帶你用 AI 做出第一個東西。時薪制，依需求客製。",
    price: "線上諮詢",
    icon: "🎓",
  },
  {
    title: "代做一頁式網站",
    desc: "個人品牌站、活動頁、作品集。我用 AI 寫 code，你只要給想法。",
    price: "專案制",
    icon: "🌐",
  },
  {
    title: "客製 AI 小工具",
    desc: "想到什麼工具能幫你省時間？聊聊就能做出來，不用自己學 code。",
    price: "專案制",
    icon: "🔧",
  },
];

export const metadata = { title: "DM AI · Win98 完整版" };

export default function WinFull() {
  return (
    <div
      className="bg-[#008080] min-h-screen pb-24 pt-6"
      style={{ fontFamily: 'Tahoma, "Noto Sans TC", sans-serif' }}
    >
      {/* 桌面 icons (左側) */}
      <DesktopIcons />

      {/* 主視窗 (Hero) */}
      <Window title="🎮 DM_AI_Creator.exe — 用 AI 把想法變真的">
        <MenuBar />
        <div className="bg-white border-2 border-[#808080] border-r-white border-b-white m-3 p-6">
          <div className="grid sm:grid-cols-[1fr_1.3fr] gap-6 items-center">
            {/* DM 走路 GIF window */}
            <div className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] p-1">
              <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white text-[10px] px-2 py-0.5 mb-1 flex justify-between items-center">
                <span>DM_walk.gif</span>
                <span>✕</span>
              </div>
              <div className="aspect-square bg-[#5BCEFA] border border-[#808080] flex items-center justify-center relative">
                {/* TODO: 嘟嘟給走路 GIF 後，把 emoji 換成 <img src="/dm-walking.gif" /> */}
                <span className="text-[80px]">🎮</span>
                <span className="absolute bottom-1 right-1 text-[9px] bg-black/60 text-white px-1">
                  [GIF 放這]
                </span>
              </div>
              <div className="text-[10px] text-black px-1 py-1 border-t border-[#808080] mt-1 flex justify-between">
                <span>▶ Playing</span>
                <span>00:01 / loop</span>
              </div>
            </div>

            {/* Hero text */}
            <div>
              <h1 className="text-[2.6rem] sm:text-[3.4rem] font-bold leading-[1.1] text-black mb-3">
                用 <span className="bg-[#FFFF00] px-2">AI</span> 把你的
                <br />
                想法做成真的
              </h1>
              <p className="text-sm text-black/80 leading-relaxed mb-5">
                網站、小工具、內容，我都能幫你做。
                <br />
                不會寫 code 也沒關係，私訊聊聊。
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-5 py-2 text-black font-bold text-sm hover:bg-[#FFFF00] active:border-[#000] active:border-r-white active:border-b-white"
                >
                  ▶ 私訊我
                </a>
                <a
                  href="#works"
                  className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-5 py-2 text-black font-bold text-sm"
                >
                  查看作品
                </a>
              </div>
            </div>
          </div>

          {/* loading status */}
          <div className="mt-6 border border-[#808080] bg-[#C0C0C0] p-3">
            <div className="text-xs mb-1 text-black">
              DM_status.exe — 上線狀態：營業中
            </div>
            <div className="bg-white border border-[#808080] border-r-white border-b-white h-4 flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full mx-px"
                  style={{
                    width: "4%",
                    background: i < 18 ? "#000080" : "transparent",
                  }}
                />
              ))}
            </div>
            <div className="text-xs mt-1 text-black text-right">90% Ready</div>
          </div>
        </div>
        <StatusBar text="已連線 ◢◤ DM_AI v1.0 · 上次更新：今天" />
      </Window>

      {/* WORKS */}
      <Window title="📁 Works.exe — 我做的東西" id="works">
        <MenuBar />
        <div className="bg-white m-3 p-5">
          <div className="grid sm:grid-cols-2 gap-4">
            {works.map((w) => (
              <a
                key={w.title}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] hover:bg-[#FFFF00]/30 transition-colors"
              >
                <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white text-xs font-bold px-2 py-1 flex justify-between">
                  <span>
                    {w.icon} {w.title}.app
                  </span>
                  <span>✕</span>
                </div>
                <div className="bg-white p-4 m-2 border-2 border-[#808080] border-r-white border-b-white">
                  <p className="text-[10px] text-black/60 mb-1 font-mono">
                    [{w.tag}]
                  </p>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {w.title}
                  </h3>
                  <p className="text-xs text-black/70 leading-relaxed mb-3">
                    {w.desc}
                  </p>
                  <button className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-3 py-1 text-xs text-black font-bold">
                    Open →
                  </button>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-3 border border-dashed border-[#808080] p-4 text-center text-xs text-black/60">
            [新作品 進行中…]
          </div>
        </div>
        <StatusBar text="2 個項目 · 1 進行中" />
      </Window>

      {/* SERVICES */}
      <Window title="🛠 Services.exe — 我能幫你做什麼" id="services">
        <MenuBar />
        <div className="bg-white m-3 p-5">
          <div className="grid sm:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] flex flex-col"
              >
                <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white text-[10px] font-bold px-2 py-1 flex justify-between">
                  <span>
                    {s.icon} 0{i + 1}_{s.title}
                  </span>
                </div>
                <div className="bg-white m-2 p-3 border-2 border-[#808080] border-r-white border-b-white flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-black mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-black/70 leading-relaxed flex-1 mb-3">
                    {s.desc}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-[10px] text-black/60 font-mono">
                      [{s.price}]
                    </span>
                    <a
                      href={DM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-2 py-0.5 text-[10px] text-black font-bold"
                    >
                      詢問→
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StatusBar text="3 個服務" />
      </Window>

      {/* ABOUT */}
      <Window title="ℹ️ About.exe — 關於 DM" id="about">
        <MenuBar />
        <div className="bg-white m-3 p-6">
          <div className="grid sm:grid-cols-[140px_1fr] gap-5 items-start">
            {/* small DM avatar */}
            <div className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] p-1">
              <div className="bg-[#5BCEFA] border border-[#808080] aspect-square flex items-center justify-center">
                <span className="text-5xl">🎮</span>
              </div>
              <div className="text-[10px] text-black px-1 py-0.5 text-center font-bold mt-1">
                DM.bmp
              </div>
            </div>

            <div className="space-y-3 text-sm text-black leading-relaxed">
              <p className="font-bold text-base">嗨，我是 DM。</p>
              <p>我用 AI 幫人把想法做成真的東西 —— 網站、小工具、社群內容。</p>
              <p className="bg-[#FFFF00] inline-block px-2 py-0.5">
                我自己也沒寫過 code，全靠 AI 陪我一起做。
              </p>
              <p>
                這證明一件事：
                <strong>
                  一個完全不會寫程式的人，真的可以靠 AI 做出想做的東西。
                </strong>
              </p>
              <p className="text-xs text-black/60">
                有想法但卡在技術？私訊找我，我帶你做。（這個網站就是我用 AI 寫的。）
              </p>
            </div>
          </div>
        </div>
        <StatusBar text="DM_AI / Player Profile" />
      </Window>

      {/* CONTACT */}
      <Window title="📨 Contact.exe — 聯絡我" id="contact">
        <MenuBar />
        <div className="bg-white m-3 p-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            有想法 <span className="bg-[#FFFF00] px-2">就直接說</span>
          </h2>
          <p className="text-sm text-black/70 mb-6">
            最快的聯絡方式是私訊，通常 24 小時內回覆。
          </p>
          <a
            href={DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-8 py-3 text-black font-bold text-base hover:bg-[#FFFF00]"
          >
            ▶ 私訊我
          </a>
          <div className="mt-8 pt-5 border-t border-[#808080]/40 flex justify-center gap-6 text-xs">
            <a
              href="https://www.threads.com/@dm22ai22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#000080] underline"
            >
              [Threads]
            </a>
            <a
              href="https://www.instagram.com/dm22ai22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#000080] underline"
            >
              [Instagram]
            </a>
          </div>
        </div>
        <StatusBar text="待回覆訊息：等你 1 個" />
      </Window>

      {/* taskbar */}
      <Taskbar />
    </div>
  );
}

function Window({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="max-w-3xl mx-auto bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] shadow-[3px_3px_0_0_#000] mt-6"
    >
      <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 flex justify-between items-center">
        <span className="text-white font-bold text-sm">{title}</span>
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
      {children}
    </div>
  );
}

function MenuBar() {
  return (
    <div className="bg-[#C0C0C0] px-2 py-1 border-b border-[#808080] flex gap-4 text-xs text-black">
      <span>
        <u>F</u>ile
      </span>
      <span>
        <u>E</u>dit
      </span>
      <span>
        <u>V</u>iew
      </span>
      <span>
        <u>H</u>elp
      </span>
    </div>
  );
}

function StatusBar({ text }: { text: string }) {
  return (
    <div className="bg-[#C0C0C0] px-2 py-1 border-t border-white text-xs text-black flex justify-between">
      <span>{text}</span>
      <span>頁面載入完成</span>
    </div>
  );
}

function DesktopIcons() {
  return (
    <div className="hidden xl:flex flex-col gap-4 absolute top-20 left-6 text-white text-xs text-center">
      {[
        { icon: "📁", label: "我的作品" },
        { icon: "🛠", label: "服務" },
        { icon: "ℹ️", label: "關於我" },
        { icon: "💬", label: "私訊我" },
      ].map((d) => (
        <div key={d.label} className="w-16">
          <div className="w-12 h-12 bg-[#C0C0C0] border-2 border-white border-r-[#808080] border-b-[#808080] mx-auto mb-1 flex items-center justify-center text-2xl">
            {d.icon}
          </div>
          <span className="[text-shadow:_1px_1px_0_#000]">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#C0C0C0] border-t-2 border-white p-1 flex items-center gap-2 z-50">
      <button className="bg-[#C0C0C0] border-2 border-white border-r-[#000] border-b-[#000] px-3 py-1 text-xs font-bold text-black flex items-center gap-1">
        <span className="text-sm">⊞</span> Start
      </button>
      <div className="flex gap-1">
        {["DM_AI_Creator", "Works", "Services", "About"].map((t) => (
          <span
            key={t}
            className="bg-[#C0C0C0] border-2 border-[#808080] border-r-white border-b-white px-2 py-1 text-[10px] text-black hidden sm:inline-block"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex-1" />
      <div className="bg-[#C0C0C0] border-2 border-[#808080] border-r-white border-b-white px-2 py-1 text-xs text-black">
        🔊 ⏰ <ClockHHMM />
      </div>
    </div>
  );
}

function ClockHHMM() {
  return <span suppressHydrationWarning>23:54</span>;
}
