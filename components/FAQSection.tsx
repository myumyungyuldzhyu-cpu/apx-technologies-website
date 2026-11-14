
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Колко струва изработката на уебсайт?",
    answer:
      "Всеки проект е индивидуален. Цената се определя според дизайна, функционалностите, сложността и конкретните изисквания. Предлагаме безплатна първоначална консултация, след която изготвяме персонализирана оферта.",
  },
  {
    question: "Колко време отнема изработката на уебсайт?",
    answer:
      "Срокът зависи от мащаба и функционалностите на проекта. Преди започване уточняваме етапите на разработка и ориентировъчния срок за завършване.",
  },
  {
    question: "Как се извършва плащането?",
    answer:
      "Плащането се извършва на два етапа: 50% авансово при започване на проекта и останалите 50% след завършване и одобрение, преди окончателното предаване.",
  },
  {
    question: "Предлагате ли безплатна техническа поддръжка?",
    answer:
      "Да. След предаването на проекта предоставяме 30 дни безплатна техническа поддръжка за отстраняване на проблеми, свързани с предварително договорените функционалности.",
  },
  {
    question: "Задължително ли е да плащам месечна такса?",
    answer:
      "Не. APX Technologies не изисква задължителен месечен абонамент за техническа поддръжка. Допълнителни услуги се договарят отделно. Разходите за домейн, хостинг и външни услуги могат да се заплащат независимо от нас.",
  },
  {
    question: "Ще мога ли сам да управлявам уебсайта си?",
    answer:
      "Да. Ако проектът включва административен панел, предоставяме първоначално обучение за управление на съдържанието, продуктите или другите налични функции.",
  },
  {
    question: "Може ли да добавям нови функции в бъдеще?",
    answer:
      "Да. Уебсайтовете и платформите могат да бъдат разширявани с допълнителни страници, функционалности и интеграции според техническите възможности и бъдещите нужди на бизнеса.",
  },
  {
    question: "Как мога да започна проект с APX Technologies?",
    answer:
      "Свържете се с нас и ни разкажете за вашата идея. Ще обсъдим целите, желаните функционалности и възможните решения, след което ще получите индивидуално предложение.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="apx-faq" id="faq">
      <div className="apx-faq__glow" aria-hidden="true" />

      <div className="apx-faq__container">
        <header className="apx-faq__header">
          <div className="apx-faq__eyebrow">
            <span className="apx-faq__line" />
            APX TECHNOLOGIES / FAQ
            <span className="apx-faq__line" />
          </div>

          <h2>
            Често задавани
            <br />
            <span>въпроси</span>
          </h2>

          <p>
            Всичко, което трябва да знаете,
            преди да започнем работа по вашия проект.
          </p>
        </header>

        <div className="apx-faq__list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={index}
                className={`apx-faq__item ${
                  isOpen ? "apx-faq__item--open" : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    className="apx-faq__question"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="apx-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="apx-faq__question-text">
                      {faq.question}
                    </span>

                    <span
                      className={`apx-faq__icon ${
                        isOpen ? "apx-faq__icon--open" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>

                <div
                  className={`apx-faq__answer-wrapper ${
                    isOpen
                      ? "apx-faq__answer-wrapper--open"
                      : ""
                  }`}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  inert={!isOpen}
                >
                  <div className="apx-faq__answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="apx-faq__bottom">
          <div className="apx-faq__bottom-glow" />

          <div className="apx-faq__bottom-icon">
            ?
          </div>

          <h3>Имате още въпроси?</h3>

          <p>
            Разкажете ни за вашата идея.
            Ще ви помогнем да намерите подходящото решение.
          </p>

          <a
            href="#contact"
            className="apx-faq__contact-button"
          >
            Свържете се с нас
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .apx-faq {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          padding: 110px 20px 120px;
          color: #fff;
          background:
            radial-gradient(
              ellipse 55% 35% at 50% 10%,
              rgba(0, 90, 210, 0.15),
              transparent 75%
            ),
            linear-gradient(
              180deg,
              #030815 0%,
              #06152d 48%,
              #020611 100%
            );
        }

        .apx-faq__glow {
          position: absolute;
          z-index: -1;
          top: 100px;
          left: 50%;
          width: 850px;
          height: 500px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(0, 105, 255, 0.08);
          filter: blur(100px);
          pointer-events: none;
        }

        .apx-faq__container {
          position: relative;
          width: min(100%, 980px);
          margin: 0 auto;
        }

        .apx-faq__header {
          margin-bottom: 60px;
          text-align: center;
        }

        .apx-faq__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #72b6ff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .apx-faq__line {
          width: 35px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #4c9aff,
            transparent
          );
        }

        .apx-faq__header h2 {
          margin: 25px 0 20px;
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .apx-faq__header h2 span {
          color: #58adff;
          text-shadow:
            0 0 35px rgba(0, 135, 255, 0.35);
        }

        .apx-faq__header p {
          max-width: 560px;
          margin: 0 auto;
          color: #9fb2d0;
          font-size: 15px;
          line-height: 1.8;
        }

        .apx-faq__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .apx-faq__item {
          overflow: hidden;
          border: 1px solid rgba(90, 145, 215, 0.18);
          border-radius: 13px;
          background: rgba(8, 25, 52, 0.8);
          transition:
            border-color 350ms ease,
            background 350ms ease,
            box-shadow 350ms ease;
        }

        .apx-faq__item:hover {
          border-color: rgba(82, 164, 255, 0.4);
        }

        .apx-faq__item--open {
          border-color: rgba(63, 156, 255, 0.7);
          background: linear-gradient(
            135deg,
            rgba(11, 44, 89, 0.96),
            rgba(6, 24, 52, 0.96)
          );
          box-shadow:
            0 0 30px rgba(0, 100, 255, 0.1),
            inset 3px 0 0 #389dff;
        }

        .apx-faq__item h3 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }

        .apx-faq__question {
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 85px;
          gap: 22px;
          padding: 22px 28px;
          border: 0;
          background: transparent;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }

        .apx-faq__number {
          flex-shrink: 0;
          color: #4b91d7;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .apx-faq__item--open .apx-faq__number {
          color: #6fc0ff;
        }

        .apx-faq__question-text {
          flex: 1;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.5;
        }

        .apx-faq__icon {
          position: relative;
          display: grid;
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(80, 154, 240, 0.35);
          border-radius: 50%;
          background: rgba(15, 67, 128, 0.3);
          transition:
            background 300ms ease,
            transform 300ms ease;
        }

        .apx-faq__icon span {
          position: absolute;
          width: 12px;
          height: 2px;
          border-radius: 2px;
          background: #81c5ff;
          transition: transform 300ms ease;
        }

        .apx-faq__icon span:last-child {
          transform: rotate(90deg);
        }

        .apx-faq__icon--open {
          background: #1268bd;
          transform: rotate(180deg);
        }

        .apx-faq__icon--open span:last-child {
          transform: rotate(0deg);
        }

        .apx-faq__answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          visibility: hidden;
          transition:
            grid-template-rows 450ms ease,
            visibility 450ms ease;
        }

        .apx-faq__answer-wrapper--open {
          grid-template-rows: 1fr;
          visibility: visible;
        }

        .apx-faq__answer-inner {
          min-height: 0;
          overflow: hidden;
        }

        .apx-faq__answer-inner p {
          margin: 0 28px 25px 65px;
          padding-top: 19px;
          border-top: 1px solid rgba(96, 158, 230, 0.17);
          color: #adc1dd;
          font-size: 14px;
          line-height: 1.9;
        }

        .apx-faq__bottom {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 70px;
          padding: 48px 25px;
          border: 1px solid rgba(69, 148, 245, 0.28);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(9, 41, 87, 0.9),
            rgba(5, 20, 44, 0.95)
          );
          text-align: center;
        }

        .apx-faq__bottom-glow {
          position: absolute;
          top: -130px;
          left: 50%;
          width: 500px;
          height: 280px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(0, 120, 255, 0.16);
          filter: blur(65px);
          pointer-events: none;
        }

        .apx-faq__bottom-icon {
          position: relative;
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          border: 1px solid #4b9cff;
          border-radius: 50%;
          background: #0b356a;
          color: #91cfff;
          font-size: 27px;
          font-weight: 700;
          box-shadow: 0 0 25px rgba(0, 125, 255, 0.3);
        }

        .apx-faq__bottom h3 {
          position: relative;
          margin: 22px 0 10px;
          font-size: 27px;
          font-weight: 750;
        }

        .apx-faq__bottom p {
          position: relative;
          max-width: 480px;
          margin: 0;
          color: #a4bad7;
          font-size: 14px;
          line-height: 1.8;
        }

        .apx-faq__contact-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 27px;
          padding: 15px 28px;
          border: 1px solid #57adff;
          border-radius: 7px;
          background: linear-gradient(
            135deg,
            #0862bc,
            #073a82
          );
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 0 22px rgba(0, 125, 255, 0.3);
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .apx-faq__contact-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 35px rgba(0, 135, 255, 0.6);
        }

        @media (max-width: 600px) {
          .apx-faq {
            padding: 75px 15px 85px;
          }

          .apx-faq__header {
            margin-bottom: 40px;
          }

          .apx-faq__eyebrow {
            font-size: 8px;
            letter-spacing: 1.5px;
            gap: 8px;
          }

          .apx-faq__line {
            width: 20px;
          }

          .apx-faq__header h2 {
            font-size: 38px;
          }

          .apx-faq__header p {
            font-size: 13px;
          }

          .apx-faq__question {
            min-height: 75px;
            gap: 13px;
            padding: 18px 16px;
          }

          .apx-faq__question-text {
            font-size: 14px;
          }

          .apx-faq__number {
            font-size: 10px;
          }

          .apx-faq__icon {
            width: 29px;
            height: 29px;
          }

          .apx-faq__answer-inner p {
            margin: 0 16px 20px 39px;
            padding-top: 15px;
            font-size: 13px;
          }

          .apx-faq__bottom {
            margin-top: 50px;
            padding: 35px 20px;
          }

          .apx-faq__bottom h3 {
            font-size: 23px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apx-faq__item,
          .apx-faq__icon,
          .apx-faq__icon span,
          .apx-faq__answer-wrapper,
          .apx-faq__contact-button {
            transition-duration: 0.01ms;
          }
        }
      `}</style>
    </section>
  );
}
