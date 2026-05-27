import React from "react";

import { motion } from "framer-motion";

import { Zap } from "lucide-react";


function Hero() {

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      style={{

        padding: "170px 20px 80px 20px",

        textAlign: "center",

        position: "relative"

      }}

    >

      {/* TOP BADGE */}

      <motion.div

        whileHover={{

          scale: 1.05,

          boxShadow: "0 0 25px rgba(30,80,255,0.4)"

        }}

        style={{

          display: "inline-flex",

          alignItems: "center",

          gap: "8px",

          padding: "6px 18px",

          borderRadius: "30px",

          border: "1px solid #1e50ff",

          backgroundColor: "rgba(30, 80, 255, 0.15)",

          color: "#ffffff",

          fontSize: "11px",

          fontWeight: "bold",

          textTransform: "uppercase",

          marginBottom: "36px",

          letterSpacing: "1.5px"

        }}

      >

        <Zap

          style={{

            width: "12px",

            height: "12px",

            color: "#1e50ff"

          }}

        />

        Smart AI Solutions for Modern Businesses

      </motion.div>


      {/* MAIN HEADING */}

      <motion.h1

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.9 }}

        style={{

          fontSize: "5rem",

          fontWeight: "900",

          marginBottom: "24px",

          lineHeight: "1.05",

          color: "#ffffff"

        }}

      >

        AUTOMATE

        <span

          style={{

            color: "#1e50ff"

          }}

        >

          {" "}WITH AI

        </span>

      </motion.h1>


      {/* DESCRIPTION */}

      <motion.p

        initial={{ opacity: 0 }}

        whileInView={{ opacity: 1 }}

        transition={{ duration: 1 }}

        style={{

          color: "#aaa",

          fontSize: "18px",

          maxWidth: "750px",

          margin: "0 auto 54px auto",

          lineHeight: "1.7"

        }}

      >

        Innovate ideas into impact. Automate your workflows to work smarter,

        maximize operational efficiency, and elevate your brand beyond

        standard limits.

      </motion.p>


      {/* FEATURE CARDS */}

      <div

        style={{

          display: "grid",

          gridTemplateColumns:

            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "20px",

          maxWidth: "1000px",

          margin: "0 auto"

        }}

      >

        {[

          {

            title: "INNOVATE",

            desc: "Ideas into Impact"

          },

          {

            title: "AUTOMATE",

            desc: "Work Smarter"

          },

          {

            title: "OPTIMIZE",

            desc: "Maximize Efficiency"

          },

          {

            title: "ELEVATE",

            desc: "Grow Beyond Limits"

          }

        ].map((item, idx) => (

          <motion.div

            key={idx}

            whileHover={{

              y: -8,

              boxShadow:

                "0 0 25px rgba(30,80,255,0.35)"

            }}

            style={{

              background: "#071028",

              border: "1px solid #1e50ff",

              padding: "30px",

              borderRadius: "20px"

            }}

          >

            <div

              style={{

                fontSize: "16px",

                fontWeight: "bold",

                color: "#ffffff",

                marginBottom: "6px"

              }}

            >

              {item.title}

            </div>


            <div

              style={{

                fontSize: "13px",

                color: "#777"

              }}

            >

              {item.desc}

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>

  );

}


export default Hero;