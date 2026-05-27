import React from "react";

import Services from "../components/Services";

import { servicesData } from "../data/servicesData";

function ServicesPage({
  isMobile,
  isTablet,
  styles,
  setSelectedService,
  applyTextOutlineGlow,
  removeTextOutlineGlow
}) {

  return (

    <div
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >

      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >

        <h1
          style={{
            fontSize: isMobile ? "2.3rem" : "4rem",
            fontWeight: "900",
            marginBottom: "20px",
            color: "#ffffff",
          }}
        >

          OUR <span style={{ color: "#1e50ff" }}>SERVICES</span>

        </h1>

        <p
          style={{
            color: "#999",
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: isMobile ? "14px" : "18px",
            lineHeight: "1.8",
          }}
        >

          We provide AI automation, workflow systems, chatbot integrations,
          custom dashboards, web solutions, and modern business technologies 🚀

        </p>

      </div>

      {/* SERVICES */}

      <Services
        isMobile={isMobile}
        isTablet={isTablet}
        styles={styles}
        servicesData={servicesData}
        setSelectedService={setSelectedService}
        applyTextOutlineGlow={applyTextOutlineGlow}
        removeTextOutlineGlow={removeTextOutlineGlow}
      />

    </div>

  );

}

export default ServicesPage;