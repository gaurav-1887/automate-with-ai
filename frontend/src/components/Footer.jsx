import React from "react";

import {
  MessageCircle,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer({ isMobile }) {

    const handleScrollTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};

  return (

    <footer
      style={{
        marginTop: "120px",
        borderTop: "1px solid rgba(30,80,255,0.2)",
        background: "#02040a",
        padding: "70px 20px 30px",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "1.5fr 1fr 1fr",
          gap: "50px",
        }}
      >

        {/* LEFT */}

        <div>

<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "10px"
  }}
>



  <h2
    style={{
      fontSize:
        isMobile ? "1.5rem" : "3rem",

      lineHeight: "1.2",

      fontWeight: "900",

      color: "#ffffff"
    }}
  >

    AUTOMATE

    <span
      style={{
        color: "#1e50ff",
        textShadow:
          "0 0 14px rgba(30,80,255,0.8)"
      }}
    >
      {" "}WITH AI
    </span>

  </h2>

</div>

          <p
            style={{
              color: "#888",
              lineHeight: "1.9",
              maxWidth: "420px",
              fontSize: "17px"
            }}
          >

            Building futuristic AI automations,
            smart workflows, modern business systems,
            and premium digital experiences.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              color: "#ffffff"
            }}
          >
            QUICK LINKS
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >

            <Link
  to="/"
  onClick={handleScrollTop}
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              Home
            </Link>

           <a
              href="#services"
              onClick={handleScrollTop}
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              Services
            </a>

            <a
  href="#about"
  onClick={handleScrollTop}
  style={{
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600"
  }}
>
  About
</a>

            <a
              href="#connect"
              onClick={handleScrollTop}
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              Contact
            </a>

          </div>

        </div>

        {/* SOCIAL */}

        <div>

          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              color: "#ffffff"
            }}
          >
            CONNECT
          </h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            <a
              href="https://wa.me/919001154399"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
            >
              <MessageCircle size={28} />
            </a>

            <a
              href="https://instagram.com/automate.with.ai.official"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
            >
              <Instagram size={28} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
            >
              <Linkedin size={28} />
            </a>

            <a
              href="mailto:automatewithai20@gmail.com"
              style={iconStyle}
            >
              <Mail size={28} />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        style={{
          marginTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "25px",
          textAlign: "center",
          color: "#666",
          fontSize: "16px"
        }}
      >

        © 2026 AUTOMATE WITH AI — All Rights Reserved.

      </div>

    </footer>

  );

}

const iconStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "16px",
  border: "1px solid rgba(30,80,255,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  background: "rgba(255,255,255,0.03)",
  transition: "0.3s ease"
};

export default Footer;