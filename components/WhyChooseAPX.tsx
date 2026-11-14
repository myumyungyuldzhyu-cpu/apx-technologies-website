
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck2,
  CreditCard,
  GraduationCap,
  Handshake,
  Layers3,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Безплатна консултация",
    description:
      "Обсъждаме вашата идея, целите и възможните решения без предварителен ангажимент.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "30 дни безплатна поддръжка",
    description:
      "След предаването на проекта получавате 30 дни техническа поддръжка за проблеми с договорените функционалности.",
    icon: CalendarCheck2,
  },
  {
    number: "03",
    title: "Без задължителни месечни такси",
    description:
      "Не изискваме абонамент за поддръжка. Допълнителните услуги се договарят отделно. Домейнът, хостингът и външните услуги могат да имат собствени такси.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Обучение за управление",
    description:
      "При проект с административен панел предоставяме безплатно първоначално обучение за работа със системата.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Плащане на два етапа",
    description:
      "50% при започване на проекта и 50% след завършване и одобрение, преди окончателното предаване.",
    icon: CreditCard,
  },
  {
    number: "06",
    title: "Развитие без ограничения",
    description:
      "Проектираме решения с възможност за бъдещо разширяване чрез нови функционалности, страници и интеграции.",
    icon: Layers3,
  },
];

export default function WhyChooseAPX() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="apx-benefits"
      id="why-apx"
      aria-labelledby="apx-benefits-title"
    >
      <div className="apx-benefits__glow" aria-hidden="true" />
      <div className="apx-benefits__grid" aria-hidden="true" />

      <div className="apx-benefits__container">
        <header
          className={`apx-benefits__header ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="apx-benefits__eyebrow">
            <span className="apx-benefits__eyebrow-line" />
            THE APX ADVANTAGE
            <span className="apx-benefits__eyebrow-line" />
          </div>

          <h2 id="apx-benefits-title">
            Защо да изберете
            <br />
            <span>APX Technologies?</span>
          </h2>

          <p>
            Повече от уебсайт. Получавате индивидуален подход,
            прозрачни условия и дигитално решение,
            създадено с мисъл за вашия бизнес.
          </p>
        </header>

        <div className="apx-benefits__cards">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className={`apx-benefits__card ${
                  visible ? "is-visible" : ""
                }`}
                style={{
                  transitionDelay: visible
                    ? `${index * 110}ms`
                    : "0ms",
                }}
              >
                <div className="apx-benefits__card-light" />

                <div className="apx-benefits__card-top">
                  <div className="apx-benefits__icon">
                    <Icon
                      size={29}
                      strokeWidth={1.65}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="apx-benefits__number">
                    {benefit.number}
                  </span>
                </div>

                <div className="apx-benefits__card-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>

                <div className="apx-benefits__card-bottom">
                  <span>APX TECHNOLOGIES</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div
          className={`apx-benefits__footer ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="apx-benefits__footer-copy">
            <span>YOUR IDEA. OUR EXPERTISE.</span>
            <h3>Имате идея за проект?</h3>
            <p>
              Разкажете ни какво искате да създадете.
              Ще обсъдим възможностите заедно.
            </p>
          </div>

          <a
            href="#contact"
            className="apx-benefits__cta"
          >
            Обсъдете своя проект
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .apx-benefits {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          padding: 115px 24px 120px;
          color: #fff;
          background:
            radial-gradient(
              ellipse 55% 35% at 50% 8%,
              rgba(0, 98, 255, 0.16),
              transparent 80%
            ),
            linear-gradient(
              180deg,
              #030815 0%,
              #06162e 48%,
              #030917 100%
            );
        }

        .apx-benefits__glow {
          position: absolute;
          z-index: -1;
          top: 160px;
          left: 50%;
          width: 950px;
          height: 650px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(0, 107, 255, 0.08);
          filter: blur(110px);
          pointer-events: none;
        }

        .apx-benefits__grid {
          position: absolute;
          z-index: -1;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(63, 127, 215, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(63, 127, 215, 0.035) 1px,
              transparent 1px
            );
          background-size: 75px 75px;
          mask-image: linear-gradient(
            transparent,
            black 30%,
            black 75%,
            transparent
          );
          pointer-events: none;
        }

        .apx-benefits__container {
          width: min(100%, 1220px);
          margin: 0 auto;
        }

        .apx-benefits__header {
          margin-bottom: 65px;
          text-align: center;
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .apx-benefits__header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .apx-benefits__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: #73b7ff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .apx-benefits__eyebrow-line {
          width: 35px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #499bff,
            transparent
          );
        }

        .apx-benefits__header h2 {
          margin: 26px 0 22px;
          font-size: clamp(36px, 5vw, 66px);
          font-weight: 800;
          line-height: 1.16;
          letter-spacing: -1.8px;
        }

        .apx-benefits__header h2 span {
          color: #5aafff;
          text-shadow:
            0 0 38px rgba(0, 125, 255, 0.25);
        }

        .apx-benefits__header p {
          max-width: 660px;
          margin: 0 auto;
          color: #a1b5d1;
          font-size: 15px;
          line-height: 1.9;
        }

        .apx-benefits__cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .apx-benefits__card {
          position: relative;
          isolation: isolate;
          display: flex;
          min-height: 320px;
          flex-direction: column;
          overflow: hidden;
          padding: 30px;
          border: 1px solid rgba(79, 146, 233, 0.22);
          border-radius: 17px;
          background: linear-gradient(
            145deg,
            rgba(11, 32, 65, 0.96),
            rgba(5, 17, 37, 0.98)
          );
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 700ms ease,
            transform 700ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .apx-benefits__card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .apx-benefits__card:hover {
          transform: translateY(-9px);
          border-color: rgba(69, 163, 255, 0.8);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.3),
            0 0 35px rgba(0, 120, 255, 0.14),
            inset 0 0 25px rgba(0, 110, 255, 0.035);
        }

        .apx-benefits__card-light {
          position: absolute;
          z-index: -1;
          top: -130px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(0, 118, 255, 0.12);
          filter: blur(70px);
          transition: background 350ms ease;
          pointer-events: none;
        }

        .apx-benefits__card:hover
        .apx-benefits__card-light {
          background: rgba(0, 135, 255, 0.28);
        }

        .apx-benefits__card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .apx-benefits__icon {
          display: grid;
          width: 65px;
          height: 65px;
          place-items: center;
          border: 1px solid rgba(71, 158, 255, 0.45);
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            rgba(18, 92, 176, 0.5),
            rgba(7, 35, 79, 0.75)
          );
          color: #8ccaff;
          box-shadow:
            0 0 25px rgba(0, 125, 255, 0.13),
            inset 0 0 20px rgba(0, 110, 255, 0.08);
          transition:
            transform 350ms ease,
            box-shadow 350ms ease;
        }

        .apx-benefits__card:hover
        .apx-benefits__icon {
          transform: scale(1.08);
          box-shadow: 0 0 35px rgba(0, 135, 255, 0.3);
        }

        .apx-benefits__number {
          color: rgba(109, 164, 232, 0.45);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .apx-benefits__card-content {
          flex: 1;
          margin-top: 32px;
        }

        .apx-benefits__card-content h3 {
          margin: 0 0 15px;
          font-size: 21px;
          font-weight: 750;
          line-height: 1.35;
          letter-spacing: -0.3px;
        }

        .apx-benefits__card-content p {
          margin: 0;
          color: #a0b4d1;
          font-size: 13px;
          line-height: 1.85;
        }

        .apx-benefits__card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          padding-top: 18px;
          border-top: 1px solid rgba(91, 151, 223, 0.15);
          color: #5b94ce;
        }

        .apx-benefits__card-bottom span {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .apx-benefits__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          margin-top: 55px;
          padding: 35px 40px;
          border: 1px solid rgba(70, 145, 245, 0.3);
          border-radius: 16px;
          background: linear-gradient(
            110deg,
            rgba(11, 46, 96, 0.9),
            rgba(5, 24, 53, 0.95)
          );
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity 700ms ease 350ms,
            transform 700ms ease 350ms;
        }

        .apx-benefits__footer.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .apx-benefits__footer-copy > span {
          color: #6db5ff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .apx-benefits__footer-copy h3 {
          margin: 10px 0 8px;
          font-size: 27px;
          font-weight: 750;
        }

        .apx-benefits__footer-copy p {
          margin: 0;
          color: #a3b8d5;
          font-size: 13px;
          line-height: 1.7;
        }

        .apx-benefits__cta {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 17px;
          padding: 17px 25px;
          border: 1px solid #55adff;
          border-radius: 8px;
          background: linear-gradient(
            135deg,
            #0866c7,
            #073b84
          );
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 0 25px rgba(0, 130, 255, 0.2);
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .apx-benefits__cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 35px rgba(0, 135, 255, 0.5);
        }

        @media (max-width: 1000px) {
          .apx-benefits__cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .apx-benefits__footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .apx-benefits {
            padding: 80px 16px 90px;
          }

          .apx-benefits__header {
            margin-bottom: 42px;
          }

          .apx-benefits__eyebrow {
            gap: 8px;
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .apx-benefits__eyebrow-line {
            width: 20px;
          }

          .apx-benefits__header h2 {
            font-size: clamp(32px, 8vw, 43px);
            letter-spacing: -0.8px;
          }

          .apx-benefits__header p {
            font-size: 13px;
          }

          .apx-benefits__cards {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .apx-benefits__card {
            min-height: 275px;
            padding: 25px;
          }

          .apx-benefits__card-content {
            margin-top: 25px;
          }

          .apx-benefits__card-content h3 {
            font-size: 19px;
          }

          .apx-benefits__footer {
            margin-top: 35px;
            padding: 28px 24px;
          }

          .apx-benefits__footer-copy h3 {
            font-size: 23px;
          }

          .apx-benefits__cta {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apx-benefits__header,
          .apx-benefits__card,
          .apx-benefits__footer {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .apx-benefits__card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
