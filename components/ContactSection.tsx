
"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#0b1020",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <p
        style={{
          color: "#b87aff",
          letterSpacing: "3px",
          fontSize: "22px",
        }}
      >
        APX TECHNOLOGIES / CONTACT
      </p>

      <h2
        style={{
          fontSize: "clamp(30px, 5vw, 52px)",
          margin: "24px 0",
        }}
      >
        Имате идея за{" "}
        <span style={{ color: "#f8f8f8" }}>
          проект?
        </span>
      </h2>

      <p
        style={{
          color: "#aeb8ce",
          maxWidth: "540px",
          margin: "0 auto 36px",
          lineHeight: 1.8,
        }}
      >
        Нека я превърнем в реалност.
        Свържете се с нас, за да обсъдим
        вашия проект.
      </p>

      <a
        href="tel:+359899277511"
        style={{
          display: "block",
          color: "#ffffff",
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: 700,
          textDecoration: "none",
          marginBottom: "30px",
        }}
      >
        0899 277 511
      </a>

      <a
        href="tel:+359899277511"
        style={{
          display: "inline-block",
          padding: "16px 36px",
          background: "#8548d8",
          color: "#ffffff",
          borderRadius: "12px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        ☎ Обадете се
      </a>
    </section>
  );
}
