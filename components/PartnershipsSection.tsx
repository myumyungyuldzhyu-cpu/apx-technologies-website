
"use client";

import { useState } from "react";
import styles from "./PartnershipsSection.module.css";

// Добави адреса на сайта, когато е готов.
const PARTNER_URL = "";

const SPONSOR_FACEBOOK_URL =
  "https://www.facebook.com/p/IdealDom-Bulgaria-100076404750050/";

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
            Нашите <span>партньори и спонсори</span>
          </h2>

          <p>
            Сътрудничество с бизнеси, които споделят нашите
            ценности — качество, доверие и развитие.
          </p>
        </div>

        <div className={styles.collaborationGrid}>
          {/* ЛЯВО — НАШИТЕ ПАРТНЬОРИ */}
          <div className={styles.collaborationColumn}>
            <div className={styles.columnHeading}>
              <span className={styles.columnEyebrow}>
                PARTNERS
              </span>
              <h3>Нашите партньори</h3>
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
                    onClick={() =>
                      setShowDetails((value) => !value)
                    }
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
          </div>

          {/* ДЯСНО — НАШИТЕ СПОНСОРИ */}
          <div className={styles.collaborationColumn}>
            <div className={styles.columnHeading}>
              <span className={styles.columnEyebrow}>
                SPONSORS
              </span>
              <h3>Нашите спонсори</h3>
            </div>

            <article className={styles.sponsorCard}>
              <div className={styles.sponsorVisual}>
                <span className={styles.sponsorVisualLabel}>
                  OFFICIAL SPONSOR
                </span>

                <a
                  href={SPONSOR_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Посети Facebook страницата на Идеал Дом България"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className={styles.sponsorLogo}
                    src="/partners/ideal-dom-bulgaria.png"
                    alt="Идеал Дом България — спонсор на професионалното развитие на APX Technologies"
                    loading="lazy"
                  />
                </a>

                <span className={styles.sponsorVisualCaption}>
                  ИНВЕСТИЦИЯ В ЗНАНИЕТО
                </span>
              </div>

              <div className={styles.sponsorContent}>
                <span className={styles.sponsorBadge}>
                  ✦ Спонсор на обучението
                </span>

                <h3 className={styles.sponsorName}>
                  <a
                    href={SPONSOR_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Идеал Дом България — Facebook"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Идеал Дом <span>България</span>
                  </a>
                </h3>

                <p className={styles.sponsorSubtitle}>
                  СГЛОБЯЕМИ КЪЩИ И СЪВРЕМЕННИ РЕШЕНИЯ
                </p>

                <p className={styles.sponsorDescription}>
                  Идеал Дом България подкрепя професионалното
                  развитие на APX Technologies чрез спонсориране
                  на обучения и придобиване на нови знания
                  в областта на бизнес управлението.
                </p>

                <div className={styles.sponsorHighlight}>
                  <span className={styles.highlightIcon}>
                    🎓
                  </span>

                  <div>
                    <strong>
                      Подкрепа за професионалното развитие
                    </strong>
                    <p>
                      Обучения и международни сертификати
                      от International Business Management
                      Institute (IBMI).
                    </p>
                  </div>
                </div>

                <a
                  href={SPONSOR_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "100%",
                    marginTop: "22px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  aria-label="Посети Facebook страницата на Идеал Дом България"
                >
                  Посети Facebook страницата ↗
                </a>

                <div className={styles.sponsorFooter}>
                  <span className={styles.sponsorFooterIcon}>
                    ✧
                  </span>
                  <p>
                    Различни индустрии.
                    <br />
                    <strong>Обща визия за развитие.</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* СТАНЕТЕ НАШ ПАРТНЬОР */}
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
