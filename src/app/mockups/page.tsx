import V1Flip from "./V1Flip";
import V2Tamagotchi from "./V2Tamagotchi";
import V3StreetNeon from "./V3StreetNeon";

export const metadata = {
  title: "DM AI · Mockups (內部選版)",
};

export default function Mockups() {
  return (
    <div className="bg-black min-h-screen">
      <header className="text-center py-10 border-b border-white/10">
        <p className="font-mono text-[11px] tracking-[0.4em] text-white/40 mb-2">
          // INTERNAL :: STYLE_PICKER
        </p>
        <h1 className="font-mono text-2xl text-white tracking-wider">
          DM AI · 風格選版
        </h1>
        <p className="text-white/50 text-sm mt-3">
          滾動比較 3 個方向 · 不是最終版 · 只看 vibe / 配色 / 結構
        </p>
      </header>

      <Section label="V1 · FLIP 紫黃（街頭滑板感）" bg="bg-[#7B6FE0]">
        <V1Flip />
      </Section>

      <Section label="V2 · TAMAGOTCHI 粉藍（甜美復古玩具）" bg="bg-[#FFD7E5]">
        <V2Tamagotchi />
      </Section>

      <Section label="V3 · STREET NEON 黑霓虹（叛逆潮街頭）" bg="bg-black">
        <V3StreetNeon />
      </Section>

      <footer className="text-center py-12 border-t border-white/10">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/40">
          ← 看完跟 Claude 說「選 V1 / V2 / V3」 或 「全砍重來」
        </p>
      </footer>
    </div>
  );
}

function Section({
  label,
  bg,
  children,
}: {
  label: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-white/10">
      <div className="bg-black text-white text-center py-4 font-mono text-[11px] tracking-[0.3em]">
        {label}
      </div>
      <div className={bg}>{children}</div>
    </section>
  );
}
