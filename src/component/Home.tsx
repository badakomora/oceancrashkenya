import React, { CSSProperties } from "react";

// ============================================================================
// Style Objects
// ============================================================================

const styles = {
  main: {
    background: "#f7f7f8",
    overflow: "hidden" as const,
    position: "relative" as const,
    borderRadius: "10px",
    maxWidth: "1450px",
    width: "98%",
    padding: "1.75rem",
    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.08)",
    margin: "1rem auto",
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
  } as CSSProperties,

  logoIcon: {
    background: "linear-gradient(135deg, #4d3fff 0%, #7165ff 100%)",
    width: "2.75rem",
    height: "2.75rem",
    borderRadius: "0.75rem",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 900,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  } as CSSProperties,

  logoText: {
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

  signUpBtn: {
    display: "none" as const,
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "black",
    background: "none",
    border: "none",
    cursor: "pointer",
  } as CSSProperties,

  loginBtn: {
    background: "linear-gradient(135deg, #5b4dff 0%, #7265ff 100%)",
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
  } as CSSProperties,

  heroLeft: {
    animation: "fadeUp 1s ease",
  } as CSSProperties & { animation: string },

  badge: {
    display: "inline-flex" as const,
    alignItems: "center",
    gap: "0.5rem",
    background: "#edeaff",
    color: "#5b4dff",
    padding: "0.5rem 1.25rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: 600,
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
    background: "linear-gradient(135deg, #5b4dff 0%, #7265ff 100%)",
    color: "white",
    padding: "1rem 2.25rem",
    borderRadius: "9999px",
    border: "none",
    fontWeight: 600,
    fontSize: "0.875rem",
    boxShadow: "0 10px 25px rgba(99, 102, 241, 0.2)",
    cursor: "pointer",
    transition: "0.35s ease",
  } as CSSProperties,

  secondaryBtn: {
    display: "flex" as const,
    alignItems: "center",
    gap: "0.5rem",
    background: "white",
    padding: "1rem 2rem",
    borderRadius: "9999px",
    border: "none",
    fontWeight: 600,
    fontSize: "0.875rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
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
    background: "linear-gradient(135deg, #4d3fff 0%, #7165ff 100%)",
    width: "3rem",
    height: "3rem",
    borderRadius: "1rem",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxShadow: "0 10px 25px rgba(99, 102, 241, 0.2)",
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
    height: "270px",
    transition: "0.45s ease",
  } as CSSProperties,

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  } as CSSProperties,

  cardBadge: {
    background: "linear-gradient(135deg, #4d3fff 0%, #7165ff 100%)",
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
    background: "linear-gradient(135deg, #4d3fff 0%, #7165ff 100%)",
  } as CSSProperties,

  cardOverlay: {
    position: "absolute" as const,
    inset: 0,
    background: "linear-gradient(to top, rgba(26, 26, 69, 0.7), transparent)",
  } as CSSProperties,

  floatingWidgetMember: {
    position: "absolute" as const,
    left: "1.25rem",
    bottom: "1.25rem",
    right: "1.25rem",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "space-between",
    animation: "floating 4s ease-in-out infinite",
  } as CSSProperties & { animation: string },

  memberAvatar: {
    display: "flex" as const,
    alignItems: "center",
    gap: "0.75rem",
  } as CSSProperties,

  avatarCircle: {
    width: "2.75rem",
    height: "2.75rem",
    borderRadius: "9999px",
    background: "#f4f4ff",
    display: "flex" as const,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "0.875rem",
    color: "#5b4dff",
  } as CSSProperties,

  memberName: {
    fontWeight: 600,
    color: "#111",
    fontSize: "0.875rem",
    margin: 0,
  } as CSSProperties,

  memberStatus: {
    color: "#8b8b95",
    fontSize: "0.75rem",
    marginTop: "0.25rem",
    margin: 0,
  } as CSSProperties,

  memberAmount: {
    color: "#16a26e",
    fontWeight: 700,
    fontSize: "0.875rem",
  } as CSSProperties,

  cardContent: {
    position: "absolute" as const,
    bottom: "1.25rem",
    left: "1.25rem",
    right: "1.25rem",
  } as CSSProperties,

  contentBox: {
    background: "rgba(255, 255, 255, 0.9)",
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
    background: "linear-gradient(to bottom right, #ece9ff, #ddd8ff)",
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
    color: "#5b4dff",
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

  brandsList: {
    display: "flex" as const,
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "3.5rem",
    color: "#767688",
    fontWeight: 800,
    fontSize: "1.5rem",
  } as CSSProperties,

  brandItem: {
    cursor: "pointer",
    transition: "all 0.3s ease",
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

  @media (min-width: 768px) {
    [data-sign-up-btn] {
      display: block;
    }
  }

  [data-nav-link]:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 2px;
    background: #5b4dff;
    width: 100%;
  }

  [data-card]:hover {
    transform: translateY(-8px);
  }

  [data-primary-btn]:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(92, 82, 255, 0.25);
  }

  [data-secondary-btn]:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  [data-feature-icon]:hover {
    transform: translateY(-1px);
  }

  [data-brand-item]:hover {
    color: #5b4dff;
  }
`;

// ============================================================================
// Components
// ============================================================================

const Header: React.FC = () => (
  <header style={styles.header}>
    <div style={styles.logo}>
      <div style={styles.logoIcon}>📚</div>
      <h2 style={styles.logoText}>OCEANCRASH</h2>
    </div>

    <nav style={styles.nav} data-nav>
      {["Courses", "Apps", "Videos", "Resources", "Contact"].map((item) => (
        <a key={item} href="/" style={styles.navLink} data-nav-link>
          {item}
        </a>
      ))}
    </nav>

    <div style={styles.buttonGroup}>
      <button style={styles.signUpBtn} data-sign-up-btn>
        Sign Up
      </button>
      <button style={styles.loginBtn} data-login-btn>
        Login
      </button>
    </div>
  </header>
);

const HeroSection: React.FC = () => (
  <div style={styles.heroContainer} data-hero-container>
    <div style={styles.heroLeft}>
      <span style={styles.badge}>🎯 Trusted by 50K+ learners & developers</span>

      <h1 style={styles.headline} data-headline>
        Access Premium <br /> Learning Today.
      </h1>

      <p style={styles.description}>
        Unlock premium courses, applications, and educational content. Fast
        checkout with M-Pesa & Paybill. Start learning instantly.
      </p>

      <div style={styles.ctaButtons}>
        <button style={styles.primaryBtn} data-primary-btn>
          Browse Products
        </button>
        <button style={styles.secondaryBtn} data-secondary-btn>
          View Catalog
          <span>↗</span>
        </button>
      </div>

      <div style={styles.featuresGrid}>
        {[
          {
            icon: "💳",
            title: "M-Pesa & Paybill Ready",
            desc: "Seamless payment checkout with your preferred method.",
          },
          {
            icon: "⚡",
            title: "Instant Access",
            desc: "Get immediate access to courses and apps after purchase.",
          },
        ].map((feature, idx) => (
          <div key={idx} style={styles.featureItem}>
            <div style={styles.featureIcon}>{feature.icon}</div>
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
        {/* Card 1 - Web Development Course */}
        <div style={styles.card} data-card>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
            alt="Web Development Course"
            style={styles.cardImage}
          />
          <div style={styles.cardBadge}>🚀</div>
          <div style={styles.floatingWidget}>
            <p style={styles.widgetLabel}>Complete Course</p>
            <h4 style={styles.widgetTitle}>Web Dev Masterclass</h4>
          </div>
        </div>

        {/* Card 2 - Payment Methods Highlight */}
        <div style={{ ...styles.card, ...styles.gradientCard }} data-card>
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
            alt="Secure Payments"
            style={{
              ...styles.cardImage,
              opacity: 0.9,
              mixBlendMode: "lighten",
            }}
          />
          <div style={styles.cardOverlay} />
          <div style={styles.floatingWidgetMember}>
            <div style={styles.memberAvatar}>
              <div style={styles.avatarCircle}>💰</div>
              <div>
                <h4 style={styles.memberName}>Quick Checkout</h4>
                <p style={styles.memberStatus}>M-Pesa & Paybill</p>
              </div>
            </div>
            <span style={styles.memberAmount}>Enabled</span>
          </div>
        </div>

        {/* Card 3 - Study Materials */}
        <div style={styles.card} data-card>
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop"
            alt="Study Materials"
            style={styles.cardImage}
          />
          <div style={styles.cardContent}>
            <div style={styles.contentBox}>
              <p style={styles.contentLabel}>Premium Resources</p>
              <h4 style={styles.contentTitle}>Study Videos & Materials</h4>
            </div>
          </div>
        </div>

        {/* Card 4 - Launch Promo */}
        <div style={{ ...styles.card, ...styles.promoBg }} data-card>
          <div style={styles.promoTop}>
            <div style={styles.promoIcon}>✨</div>
          </div>
          <div>
            <h3 style={styles.promoTitle}>
              POWER YOUR <br /> SKILLS TODAY
            </h3>
            <p style={styles.promoDesc}>
              Premium applications, expert-led courses, and quality content. All
              with secure M-Pesa & Paybill payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BrandSection: React.FC = () => (
  <div style={styles.brandsSection}>
    <p style={styles.brandsText}>
      Trusted by students, developers, and professionals across Africa
    </p>
    <div style={styles.brandsList}>
      {["TechAcademy", "DevCourse", "SkillHub", "LearnApp"].map((brand) => (
        <span key={brand} style={styles.brandItem} data-brand-item>
          {brand}
        </span>
      ))}
    </div>
  </div>
);

// ============================================================================
// Main Page
// ============================================================================

export default function Home() {
  return (
    <>
      <style>{keyframes}</style>
      <main style={styles.main}>
        <Header />
        <HeroSection />
        <BrandSection />
      </main>
    </>
  );
}
