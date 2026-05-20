import Image from "next/image";

export interface TrustLogoItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface TrustLogoStripProps {
  title?: string;
  logos: TrustLogoItem[];
}

const TrustLogoStrip = ({
  title = "Trusted by teams that ship with confidence",
  logos,
}: TrustLogoStripProps) => {
  if (!logos.length) return null;

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <div className="rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(14,16,22,0.95),rgba(10,12,16,0.95))] px-5 py-6 sm:px-8 sm:py-7 shadow-[0_8px_32px_rgba(0,0,0,0.24)]">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-left">
          {title}
        </p>
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center opacity-85 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 160}
                height={logo.height ?? 60}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                className="h-8 w-auto object-contain sm:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogoStrip;
