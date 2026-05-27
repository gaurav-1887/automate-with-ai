import React from "react";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Connect from "../components/Connect";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

import { servicesData } from "../data/servicesData";

function Home() {

  // DUMMY STYLES

  const styles = {

    baseBlueText: {
      color: "#1e50ff"
    },

    card: {
      backgroundColor: "#060b13",
      border: "1px solid #1e50ff",
      borderRadius: "12px",
      padding: "30px"
    },

    serviceCard: {
      backgroundColor: "#060b13",
      border: "1px solid rgba(30,80,255,0.3)",
      borderRadius: "14px",
      padding: "30px",
      cursor: "pointer",
      transition: "0.3s"
    },

    input: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#050816",
      border: "1px solid rgba(30,80,255,0.3)",
      borderRadius: "8px",
      color: "white",
      outline: "none"
    }

  };

  // EMPTY FUNCTIONS

  const applyTextOutlineGlow = () => {};

  const removeTextOutlineGlow = () => {};

  const setSelectedService = () => {};

  return (

    <div
      style={{
        backgroundColor: "#000814",
        minHeight: "100vh",
        padding: "0 5%"
      }}
    >

      <Hero
        isMobile={false}
        isTablet={false}
        styles={styles}
        applyTextOutlineGlow={applyTextOutlineGlow}
        removeTextOutlineGlow={removeTextOutlineGlow}
      />

      <Services
        styles={styles}
        servicesData={servicesData}
        setSelectedService={setSelectedService}
        applyTextOutlineGlow={applyTextOutlineGlow}
        removeTextOutlineGlow={removeTextOutlineGlow}
      />

      {/* ABOUT SECTION */}

{/* ABOUT SECTION */}

<section
  id="about"
  style={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "70px 0px",
  borderTop: "1px solid rgba(30,80,255,0.15)",
  borderBottom: "1px solid rgba(30,80,255,0.15)"
}}
>

  <div
    className="glow-pulse"
    style={{
      padding: "12px 24px",
      border: "1px solid #1e50ff",
      borderRadius: "40px",
      marginBottom: "35px",
      color: "#1e50ff",
      fontWeight: "700",
      letterSpacing: "2px",
      fontSize: "13px",
      background: "rgba(30,80,255,0.08)"
    }}
  >

    ABOUT AUTOMATE WITH AI

  </div>

  <h2
    style={{
      fontSize: window.innerWidth < 768
        ? "3.5rem"
        : "7rem",

      fontWeight: "900",

      marginBottom: "35px",

      lineHeight: "1.1",

      color: "#ffffff"
    }}
  >

    FUTURE OF

    <span style={{ color: "#1e50ff" }}>
      {" "}AI AUTOMATION
    </span>

  </h2>

  <p
    style={{
      maxWidth: "1000px",
      color: "#9ca3af",
      fontSize: window.innerWidth < 768
        ? "16px"
        : "22px",

      lineHeight: "2",

      marginBottom: "60px"
    }}
  >

    Automate With AI is a next-generation AI automation
    agency focused on transforming businesses through
    intelligent workflows, AI systems, dashboards,
    chatbot integrations, automation pipelines,
    and futuristic digital experiences.

    We help startups, creators, agencies, and companies
    automate repetitive tasks, scale operations faster,
    improve customer engagement, and build premium
    AI-powered ecosystems for the modern era.

  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        window.innerWidth < 768
          ? "1fr"
          : "repeat(3,1fr)",

      gap: "30px",

      width: "100%",

      maxWidth: "1100px"
    }}
  >

    {

      [

        {
          title: "AI AUTOMATION",
          desc: "Smart workflows & business automation systems"
        },

        {
          title: "MODERN DASHBOARDS",
          desc: "Premium admin panels and analytics platforms"
        },

        {
          title: "AI INTEGRATIONS",
          desc: "Chatbots, APIs, AI tools & scalable systems"
        }

      ].map((item, index) => (

        <div
          key={index}

          className="floating-card glow-pulse"

          style={{
            background: "#060b13",
            border: "1px solid rgba(30,80,255,0.25)",
            padding: "35px",
            borderRadius: "20px"
          }}
        >

          <h3
            style={{
              color: "#1e50ff",
              fontSize: "22px",
              marginBottom: "15px"
            }}
          >

            {item.title}

          </h3>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8"
            }}
          >

            {item.desc}

          </p>

        </div>

      ))

    }

  </div>

</section>
<Portfolio />
<Testimonials />
<Stats />

<Connect
  styles={styles}
  applyTextOutlineGlow={applyTextOutlineGlow}
  removeTextOutlineGlow={removeTextOutlineGlow}
  isMobile={false}
/>

    </div>

  );

}

export default Home;