import React from "react";

function AboutPage({ isMobile }) {

  return (

    <div
      style={{
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        textAlign: "center",
      }}
    >

      {/* HEADING */}

      <h1
        style={{
          fontSize: isMobile ? "2.5rem" : "4.5rem",
          fontWeight: "900",
          marginBottom: "24px",
          color: "#ffffff",
          letterSpacing: "1px"
        }}
      >

        ABOUT <span style={{ color: "#1e50ff" }}>US</span>

      </h1>

      {/* DESCRIPTION */}

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          color: "#999",
          fontSize: isMobile ? "15px" : "20px",
          lineHeight: "1.9",
          marginBottom: "70px"
        }}
      >

        Automate With AI helps businesses scale using modern AI automation,
        smart workflow systems, chatbot integrations, dashboards,
        content automation, and futuristic digital solutions 🚀

      </p>

      {/* INFO CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >

        {/* CARD 1 */}

        <div className="floating-card glow-pulse fade-smooth"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(30,80,255,0.25)",
            borderRadius: "20px",
            padding: "35px"
          }}
        >

          <h2
            style={{
              color: "#1e50ff",
              marginBottom: "18px",
              fontSize: "24px"
            }}
          >
            OUR MISSION
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8"
            }}
          >
            Building powerful AI systems that save time,
            automate repetitive work, and help brands grow faster.
          </p>

        </div>

        {/* CARD 2 */}

        <div className="floating-card glow-pulse fade-smooth"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(30,80,255,0.25)",
            borderRadius: "20px",
            padding: "35px"
          }}
        >

          <h2
            style={{
              color: "#1e50ff",
              marginBottom: "18px",
              fontSize: "24px"
            }}
          >
            WHAT WE DO
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8"
            }}
          >
            AI automation, websites, dashboards,
            chatbot integrations, content systems,
            and workflow optimization.
          </p>

        </div>

        {/* CARD 3 */}

        <div className="floating-card glow-pulse fade-smooth"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(30,80,255,0.25)",
            borderRadius: "20px",
            padding: "35px"
          }}
        >

          <h2
            style={{
              color: "#1e50ff",
              marginBottom: "18px",
              fontSize: "24px"
            }}
          >
            OUR VISION
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8"
            }}
          >
            Creating futuristic businesses powered by AI,
            automation, and intelligent digital ecosystems.
          </p>

        </div>

      </div>

    </div>

  );

}

export default AboutPage;