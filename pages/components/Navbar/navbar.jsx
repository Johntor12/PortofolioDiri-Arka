import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const handleClick = (menuItem) => {
    setActive(menuItem);
  };
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className={`text-white text-xl font-medium flex items-center ${
                active === "Home" ? "text-gray-300 underline" : ""
              }`}
              onClick={() => handleClick("Home")}
            >
              <FaHome className="mr-2" /> Home
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                href="https://wa.me/088274337119"
                className={`text-white hover:text-gray-200 ml-10 flex items-center ${
                  active === "Contact"
                    ? "text-gray-300 font-medium underline"
                    : ""
                }`}
                onClick={() => handleClick("Contact")}
              >
                <BsTelephone className="mr-2" /> Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
