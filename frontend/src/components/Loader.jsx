import React from "react";

function Loader() {

  return (

    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000814",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px"
      }}
    >

      <div
        className="glow-pulse"
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #1e50ff",
          boxShadow:
            "0 0 35px rgba(30,80,255,0.7)"
        }}
      >

        <img
          src="/AWA.png"
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

      </div>

      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "900",
          letterSpacing: "1px"
        }}
      >

        AUTOMATE

        <span style={{ color: "#1e50ff" }}>
          {" "}WITH AI
        </span>

      </h1>

    </div>

  );

}

export default Loader;