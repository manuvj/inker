import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <AiOutlineYoutube size={20} />, href: "#", label: "Youtube" },
  ];

  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Gallery", href: "/gallery" },
    { text: "Contact Us", href: "/contact" },
    { text: "Career", href: "/career" },
  ];

  const contactInfo = [
    {
      icon: <MdPhone size={20} />,
      text: "+91 90615 00800",
      href: "tel:+919061000000",
    },
    {
      icon: <MdEmail size={20} />,
      text: "info@robopark.in",
      href: "mailto:info@robopark.in",
    },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto lg:p-28 md:p-8 pb-4">
        <div className="flex justify-between lg:flex-row flex-col gap-8 px-6">
          {/* Logo and Social Links */}
          <div className="flex flex-col justify-center gap-5 items-start">
            <Image
              src="/footerLogo.png"
              alt="Acme Inc"
              width={160}
              height={160}
            />
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-hilight p-2 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-8 w-[40%] justify-between max-md:flex-col">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-nowrap">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-400 font-inter-medium transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-nowrap">
                Contact
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {info.icon}
                    <Link
                      href={info.href}
                      className="hover:text-gray-400 font-inter-medium transition-colors"
                    >
                      {info.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-white flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© Inker Robotics 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
