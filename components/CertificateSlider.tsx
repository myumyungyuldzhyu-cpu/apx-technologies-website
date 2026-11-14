
"use client";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
};

const certificates: Certificate[] = [
  {
    id: "marketing",
    title: "Marketing and Communications",
    issuer: "International Business Management Institute",
    year: "2026",
    image: "/certificates/marketing-communications.jpg",
  },
  {
    id: "project",
    title: "Basics of Project Management",
    issuer: "International Business Management Institute",
    year: "2026",
    image: "/certificates/project-management.jpg",
  },
  {
    id: "upcoming",
    title: "Очаквайте скоро",
    issuer: "Следващо професионално обучение",
    year: "",
  },
];

const ANIMATION_DURATION = 1050;

export default function CertificateSlider() {
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [preview, setPreview] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  const touchStart = useRef<number | null>(null);
  const moveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const count = certificates.length;

  function changeSlide(index: number) {
    if (isMoving || index === active) return;

    setIsMoving(true);
    setActive((index + count) % count);

    if (moveTimer.current) {
      clearTimeout(moveTimer.current);
    }

    moveTimer.current = setTimeout(() => {
      setIsMoving(false);
    }, ANIMATION_DURATION);
  }

  function next() {
    changeSlide((active + 1) % count);
  }

  function previous() {
    changeSlide((active - 1 + count) % count);
  }

  function getPosition(index: number) {
    const difference = (index - active + count) % count;

    if (difference === 0) return "center";
    if (difference === 1) return "right";

    return "left";
  }

  useEffect(() => {
    return () => {
      if (moveTimer.current) {
        clearTimeout(moveTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null);
        setGalleryOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!galleryOpen && preview === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [galleryOpen, preview]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStart.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStart.current === null) return;

    const end = event.changedTouches[0]?.clientX;

    if (end === undefined) return;

    const difference = end - touchStart.current;
    touchStart.current = null;

    if (Math.abs(difference) < 50) return;

    if (difference < 0) next();
    else previous();
  }

  const selected = certificates[active];
  const realCertificates = certificates.filter(
    (certificate) => Boolean(certificate.image)
  );

  return (
    <section className="apx-showcase" id="certificates">
      <div className="apx-showcase__ambient" />
      <div className="apx-showcase__grid" />

      <header className="apx-showcase__header">
        <span className="apx-showcase__eyebrow">
          APX TECHNOLOGIES
          <span className="apx-showcase__eyebrow-line" />
          PROFESSIONAL DEVELOPMENT
        </span>

        <div className="apx-showcase__title-row">
          <span className="apx-showcase__laurel">❧</span>
          <h2>СЕРТИФИКАТИ</h2>
          <span className="apx-showcase__laurel right">❧</span>
        </div>

        <p>
          Постоянно развитие. Нови знания.
          <br />
          По-високи стандарти за всеки проект.
        </p>
      </header>

      <div
        className="apx-showcase__stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="apx-showcase__backlight" />
        <div className="apx-showcase__floor-glow" />

        <div className="apx-showcase__platform">
          <div className="apx-showcase__platform-back" />
          <div className="apx-showcase__platform-top" />
          <div className="apx-showcase__platform-body">
            <span>APX TECHNOLOGIES</span>
          </div>
          <div className="apx-showcase__platform-bottom" />
        </div>

        <div className="apx-showcase__card-layer">
          {certificates.map((certificate, index) => {
            const position = getPosition(index);
            const isActive = position === "center";

            return (
              <button
                key={certificate.id}
                type="button"
                className={`apx-showcase__certificate apx-showcase__certificate--${position}`}
                onClick={() => {
                  if (!isActive) {
                    changeSlide(index);
                  } else if (certificate.image) {
                    setPreview(index);
                  }
                }}
                aria-label={
                  isActive && certificate.image
                    ? `Увеличи сертификат ${certificate.title}`
                    : `Покажи ${certificate.title}`
                }
              >
                <span className="apx-showcase__outer-frame">
                  <span className="apx-showcase__inner-frame">
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={`IBMI сертификат: ${certificate.title}`}
                        draggable={false}
                      />
                    ) : (
                      <span className="apx-showcase__upcoming">
                        <span className="apx-showcase__upcoming-orbit">
                          <span className="apx-showcase__upcoming-star">
                            ✦
                          </span>
                        </span>

                        <span className="apx-showcase__upcoming-brand">
                          APX TECHNOLOGIES
                        </span>

                        <strong>ОЧАКВАЙТЕ СКОРО</strong>

                        <span className="apx-showcase__upcoming-description">
                          Следващото професионално постижение
                        </span>

                        <span className="apx-showcase__upcoming-line" />
                      </span>
                    )}
                  </span>
                </span>

                <span className="apx-showcase__card-reflection" />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="apx-showcase__nav apx-showcase__nav--prev"
          onClick={previous}
          disabled={isMoving}
          aria-label="Предишен сертификат"
        >
          <span>‹</span>
        </button>

        <button
          type="button"
          className="apx-showcase__nav apx-showcase__nav--next"
          onClick={next}
          disabled={isMoving}
          aria-label="Следващ сертификат"
        >
          <span>›</span>
        </button>
      </div>

      <footer className="apx-showcase__footer">
        <div className="apx-showcase__certificate-info">
          <span className="apx-showcase__info-label">
            {selected.image
              ? "INTERNATIONAL CERTIFICATION"
              : "COMING SOON"}
          </span>

          <h3>{selected.title}</h3>

          <p>
            {selected.issuer}
            {selected.year ? ` · ${selected.year}` : ""}
          </p>
        </div>

        <div className="apx-showcase__dots">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.id}
              type="button"
              className={
                index === active
                  ? "apx-showcase__dot is-active"
                  : "apx-showcase__dot"
              }
              onClick={() => changeSlide(index)}
              aria-label={`Покажи ${certificate.title}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="apx-showcase__all"
          onClick={() => setGalleryOpen(true)}
        >
          <span>Всички сертификати</span>
          <span className="apx-showcase__all-icon">↗</span>
        </button>
      </footer>

      {galleryOpen && (
        <div
          className="apx-showcase__overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Всички сертификати"
          onClick={() => setGalleryOpen(false)}
        >
          <div
            className="apx-showcase__gallery"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="apx-showcase__gallery-header">
              <div>
                <span>APX TECHNOLOGIES</span>
                <h3>Всички сертификати</h3>
              </div>

              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                aria-label="Затвори галерията"
              >
                ×
              </button>
            </div>

            <div className="apx-showcase__gallery-grid">
              {realCertificates.map((certificate) => {
                const originalIndex = certificates.findIndex(
                  (item) => item.id === certificate.id
                );

                return (
                  <button
                    key={certificate.id}
                    type="button"
                    onClick={() => setPreview(originalIndex)}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                    />

                    <strong>{certificate.title}</strong>

                    <span>
                      {certificate.issuer} · {certificate.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {preview !== null && certificates[preview].image && (
        <div
          className="apx-showcase__preview"
          role="dialog"
          aria-modal="true"
          aria-label={certificates[preview].title}
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Затвори сертификата"
          >
            ×
          </button>

          <img
            src={certificates[preview].image}
            alt={certificates[preview].title}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        .apx-showcase {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          min-height: 960px;
          padding: 105px 20px;
          color: #fff;
          text-align: center;
          background:
            radial-gradient(
              ellipse 65% 45% at 50% 54%,
              rgba(0, 95, 200, 0.25),
              transparent 75%
            ),
            radial-gradient(
              ellipse 55% 30% at 50% 85%,
              rgba(0, 62, 145, 0.19),
              transparent 80%
            ),
            linear-gradient(
              180deg,
              #030814 0%,
              #05142b 45%,
              #071a38 65%,
              #020612 100%
            );
        }

        .apx-showcase__ambient {
          position: absolute;
          z-index: -1;
          top: 34%;
          left: 50%;
          width: 900px;
          height: 550px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse,
            rgba(0, 124, 255, 0.22),
            transparent 70%
          );
          filter: blur(50px);
          pointer-events: none;
        }

        .apx-showcase__grid {
          position: absolute;
          z-index: -1;
          bottom: -170px;
          left: 50%;
          width: 150%;
          height: 440px;
          transform: translateX(-50%) perspective(550px)
            rotateX(65deg);
          transform-origin: center bottom;
          background-image:
            linear-gradient(
              rgba(35, 118, 220, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(35, 118, 220, 0.08) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            transparent,
            black 55%,
            transparent
          );
          pointer-events: none;
        }

        .apx-showcase__header {
          position: relative;
          z-index: 5;
        }

        .apx-showcase__eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #80b8ff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .apx-showcase__eyebrow-line {
          width: 25px;
          height: 1px;
          background: #3f8cdb;
        }

        .apx-showcase__title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          margin-top: 22px;
        }

        .apx-showcase__title-row h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: 5px;
          line-height: 1.15;
          text-shadow:
            0 0 22px rgba(0, 115, 255, 0.4),
            0 0 65px rgba(0, 115, 255, 0.15);
        }

        .apx-showcase__laurel {
          color: #cba85e;
          font-size: 50px;
          opacity: 0.8;
          transform: rotate(-35deg);
        }

        .apx-showcase__laurel.right {
          transform: scaleX(-1) rotate(-35deg);
        }

        .apx-showcase__header p {
          margin: 18px 0 0;
          color: #a4bad7;
          font-size: 14px;
          line-height: 1.9;
        }

        .apx-showcase__stage {
          position: relative;
          width: min(100%, 1320px);
          height: 590px;
          margin: 10px auto 0;
          perspective: 1500px;
          perspective-origin: 50% 40%;
          touch-action: pan-y;
        }

        .apx-showcase__backlight {
          position: absolute;
          top: 80px;
          left: 50%;
          width: 680px;
          height: 360px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse,
            rgba(0, 119, 255, 0.25),
            transparent 70%
          );
          filter: blur(40px);
        }

        .apx-showcase__floor-glow {
          position: absolute;
          z-index: 0;
          left: 50%;
          bottom: 10px;
          width: 880px;
          max-width: 95%;
          height: 180px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(0, 100, 255, 0.18);
          filter: blur(50px);
        }

        .apx-showcase__card-layer {
          position: absolute;
          z-index: 4;
          inset: 0;
          transform-style: preserve-3d;
        }

        .apx-showcase__certificate {
          position: absolute;
          top: 85px;
          left: 50%;
          display: block;
          width: min(43vw, 535px);
          aspect-ratio: 1.43;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          transform-style: preserve-3d;
          transition:
            transform 1050ms cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 850ms ease,
            filter 850ms ease;
        }

        .apx-showcase__certificate--center {
          z-index: 6;
          opacity: 1;
          transform: translateX(-50%)
            translateZ(145px)
            rotateY(0deg)
            scale(1);
          filter: brightness(1);
        }

        .apx-showcase__certificate--left {
          z-index: 3;
          opacity: 0.86;
          transform: translateX(-118%)
            translateZ(-180px)
            rotateY(36deg)
            scale(0.83);
          filter: brightness(0.74);
        }

        .apx-showcase__certificate--right {
          z-index: 3;
          opacity: 0.86;
          transform: translateX(18%)
            translateZ(-180px)
            rotateY(-36deg)
            scale(0.83);
          filter: brightness(0.74);
        }

        .apx-showcase__outer-frame {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          padding: 9px;
          border: 2px solid #d5ae63;
          border-radius: 9px;
          background: linear-gradient(
            135deg,
            #1b63a4,
            #05162d 40%,
            #0a3672 80%,
            #d5ad65
          );
          box-shadow:
            0 0 0 3px rgba(26, 120, 255, 0.65),
            0 0 28px rgba(0, 125, 255, 0.7),
            0 0 65px rgba(0, 105, 255, 0.35),
            inset 0 0 20px rgba(255, 200, 100, 0.2);
        }

        .apx-showcase__certificate--center
        .apx-showcase__outer-frame {
          box-shadow:
            0 0 0 3px rgba(58, 150, 255, 0.95),
            0 0 35px rgba(0, 145, 255, 0.85),
            0 0 90px rgba(0, 120, 255, 0.5),
            0 0 15px rgba(235, 183, 89, 0.65);
        }

        .apx-showcase__inner-frame {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: #f0f0f0;
        }

        .apx-showcase__inner-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .apx-showcase__upcoming {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 17px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(20, 91, 164, 0.6),
              transparent 58%
            ),
            linear-gradient(
              135deg,
              #061225,
              #0a2a52 55%,
              #041022
            );
          color: #fff;
        }

        .apx-showcase__upcoming::before {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(207, 171, 103, 0.38);
          pointer-events: none;
        }

        .apx-showcase__upcoming::after {
          content: "";
          position: absolute;
          width: 75%;
          height: 75%;
          border: 1px solid rgba(73, 160, 255, 0.13);
          border-radius: 50%;
          box-shadow:
            0 0 40px rgba(0, 123, 255, 0.1),
            inset 0 0 40px rgba(0, 123, 255, 0.08);
          pointer-events: none;
        }

        .apx-showcase__upcoming-orbit {
          display: grid;
          width: 80px;
          height: 80px;
          place-items: center;
          border: 1px solid rgba(220, 179, 103, 0.6);
          border-radius: 50%;
          box-shadow:
            0 0 25px rgba(235, 183, 89, 0.12),
            inset 0 0 20px rgba(235, 183, 89, 0.08);
        }

        .apx-showcase__upcoming-star {
          color: #e6bd70;
          font-size: 54px;
          line-height: 1;
          text-shadow:
            0 0 15px rgba(255, 201, 110, 0.65),
            0 0 35px rgba(255, 201, 110, 0.3);
        }

        .apx-showcase__upcoming-brand {
          color: #b5d8ff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .apx-showcase__upcoming strong {
          color: #f5f8ff;
          font-size: 22px;
          letter-spacing: 3px;
          text-shadow: 0 0 18px rgba(0, 145, 255, 0.6);
        }

        .apx-showcase__upcoming-description {
          color: #9ebcdd;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .apx-showcase__upcoming-line {
          width: 90px;
          height: 2px;
          margin-top: 5px;
          background: linear-gradient(
            90deg,
            transparent,
            #d5ad65,
            transparent
          );
        }

        .apx-showcase__card-reflection {
          position: absolute;
          top: calc(100% + 18px);
          left: 10%;
          width: 80%;
          height: 75px;
          transform: scaleY(-1);
          background: linear-gradient(
            rgba(0, 130, 255, 0.12),
            transparent
          );
          filter: blur(20px);
          opacity: 0.7;
          pointer-events: none;
        }

        .apx-showcase__platform {
          position: absolute;
          z-index: 2;
          bottom: 22px;
          left: 50%;
          width: min(75%, 850px);
          height: 155px;
          transform: translateX(-50%);
        }

        .apx-showcase__platform-back {
          position: absolute;
          z-index: 1;
          top: 4px;
          left: 0;
          width: 100%;
          height: 100px;
          border-radius: 50%;
          background: #0a254b;
          box-shadow: 0 0 40px rgba(0, 145, 255, 0.3);
        }

        .apx-showcase__platform-top {
          position: absolute;
          z-index: 4;
          top: 0;
          left: 0;
          width: 100%;
          height: 105px;
          border: 3px solid #54baff;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(20, 80, 145, 0.55),
            #071c3a 72%
          );
          box-shadow:
            0 0 20px #008cff,
            0 0 55px rgba(0, 135, 255, 0.65),
            inset 0 0 30px rgba(0, 125, 255, 0.4);
        }

        .apx-showcase__platform-body {
          position: absolute;
          z-index: 3;
          top: 50px;
          left: 7%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 86%;
          height: 100px;
          padding-bottom: 22px;
          border-radius: 0 0 45% 45%;
          background: linear-gradient(
            180deg,
            #194b83 0%,
            #0a2852 35%,
            #041329 100%
          );
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.65),
            inset 0 -5px 18px rgba(0, 100, 255, 0.2);
        }

        .apx-showcase__platform-body span {
          color: #b3e1ff;
          font-size: clamp(12px, 1.8vw, 23px);
          font-weight: 800;
          letter-spacing: 5px;
          text-shadow:
            0 0 12px #008cff,
            0 0 30px rgba(0, 145, 255, 0.6);
        }

        .apx-showcase__platform-bottom {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 9%;
          width: 82%;
          height: 48px;
          border-bottom: 2px solid #2287e7;
          border-radius: 50%;
          box-shadow: 0 12px 25px rgba(0, 135, 255, 0.35);
        }

        .apx-showcase__nav {
          position: absolute;
          z-index: 10;
          top: 44%;
          display: grid;
          width: 60px;
          height: 60px;
          place-items: center;
          border: 1px solid #4ca7ff;
          border-radius: 50%;
          background: rgba(4, 29, 67, 0.8);
          color: #d4efff;
          cursor: pointer;
          box-shadow:
            0 0 18px rgba(0, 130, 255, 0.35),
            inset 0 0 14px rgba(0, 110, 255, 0.1);
          transition: 250ms ease;
        }

        .apx-showcase__nav span {
          margin-top: -6px;
          font-size: 46px;
          line-height: 1;
        }

        .apx-showcase__nav:hover {
          background: #0757a8;
          box-shadow: 0 0 32px rgba(0, 145, 255, 0.8);
        }

        .apx-showcase__nav:disabled {
          cursor: default;
          opacity: 0.5;
        }

        .apx-showcase__nav--prev {
          left: 10px;
        }

        .apx-showcase__nav--next {
          right: 10px;
        }

        .apx-showcase__footer {
          position: relative;
          z-index: 5;
          margin-top: -5px;
        }

        .apx-showcase__info-label {
          color: #77b8ff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .apx-showcase__certificate-info h3 {
          margin: 9px 0;
          font-size: 20px;
          font-weight: 650;
        }

        .apx-showcase__certificate-info p {
          margin: 0;
          color: #8fa9cb;
          font-size: 12px;
        }

        .apx-showcase__dots {
          display: flex;
          justify-content: center;
          gap: 11px;
          margin: 23px 0 27px;
        }

        .apx-showcase__dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #385c86;
          cursor: pointer;
          transition: 300ms;
        }

        .apx-showcase__dot.is-active {
          width: 31px;
          border-radius: 10px;
          background: #40b4ff;
          box-shadow: 0 0 15px #008cff;
        }

        .apx-showcase__all {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 17px 34px;
          border: 1px solid #55aeff;
          border-radius: 7px;
          background: linear-gradient(
            135deg,
            #075cb2,
            #092e6c
          );
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow:
            0 0 25px rgba(0, 125, 255, 0.4),
            inset 0 0 12px rgba(0, 145, 255, 0.12);
          transition: 250ms ease;
        }

        .apx-showcase__all:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 35px rgba(0, 145, 255, 0.7);
        }

        .apx-showcase__all-icon {
          font-size: 19px;
        }

        .apx-showcase__overlay,
        .apx-showcase__preview {
          position: fixed;
          z-index: 99999;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
          background: rgba(0, 5, 18, 0.96);
          backdrop-filter: blur(18px);
        }

        .apx-showcase__gallery {
          width: min(100%, 1050px);
          max-height: 90vh;
          overflow-y: auto;
          padding: 30px;
          border: 1px solid rgba(72, 154, 255, 0.35);
          border-radius: 16px;
          background: #06152e;
          box-shadow: 0 0 70px rgba(0, 100, 255, 0.2);
          text-align: left;
        }

        .apx-showcase__gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }

        .apx-showcase__gallery-header span {
          color: #80baff;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .apx-showcase__gallery-header h3 {
          margin: 8px 0 0;
          font-size: 30px;
        }

        .apx-showcase__gallery-header button,
        .apx-showcase__preview > button {
          border: 0;
          background: transparent;
          color: white;
          font-size: 40px;
          cursor: pointer;
        }

        .apx-showcase__gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .apx-showcase__gallery-grid button {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 15px;
          border: 1px solid rgba(75, 153, 255, 0.25);
          border-radius: 10px;
          background: #0a2145;
          color: white;
          text-align: left;
          cursor: pointer;
        }

        .apx-showcase__gallery-grid img {
          width: 100%;
          aspect-ratio: 1.43;
          object-fit: contain;
          background: white;
        }

        .apx-showcase__gallery-grid strong {
          font-size: 15px;
        }

        .apx-showcase__gallery-grid span {
          color: #94accb;
          font-size: 11px;
        }

        .apx-showcase__preview {
          z-index: 100000;
          cursor: zoom-out;
        }

        .apx-showcase__preview > button {
          position: absolute;
          top: 15px;
          right: 25px;
        }

        .apx-showcase__preview img {
          max-width: 95vw;
          max-height: 88vh;
          object-fit: contain;
          box-shadow: 0 0 50px rgba(0, 130, 255, 0.4);
          cursor: default;
        }

        @media (max-width: 900px) {
          .apx-showcase {
            min-height: auto;
            padding: 80px 12px 90px;
          }

          .apx-showcase__stage {
            height: 440px;
            perspective: 950px;
          }

          .apx-showcase__certificate {
            top: 85px;
            width: min(62vw, 430px);
          }

          .apx-showcase__certificate--center {
            transform: translateX(-50%) translateZ(50px);
          }

          .apx-showcase__certificate--left {
            transform: translateX(-105%)
              translateZ(-140px)
              rotateY(35deg)
              scale(0.75);
          }

          .apx-showcase__certificate--right {
            transform: translateX(5%)
              translateZ(-140px)
              rotateY(-35deg)
              scale(0.75);
          }

          .apx-showcase__platform {
            width: 88%;
            height: 110px;
            bottom: 25px;
          }

          .apx-showcase__platform-top {
            height: 75px;
          }

          .apx-showcase__platform-body {
            top: 35px;
            height: 70px;
            padding-bottom: 13px;
          }

          .apx-showcase__platform-body span {
            font-size: 13px;
            letter-spacing: 3px;
          }

          .apx-showcase__nav {
            width: 45px;
            height: 45px;
          }

          .apx-showcase__nav span {
            font-size: 34px;
          }

          .apx-showcase__upcoming {
            gap: 10px;
          }

          .apx-showcase__upcoming-orbit {
            width: 60px;
            height: 60px;
          }

          .apx-showcase__upcoming-star {
            font-size: 40px;
          }

          .apx-showcase__upcoming strong {
            font-size: 16px;
          }
        }

        @media (max-width: 600px) {
          .apx-showcase {
            padding: 70px 10px 80px;
          }

          .apx-showcase__eyebrow {
            font-size: 8px;
            letter-spacing: 1px;
            gap: 7px;
          }

          .apx-showcase__eyebrow-line {
            width: 12px;
          }

          .apx-showcase__title-row {
            gap: 8px;
          }

          .apx-showcase__title-row h2 {
            font-size: clamp(29px, 8vw, 42px);
            letter-spacing: 1px;
          }

          .apx-showcase__laurel {
            font-size: 28px;
          }

          .apx-showcase__header p {
            font-size: 12px;
          }

          .apx-showcase__stage {
            height: 340px;
            margin-top: 25px;
            perspective: 700px;
          }

          .apx-showcase__certificate {
            top: 70px;
            width: 76vw;
          }

          .apx-showcase__certificate--center {
            transform: translateX(-50%)
              translateZ(20px)
              scale(1);
          }

          .apx-showcase__certificate--left {
            transform: translateX(-97%)
              translateZ(-120px)
              rotateY(38deg)
              scale(0.67);
          }

          .apx-showcase__certificate--right {
            transform: translateX(-3%)
              translateZ(-120px)
              rotateY(-38deg)
              scale(0.67);
          }

          .apx-showcase__outer-frame {
            padding: 5px;
          }

          .apx-showcase__platform {
            bottom: 27px;
            width: 95%;
            height: 80px;
          }

          .apx-showcase__platform-top {
            height: 48px;
            border-width: 2px;
          }

          .apx-showcase__platform-body {
            top: 24px;
            height: 52px;
            padding-bottom: 9px;
          }

          .apx-showcase__platform-body span {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .apx-showcase__nav {
            top: 45%;
            width: 37px;
            height: 37px;
          }

          .apx-showcase__nav--prev {
            left: 0;
          }

          .apx-showcase__nav--next {
            right: 0;
          }

          .apx-showcase__certificate-info h3 {
            font-size: 16px;
          }

          .apx-showcase__gallery {
            padding: 18px;
          }

          .apx-showcase__gallery-grid {
            grid-template-columns: 1fr;
          }

          .apx-showcase__upcoming {
            gap: 7px;
          }

          .apx-showcase__upcoming-orbit {
            width: 45px;
            height: 45px;
          }

          .apx-showcase__upcoming-star {
            font-size: 29px;
          }

          .apx-showcase__upcoming-brand {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .apx-showcase__upcoming strong {
            font-size: 12px;
            letter-spacing: 1px;
          }

          .apx-showcase__upcoming-description {
            max-width: 80%;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apx-showcase__certificate,
          .apx-showcase__nav,
          .apx-showcase__dot,
          .apx-showcase__all {
            transition-duration: 0.01ms;
          }
        }
      `}</style>
    </section>
  );
}
