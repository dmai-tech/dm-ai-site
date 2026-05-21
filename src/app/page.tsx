import FadeInSection from "@/components/FadeInSection";
import HoverCard from "@/components/HoverCard";
import MagneticButton from "@/components/MagneticButton";
import ServiceCard from "@/components/ServiceCard";

const DM_URL = "https://www.threads.com/@dm22ai22";
const THREADS_URL = "https://www.threads.com/@dm22ai22";
const IG_URL = "https://www.instagram.com/dm22ai22";

const portfolio = [
  {
    title: "爆款內容案例",
    desc: "短影音腳本與內容策略實際成績，從 0 到 10k+ 觀看的拆解。",
    tag: "Content",
  },
  {
    title: "帳號成長案例",
    desc: "個人品牌從零起步到穩定流量，定位、節奏、內容架構的完整紀錄。",
    tag: "Growth",
  },
  {
    title: "AI 工具作品",
    desc: "脆生成器、貓咪遊戲與其他客製 AI 小工具，用 AI 把想法做成真的東西。",
    tag: "Product",
  },
  {
    title: "品牌合作案例",
    desc: "與品牌方共同企劃的內容、業配與合作專案，涵蓋產品介紹到完整 campaign。",
    tag: "Brand",
  },
];

const services = [
  {
    title: "AI 內容系統",
    desc: "爆款腳本、內容策略、短影音結構設計。把你的內容生產線變成穩定產出的系統。",
    price: "內容顧問",
  },
  {
    title: "個人品牌成長",
    desc: "定位建立、流量放大、IP 塑造。從 0 到 1 把你變成一個能被記住的品牌。",
    price: "品牌顧問",
  },
  {
    title: "智能體應用",
    desc: "客製 AI 助手、自動化流程、商業落地。把 AI 接到你的真實業務裡。",
    price: "專案制",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      {/* ===== 1. Nav ===== */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl tracking-wide text-foreground leading-none"
            style={{ fontFamily: '"Bungee Shade", "Noto Sans TC", sans-serif' }}
          >
            DM
          </a>
          <div className="hidden sm:flex gap-8 text-sm tracking-wide text-ink-soft items-center">
            <a href="#about" className="hover:text-foreground transition">
              關於
            </a>
            <a href="#services" className="hover:text-foreground transition">
              服務
            </a>
            <a href="#portfolio" className="hover:text-foreground transition">
              作品
            </a>
            <a href="#ebook" className="hover:text-foreground transition">
              電子書
            </a>
            <a
              href={DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center px-5 py-2 rounded-full border border-foreground text-foreground text-[13px] hover:bg-foreground hover:text-white transition"
            >
              預約諮詢
            </a>
          </div>
        </div>
      </nav>

      {/* ===== 2. Hero · Editorial 排版 ===== */}
      <FadeInSection
        as="section"
        className="relative w-full overflow-hidden px-6 pt-20 pb-28"
      >
        {/* 背景柔光 */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(198, 156, 109, 0.18) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          {/* 左：文字 */}
          <div className="flex flex-col gap-8 text-left">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent">
              Personal Brand · AI · Growth
            </p>
            <h1 className="font-serif text-foreground leading-[1.18] tracking-[-0.01em] font-medium"
                style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}>
              用 AI，
              <br />
              放大你的
              <br />
              <span className="text-accent italic">個人品牌價值</span>
            </h1>
            <p className="text-[17px] text-ink-soft leading-[1.85] tracking-wide max-w-md">
              從內容、流量到變現，
              <br className="hidden sm:block" />
              建立一套真正能運作的系統。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <MagneticButton href="#services" variant="primary" external={false}>
                <span className="text-sm tracking-wide">了解服務 →</span>
              </MagneticButton>
              <MagneticButton href="#portfolio" variant="outline" external={false}>
                <span className="text-sm tracking-wide">查看案例</span>
              </MagneticButton>
            </div>
          </div>

          {/* 右：主視覺位置（圖待補） */}
          <div className="relative aspect-square w-full max-w-[480px] mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-[32px] bg-accent-soft/60" />
            <div className="absolute inset-6 rounded-[24px] bg-white border border-border shadow-[0_24px_48px_-20px_rgba(180,138,74,0.4)] flex items-center justify-center">
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted">
                Hero Visual · 待補
              </span>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ===== 3. About ===== */}
      <FadeInSection
        as="section"
        id="about"
        className="relative px-6 py-28 w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FAF6EA 0%, #F4EDDE 50%, #FAF6EA 100%)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-accent/40" />

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-center relative">
          {/* 左：About 視覺位置（待補） */}
          <div className="relative aspect-square w-full max-w-[400px] mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-accent-soft/70 flex items-center justify-center">
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted">
                About Visual · 待補
              </span>
            </div>
          </div>

          {/* 右：文字 */}
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4">
              About
            </p>
            <h2
              className="font-serif text-foreground mb-8 leading-[1.25] tracking-[-0.01em] font-medium"
              style={{ fontSize: "clamp(30px, 3.6vw, 44px)" }}
            >
              我在做的，
              <br />
              不只是 AI 工具。
            </h2>
            <div className="space-y-5 text-[16px] text-ink-soft leading-[1.95] tracking-wide max-w-xl">
              <p>
                我專注在讓 AI 真正進入內容與商業，幫助創作者與品牌
                <span className="text-foreground"> 把流量轉成可持續的成長與收入</span>。
              </p>
              <p className="text-muted text-[14px]">
                工具只是手段，目的是讓你的個人品牌長出系統、長出複利。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-accent/40" />
      </FadeInSection>

      {/* ===== 4. Services ===== */}
      <FadeInSection
        as="section"
        id="services"
        className="relative px-6 py-28 w-full"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4">
              Services
            </p>
            <h2
              className="font-serif text-foreground mb-5 leading-[1.2] tracking-[-0.01em] font-medium"
              style={{ fontSize: "clamp(30px, 3.6vw, 44px)" }}
            >
              三條把 AI 落地的路。
            </h2>
            <p className="text-ink-soft text-[15px] tracking-wide leading-[1.95]">
              不是工具堆疊，是幫你把 AI 接到內容生產、品牌成長、跟商業流程裡。
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

      {/* ===== 5. Portfolio ===== */}
      <FadeInSection
        as="section"
        id="portfolio"
        className="relative px-6 py-28 w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FAF6EA 0%, #F4EDDE 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4">
              Portfolio
            </p>
            <h2
              className="font-serif text-foreground mb-5 leading-[1.2] tracking-[-0.01em] font-medium"
              style={{ fontSize: "clamp(30px, 3.6vw, 44px)" }}
            >
              一些實際發生的成長。
            </h2>
            <p className="text-ink-soft text-[15px] tracking-wide leading-[1.95]">
              下面是我做過、或正在做的事 —— 內容、品牌、產品、合作。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {portfolio.map((p) => (
              <HoverCard
                key={p.title}
                href="#"
                external={false}
                className="relative p-8 bg-white border border-border rounded-2xl transition-colors overflow-hidden shadow-[0_4px_24px_-12px_rgba(180,138,74,0.22)]"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-block bg-accent-soft text-accent font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-full mb-4">
                      {p.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-wide text-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="text-ink-soft leading-[1.95] text-[14px] tracking-wide mb-6">
                      {p.desc}
                    </p>
                    <p className="text-[13px] font-medium text-accent inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      查看細節 →
                    </p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ===== 5b. E-Book ===== */}
      <FadeInSection
        as="section"
        id="ebook"
        className="relative px-6 py-28 w-full overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(198, 156, 109, 0.14) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-center relative">
          {/* 左：書封 */}
          <div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-[24px] bg-accent-soft/70 shadow-[0_24px_48px_-20px_rgba(180,138,74,0.4)]" />
            <div className="absolute inset-4 rounded-[18px] bg-white border border-border flex flex-col items-center justify-center p-8 text-center">
              <p className="text-[10px] tracking-[0.32em] uppercase text-accent mb-4">
                E-Book · 2026
              </p>
              <h3 className="font-serif text-[26px] leading-[1.3] text-foreground font-medium mb-3">
                不想動腦
                <br />
                學會 AI
                <br />
                懶人包
              </h3>
              <p className="text-[11px] text-muted tracking-[0.2em] uppercase mt-2">
                DM · AI 入門指南
              </p>
            </div>
          </div>

          {/* 右：文字 */}
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4">
              E-Book · Coming Soon
            </p>
            <h2
              className="font-serif text-foreground mb-6 leading-[1.2] tracking-[-0.01em] font-medium"
              style={{ fontSize: "clamp(30px, 3.6vw, 44px)" }}
            >
              不想動腦，
              <br />
              也能<span className="text-accent italic">搞懂 AI</span>。
            </h2>
            <p className="text-ink-soft text-[16px] tracking-wide leading-[1.95] mb-8 max-w-xl">
              寫給沒空鑽研、又不想被英文術語嚇到的人。
              <br />
              6 章，1 個下午看完，搞懂 AI 圈在玩什麼。
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-xl">
              {[
                "AI 基本盤",
                "常見 AI 工具地圖",
                "Claude 長什麼樣",
                "Skill 入門",
                "MCP 入門",
                "讓 Claude 自己跑",
              ].map((ch, i) => (
                <div
                  key={ch}
                  className="flex items-baseline gap-3 text-[14px] text-ink-soft tracking-wide"
                >
                  <span className="text-accent font-mono text-[12px]">
                    0{i + 1}
                  </span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <MagneticButton href={DM_URL} variant="primary">
                <span className="text-sm tracking-wide">📬 上線通知我</span>
              </MagneticButton>
              <p className="text-[12px] text-muted tracking-wide">
                私訊「<span className="text-foreground">我要懶人包</span>」搶先預訂
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ===== 6. CTA ===== */}
      <FadeInSection
        as="section"
        id="contact"
        className="relative px-6 py-32 w-full overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198, 156, 109, 0.2) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[960px] mx-auto text-center p-12 sm:p-20 rounded-[28px] bg-white border border-border shadow-[0_24px_64px_-24px_rgba(180,138,74,0.35)] relative">
          <h2
            className="font-serif text-foreground mb-6 leading-[1.25] tracking-[-0.01em] font-medium"
            style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}
          >
            如果你也想把 AI
            <br />
            變成你的<span className="text-accent italic">收入工具</span>。
          </h2>
          <p className="text-ink-soft mb-12 text-[15px] tracking-wide leading-[1.95] max-w-md mx-auto">
            一場 30 分鐘的諮詢，先看你的問題在哪、AI 能幫上哪段。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <MagneticButton href={DM_URL} variant="primary" className="px-12">
              <span className="text-sm tracking-wide">預約諮詢</span>
            </MagneticButton>
            <MagneticButton href={DM_URL} variant="outline" className="px-12">
              <span className="text-sm tracking-wide">開始合作</span>
            </MagneticButton>
          </div>
        </div>
      </FadeInSection>

      {/* ===== 7. Footer ===== */}
      <footer className="border-t border-border bg-bg-3/40">
        <div className="max-w-[1200px] mx-auto px-6 py-14 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div
              className="text-2xl mb-4"
              style={{ fontFamily: '"Bungee Shade", "Noto Sans TC", sans-serif' }}
            >
              DM
            </div>
            <p className="font-serif text-[18px] text-foreground leading-[1.6] max-w-sm">
              把 AI 變成個人品牌的
              <br />
              <span className="text-accent italic">成長引擎</span>。
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-[14px] text-ink-soft">
              <li><a href="#about" className="hover:text-foreground transition">關於</a></li>
              <li><a href="#services" className="hover:text-foreground transition">服務</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition">作品</a></li>
              <li><a href="#ebook" className="hover:text-foreground transition">電子書</a></li>
              <li><a href={DM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">預約諮詢</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted mb-4">
              Connect
            </p>
            <ul className="space-y-2 text-[14px] text-ink-soft">
              <li><a href={THREADS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Threads</a></li>
              <li><a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] tracking-[0.2em] uppercase text-muted">
            <span>© 2026 DM · Made with AI</span>
            <span>Personal Brand · AI · Growth</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
