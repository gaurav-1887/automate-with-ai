import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const floatingStyle = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}
`;

function AiChatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
`Hi 👋 Welcome to Automate With AI.

I can help you with:
• AI Automation
• Chatbots
• Websites
• Dashboards
• CRM Solutions
• Support & Delivery

How can I help you today? 🚀`
    }
  ]);

  const [input, setInput] = useState("");

  const faqData = {

    services:
      "We provide AI Automation, Chatbots, Websites, Dashboards, CRM Solutions, Python Automation, AI Integrations and more 🚀",

    whatsapp:
      "Yes ✅ We create WhatsApp automation systems, auto-reply bots, lead capture systems and AI integrations.",

    website:
      "We build premium modern websites, AI agency websites, dashboards and scalable web applications 🔥",

    chatbot:
      "We create AI chatbots for websites, Instagram, WhatsApp and businesses 🤖",

    dashboard:
      "We build admin dashboards, analytics panels and real-time monitoring systems 📊",

    support:
      "We provide complete project support and future upgrade assistance for all premium projects 🚀",

    delivery:
      "Project delivery depends on complexity. Small projects take around 2-5 days while advanced systems may take longer ⏳",

    contact:
      "You can contact us directly through the contact form or WhatsApp for project discussions 📲",

    portfolio:
      "Our premium project portfolio is currently under development and will be updated with live case studies soon 🚀",

    automation:
      "We automate repetitive business tasks using AI, APIs and workflow systems ⚡"

  };

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {

      sender: "user",

      text: input

    };

    const text = input.toLowerCase();

    let reply = "";

    if (
      text.includes("service")
    ) {

      reply = faqData.services;

    }

    else if (
      text.includes("whatsapp")
    ) {

      reply = faqData.whatsapp;

    }

    else if (
      text.includes("website")
    ) {

      reply = faqData.website;

    }

    else if (
      text.includes("chatbot")
    ) {

      reply = faqData.chatbot;

    }

    else if (
      text.includes("dashboard")
    ) {

      reply = faqData.dashboard;

    }

    else if (
      text.includes("support")
    ) {

      reply = faqData.support;

    }

    else if (
      text.includes("delivery")
    ) {

      reply = faqData.delivery;

    }

    else if (
      text.includes("contact")
    ) {

      reply = faqData.contact;

    }

    else if (
      text.includes("portfolio") ||
      text.includes("project")
    ) {

      reply = faqData.portfolio;

    }

    else if (
      text.includes("automation")
    ) {

      reply = faqData.automation;

    }

    else {

      reply =
`I can help you with:

• Services
• WhatsApp Automation
• AI Chatbots
• Websites
• Dashboards
• Portfolio
• Delivery Time
• Support
• Contact

Type any of these keywords 🚀`;

    }

    const botMessage = {

      sender: "bot",

      text: reply

    };

    setMessages([

      ...messages,

      userMessage,

      botMessage

    ]);

    setInput("");

  };

  return (

    <>
      <style>{floatingStyle}</style>

      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "24px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          border: "none",
          background: "#1e50ff",
          color: "white",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 0 35px rgba(30,80,255,0.8)",
          animation: "float 3s ease-in-out infinite"
        }}
      >

        {

          open

            ? <X size={28} />

            : <MessageCircle size={28} />

        }

      </button>

      {/* CHATBOX */}

      {

        open && (

          <div
            style={{
              position: "fixed",
              bottom: "115px",
              right: "24px",
              width: "340px",
              height: "500px",
              background: "#050816",
              border: "1px solid rgba(30,80,255,0.3)",
              borderRadius: "20px",
              overflow: "hidden",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 0 35px rgba(30,80,255,0.25)"
            }}
          >

            {/* HEADER */}

            <div
              style={{
                padding: "18px",
                background: "#07111f",
                borderBottom: "1px solid rgba(30,80,255,0.2)",
                color: "white",
                fontWeight: "700",
                fontSize: "18px"
              }}
            >

              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }}
>

  <div
    className="glow-pulse"
    style={{
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid #1e50ff",
      boxShadow:
        "0 0 15px rgba(30,80,255,0.4)"
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

  <div>

    <div
      style={{
        fontWeight: "800",
        fontSize: "17px"
      }}
    >
      AI Assistant
    </div>

    <div
      style={{
        fontSize: "11px",
        color: "#1e50ff",
        marginTop: "2px"
      }}
    >
      Automate With AI 🚀
    </div>

  </div>

</div>

            </div>

            {/* MESSAGES */}

            <div
              style={{
                flex: 1,
                padding: "15px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >

              {

                messages.map((msg, index) => (

                  <div
                    key={index}
                    style={{
                      alignSelf:
                        msg.sender === "user"
                          ? "flex-end"
                          : "flex-start",

                      background:
                        msg.sender === "user"
                          ? "#1e50ff"
                          : "#111827",

                      color: "white",

                      padding: "12px 15px",

                      borderRadius: "14px",

                      maxWidth: "85%",

                      fontSize: "14px",

                      lineHeight: "1.6",

                      whiteSpace: "pre-line"
                    }}
                  >

                    {msg.text}

                  </div>

                ))

              }

            </div>

            {/* INPUT */}

            <div
              style={{
                display: "flex",
                padding: "12px",
                borderTop: "1px solid rgba(30,80,255,0.2)"
              }}
            >

              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }

                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    sendMessage();

                  }

                }}

                style={{
                  flex: 1,
                  background: "#0b1220",
                  border: "none",
                  outline: "none",
                  color: "white",
                  padding: "12px",
                  borderRadius: "10px"
                }}
              />

              <button
                onClick={sendMessage}
                style={{
                  marginLeft: "10px",
                  background: "#1e50ff",
                  border: "none",
                  width: "46px",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer"
                }}
              >

                <Send size={18} />

              </button>

            </div>

          </div>

        )

      }

    </>

  );

}

export default AiChatbot;