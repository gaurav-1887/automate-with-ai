import React from "react";

function Navbar() {

  const hoverEffect = (e) => {

    e.target.style.color = "#1e50ff";

    e.target.style.textShadow =
      "0 0 14px rgba(30,80,255,0.95)";

    e.target.style.transform =
      "translateY(-2px)";

    e.target.style.borderBottom =
      "2px solid #1e50ff";

    e.target.style.boxShadow =
      "0 8px 25px rgba(30,80,255,0.18)";

    e.target.style.background =
      "rgba(30,80,255,0.08)";

  };

  const removeHover = (e) => {

    e.target.style.color = "#ffffff";

    e.target.style.textShadow = "none";

    e.target.style.transform =
      "translateY(0px)";

    e.target.style.borderBottom =
      "2px solid transparent";

    e.target.style.boxShadow = "none";

    e.target.style.background = "transparent";

  };

  return (

    <nav
      style={{
        width: "100%",
        padding:
          window.innerWidth < 768
            ? "16px 18px"
            : "18px 40px",

        position: "fixed",

        top: 0,
        left: 0,

        zIndex: 999,

        background:
          "rgba(2,4,10,0.82)",

        backdropFilter: "blur(16px)",

        borderBottom:
          "1px solid rgba(30,80,255,0.18)",

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        boxShadow:
          "0 8px 25px rgba(0,0,0,0.35)"
      }}
    >

      {/* LOGO */}

      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap:
            window.innerWidth < 768
              ? "10px"
              : "14px",

          textDecoration: "none"
        }}
      >

        <div
          className="glow-pulse"
          style={{
            width:
              window.innerWidth < 768
                ? "42px"
                : "52px",

            height:
              window.innerWidth < 768
                ? "42px"
                : "52px",

            borderRadius: "50%",

            overflow: "visible",

            border: "1px solid #1e50ff",

            boxShadow:
              "0 0 20px rgba(30,80,255,0.45)"
          }}
        >

          <img
            src="/AWA.png"
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "scale(0.92)"
            }}
          />

        </div>

        <div
          style={{
            color: "#ffffff",

            fontSize:
              window.innerWidth < 768
                ? "14px"
                : "24px",

            fontWeight: "900",

            letterSpacing: "0.5px",

            whiteSpace: "nowrap"
          }}
        >

          AUTOMATE

          <span
            style={{
              color: "#1e50ff",

              textShadow:
                "0 0 12px rgba(30,80,255,0.8)"
            }}
          >
            {" "}WITH AI
          </span>

        </div>

      </a>

      {/* LINKS */}

      <div
        style={{
          display: "flex",

          gap:
            window.innerWidth < 768
              ? "8px"
              : "24px",

          alignItems: "center",

          flexWrap: "wrap"
        }}
      >

        {/* HOME */}

        <a
          href="/"
          style={navStyle}

          onMouseEnter={hoverEffect}

          onMouseLeave={removeHover}
        >
          Home
        </a>

        {/* SERVICES */}

        <a
          href="#services"
          style={navStyle}

          onMouseEnter={hoverEffect}

          onMouseLeave={removeHover}
        >
          Services
        </a>

        {/* ABOUT */}

        <a
          href="#about"
          style={navStyle}

          onMouseEnter={hoverEffect}

          onMouseLeave={removeHover}
        >
          About
        </a>

        {/* CONTACT */}

        <a
          href="#connect"
          style={navStyle}

          onMouseEnter={hoverEffect}

          onMouseLeave={removeHover}
        >
          Contact
        </a>

      </div>

    </nav>

  );

}

const navStyle = {

  color: "#ffffff",

  textDecoration: "none",

  fontWeight: "700",

  fontSize:
    window.innerWidth < 768
      ? "11px"
      : "16px",

  transition: "all 0.35s ease",

  position: "relative",

  padding:
    window.innerWidth < 768
      ? "6px 8px"
      : "8px 14px",

  borderRadius: "10px",

  borderBottom:
    "2px solid transparent",

  cursor: "pointer",

  backdropFilter: "blur(10px)"

};

export default Navbar;