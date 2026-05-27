import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import { Send } from "lucide-react";

function ContactPage({ isMobile }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs.send(
      "service_1ir5x9a",
      "template_ck6i4se",
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      "UJ-bfW3TA47Og8fQZ"
    )

    .then(() => {

      setSuccess(true);

      setLoading(false);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    })

    .catch((error) => {

      console.log(error);

      setLoading(false);

    });

  };

  const contactCards = [

    {
      title: "WHATSAPP",
      value: "+91 9001154399"
    },

    {
      title: "EMAIL",
      value: "automatewithai20@gmail.com"
    },

    {
      title: "INSTAGRAM",
      value: "@automate.with.ai.official"
    },

    {
      title: "LINKEDIN",
      value: "linkedin.com/in/gaurav-soni"
    }

  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >

      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >

        <h1
          style={{
            fontSize: isMobile ? "2.7rem" : "5rem",
            fontWeight: "900",
            marginBottom: "24px",
            color: "#ffffff",
          }}
        >

          CONTACT <span style={{ color: "#1e50ff" }}>US</span>

        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            color: "#999",
            fontSize: isMobile ? "15px" : "20px",
            lineHeight: "1.9",
          }}
        >

          Let’s build powerful AI systems,
          automation workflows, websites,
          dashboards, and futuristic digital experiences 🚀

        </p>

      </div>

      {/* CONTACT GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: "850px",
          margin: "0 auto 90px auto"
        }}
      >

        {contactCards.map((card, index) => (

          <div
            key={index}
            className="floating-card glow-pulse fade-smooth"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(30,80,255,0.25)",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center"
            }}
          >

            <h2
              style={{
                color: "#1e50ff",
                marginBottom: "18px",
                fontSize: "22px"
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "15px" : "18px",
                wordBreak: "break-word",
                lineHeight: "1.7"
              }}
            >
              {card.value}
            </p>

          </div>

        ))}

      </div>

      {/* CONTACT FORM */}

      <div
        className="fade-smooth glow-pulse"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: isMobile ? "30px" : "45px",
          borderRadius: "24px",
          border: "1px solid rgba(30,80,255,0.25)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(14px)"
        }}
      >

        <h2
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            marginBottom: "14px",
            fontWeight: "900",
            color: "#ffffff"
          }}
        >

          DM FOR COLLABORATIONS & PROJECTS 🚀

        </h2>

        <p
          style={{
            color: "#888",
            marginBottom: "40px",
            lineHeight: "1.8"
          }}
        >

          Drop your scope overview details to initiate immediate integration setup.

        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name / Enterprise Name"
            value={formData.name}
            onChange={handleChange}
            required

            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Contact Email Address"
            value={formData.email}
            onChange={handleChange}
            required

            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Project Requirement Brief..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required

            style={{
              ...inputStyle,
              resize: "vertical"
            }}
          />

          <button
            type="submit"

            className="glow-pulse"

            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "14px",
              border: "none",
              background: "#1e50ff",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "20px"
            }}
          >

            <Send size={20} />

            {
              loading
                ? "SENDING..."
                : "SEND REQUIREMENT BRIEF"
            }

          </button>

        </form>

        {
          success && (

            <p
              style={{
                marginTop: "25px",
                color: "#1e50ff",
                fontWeight: "700",
                textAlign: "center"
              }}
            >

              ✅ Requirement submitted successfully.

            </p>

          )
        }

      </div>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "24px",
  borderRadius: "14px",
  border: "1px solid rgba(30,80,255,0.3)",
  background: "rgba(255,255,255,0.03)",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box"
};

export default ContactPage;