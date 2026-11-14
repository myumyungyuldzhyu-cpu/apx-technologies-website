
"use client";

import styles from "./WelcomeHero.module.css";

export default function WelcomeHero() {
  return (
    <section
      className={styles.track}
      aria-label="Добре дошли в APX Technologies"
    >
      <div className={styles.sticky}>
        <div className={styles.glow} aria-hidden="true" />

        {/* Партньорски банер */}
        <a
          className={styles.partnerBanner}
          href="#partnerships"
          aria-label="Наш партньор Неземен Рай — разгледай партньорството"
        >
          <span
            className={styles.partnerShine}
            aria-hidden="true"
          />

          <div className={styles.partnerLabel}>
            <svg
              className={styles.handshake}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m2 12 4-4 4 1 3-2 5 2 4 4-4 5-3-2-3 2-3-2-3 1-4-5Z" />
              <path d="m9 13 5 4M12 10l5 5M6 15l3 2" />
            </svg>

            <span>Наш партньор</span>
          </div>

          <span
            className={styles.partnerDivider}
            aria-hidden="true"
          />

          <div className={styles.partnerBrand}>
            <img
              className={styles.nrLogo}
              src="/partners/nr-logo.png"
              alt=""
              width={52}
              height={75}
            />

            <div className={styles.partnerText}>
              <strong>Неземен Рай</strong>

              <span
                className={styles.partnerHeart}
                aria-hidden="true"
              >
                ♥
              </span>

              <small>ПОДАРЪЦИ СЪС СМИСЪЛ</small>
            </div>
          </div>

          <span
            className={styles.partnerArrow}
            aria-hidden="true"
          >
            ›
          </span>
        </a>

        {/* Централно APX лого — без GSAP */}
        <div
          className={styles.center}
          style={{
            opacity: 1,
            visibility: "visible",
            transform: "none",
          }}
        >
          <p className={styles.eyebrow}>
            DIGITAL INNOVATION STUDIO
          </p>

          <h1 className={styles.title}>
            Добре дошли в
          </h1>

          <div
            className={styles.logo}
            aria-label="APX Technologies"
          >
            <span>AP</span>
            <span className={styles.blue}>X</span>
          </div>

          <p className={styles.technologies}>
            Technologies
          </p>

          <p className={styles.description}>
            От идея към реални дигитални решения.
          </p>
        </div>

        <div className={styles.hint}>
          <span>СКРОЛВАЙ НАДОЛУ</span>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
