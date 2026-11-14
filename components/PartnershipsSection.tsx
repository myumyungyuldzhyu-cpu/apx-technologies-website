
"use client";

import { useState } from "react";
import styles from "./PartnershipsSection.module.css";

// Добави реалния адрес на сайта, когато е готов.
const PARTNER_URL = "";

export default function PartnershipsSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      className={styles.section}
      id="partnerships"
      aria-labelledby="partnerships-heading"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            APX TECHNOLOGIES
          </p>

          <h2 id="partnerships-heading">
            Нашите <span>партньорства</span>
          </h2>

          <p>
            Сътрудничество с бизнеси, които споделят нашите
            ценности — качество, доверие и развитие.
          </p>
        </div>

        <article className={styles.partnerCard}>
          <div className={styles.visual}>
            <img
              className={styles.partnerImage}
              src="/partners/nezemen-rai.png"
              alt="Неземен Рай — магазин за персонализирани подаръци"
              loading="lazy"
            />
          </div>

          <div className={styles.content}>
            <span className={styles.partnerBadge}>
              ✧ Официален партньор
            </span>

            <div className={styles.partnerName}>
              <div>
                <h3>Неземен Рай</h3>
                <p>— ПОДАРЪЦИ СЪС СМИСЪЛ —</p>
              </div>
            </div>

            <p className={styles.description}>
              Онлайн магазин за уникални и персонализирани
              подаръци, създадени с внимание към детайла.
              Открийте оригинални идеи за всеки повод —
              със стил, емоция и лично отношение.
            </p>

            <div className={styles.features}>
              <span>♢ Персонални подаръци</span>
              <span>✧ Уникални идеи</span>
              <span>♡ Лично отношение</span>
            </div>

            <div className={styles.actions}>
              {PARTNER_URL ? (
                <a
                  className={styles.primaryButton}
                  href={PARTNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Посети уебсайта ↗
                </a>
              ) : (
                <span
                  className={`${styles.primaryButton} ${styles.disabledButton}`}
                >
                  Уебсайтът скоро ↗
                </span>
              )}

              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => setShowDetails((value) => !value)}
                aria-expanded={showDetails}
              >
                {showDetails
                  ? "Скрий подробностите"
                  : "Виж повече"}
              </button>
            </div>

            {showDetails && (
              <div className={styles.details}>
                <strong>За партньорството</strong>
                <p>
                  APX Technologies и „Неземен Рай“ споделят
                  стремеж към качествени решения, креативност
                  и добро отношение към клиентите.
                </p>
              </div>
            )}
          </div>
        </article>

        <div className={styles.joinCard}>
          <div className={styles.joinIcon} aria-hidden="true">
            🤝
          </div>

          <div className={styles.joinText}>
            <h3>Станете наш партньор</h3>
            <p>
              Искате да развиваме заедно нови идеи и проекти?
              Свържете се с нас.
            </p>
          </div>

          <a href="#contact" className={styles.joinButton}>
            Свържи се с нас ↗
          </a>
        </div>
      </div>
    </section>
  );
}
