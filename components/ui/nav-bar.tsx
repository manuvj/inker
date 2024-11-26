"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // Clean up event listener on component unmount
    };
  }, [scrollDirection]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Career", href: "/career" },
  ];

  return (
    <header
      className={cn(
        "z-[999999] backdrop-blur-xl flex h-20 w-full shrink-0 items-center px-4 md:px-6 fixed top-0 right-0 transition-transform duration-500",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden bg-transparent cursor-pointer shadow-none"
          >
            <GiHamburgerMenu />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image src="/logo.png" alt="Acme Inc" width={24} height={24} />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image
          src="/logo.webp"
          alt="Acme Inc"
          width={150}
          height={150}
          draggable={false}
        />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 font-inter mr-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-inter-medium hover:text-hilight hover:underline underline-offset-4"
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
