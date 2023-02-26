import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 mt-[100px] md:mt-[20px]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="flex flex-col items-center">
            <div className="px-5 py-2">
              <span className="text-[12px] font-bold text-white uppercase tracking-wide">
                You can contact me at
              </span>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="px-5 py-2">
                <Link
                  href="https://wa.me/088274337119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white flex items-center hover:text-green-300"
                >
                  <BsWhatsapp size={20} className="mr-2" />
                  <span>088274337119</span>
                </Link>
              </div>
              <div className="px-5 py-2">
                <a
                  href="https://instagram.com/arkanantaariza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white flex items-center hover:text-pink-400"
                >
                  <BsInstagram size={20} className="mr-2" />
                  <span>@arkanantaariza</span>
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="https://linkedin.com/in/arkananta-ariza-156a3624b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white flex items-center hover:text-blue-400"
                >
                  <BsLinkedin size={20} className="mr-2" />
                  <span>Arkananta Ariza</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
