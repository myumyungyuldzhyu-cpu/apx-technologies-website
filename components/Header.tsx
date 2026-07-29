"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Moon, X } from "lucide-react";

const navItems = [
  { label: "Начало", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Проекти", href: "#projects" },
  { label: "За нас", href: "#about" },
  { label: "Процес", href: "#process" },
  { label: "Контакти", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#020814]/85 backdrop-blur-2xl">
      <div className="apx-container flex h-[78px] items-center justify-between">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative flex min-w-[108px] items-center">
            <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-end justify-center leading-none">
                <span className="text-[28px] font-black tracking-[-0.08em] text-white">
                  AP
                </span>

                <span className="text-[28px] font-black tracking-[-0.08em] text-blue-500">
                  X
                </span>
              </div>

              <p className="mt-1 text-center text-[6px] font-bold uppercase tracking-[0.42em] text-white/55">
                Technologies
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-2 text-[13px] font-semibold transition ${
                index === 0
                  ? "text-blue-400"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute inset-x-0 -bottom-[22px] mx-auto h-[2px] w-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="apx-button-secondary min-h-[42px] px-5"
          >
            Свържи се с нас
            <ArrowRight size={15} />
          </a>

          <button
            type="button"
            aria-label="Тъмен режим"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-white/65 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            <Moon size={17} />
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#020814]/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-blue-500/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="apx-button-primary mt-3"
            >
              Свържи се с нас
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}