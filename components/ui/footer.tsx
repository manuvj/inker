import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <FaXTwitter size={20} />, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { text: "Home", href: "#" },
    { text: "Gallery", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Career", href: "#" },
  ];

  const contactInfo = [
    { icon: <MdLocationOn size={20} />, text: "Address", href: "#" },
    {
      icon: <MdPhone size={20} />,
      text: "+91 90615 00800",
      href: "tel:+919061000000",
    },
    {
      icon: <MdEmail size={20} />,
      text: "info@inkerrobotics.com@houzing.com",
      href: "mailto:info@inkerrobotics.com@houzing.com",
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

          <div className="flex gap-8 w-1/2 justify-between max-md:flex-col">
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
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
