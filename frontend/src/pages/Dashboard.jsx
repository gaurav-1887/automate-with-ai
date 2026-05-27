import toast from "react-hot-toast";

import {

  useEffect,
  useState

} from "react";

import {

  Trash2,
  LogOut,
  Mail,
  User

} from "lucide-react";

import { useNavigate } from "react-router-dom";


function Dashboard() {

  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const token = localStorage.getItem(

      "adminToken"

    );

    if (!token) {

      navigate("/admin-login");

    }

    fetchLeads();

  }, []);


  const fetchLeads = async () => {

    try {

      const token = localStorage.getItem(

        "adminToken"

      );


      const response = await fetch(

        "http://localhost:5000/api/leads/all",

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );


      const data = await response.json();


      if (data.success) {

        setLeads(data.leads);

      }

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      setLoading(false);

    }

  };
const deleteLead = async (id) => {

  const confirmDelete = window.confirm(
    "Delete this lead?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem(
      "adminToken"
    );

    const response = await fetch(

      `http://localhost:5000/api/leads/${id}`,

      {

        method: "DELETE",

        headers: {

          Authorization: `Bearer ${token}`

        }

      }

    );

    const data = await response.json();

    if (data.success) {

      setLeads(

        leads.filter(

          (lead) => lead._id !== id

        )

      );

      toast.success("Lead Deleted");

    }

    else {

      alert(data.message);

    }

  }

  catch (error) {

    console.log(error);

    toast.error("Delete Failed");

  }

};

  const handleLogout = () => {

    localStorage.removeItem("adminToken");

    navigate("/admin-login");

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#02040a",
        color: "white",
        padding: "120px 5%"
      }}
    >

      {/* TOP BAR */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        <div>

          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              marginBottom: "10px"
            }}
          >

            ADMIN

            <span style={{ color: "#1e50ff" }}>
              {" "}DASHBOARD
            </span>

          </h1>

          <p
            style={{
              color: "#888"
            }}
          >

            Total Leads: {leads.length}

          </p>

        </div>

        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            background: "rgba(30,80,255,0.12)",
            border: "1px solid #1e50ff",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer"
          }}
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

      {/* LOADING */}

      {

        loading

        ? (

          <div
            style={{
              textAlign: "center",
              paddingTop: "100px",
              color: "#888"
            }}
          >

            Loading Leads...

          </div>

        )

        : (

          <div
            style={{
              display: "grid",
              gap: "25px"
            }}
          >

            {

              leads.map((lead) => (

                <div
                  key={lead._id}

                  className="glow-pulse"

                  style={{
                    background: "#07111f",
                    border: "1px solid rgba(30,80,255,0.3)",
                    padding: "30px",
                    borderRadius: "18px"
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "20px",
                      flexWrap: "wrap"
                    }}
                  >

                    <div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "14px"
                        }}
                      >

                        <User size={18} color="#1e50ff" />

                        <h2
                          style={{
                            fontSize: "1.4rem"
                          }}
                        >

                          {lead.name}

                        </h2>

                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "16px",
                          color: "#aaa"
                        }}
                      >

                        <Mail size={16} />

                        {lead.email}

                      </div>

                      <p
                        style={{
                          color: "#ddd",
                          lineHeight: "1.8"
                        }}
                      >

                        {lead.message}

                      </p>

                    </div>

                    <button

                      onClick={() =>
                      deleteLead(lead._id)
                    }

                       style={{
                        background: "rgba(255,0,0,0.12)",
                        border: "1px solid red",
                        color: "white",
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        cursor: "pointer"
                      }}
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default Dashboard;