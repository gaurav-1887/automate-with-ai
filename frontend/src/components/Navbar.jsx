import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="w-full border-b border-blue-500 bg-black sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8 py-5">

        {/* Logo */}
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-500">

          AUTOMATE WITH AI

        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">

          <li className="hover:text-blue-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            Services
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            Portfolio
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-blue-500">

          <ul className="flex flex-col items-center gap-6 py-6 text-lg">

            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

          </ul>

        </div>

      )}

    </nav>

  )
}

export default Navbar