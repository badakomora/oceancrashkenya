import React, { CSSProperties, useState } from "react";

// ============================================================================
// Style Objects
// ============================================================================

const styles = {
  main: {
    background: "#f7f7f8",
    overflow: "hidden",
    position: "relative",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "1450px",
    margin: "0 auto",
    padding: "clamp(1rem, 3vw, 2rem)",
    boxSizing: "border-box",
  } as CSSProperties,

  header: {
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "space-between",
  } as CSSProperties,

  logo: {
    display: "flex" as const,
    alignItems: "center",
    gap: "0.75rem",

    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "clamp(20px, 4vw, 32px)",
    background: "linear-gradient(90deg, #1c6069, #00c6ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  } as CSSProperties,

  logoText: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "clamp(18px, 4vw, 28px)",
    background: "linear-gradient(90deg, #1e40af, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  } as CSSProperties,

  nav: {
    display: "none" as const,
    alignItems: "center",
    gap: "2.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#1b1b1b",
  } as CSSProperties,

  navVisible: {
    display: "flex" as const,
  } as CSSProperties,

  navLink: {
    position: "relative" as const,
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  } as CSSProperties,

  buttonGroup: {
    display: "flex" as const,
    alignItems: "center",
    gap: "1rem",
  } as CSSProperties,

  contactBtn: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    color: "white",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    border: "none",
    fontSize: "0.875rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.35s ease",
  } as CSSProperties,

  heroContainer: {
    display: "grid" as const,
    gridTemplateColumns: "1fr",
    gap: "4rem",
    alignItems: "center",
    padding: "4rem 0 0",
    // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTwWXrAQ4rszEKaZpLhTfkM4aDUhmhV-EFkVBkhBsPjcEalno8A_32QnY&s=10')",
  } as CSSProperties,

  heroLeft: {
    animation: "fadeUp 1s ease",
  } as CSSProperties & { animation: string },

  badge: {
    display: "inline-block",
    padding: "0.5rem 1.25rem",
    background: "#eff6ff",
    color: "#1e40af",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: 600,
    marginBottom: "1rem",
  } as CSSProperties,

  headline: {
    fontSize: "3.25rem",
    lineHeight: "0.95",
    letterSpacing: "-4px",
    fontWeight: 900,
    color: "#111111",
    marginTop: "1.75rem",
    maxWidth: "650px",
  } as CSSProperties,

  description: {
    color: "#8a8a95",
    fontSize: "1.125rem",
    lineHeight: "2rem",
    maxWidth: "520px",
    marginTop: "2rem",
  } as CSSProperties,

  ctaButtons: {
    display: "flex" as const,
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "1.25rem",
    marginTop: "2.5rem",
  } as CSSProperties,

  primaryBtn: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.35s ease",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  } as CSSProperties,

  secondaryBtn: {
    background: "transparent",
    color: "#2563eb",
    padding: "1rem 2rem",
    borderRadius: "0.5rem",
    border: "2px solid #2563eb",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.35s ease",
    display: "flex" as const,
    alignItems: "center",
    gap: "0.5rem",
  } as CSSProperties,

  featuresGrid: {
    display: "flex" as const,
    flexWrap: "wrap" as const,
    gap: "2.5rem",
    marginTop: "3.5rem",
  } as CSSProperties,

  featureItem: {
    display: "flex" as const,
    alignItems: "flex-start",
    gap: "1rem",
  } as CSSProperties,

  featureIcon: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    width: "3rem",
    height: "3rem",
    borderRadius: "1rem",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.2)",
    transition: "all 0.3s ease",
    flexShrink: 0,
  } as CSSProperties,

  featureTitle: {
    fontWeight: 700,
    color: "#111",
    fontSize: "0.9375rem",
    margin: 0,
  } as CSSProperties,

  featureDesc: {
    fontSize: "0.875rem",
    color: "#8b8b95",
    marginTop: "0.25rem",
    lineHeight: "1.5rem",
  } as CSSProperties,

  heroRight: {
    position: "relative" as const,
    animation: "fadeUp 1s ease",
  } as CSSProperties & { animation: string },

  cardGrid: {
    display: "grid" as const,
    gridTemplateColumns: "1fr 1fr",
    gap: "1.25rem",
  } as CSSProperties,

  card: {
    position: "relative" as const,
    borderRadius: "2rem",
    overflow: "hidden" as const,
    background: "white",
    height: "auto",
    minHeight: "200px",
    transition: "0.45s ease",
    cursor: "pointer",
  } as CSSProperties,

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  } as CSSProperties,

  cardBadge: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    position: "absolute" as const,
    top: "1.25rem",
    right: "1.25rem",
    width: "3rem",
    height: "3rem",
    borderRadius: "1rem",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 700,
    fontSize: "1.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  } as CSSProperties,

  floatingWidget: {
    position: "absolute" as const,
    left: "1.25rem",
    bottom: "1.25rem",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem 1.25rem",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    animation: "floating 4s ease-in-out infinite",
  } as CSSProperties & { animation: string },

  widgetLabel: {
    color: "#8b8b95",
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    margin: 0,
  } as CSSProperties,

  widgetTitle: {
    fontWeight: 700,
    fontSize: "1.125rem",
    color: "#111",
    marginTop: "0.25rem",
    margin: 0,
  } as CSSProperties,

  gradientCard: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
  } as CSSProperties,

  cardOverlay: {
    position: "absolute" as const,
    inset: 0,
    background: "linear-gradient(to top, rgba(30, 64, 175, 0.7), transparent)",
  } as CSSProperties,

  cardContent: {
    position: "absolute" as const,
    bottom: "1.25rem",
    left: "1.25rem",
    right: "1.25rem",
  } as CSSProperties,

  contentBox: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "1rem",
    padding: "1rem",
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
  } as CSSProperties,

  contentLabel: {
    fontSize: "0.75rem",
    color: "#777",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    margin: 0,
  } as CSSProperties,

  contentTitle: {
    color: "#111",
    fontWeight: 700,
    fontSize: "1.125rem",
    marginTop: "0.25rem",
    margin: 0,
  } as CSSProperties,

  promoBg: {
    background: "linear-gradient(135deg, #e8f5f1, #d1e8e3)",
    padding: "2rem",
    display: "flex" as const,
    flexDirection: "column" as const,
    justifyContent: "space-between",
  } as CSSProperties,

  promoTop: {
    display: "flex" as const,
    justifyContent: "flex-end",
  } as CSSProperties,

  promoIcon: {
    width: "2.75rem",
    height: "2.75rem",
    borderRadius: "9999px",
    background: "white",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    color: "#2563eb",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  } as CSSProperties,

  promoTitle: {
    fontSize: "2.125rem",
    fontWeight: 900,
    lineHeight: "1",
    letterSpacing: "-2px",
    color: "#111",
    margin: 0,
  } as CSSProperties,

  promoDesc: {
    color: "#6f6f7a",
    marginTop: "1.25rem",
    lineHeight: "1.75rem",
    fontSize: "0.875rem",
  } as CSSProperties,

  paymentModal: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  } as CSSProperties,

  modalContent: {
    background: "white",
    borderRadius: "2rem",
    padding: "2rem",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
  } as CSSProperties,

  modalTitle: {
    fontSize: "1.75rem",
    fontWeight: 900,
    color: "#111",
    margin: "0 0 1rem 0",
  } as CSSProperties,

  paymentSteps: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "1.5rem",
    marginTop: "1.5rem",
  } as CSSProperties,

  step: {
    display: "flex" as const,
    gap: "1rem",
    alignItems: "flex-start",
  } as CSSProperties,

  stepNumber: {
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    color: "white",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "9999px",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    flexShrink: 0,
  } as CSSProperties,

  stepContent: {
    flex: 1,
  } as CSSProperties,

  stepTitle: {
    fontWeight: 700,
    color: "#111",
    margin: "0 0 0.5rem 0",
  } as CSSProperties,

  stepDesc: {
    color: "#777",
    fontSize: "0.875rem",
    margin: 0,
    lineHeight: "1.5",
  } as CSSProperties,

  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    color: "#999",
    position: "absolute" as const,
    top: "1.5rem",
    right: "1.5rem",
  } as CSSProperties,

  brandsSection: {
    marginTop: "5rem",
    borderTop: "1px solid #e7e7ef",
    padding: "2.5rem 0",
    display: "flex" as const,
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2.5rem",
  } as CSSProperties,

  brandsText: {
    color: "#666670",
    fontSize: "0.875rem",
    fontWeight: 500,
    margin: 0,
  } as CSSProperties,

  statsSection: {
    marginTop: "6rem",
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
    borderRadius: "2rem",
    display: "grid" as const,
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    position: "relative" as const,
  } as CSSProperties,

  statItem: {
    textAlign: "center" as const,
    color: "white",
  } as CSSProperties,

  statNumber: {
    fontSize: "3.5rem",
    fontWeight: 900,
    lineHeight: "1",
    marginBottom: "0.5rem",
  } as CSSProperties,

  statLabel: {
    fontSize: "1rem",
    fontWeight: 600,
    opacity: 0.95,
    lineHeight: "1.5",
  } as CSSProperties,

  benefitsSection: {
    marginTop: "5rem",
    display: "grid" as const,
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  } as CSSProperties,

  benefitsContent: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "2rem",
  } as CSSProperties,

  benefitsTitle: {
    fontSize: "2.75rem",
    fontWeight: 900,
    color: "#111",
    lineHeight: "1.2",
    margin: 0,
  } as CSSProperties,

  benefitsList: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "1.5rem",
  } as CSSProperties,

  benefitItem: {
    display: "flex" as const,
    gap: "1.25rem",
    alignItems: "flex-start",
  } as CSSProperties,

  benefitCheck: {
    fontSize: "1.5rem",
    color: "#2563eb",
    fontWeight: 900,
    flexShrink: 0,
  } as CSSProperties,

  benefitText: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "0.25rem",
  } as CSSProperties,

  benefitItemTitle: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "#111",
    margin: 0,
  } as CSSProperties,

  benefitItemDesc: {
    fontSize: "0.875rem",
    color: "#8b8b95",
    margin: 0,
    lineHeight: "1.5",
  } as CSSProperties,

  benefitsImage: {
    width: "100%",
    height: "400px",
    borderRadius: "1.5rem",
    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "6rem",
  } as CSSProperties,
};

// ============================================================================
// Keyframe Animation Styles
// ============================================================================

const keyframes = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(45px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes floating {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (min-width: 1024px) {
    [data-hero-container] {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
    [data-headline] {
      font-size: 4.625rem;
    }
  }

  [data-card]:hover {
    transform: translateY(-8px);
  }

  [data-primary-btn]:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(45, 122, 94, 0.25);
  }

  [data-secondary-btn]:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  [data-feature-icon]:hover {
    transform: translateY(-1px);
  }
`;

// ============================================================================
// Components
// ============================================================================

const Header: React.FC = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:oceancrashkenya@gmail.com?subject=Inquiry&body=Hello";
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={handleLogoClick}>
        <h2 style={styles.logoText}>OCEANCRASH</h2>
      </div>

      <div style={styles.buttonGroup}>
        <button style={styles.contactBtn} onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </header>
  );
};

const HeroSection: React.FC<{ onPaymentClick: () => void }> = ({
  onPaymentClick,
}) => (
  <div style={styles.heroContainer} data-hero-container>
    <div style={styles.heroLeft}>
      <span style={styles.badge}>🚀 Custom Business Solutions</span>

      <h1 style={styles.headline} data-headline>
        Enterprise Software <br /> For Your Business.
      </h1>

      <p style={styles.description}>
        Specialized applications for farms and churches. Custom web development
        and professional IT support. Fast payments via Paybill.
      </p>

      <div style={styles.ctaButtons}>
        <button
          style={styles.primaryBtn}
          data-primary-btn
          onClick={() => {
            document
              .querySelector("[data-hero-container]")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Solutions
        </button>
        <button
          style={styles.secondaryBtn}
          data-secondary-btn
          onClick={onPaymentClick}
        >
          IT Support Payment Info
          <span>↗</span>
        </button>
      </div>

      <div style={styles.featuresGrid}>
        {[
          {
            icon: "🌾",
            title: "Farm Management System",
            desc: "Customizable for any farm size or crop type.",
          },
          {
            icon: "⛪",
            title: "Church Management System",
            desc: "Complete ministry and congregation tools.",
          },
          {
            icon: "🌐",
            title: "Website Development",
            desc: "Custom web solutions for any industry.",
          },
          {
            icon: "🛠️",
            title: "IT Support Consultation",
            desc: "Expert assessment of your IT needs.",
          },
        ].map((feature, idx) => (
          <div key={idx} style={styles.featureItem}>
            <div style={styles.featureIcon} data-feature-icon>
              {feature.icon}
            </div>
            <div>
              <h4 style={styles.featureTitle}>{feature.title}</h4>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={styles.heroRight}>
      <div style={styles.cardGrid}>
        {/* Card 1 - Farm Management */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          data-card
        >
          <div style={styles.cardBadge}>🌾</div>
          <div style={{ color: "white" }}>
            <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.9 }}>
              Enterprise Solution
            </p>
            <h4
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "1.25rem",
                fontWeight: 700,
              }}
            >
              Farm Management
            </h4>
          </div>
        </div>

        {/* Card 2 - Church Management */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #e8f5f1, #d1e8e3)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          data-card
        >
          <div style={styles.cardBadge}>⛪</div>
          <div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
              Ministry Solution
            </p>
            <h4
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#111",
              }}
            >
              Church Management
            </h4>
          </div>
        </div>

        {/* Card 3 - Website Development */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #00c6ff, #1c6069)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          data-card
        >
          <div style={styles.cardBadge}>🌐</div>
          <div style={{ color: "white" }}>
            <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.9 }}>
              Custom Development
            </p>
            <h4
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "1.25rem",
                fontWeight: 700,
              }}
            >
              Web Development
            </h4>
          </div>
        </div>

        {/* Card 4 - IT Support */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #e8f5f1, #d1e8e3)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          data-card
          onClick={onPaymentClick}
        >
          <div style={{ textAlign: "right" }}>
            <div style={styles.promoIcon}>💡</div>
          </div>
          <div>
            <h3 style={{ ...styles.promoTitle, margin: "1rem 0 0.5rem 0" }}>
              IT Support
            </h3>
            <p style={{ ...styles.promoDesc, margin: 0 }}>
              Click to see payment & consultation details
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PaymentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.paymentModal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 style={styles.modalTitle}>How to Pay via Paybill</h2>

        <div style={styles.paymentSteps}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <div style={styles.stepContent}>
              <p style={styles.stepTitle}>Open your M-Pesa App</p>
              <p style={styles.stepDesc}>
                Launch the M-Pesa application on your phone
              </p>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <div style={styles.stepContent}>
              <p style={styles.stepTitle}>Select Lipa na M-Pesa Online</p>
              <p style={styles.stepDesc}>Choose the Paybill payment option</p>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <div style={styles.stepContent}>
              <p style={styles.stepTitle}>Enter Paybill Details</p>
              <p style={styles.stepDesc}>
                <strong>Business Number:</strong> Contact us for details
                <br />
                <strong>Account Number:</strong> Your project/service reference
                <br />
                <strong>Amount:</strong> Enter the amount
              </p>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>4</div>
            <div style={styles.stepContent}>
              <p style={styles.stepTitle}>Enter Your PIN</p>
              <p style={styles.stepDesc}>
                Confirm the payment with your M-Pesa PIN
              </p>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>5</div>
            <div style={styles.stepContent}>
              <p style={styles.stepTitle}>Confirmation</p>
              <p style={styles.stepDesc}>
                You'll receive a confirmation message. Save your receipt.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "#eff6ff",
            borderRadius: "1rem",
            borderLeft: "4px solid #2563eb",
          }}
        >
          <p style={{ color: "#1e40af", fontWeight: 600, margin: 0 }}>
            💬 Need help? Contact us for the exact Paybill details and to
            discuss your solution.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => (
  <div style={styles.statsSection}>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>500+</div>
      <p style={styles.statLabel}>Clients Worldwide</p>
    </div>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>15+</div>
      <p style={styles.statLabel}>Years Experience</p>
    </div>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>99.9%</div>
      <p style={styles.statLabel}>Uptime Guarantee</p>
    </div>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>24/7</div>
      <p style={styles.statLabel}>Support Available</p>
    </div>
  </div>
);

const BenefitsSection: React.FC = () => (
  <div style={styles.benefitsSection}>
    <div style={styles.benefitsContent}>
      <h2 style={styles.benefitsTitle}>Why Choose Our Solutions?</h2>
      <div style={styles.benefitsList}>
        <div style={styles.benefitItem}>
          <div style={styles.benefitCheck}>✓</div>
          <div style={styles.benefitText}>
            <p style={styles.benefitItemTitle}>Customizable & Scalable</p>
            <p style={styles.benefitItemDesc}>
              Our systems grow with your business, adaptable to any size or
              complexity
            </p>
          </div>
        </div>
        <div style={styles.benefitItem}>
          <div style={styles.benefitCheck}>✓</div>
          <div style={styles.benefitText}>
            <p style={styles.benefitItemTitle}>User-Friendly Interface</p>
            <p style={styles.benefitItemDesc}>
              Intuitive design ensures your team can start using it immediately
            </p>
          </div>
        </div>
        <div style={styles.benefitItem}>
          <div style={styles.benefitCheck}>✓</div>
          <div style={styles.benefitText}>
            <p style={styles.benefitItemTitle}>Secure & Reliable</p>
            <p style={styles.benefitItemDesc}>
              Enterprise-grade security with regular backups and monitoring
            </p>
          </div>
        </div>
        <div style={styles.benefitItem}>
          <div style={styles.benefitCheck}>✓</div>
          <div style={styles.benefitText}>
            <p style={styles.benefitItemTitle}>Expert Support Team</p>
            <p style={styles.benefitItemDesc}>
              Dedicated professionals ready to help with training and
              troubleshooting
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style={styles.benefitsImage}>🎯</div>
  </div>
);

// const BrandSection: React.FC = () => (
//   <div style={styles.brandsSection}>
//     <p style={styles.brandsText}>
//       ✓ Farm Management &nbsp; ✓ Church Systems &nbsp; ✓ Web Development &nbsp;
//       ✓ IT Support
//     </p>
//   </div>
// );

const Footer: React.FC = () => (
  <footer
    style={{
      marginTop: "5rem",
      background: "#0f172a",
      color: "#fff",
      borderRadius: "0 0 10px 10px",
      padding: "4rem 2rem 2rem",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
        gap: "3rem",
        marginBottom: "3rem",
      }}
    >
      {/* Company */}
      <div>
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "1.6rem",
            fontWeight: 800,
          }}
        >
          OCEANCRASH
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.8",
            fontSize: "0.95rem",
          }}
        >
          Oceancrash delivers enterprise software solutions for churches, farms,
          schools, businesses, and organizations. We also provide professional
          web development and IT consultation services tailored to your needs.
        </p>
      </div>

      {/* Services */}
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Services</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".8rem",
            color: "#cbd5e1",
          }}
        >
          <span>Farm Management System</span>
          <span>Church Management System</span>
          <span>Website Development</span>
          <span>Custom Software</span>
          <span>IT Consultation</span>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Contact</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".8rem",
            color: "#cbd5e1",
          }}
        >
          <span>📞 +254 759 621 394</span>
          <span>✉️ oceancrashkenya@gmail.com</span>
          <span>🌍 Kilifi, Kenya</span>
          <span>Mon - Fri : 8:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,.12)",
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Oceancrash. All Rights Reserved.
      </p>
    </div>
  </footer>
);
// ============================================================================
// Main Page
// ============================================================================

export default function Home() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <style>{keyframes}</style>
      <main style={styles.main}>
        <Header />
        <HeroSection onPaymentClick={() => setShowPaymentModal(true)} />
        <StatsSection />
        <BenefitsSection />
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
        />
        <Footer />
      </main>
    </>
  );
}
