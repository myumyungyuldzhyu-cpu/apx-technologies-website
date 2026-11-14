
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedPortfolio.module.css";
import PartnershipsSection from "./PartnershipsSection";
import CertificateSlider from "./CertificateSlider";
import ProjectsGallery from "./ProjectsGallery";
import WhyChooseAPX from "./WhyChooseAPX";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";

export default function AnimatedPortfolio() {
  const root = useRef<HTMLElement>(null);
  const hero = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const portrait = useRef<HTMLImageElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(portrait.current, {
        autoAlpha: 0,
        y: 140,
        scale: 0.85,
        xPercent: -50,
      });

      gsap.set(intro.current, {
        autoAlpha: 0,
        y: 70,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "+=220%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          title.current,
          {
            autoAlpha: 0,
            y: 80,
            letterSpacing: "0.015em",
          },
          {
            autoAlpha: 1,
            y: 0,
            letterSpacing: "0.045em",
            duration: 0.8,
          }
        )
        .to(title.current, {
          scale: 1.08,
          letterSpacing: "0.10em",
          duration: 1.0,
        })
        .to(
          portrait.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.35,
          },
          "<+0.15"
        )
        .to(
          title.current,
          {
            opacity: 0.18,
            y: -65,
            duration: 0.85,
          },
          "<+0.25"
        )
        .to(
          hint.current,
          {
            autoAlpha: 0,
            duration: 0.3,
          },
          "<"
        )
        .to(
          intro.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.0,
          },
          "-=0.25"
        )
        .to({}, { duration: 0.7 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.site} ref={root}>
      <header className={styles.nav}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="APX Technologies начало"
        >
          APX<span> Technologies</span>
        </a>

        <a className={styles.navLink} href="#projects">
          Проекти <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section
        className={styles.hero}
        ref={hero}
        id="top"
        aria-label="Представяне на APX Technologies"
      >
        <div className={styles.glow} aria-hidden="true" />

        <p className={styles.eyebrow}>
          DIGITAL INNOVATION STUDIO
        </p>

        <h1 className={styles.heroTitle} ref={title}>
          PORTFOLIO
        </h1>

        <img
          ref={portrait}
          className={styles.portrait}
          src="/images/founder.png"
          alt="Основателят на APX Technologies"
        />

        <div className={styles.intro} ref={intro}>
          <p className={styles.kicker}>
            FOUNDER & DIGITAL CREATOR
          </p>

          <h2>
            Мюмюн
            <br />
            <em>Гюлджю</em>
          </h2>

          <p>Основател на APX Technologies</p>

          <p
            style={{
              marginTop: "18px",
              marginBottom: "22px",
              maxWidth: "440px",
              fontSize: "clamp(16px, 2vw, 21px)",
              lineHeight: 1.5,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            „Не чакам възможностите.{" "}
            <span style={{ color: "#b77bff" }}>
              Създавам ги.
            </span>
            “
          </p>

          <a className={styles.cta} href="#projects">
            Разгледай проектите{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.scrollHint} ref={hint}>
          СКРОЛВАЙ НАДОЛУ{" "}
          <span aria-hidden="true">↓</span>
        </div>

        <div className={styles.sideText}>
          APX TECHNOLOGIES / 2026
        </div>
      </section>

      <PartnershipsSection />

      <CertificateSlider />

      <ProjectsGallery />

      <WhyChooseAPX />

      <ContactSection />

      <FAQSection />
    </main>
  );
}
