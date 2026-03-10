import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 top-0 right-0 left-0 bg-white shadow-xl border-[1px] border-white">
      <div className="container mx-auto px-7 py-5">
        <div className="flex items-center justify-between">

          <Link
            to="/"
            className="text-[#2F07E5] text-[24px] font-bold uppercase"
          >
            Uz <span className="text-[#2E2B3D]">works</span>
          </Link>

          <ul className="flex items-center justify-center gap-5">

            <li>
              <NavLink to="/home" className="text-[#2E2B3D]">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/news" className="text-[#2E2B3D]">
                News
              </NavLink>
            </li>

            <li>
              <NavLink to="/jobs" className="text-[#2E2B3D]">
                Jobs
              </NavLink>
            </li>

            <li>
              <NavLink to="/workers" className="text-[#2E2B3D]">
                Workers
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="text-[#2E2B3D]">
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="text-[#2E2B3D]">
                About us
              </NavLink>
            </li>

          </ul>

          <div className="flex items-center justify-center gap-5 text-[#2E2B3D]">
            <h1>Eng</h1>
            <h1>Sign Up</h1>
            <h1>Sign In</h1>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;