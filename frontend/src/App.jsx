import React from "react";

import AiChatbot from "./components/AiChatbot";
import Loader from "./components/Loader";

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

function App() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  const location = useLocation();

  const hideLayout =

    location.pathname === "/admin-login" ||

    location.pathname === "/dashboard";

  if (loading) {

    return <Loader />;

  }

  return (

    <div
      style={{
        backgroundColor: "#000814",
        minHeight: "100vh",
        color: "white"
      }}
    >

      {/* NAVBAR */}

      {

        !hideLayout && <Navbar />

      }

      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

      {/* FOOTER */}

      {

        !hideLayout && <Footer />

      }

      {/* AI CHATBOT */}

      <AiChatbot />

    </div>

  );

}

export default App;