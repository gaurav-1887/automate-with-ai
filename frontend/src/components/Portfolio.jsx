import React from "react";

import { motion } from "framer-motion";

import {

  ArrowUpRight,
  Sparkles

} from "lucide-react";

import { servicesData } from "../data/servicesData";

function Portfolio() {

  const allProjects = servicesData.flatMap(

    (service) =>

      service.projects.map((project) => ({

        ...project,

        category: service.title

      }))

  );

  return (

    <section

      id="portfolio"

      style={{

        padding: "130px 5%",

        background:
          "linear-gradient(to bottom, #02040a, #050816)"

      }}
    >

      {/* TOP BADGE */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px"
        }}
      >

        <div
          className="glow-pulse"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            borderRadius: "40px",
            border: "1px solid #1e50ff",
            color: "#1e50ff",
            background: "rgba(30,80,255,0.08)",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "1px"
          }}
        >

          <Sparkles size={16} />

          PREMIUM AI PROJECTS

        </div>

      </div>

      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "80px"
        }}
      >

        <h2
          style={{
            color: "white",
            fontSize:
              window.innerWidth < 768
                ? "2.8rem"
                : "4.5rem",

            fontWeight: "900",

            marginBottom: "22px",

            lineHeight: "1.1"
          }}
        >

          FEATURED

          <span style={{ color: "#1e50ff" }}>
            {" "}PROJECTS
          </span>

        </h2>

        <p
          style={{
            color: "#8b95a7",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "2",
            fontSize:
              window.innerWidth < 768
                ? "15px"
                : "18px"
          }}
        >

          Premium AI systems, automation workflows,
          intelligent dashboards, chatbot integrations
          and futuristic digital experiences crafted
          for startups, creators and modern businesses.

        </p>

      </div>

      {/* GRID */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(340px, 1fr))",

          gap: "35px"
        }}
      >

        {allProjects.map((project, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 60
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: 0.6
            }}

            whileHover={{
              y: -10,
              scale: 1.02
            }}

            style={{

              background:
                "linear-gradient(180deg,#081120,#050816)",

              border:
                "1px solid rgba(30,80,255,0.18)",

              borderRadius: "28px",

              padding: "34px",

              position: "relative",

              overflow: "hidden",

              boxShadow:
                "0 0 20px rgba(30,80,255,0.08)",

              transition: "0.4s ease"

            }}
          >

            {/* GLOW EFFECT */}


           

            <div
              style={{
                position: "absolute",
                top: "-120px",
                right: "-120px",
                width: "240px",
                height: "240px",
                background:
                  "rgba(30,80,255,0.12)",

                borderRadius: "50%",
                filter: "blur(60px)"
              }}
            />

            {/* STATUS */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "22px"
              }}
            >

              <div
                style={{
                  color: "#1e50ff",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1px"
                }}
              >

                {project.category}

              </div>

              <div
                style={{
                  padding: "6px 12px",
                  borderRadius: "30px",
                  background:
                    "rgba(255,180,0,0.08)",

                  border:
                    "1px solid rgba(255,180,0,0.25)",

                  color: "#ffb400",

                  fontSize: "11px",

                  fontWeight: "700",

                  letterSpacing: "0.5px"
                }}
              >

                IN DEVELOPMENT

              </div>

            </div>

            {/* TITLE */}

            <h3
              style={{
                color: "white",
                fontSize: "1.7rem",
                marginBottom: "18px",
                lineHeight: "1.3"
              }}
            >

              {project.title}

            </h3>

            {/* DESCRIPTION */}

            <p
              style={{
                color: "#97a3b6",
                lineHeight: "1.9",
                marginBottom: "28px",
                minHeight: "120px"
              }}
            >

              {project.desc}

            </p>

            {/* TAGS */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "30px"
              }}
            >

              {project.tags.map((tag, idx) => (

                <div

                  key={idx}

                  style={{

                    padding: "9px 15px",

                    borderRadius: "40px",

                    background:
                      "rgba(30,80,255,0.08)",

                    border:
                      "1px solid rgba(30,80,255,0.22)",

                    color: "#1e50ff",

                    fontSize: "12px",

                    fontWeight: "700"

                  }}
                >

                  {tag}

                </div>

              ))}

            </div>

            {/* BUTTON */}

            <button
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid #1e50ff",
                background:
                  "rgba(30,80,255,0.1)",

                color: "white",

                fontWeight: "700",

                fontSize: "14px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "10px",

                cursor: "default",

                opacity: 0.85,

                transition: "0.3s ease"
              }}
            >

              Coming Soon

              <ArrowUpRight size={18} />

            </button>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Portfolio;