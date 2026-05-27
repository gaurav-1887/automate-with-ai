import React from "react";

import { motion } from "framer-motion";

const testimonials = [

  {

    name: "Rahul Sharma",

    role: "Startup Founder",

    text:
      "Automate With AI completely transformed our workflow automation. The execution speed and premium UI quality were outstanding."

  },

  {

    name: "Aman Verma",

    role: "E-Commerce Owner",

    text:
      "The AI chatbot and dashboard system boosted our lead conversion massively. Highly recommended for automation solutions."

  },

  {

    name: "Priya Mehta",

    role: "Marketing Consultant",

    text:
      "Professional development, clean design, and amazing support. The website and automation setup exceeded expectations."

  }

];

function Testimonials() {

  return (

    <section

      style={{

        padding: "100px 5%",

        background: "#000814"

      }}
    >

      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >

        <h2
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "900",
            marginBottom: "18px"
          }}
        >

          CLIENT

          <span style={{ color: "#1e50ff" }}>
            {" "}TESTIMONIALS
          </span>

        </h2>

        <p
          style={{
            color: "#888",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8"
          }}
        >

          Trusted by founders, businesses, and creators
          looking to scale with AI and automation.

        </p>

      </div>

      {/* GRID */}

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",

          gap: "30px"

        }}
      >

        {testimonials.map((item, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}

            whileHover={{
              y: -8,
              boxShadow:
                "0 0 30px rgba(30,80,255,0.25)"
            }}

            style={{

              background: "#081120",

              border:
                "1px solid rgba(30,80,255,0.2)",

              borderRadius: "20px",

              padding: "32px",

              transition: "0.3s ease"

            }}
          >

            {/* QUOTE */}

            <p
              style={{
                color: "#aaa",
                lineHeight: "1.9",
                marginBottom: "30px"
              }}
            >

              “{item.text}”

            </p>

            {/* USER */}

            <div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "6px"
                }}
              >

                {item.name}

              </h3>

              <p
                style={{
                  color: "#1e50ff",
                  fontSize: "14px"
                }}
              >

                {item.role}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Testimonials;