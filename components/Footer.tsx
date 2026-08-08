import Link from "next/link";
import {
  ArrowUpRight,

  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "Начало", href: "#home" },
  { label: "За нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекти", href: "#projects" },
  { label: "Процес", href: "#process" },
  { label: "Контакти", href: "#contact" },
];

const services = [
  "Корпоративни сайтове",
  "Уеб приложения",
  "Responsive дизайн",
  "SEO оптимизация",
  "AI решения",
  "Техническа поддръжка",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030812]">
      <div className="apx-glow -bottom-48 -left-48 opacity-20" />
      <div className="apx-grid absolute inset-0 opacity-10" />

      <div className="apx-container relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <span className="text-lg font-black tracking-[-0.04em] text-blue-400">
                  APX
                </span>
              </div>

              <div>
                <p className="text-lg font-black tracking-[-0.03em] text-white">
                  APX Technologies
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Digital Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-white/45">
              Създаваме модерни уебсайтове, бизнес платформи и дигитални
              решения, които представят бизнеса професионално и вдъхват
              доверие.
            </p>

            
          </div>

          <div>
            <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white">
              Навигация
            </h3>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[14px] font-medium text-white/45 transition hover:text-white"
                >
                  <ArrowUpRight
                    size={14}
                    className="text-blue-400 opacity-0 transition group-hover:opacity-100"
                  />

                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white">
              Услуги
            </h3>

            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-[14px] font-medium text-white/45"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white">
              Контакти
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+359899277511"
                className="group flex items-start gap-3 text-white/45 transition hover:text-white"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                    Телефон
                  </p>

                  <p className="mt-1 text-[13px] font-semibold">
                    +359 899 277 511
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@apxtechnologies.dev"
                className="group flex items-start gap-3 text-white/45 transition hover:text-white"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                    Email
                  </p>

                  <p className="mt-1 break-all text-[13px] font-semibold">
                    
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/45">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                    Локация
                  </p>

                  <p className="mt-1 text-[13px] font-semibold">
                    Стара Загора, България
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.06] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-white/35">
            © 2026 APX Technologies. Всички права запазени.
          </p>

          <p className="text-[12px] text-white/35">
            Създадено от {" "}
            <span className="font-bold text-white/60">APX Technologies (Alpha Pro X BG)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}