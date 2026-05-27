import React from "react";

import CountUp from "react-countup";

import { motion } from "framer-motion";

const stats = [

  {
    number: 50,
    suffix: "+",
    label: "AI Automations"
  },

  {
    number: 20,
    suffix: "+",
    label: "Dashboards Built"
  },

  {
    number: 1000,
    suffix: "+",
    label: "Leads Generated"
  },

  {
    number: 24,
    suffix: "/7",
    label: "AI Support Systems"
  }

];

function Stats() {

  return (

    <section

      style={{

        padding: "90px 5%",

        background:
          "linear-gradient(to bottom, #000814, #02040a)"

      }}
    >

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "30px"

        }}
      >

        {stats.map((item, index) => (

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

              padding: "40px 20px",

              textAlign: "center",

              transition: "0.3s ease"

            }}
          >

            <h2
              style={{

                color: "#1e50ff",

                fontSize: "3rem",

                fontWeight: "900",

                marginBottom: "10px"

              }}
            >

              <CountUp

                end={item.number}

                duration={3}

              />

              {item.suffix}

            </h2>

            <p
              style={{
                color: "#aaa",
                fontSize: "16px"
              }}
            >

              {item.label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Stats;