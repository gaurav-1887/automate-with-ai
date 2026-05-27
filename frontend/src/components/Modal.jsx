import React from "react";

import { X, FolderKanban } from 'lucide-react';

function Modal({
  styles,
  selectedService,
  setSelectedService
}) {

  if (!selectedService) return null;

  return (

    <div
      style={styles.modalOverlay}
      onClick={() => setSelectedService(null)}
    >

      <div

        className="fade-smooth glow-pulse"

        style={{
          backgroundColor: '#000000',
          border: '1px solid #1e50ff',
          borderRadius: '12px',
          maxWidth: '580px',
          width: '100%',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 0 40px rgba(30, 80, 255, 0.3)'
        }}

        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}

        <button
          onClick={() => setSelectedService(null)}

          className="glow-pulse"

          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            color: '#777',
            cursor: 'pointer',
            padding: 0
          }}
        >

          <X
            style={{
              width: '24px',
              height: '24px'
            }}
          />

        </button>

        {/* TOP */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '8px'
          }}
        >

          <FolderKanban
            style={{
              color: '#1e50ff',
              width: '18px',
              height: '18px'
            }}
          />

          <span
            style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#777',
              letterSpacing: '2px'
            }}
          >
            DATA MODULE ARCHIVE
          </span>

        </div>

        {/* TITLE */}

        <h3
          style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '28px',
            color: '#ffffff',
            letterSpacing: '0.5px'
          }}
        >

          {selectedService.title}

        </h3>

        {/* PROJECTS */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >

          {selectedService.projects.map((project, idx) => (

            <div
              key={idx}

              className="floating-card"

              style={{
                padding: '22px',
                borderRadius: '8px',
                backgroundColor: '#060b13',
                border: '1px solid rgba(30, 80, 255, 0.2)'
              }}
            >

              <h4
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '17px',
                  margin: '0 0 8px 0'
                }}
              >

                {project.title}

              </h4>

              <p
                style={{
                  color: '#aaa',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: '0 0 14px 0'
                }}
              >

                {project.desc}

              </p>

              {/* TAGS */}

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >

                {project.tags.map((tag, tIdx) => (

                  <span
                    key={tIdx}

                    className="glow-pulse"

                    style={{
                      fontSize: '11px',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      backgroundColor:
                        'rgba(30, 80, 255, 0.15)',

                      color: '#ffffff',

                      border:
                        '1px solid rgba(30, 80, 255, 0.4)',

                      fontWeight: '600'
                    }}
                  >

                    {tag}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* BUTTON */}

        <button
          onClick={() => setSelectedService(null)}

          className="glow-pulse"

          style={{
            marginTop: '32px',
            width: '100%',
            padding: '15px',
            backgroundColor: '#1e50ff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >

          CLOSE INTERFACE

        </button>

      </div>

    </div>

  )
}

export default Modal;