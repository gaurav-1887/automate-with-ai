import {
  FaRobot,
  FaCode,
  FaPython,
  FaDatabase,
  FaCloud
} from "react-icons/fa"

function Services() {

  const services = [

    {
      icon: <FaRobot />,
      title: "AI Automation",
      desc: "AI workflows, chatbots & automation systems."
    },

    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern futuristic websites & web apps."
    },

    {
      icon: <FaPython />,
      title: "Python Services",
      desc: "Automation scripts & custom Python tools."
    },

    {
      icon: <FaDatabase />,
      title: "Data Science",
      desc: "Machine learning & predictive analytics."
    },

    {
      icon: <FaCloud />,
      title: "Salesforce CRM",
      desc: "CRM setup & workflow integrations."
    }

  ]

  return (

    <section className="py-24 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-14">

          OUR <span className="text-blue-500">SERVICES</span>

        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="w-full sm:w-[320px] bg-[#0c0c0c] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >

              <div className="text-4xl text-blue-500 mb-6">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {service.title}

              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Services