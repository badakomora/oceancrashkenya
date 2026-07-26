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
    letterSpacing: "4px",
    fontSize: "clamp(18px, 4vw, 30px)",
    color: "linear-gradient(90deg, #1c6069, #00c6ff)",
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
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "4rem",
    alignItems: "start",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    // padding: "4rem 0 0",
  } as CSSProperties,

  heroLeft: {
    animation: "fadeUp 1s ease",
  } as CSSProperties & { animation: string },

  heroRight: {
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

  productsSection: {
    marginTop: "6rem",
    paddingTop: "2rem",
  } as CSSProperties,

  productsTitle: {
    fontSize: "2.75rem",
    fontWeight: 900,
    color: "#111",
    marginBottom: "0.5rem",
    margin: 0,
  } as CSSProperties,

  productsSubtitle: {
    fontSize: "1.125rem",
    color: "#8a8a95",
    marginBottom: "3rem",
  } as CSSProperties,

  productGrid: {
    display: "grid" as const,
    gridTemplateColumns: "1fr",
    gap: "2rem",
  } as CSSProperties,

  featuredCard: {
    position: "relative" as const,
    borderRadius: "2rem",
    overflow: "hidden" as const,
    background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    padding: "3rem",
    display: "flex" as const,
    flexDirection: "column" as const,
    justifyContent: "space-between",
    minHeight: "320px",
    cursor: "pointer",
    transition: "0.45s ease",
    color: "white",
  } as CSSProperties,

  productCard: {
    position: "relative" as const,
    borderRadius: "1.5rem",
    overflow: "hidden" as const,
    background: "white",
    padding: "2rem",
    display: "flex" as const,
    flexDirection: "column" as const,
    justifyContent: "space-between",
    minHeight: "220px",
    cursor: "pointer",
    transition: "0.35s ease",
    border: "1px solid #e7e7ef",
  } as CSSProperties,

  productBadge: {
    display: "inline-flex" as const,
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    marginBottom: "1rem",
    width: "fit-content",
  } as CSSProperties,

  badgeLight: {
    color: "rgba(255, 255, 255, 0.8)",
  } as CSSProperties,

  badgeDark: {
    color: "#1e40af",
  } as CSSProperties,

  productIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  } as CSSProperties,

  productTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: "0 0 0.75rem 0",
  } as CSSProperties,

  productGoal: {
    fontSize: "0.875rem",
    lineHeight: "1.6",
    margin: "0 0 1.5rem 0",
    opacity: 0.9,
  } as CSSProperties,

  productAction: {
    display: "inline-flex" as const,
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "inherit",
    textDecoration: "none",
  } as CSSProperties,

  productGridSmall: {
    display: "grid" as const,
    gridTemplateColumns: "1fr",
    gap: "2rem",
  } as CSSProperties,

  cardGrid: {
    display: "grid" as const,
    gridTemplateColumns: "1fr",
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
    gridTemplateColumns: "1fr",
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
    gridTemplateColumns: "1fr",
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

  @media (min-width: 768px) {
    [data-hero-container] {
      grid-template-columns: 1fr 1fr;
    }
    
    [data-card-grid] {
      grid-template-columns: 1fr 1fr;
    }
    
    [data-reviews-grid] {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    [data-headline] {
      font-size: 4.625rem;
    }
  }

  @media (min-width: 1024px) {
    [data-hero-container] {
      grid-template-columns: 1fr 1fr;
    }
    
    [data-benefits-section] {
      grid-template-columns: 1fr 1fr;
    }
    
    [data-stats-section] {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  [data-card]:hover {
    transform: translateY(-8px);
  }

  [data-featured-card]:hover {
    transform: translateY(-4px);
  }

  [data-product-card]:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(37, 99, 235, 0.15);
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
    const footerSection = document.querySelector("[data-footer-section]");
    footerSection?.scrollIntoView({ behavior: "smooth" });
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

interface HeroSectionProps {
  onPaymentClick: (service: string) => void;
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onPaymentClick,
  onExploreClick,
}) => (
  <div style={styles.heroContainer} data-hero-container data-benefits-section>
    <div style={styles.heroLeft}>
      <h1 style={styles.headline} data-headline>
        Enterprise Software <br /> For Your Business.
      </h1>
      <span style={styles.badge}>🚀 Custom Business Solutions</span>
      <p style={styles.description}>
        Specialized applications for farms and churches. Custom web development
        and professional IT support.
      </p>

      <div style={styles.ctaButtons}>
        <button
          style={styles.primaryBtn}
          data-primary-btn
          onClick={onExploreClick}
        >
          Explore Products
        </button>
        <button
          style={styles.secondaryBtn}
          data-secondary-btn
          onClick={() => {
            const reviewsSection = document.querySelector(
              "[data-reviews-section]",
            );
            reviewsSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          See Customer Reviews
          <span>↗</span>
        </button>
      </div>

      <div style={styles.featuresGrid}>
        {[
          {
            icon: "📊",
            title: "Business Analytics",
            desc: "Real-time insights and performance metrics.",
          },
          {
            icon: "☁️",
            title: "Cloud Integration",
            desc: "Seamless data sync across all platforms.",
          },
          {
            icon: "🔐",
            title: "Enterprise Security",
            desc: "Bank-level encryption and compliance.",
          },
          {
            icon: "⚡",
            title: "24/7 Support",
            desc: "Dedicated technical assistance anytime.",
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

    <div style={styles.heroRight} data-products-section>
      <h2 style={styles.productsTitle}>Our Products</h2>
      <p style={styles.productsSubtitle}>
        Click for details. Proven reliability.
      </p>
      <div style={styles.cardGrid} data-card-grid>
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
          onClick={() => onPaymentClick("farm")}
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
            <p>
              Enterprise-grade farm management system for crop tracking,
              inventory management, and operational analytics.
            </p>
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
          onClick={() => onPaymentClick("church")}
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
            <p>
              Complete ministry tools for congregation management, event
              scheduling, donations, and member communications.
            </p>
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
          onClick={() => onPaymentClick("website")}
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
            <p>
              Custom-built responsive websites optimized for conversions, SEO,
              and user experience.
            </p>
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
          onClick={() => onPaymentClick("itsupport")}
        >
          <div style={{ textAlign: "right" }}>
            <div style={styles.promoIcon}>💡</div>
          </div>
          <div>
            <h3 style={{ ...styles.promoTitle, margin: "1rem 0 0.5rem 0" }}>
              IT Support
            </h3>
            <p style={{ ...styles.promoDesc, margin: 0 }}>
              Professional IT consultation, system setup, and 24/7 technical
              support for all your technology needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ReviewsSection: React.FC = () => {
  return (
    <div style={styles.productsSection} data-reviews-section>
      <h2 style={styles.productsTitle}>What Our Clients Say</h2>
      <p style={styles.productsSubtitle}>
        Real feedback from organizations we've worked with
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          marginTop: "3rem",
        }}
        data-reviews-grid
      >
        {/* Mali Green Farms Ltd Review */}
        <div
          style={{
            ...styles.productCard,
            borderLeft: "4px solid #22c55e",
            paddingLeft: "1.5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌾</div>
            <h3
              style={{
                ...styles.productTitle,
                margin: "0 0 0.5rem 0",
                color: "#111",
              }}
            >
              Mali Green Farms Ltd
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "#666",
                fontWeight: 500,
              }}
            >
              Agricultural Operations
            </p>
          </div>
          <p
            style={{ ...styles.productGoal, color: "#555", lineHeight: "1.6" }}
          >
            "The farm management system has transformed our operations. We now
            track yields more accurately, manage inventory efficiently, and make
            better decisions with real-time data. Outstanding support team!"
          </p>
        </div>

        {/* P.A.G Ministry Church Review */}
        <div
          style={{
            ...styles.productCard,
            borderLeft: "4px solid #06b6d4",
            paddingLeft: "1.5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⛪</div>
            <h3
              style={{
                ...styles.productTitle,
                margin: "0 0 0.5rem 0",
                color: "#111",
              }}
            >
              P.A.G Ministry Church
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "#666",
                fontWeight: 500,
              }}
            >
              Religious Organization
            </p>
          </div>
          <p
            style={{ ...styles.productGoal, color: "#555", lineHeight: "1.6" }}
          >
            "Church management has never been easier. Member records, event
            coordination, and donation tracking are all in one place. The system
            helps us focus on ministry rather than administration."
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#f59e0b",
              fontWeight: 600,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            ✓ Program still under review with the church ministry.
          </p>
        </div>

        {/* IT Support Review */}
        <div
          style={{
            ...styles.productCard,
            borderLeft: "4px solid #8b5cf6",
            paddingLeft: "1.5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>💡</div>
            <h3
              style={{
                ...styles.productTitle,
                margin: "0 0 0.5rem 0",
                color: "#111",
              }}
            >
              IT Support & Services
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "#666",
                fontWeight: 500,
              }}
            >
              Technical Services
            </p>
          </div>
          <p
            style={{ ...styles.productGoal, color: "#555", lineHeight: "1.6" }}
          >
            "From OS installations and MS Office packages to live football
            streaming on TV and complete email management systems—we've handled
            it all. Our clients appreciate the personalized, reliable technical
            support and comprehensive solutions tailored to their specific
            needs."
          </p>
        </div>
      </div>
    </div>
  );
};

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  if (!isOpen) return null;

  const serviceMessages: Record<string, string> = {
    farm: "I am interested in your Farm Management System.",
    church: "I am interested in your Church Management System.",
    website: "I am interested in your Web Development services.",
    itsupport: "I am interested in your IT Support and consultation services.",
  };

  const emailSubject = `Inquiry about ${selectedService || "your services"}`;
  const emailBody =
    serviceMessages[selectedService || ""] ||
    "I am interested in learning more about your services.";

  const handleShareEmail = () => {
    const mailto = `mailto:oceancrashkenya@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody + "\n\nPlease send me more information and pricing details.")}`;

    // Check if we're in an iframe (v0 preview)
    if (window.self !== window.top) {
      window.open(mailto, "_blank");
    } else {
      window.location.href = mailto;
    }
  };

  return (
    <div style={styles.paymentModal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 style={styles.modalTitle}>`How to Pay via Paybill`</h2>
        <p style={{ color: "#1e40af", fontWeight: 600, margin: "0 0 1rem 0" }}>
          💬A KSh 5,000 Project Discovery fee is required to begin. This fee
          covers an initial discussion to understand your requirements and
          determine the best solution for your needs. After payment, wait for
          your M-Pesa confirmation message, then return here and click the
          button below to send the pre-filled confirmation email. Responses may
          take up to 24 hours.
        </p>
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
                <strong>Business Number:</strong> xxxxx
                <br />
                <strong>Account Number:</strong> xxxxx
                <br />
                <strong>Amount:</strong> Enter amount 5000 KSh for consultation
                fee
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
          <button
            onClick={handleShareEmail}
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.3s ease",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(37, 99, 235, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            📧 Open Email to Share Details
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => (
  <div style={styles.statsSection} data-stats-section>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>50+</div>
      <p style={styles.statLabel}>Clients Worldwide</p>
    </div>
    <div style={styles.statItem}>
      <div style={styles.statNumber}>7+</div>
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
  <div style={styles.benefitsSection} data-benefits-section>
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

const Footer: React.FC = () => (
  <footer
    style={{
      marginTop: "5rem",
      background: "#0f172a",
      color: "#fff",
      borderRadius: "0 0 10px 10px",
      padding: "4rem 2rem 2rem",
    }}
    data-footer-section
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
        <h3 style={{ marginBottom: "1rem" }}>Contact Us</h3>
        <p>Have questions or want to learn more? Reach out to us!</p>

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
  const [selectedService, setSelectedService] = useState<string>("");

  const handlePaymentClick = (service: string) => {
    setSelectedService(service);
    setShowPaymentModal(true);
  };

  const handleExploreClick = () => {
    const productsSection = document.querySelector("[data-products-section]");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{keyframes}</style>
      <main style={styles.main}>
        <Header />
        <HeroSection
          onPaymentClick={handlePaymentClick}
          onExploreClick={handleExploreClick}
        />
        <ReviewsSection />
        <StatsSection />
        <BenefitsSection />
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          selectedService={selectedService}
        />
        <Footer />
      </main>
    </>
  );
}
