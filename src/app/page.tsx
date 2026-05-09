import FadeInSection from "@/components/FadeInSection";
import HoverCard from "@/components/HoverCard";
import MagneticButton from "@/components/MagneticButton";
import RevealHeading from "@/components/RevealHeading";
import ServiceCard from "@/components/ServiceCard";

const DM_URL = "https://www.threads.com/@dm22ai22";
const THREADS_URL = "https://www.threads.com/@dm22ai22";
const IG_URL = "https://www.instagram.com/dm22ai22";

const works = [
  {
    title: "脆生成器",
    desc: "一鍵生成 Threads 貼文靈感，解決每天不知道發什麼的痛點。",
    url: "https://dmai-tech.vercel.app",
    tag: "AI 工具",
  },
  {
    title: "貓咪遊戲",
    desc: "用 AI 寫 code 做的互動小遊戲，驗證「不會寫程式也能做出東西」。",
    url: "https://scary-cat-maze.vercel.app",
    tag: "遊戲",
  },
];

const services = [
  {
    title: "AI 家教 1 對 1",
    desc: "從零開始帶你用 AI 做出第一個東西。時薪制，依需求客製。",
    price: "線上諮詢",
  },
  {
    title: "代做一頁式網站",
    desc: "個人品牌站、活動頁、作品集。我用 AI 寫 code，你只要給想法。",
    price: "專案制",
  },
  {
    title: "客製 AI 小工具",
    desc: "想到什麼工具能幫你省時間？聊聊就能做出來，不用自己學 code。",
    price: "專案制",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full relative pt-8">
      <nav className="sticky top-8 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="font-mono text-[12px] tracking-[0.4em] uppercase text-foreground"
          >
            DM_AI / CREATOR
          </a>
          <div className="hidden sm:flex gap-8 font-mono text-[10px] tracking-[0.3em] uppercase text-silver-soft">
            <a href="#works" className="hover:text-foreground transition">
              [ Works ]
            </a>
            <a href="#services" className="hover:text-foreground transition">
              [ Services ]
            </a>
            <a href="#about" className="hover:text-foreground transition">
              [ About ]
            </a>
          </div>
        </div>
      </nav>

      <FadeInSection
        as="section"
        className="min-h-[88vh] flex flex-col justify-center items-center px-6 py-24 text-center"
      >
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-silver-soft mb-10">
          ::: DM AI 創作者 :: 每天更新 :::
        </p>

        <RevealHeading
          lines={["用 AI 把你的想法", "做成真的東西"]}
          className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl font-medium leading-[1.3] tracking-[0.04em] max-w-4xl text-white [text-shadow:0_0_28px_rgba(140,180,240,0.45),0_0_56px_rgba(80,130,220,0.22)]"
        />

        <div className="w-16 h-px bg-foreground/30 my-12" />

        <p className="text-[15px] sm:text-base text-ink-soft max-w-md leading-[2] tracking-wide">
          網站、小工具、內容，我都能幫你做。
          <br />
          不會寫 code 也沒關係，私訊聊聊。
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
          <MagneticButton href={DM_URL} variant="primary">
            <span className="font-mono text-[12px] tracking-[0.25em]">
              ▶ INIT_CONNECTION
            </span>
          </MagneticButton>
          <MagneticButton href="#works" variant="outline" external={false}>
            <span className="font-mono text-[12px] tracking-[0.25em]">
              ↓ VIEW_WORKS
            </span>
          </MagneticButton>
        </div>

        <div
          aria-hidden
          className="mt-20 font-mono text-[10px] tracking-[0.3em] text-silver-soft/60"
        >
          [ scroll to continue ↓ ]
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="works"
        className="px-6 py-28 max-w-5xl mx-auto w-full border-t border-border"
      >
        <div className="mb-16">
          <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-silver-soft mb-4">
            // WORKS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.06em] text-foreground">
            我做的東西
          </h2>
          <p className="text-muted mt-4 text-sm tracking-wide leading-[2]">
            每個都是 AI 陪我寫 code 做出來的，你也可以。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <HoverCard
              key={w.title}
              href={w.url}
              className="p-8 tech-border bg-bg-2 transition-colors relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-silver-soft mb-3">
                    LEVEL.{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-2xl font-medium tracking-[0.05em] text-foreground">
                    {w.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-silver-soft pt-2 border border-silver-soft/30 px-2 py-1 rounded-sm">
                  {w.tag}
                </span>
              </div>
              <p className="text-ink-soft leading-[2] text-[14px] tracking-wide mb-8">
                {w.desc}
              </p>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent-2 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                ▶ ENTER <span>→</span>
              </p>
            </HoverCard>
          ))}
          <div className="sm:col-span-2 p-8 tech-border flex items-center justify-center min-h-[120px]">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-silver-soft/60">
              [ LEVEL.03 ::: LOADING ... ]
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="services"
        className="px-6 py-28 bg-bg-2 border-y border-border w-full"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-silver-soft mb-4">
              // SERVICES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.06em] text-foreground mb-5">
              我能幫你做什麼
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm tracking-wide leading-[2]">
              有想法不知道怎麼開始？直接找我，我用 AI 做給你看。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                index={i}
                title={s.title}
                desc={s.desc}
                price={s.price}
                ctaHref={DM_URL}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="about"
        className="px-6 py-28 max-w-3xl mx-auto w-full"
      >
        <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-silver-soft mb-4">
          // PLAYER_PROFILE
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.06em] text-foreground mb-12">
          關於我
        </h2>

        {/* TODO: DM 頭貼放這裡 (左上 80x80 圓框) — 等拿到 PNG 再加 */}

        <div className="space-y-6 text-[15px] text-ink-soft leading-[2.2] tracking-wide">
          <p>嗨，我是 DM。</p>
          <p>我用 AI 幫人把想法做成真的東西 —— 網站、小工具、社群內容。</p>
          <p>
            我自己也沒寫過 code，全靠 AI 陪我一起做。這證明一件事：
            <span className="text-foreground font-serif">
              一個完全不會寫程式的人，真的可以靠 AI 做出想做的東西。
            </span>
          </p>
          <p className="text-muted text-[14px]">
            有想法但卡在技術？私訊找我，我帶你做。（這個網站就是我用 AI 寫的。）
          </p>
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="contact"
        className="px-6 py-28 w-full border-t border-border"
      >
        <div className="max-w-3xl mx-auto text-center p-12 sm:p-16 tech-border bg-bg-2">
          <p className="font-mono text-[10px] tracking-[0.4em] text-silver-soft mb-6">
            ::: READY_PLAYER_ONE :::
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.08em] text-foreground mb-6">
            有想法 就直接說
          </h2>
          <p className="text-muted mb-12 text-sm tracking-wide leading-[2]">
            最快的聯絡方式是私訊，通常 24 小時內回覆。
          </p>
          <MagneticButton href={DM_URL} variant="primary" className="px-14">
            <span className="font-mono text-[12px] tracking-[0.25em]">
              ▶ INIT_CONNECTION
            </span>
          </MagneticButton>
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-8 justify-center font-mono text-[10px] tracking-[0.3em] uppercase">
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-soft hover:text-foreground transition"
            >
              [ Threads ]
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-soft hover:text-foreground transition"
            >
              [ Instagram ]
            </a>
          </div>
        </div>
      </FadeInSection>

      <footer className="py-12 text-center font-mono text-[10px] tracking-[0.3em] uppercase text-silver-soft/60 border-t border-border">
        © 2026 DM_AI / MADE_WITH_AI
      </footer>
    </main>
  );
}
