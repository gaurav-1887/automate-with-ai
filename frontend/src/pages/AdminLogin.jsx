import {

  useState

} from "react";

import {

  useNavigate

} from "react-router-dom";

import {

  ShieldCheck,
  Eye,
  EyeOff

} from "lucide-react";


function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(

        "https://automate-with-ai-p2am.vercel.app/api/auth/login",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify({

            email,
            password

          })

        }

      );


      const data = await response.json();


      if (data.success) {

        localStorage.setItem(

          "adminToken",

          data.token

        );

        alert("Login Successful 🚀");

        navigate("/dashboard");

      }

      else {

        alert(data.message);

      }

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      alert("Server Error ❌");

      setLoading(false);

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #081225, #02040a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <form

        onSubmit={handleLogin}

        className="glow-pulse"

        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(8,15,30,0.95)",
          border: "1px solid rgba(30,80,255,0.3)",
          borderRadius: "24px",
          padding: "45px",
          boxShadow: "0 0 35px rgba(30,80,255,0.15)"
        }}
      >

        {/* ICON */}

        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 25px auto",
            borderRadius: "50%",
            background: "rgba(30,80,255,0.12)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #1e50ff"
          }}
        >

          <ShieldCheck
            size={38}
            color="#1e50ff"
          />

        </div>

        {/* TITLE */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "2.7rem",
            fontWeight: "900",
            marginBottom: "12px"
          }}
        >

          ADMIN

          <span style={{ color: "#1e50ff" }}>
            {" "}LOGIN
          </span>

        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#888",
            marginBottom: "35px",
            lineHeight: "1.7"
          }}
        >

          Secure access to your Automate With AI dashboard.

        </p>

        {/* EMAIL */}

        <input

          type="email"

          placeholder="Admin Email"

          value={email}

          onChange={(e) =>

            setEmail(e.target.value)

          }

          required

          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "1px solid rgba(30,80,255,0.25)",
            background: "#050816",
            color: "white",
            outline: "none",
            fontSize: "15px"
          }}

        />

        {/* PASSWORD */}

        <div
          style={{
            position: "relative",
            marginBottom: "28px"
          }}
        >

          <input

            type={

              showPassword

              ? "text"

              : "password"

            }

            placeholder="Password"

            value={password}

            onChange={(e) =>

              setPassword(e.target.value)

            }

            required

            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid rgba(30,80,255,0.25)",
              background: "#050816",
              color: "white",
              outline: "none",
              fontSize: "15px"
            }}

          />

          <button

            type="button"

            onClick={() =>

              setShowPassword(

                !showPassword

              )

            }

            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#1e50ff",
              cursor: "pointer"
            }}
          >

            {

              showPassword

              ? <EyeOff size={20} />

              : <Eye size={20} />

            }

          </button>

        </div>

        {/* BUTTON */}

        <button

          type="submit"

          disabled={loading}

          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            background: "#1e50ff",
            color: "white",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "0.3s"
          }}
        >

          {

            loading

            ? "Logging In..."

            : "LOGIN TO DASHBOARD"

          }

        </button>

      </form>

    </div>

  );

}

export default AdminLogin;