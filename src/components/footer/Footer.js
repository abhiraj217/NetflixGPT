import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 sm:px-10 md:px-16 lg:px-24 py-12 border-t border-gray-800">
      
      {/* Social Icons */}
      <div className="flex gap-5 text-xl mb-8">
        <FaFacebookF className="cursor-pointer hover:text-white transition" />
        <FaInstagram className="cursor-pointer hover:text-white transition" />
        <FaTwitter className="cursor-pointer hover:text-white transition" />
        <FaYoutube className="cursor-pointer hover:text-white transition" />
      </div>

      {/* Contact */}
      <p className="mb-8 text-sm sm:text-base">
        Questions? Call{" "}
        <span className="hover:underline cursor-pointer">
          000-800-919-1694
        </span>
      </p>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8 text-sm sm:text-base">
        {[
          "FAQ",
          "Help Centre",
          "Account",
          "Media Centre",
          "Investor Relations",
          "Jobs",
          "Ways to Watch",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate Information",
          "Contact Us",
          "Speed Test",
          "Legal Notices",
          "Only on Netflix",
        ].map((item, index) => (
          <p
            key={index}
            className="hover:underline cursor-pointer transition"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Language Button */}
      <div className="mt-8">
        <button className="border border-gray-600 px-4 py-2 rounded-md text-sm hover:border-white transition">
          English
        </button>
      </div>

      {/* Bottom Text */}
      <p className="mt-6 text-sm text-gray-500">
        Netflix India Clone © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;