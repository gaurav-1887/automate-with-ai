import React from "react";

import { MessageCircle } from "lucide-react";

function WhatsappFloat() {

  return (

    <a
      href="https://wa.me/919001154399"
      target="_blank"
      rel="noreferrer"

      className="glow-pulse"

      style={{

        position: "fixed",

        bottom: "30px",

        right: "30px",

        width: "65px",

        height: "65px",

        borderRadius: "50%",

        background:
          "linear-gradient(135deg, #1e50ff, #00c3ff)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        color: "white",

        zIndex: 9999,

        boxShadow:
          "0 0 25px rgba(30,80,255,0.5)",

        transition: "0.3s ease",

        textDecoration: "none"

      }}

      onMouseEnter={(e) => {

        e.currentTarget.style.transform =
          "scale(1.1)";

        e.currentTarget.style.boxShadow =
          "0 0 35px rgba(30,80,255,0.8)";

      }}

      onMouseLeave={(e) => {

        e.currentTarget.style.transform =
          "scale(1)";

        e.currentTarget.style.boxShadow =
          "0 0 25px rgba(30,80,255,0.5)";

      }}
    >

      <MessageCircle size={30} />

    </a>

  );

}

export default WhatsappFloat;