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
    <main className="flex flex-col w-full relative">
      <div className="bg-ambient" aria-hidden />
      <div className="grain-overlay" aria-hidden />
      <nav className="sticky top-0 z-50 bg-cream-deep/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <a
            href="#"
            className="font-serif text-[13px] tracking-[0.35em] uppercase text-foreground"
          >
            DM AI CREATOR
          </a>
          <div className="hidden sm:flex gap-8 text-[11px] tracking-[0.25em] uppercase text-muted">
            <a href="#works" className="hover:text-foreground transition">
              Works
            </a>
            <a href="#services" className="hover:text-foreground transition">
              Services
            </a>
            <a href="#about" className="hover:text-foreground transition">
              About
            </a>
          </div>
        </div>
      </nav>

      <FadeInSection
        as="section"
        className="min-h-[88vh] flex flex-col justify-center items-center px-6 py-24 text-center"
      >
        <p className="text-[11px] tracking-[0.4em] uppercase text-muted mb-10">
          DM AI 創作者 · 每天更新
        </p>

        <RevealHeading
          lines={["用 AI 把你的想法", "做成真的東西"]}
          className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl font-medium leading-[1.3] tracking-[0.04em] max-w-4xl text-foreground"
        />

        <div className="w-16 h-px bg-foreground/30 my-12" />

        <p className="text-[15px] sm:text-base text-ink-soft max-w-md leading-[2] tracking-wide">
          網站、小工具、內容，我都能幫你做。
          <br />
          不會寫 code 也沒關係，私訊聊聊。
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <MagneticButton href={DM_URL} variant="primary">
            私訊我
          </MagneticButton>
          <MagneticButton href="#works" variant="outline" external={false}>
            看看作品
          </MagneticButton>
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="works"
        className="px-6 py-28 max-w-5xl mx-auto w-full border-t border-border"
      >
        <div className="mb-16">
          <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-muted mb-4">
            / Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.06em] text-foreground">
            我做的東西
          </h2>
          <p className="text-muted mt-4 text-sm tracking-wide leading-[2]">
            每個都是 AI 陪我寫 code 做出來的，你也可以。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((w) => (
            <HoverCard
              key={w.title}
              href={w.url}
              className="p-8 rounded-sm border border-border bg-paper transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-serif text-2xl font-medium tracking-[0.05em] text-foreground">
                  {w.title}
                </h3>
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted pt-2">
                  {w.tag}
                </span>
              </div>
              <p className="text-ink-soft leading-[2] text-[14px] tracking-wide mb-8">
                {w.desc}
              </p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-foreground inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                前往試玩 <span>→</span>
              </p>
            </HoverCard>
          ))}
          <div className="sm:col-span-2 p-8 rounded-sm border border-dashed border-border flex items-center justify-center min-h-[120px]">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted">
              下一個作品 進行中
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection
        as="section"
        id="services"
        className="px-6 py-28 bg-cream-deep/40 border-y border-border w-full"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-muted mb-4">
              / Services
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
        <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-muted mb-4">
          / About
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.06em] text-foreground mb-12">
          關於我
        </h2>
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
        <div className="max-w-3xl mx-auto text-center p-12 sm:p-16 rounded-sm border border-border bg-paper">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-[0.08em] text-foreground mb-6">
            有想法 就直接說
          </h2>
          <p className="text-muted mb-12 text-sm tracking-wide leading-[2]">
            最快的聯絡方式是私訊，通常 24 小時內回覆。
          </p>
          <MagneticButton href={DM_URL} variant="primary" className="px-14">
            私訊我
          </MagneticButton>
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-8 justify-center text-[11px] tracking-[0.3em] uppercase">
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition"
            >
              Threads
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </FadeInSection>

      <footer className="py-12 text-center text-[10px] tracking-[0.3em] uppercase text-muted border-t border-border">
        © 2026 DM AI Creator · Made with AI
      </footer>
    </main>
  );
}
