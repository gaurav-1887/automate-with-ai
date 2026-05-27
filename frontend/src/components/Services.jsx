import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

function Services({
  styles,
  servicesData,
  setSelectedService,
  applyTextOutlineGlow,
  removeTextOutlineGlow
}) {

  return (

    <section
      id="services"
      style={{
        padding: '40px 0 100px 0',
        textAlign: 'center'
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

          OUR

          <span style={{ color: "#1e50ff" }}>
            {" "}SERVICES
          </span>

        </h2>

        <p
          style={{
            color: "#888",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "16px"
          }}
        >

          Premium AI automation, dashboards,
          websites, and smart digital solutions
          built for modern businesses.

        </p>

      </div>

      {/* SERVICES GRID */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}
      >

        {servicesData.map((service) => (

          <motion.div
            className="floating-card glow-pulse fade-smooth"
            key={service.id}

            whileHover={{
              y: -8,
              boxShadow: '0 0 25px rgba(30,80,255,0.35)'
            }}

            transition={{ duration: 0.3 }}

            style={styles.serviceCard}

            onClick={() => setSelectedService(service)}

            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1e50ff';
              e.currentTarget.style.boxShadow =
                '0 0 25px rgba(30, 80, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(30, 80, 255, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >

            <div style={{ flexGrow: 1 }}>

              {/* ICON + TITLE */}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '28px'
                }}
              >

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    backgroundColor: '#000000',
                    border: '1px solid #1e50ff',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >

                  {service.icon}

                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#1e50ff',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={applyTextOutlineGlow}
                  onMouseLeave={(e) =>
                    removeTextOutlineGlow(e, '#1e50ff')
                  }
                >

                  {service.title}

                </h3>

              </div>

              {/* POINTS */}

              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >

                {service.points.map((point, index) => (

                  <li
                    key={index}
                    style={{
                      color: '#bbb',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'start',
                      gap: '10px'
                    }}
                  >

                    <span style={{ color: '#1e50ff' }}>
                      •
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            {/* BOTTOM BUTTON */}

            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 'bold',
                borderTop: '1px solid rgba(30, 80, 255, 0.15)',
                paddingTop: '18px',
                color: '#1e50ff'
              }}
            >

              VIEW CASE STUDIES OVERVIEW

              <ArrowRight
                style={{
                  width: '14px',
                  height: '14px'
                }}
              />

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default Services;