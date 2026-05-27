import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Send } from 'lucide-react';

function Connect({
  styles,
  applyTextOutlineGlow,
  removeTextOutlineGlow,
  isMobile
}) {
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {

  e.preventDefault();
  setLoading(true);

  const formData = {

    name: e.target.user_name.value,
    email: e.target.user_email.value,
    message: e.target.message.value

  };

  try {

    // SAVE TO BACKEND DATABASE

    const response = await fetch(
  "https://automate-with-ai-p2am.vercel.app/api/leads/create",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      }
    );

    const data = await response.json();

    if (!data.success) {

      throw new Error("Database storage failed");

    }

    // SEND EMAIL USING EMAILJS

    await emailjs.send(

      'service_1ir5x9a',

      'template_ck6i4se',

      {

        user_name: formData.name,

        user_email: formData.email,

        message: formData.message,

      },

      'UJ-bfW3TA47Og8fQZ'

    );

    alert("Message Sent Successfully 🚀");

setLoading(false);

e.target.reset();

  }

  catch (error) {

    console.log(error);

    alert("Failed To Send Message ❌");

setLoading(false);

  }

};

  const contactCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '18px 20px',
    borderRadius: '14px',
    border: '1px solid rgba(30,80,255,0.3)',
    backgroundColor: 'rgba(255,255,255,0.02)',
    textDecoration: 'none',
    marginBottom: '18px',
    transition: '0.3s ease'
  };

  const contactTextStyle = {
    fontSize: isMobile ? '11px' : '22px',
    fontWeight: '700',
    color: '#ffffff',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    lineHeight: '1.5',
    maxWidth: '100%'
  };

  return (

    <section
      id="connect"
      style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(30, 80, 255, 0.3)'
      }}
    >

      {/* TITLE */}

      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}
      >

        <h2
          style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: '900',
            marginBottom: '14px',
            color: '#ffffff'
          }}
        >

          LET'S

          <span
            style={styles.baseBlueText}
            onMouseEnter={applyTextOutlineGlow}
            onMouseLeave={(e) =>
              removeTextOutlineGlow(e, '#1e50ff')
            }
          >
            {" "}CONNECT
          </span>

        </h2>

        <p
          style={{
            color: '#aaa',
            fontSize: isMobile ? '13px' : '16px'
          }}
        >
          Have a project in mind? Let's build something amazing together. 💛
        </p>

      </div>

      {/* MAIN GRID */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : 'repeat(auto-fit, minmax(320px, 1fr))',

          gap: '40px',
          maxWidth: '1050px',
          margin: '0 auto'
        }}
      >

        {/* LEFT SIDE */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >

          <h3
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '4px',
              color: '#777',
              letterSpacing: '2px'
            }}
          >
            OFFICIAL BUSINESS PORTS
          </h3>

          {/* WHATSAPP */}

          <motion.a
            className="floating-card"
            whileHover={{
              y: -8,
              boxShadow: '0 0 25px rgba(30,80,255,0.35)'
            }}
            transition={{ duration: 0.3 }}
            href="https://wa.me/919001154399"
            target="_blank"
            rel="noreferrer"
            style={contactCardStyle}
          >

            <div
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.04)',
                flexShrink: 0
              }}
            >

              <img
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />

            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0
              }}
            >

              <div
                style={{
                  fontSize: '12px',
                  color: '#888',
                  marginBottom: '6px',
                  letterSpacing: '1px'
                }}
              >
                WHATSAPP
              </div>

              <div style={contactTextStyle}>
                +91 9001154399
              </div>

            </div>

          </motion.a>

          {/* EMAIL */}

          <motion.a
            className="floating-card"
            whileHover={{
              y: -8,
              boxShadow: '0 0 25px rgba(30,80,255,0.35)'
            }}
            transition={{ duration: 0.3 }}
            href="mailto:automatewithai20@gmail.com"
            style={contactCardStyle}
          >

            <div
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.04)',
                flexShrink: 0
              }}
            >

              <img
                src="/icons/gmail.png"
                alt="Email"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />

            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0
              }}
            >

              <div
                style={{
                  fontSize: '12px',
                  color: '#888',
                  marginBottom: '6px',
                  letterSpacing: '1px'
                }}
              >
                EMAIL
              </div>

              <div style={contactTextStyle}>
                automatewithai20@gmail.com
              </div>

            </div>

          </motion.a>

          {/* INSTAGRAM */}

          <motion.a
            className="floating-card"
            whileHover={{
              y: -8,
              boxShadow: '0 0 25px rgba(30,80,255,0.35)'
            }}
            transition={{ duration: 0.3 }}
            href="https://instagram.com/automate.with.ai.official"
            target="_blank"
            rel="noreferrer"
            style={contactCardStyle}
          >

            <div
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.04)',
                flexShrink: 0
              }}
            >

              <img
                src="/icons/insta.png"
                alt="Instagram"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />

            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0
              }}
            >

              <div
                style={{
                  fontSize: '12px',
                  color: '#888',
                  marginBottom: '6px',
                  letterSpacing: '1px'
                }}
              >
                INSTAGRAM
              </div>

              <div style={contactTextStyle}>
                @automate.with.ai.official
              </div>

            </div>

          </motion.a>

          {/* LINKEDIN */}

          <motion.a
            className="floating-card"
            whileHover={{
              y: -8,
              boxShadow: '0 0 25px rgba(30,80,255,0.35)'
            }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/gaurav-soni-ds"
            target="_blank"
            rel="noreferrer"
            style={contactCardStyle}
          >

            <div
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.04)',
                flexShrink: 0
              }}
            >

              <img
                src="/icons/linkedin.png"
                alt="LinkedIn"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />

            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0
              }}
            >

              <div
                style={{
                  fontSize: '12px',
                  color: '#888',
                  marginBottom: '6px',
                  letterSpacing: '1px'
                }}
              >
                LINKEDIN
              </div>

              <div style={contactTextStyle}>
                linkedin.com/in/gaurav-soni-ds
              </div>

            </div>

          </motion.a>

        </div>

        {/* RIGHT SIDE FORM */}

        <div
          style={{
            backgroundColor: 'rgba(6, 11, 19, 0.8)',
            border: '1px solid #1e50ff',
            padding: isMobile ? '24px' : '36px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(5px)'
          }}
        >

          <h3
            style={{
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#ffffff'
            }}
          >
            DM FOR COLLABORATIONS & PROJECTS ! 🚀
          </h3>

          <p
            style={{
              fontSize: isMobile ? '12px' : '13px',
              color: '#aaa',
              marginBottom: '26px'
            }}
          >
            Drop your scope overview details to initiate immediate integration setup.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name / Enterprise Name"
              required
              style={styles.input}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Contact Email Address"
              required
              style={styles.input}
            />

            <textarea
              name="message"
              placeholder="Project Requirement Brief..."
              rows="4"
              required
              style={styles.input}
            ></textarea>

            <motion.button
              className="glow-pulse"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(30,80,255,0.45)'
              }}
              whileTap={{
                scale: 0.98
              }}
              type="submit"
              disabled={loading}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: '#1e50ff',
                opacity: loading ? 0.7 : 1,
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: isMobile ? '12px' : '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 0 20px rgba(30, 80, 255, 0.4)'
              }}
            >

              <Send
                style={{
                  width: '16px',
                  height: '16px'
                }}
              />

              {
                loading
                ? "Sending..."
                : "Send Requirement Brief"
              }

            </motion.button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Connect;