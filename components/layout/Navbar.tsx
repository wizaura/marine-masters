"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY >= window.innerHeight - 50
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const links = [
    "Home",
    "About",
    "News",
    "Categories",
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          max-w-8xl
          transition-all
          duration-300
          ${scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm"
            : ""
          }
        `}
      >
        <nav
          className={`
            mx-auto
            max-w-[1800px]
            px-8 md:px-4
            md:px-8
            ${scrolled ? "py-2" : "py-6"}
          `}
        >
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Left */}
            <div className="flex items-center gap-2">
              {links.map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className={`
                    rounded-full
                    px-6
                    py-3
                    font-semibold
                    transition
                    ${scrolled
                      ? "bg-neutral-100 text-black hover:bg-neutral-200"
                      : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                    }
                  `}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="justify-self-center"
            >
              <Image
                src="/logo.png"
                alt="Marine Masters"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            {/* CTA */}
            <div className="flex justify-end">
              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-orange-400
                  px-8
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-orange-500
                "
              >
                Ask for a Quote
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Marine Masters"
                width={140}
                height={50}
                className={`
        w-auto
        transition-all
        duration-300
        ${scrolled ? "h-9" : "h-10"}
      `}
              />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      transition-all
      duration-300
      ${scrolled
                  ? "bg-neutral-100"
                  : "bg-white/20 backdrop-blur-md"
                }
    `}
            >
              <Menu className={` ${scrolled
                ? "text-black"
                : "text-white"
                }`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          bg-[#0B1530]
          transition-all
          duration-500
          lg:hidden
          ${mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `}
      >
        <div className="flex h-full flex-col">
          {/* Top */}
          <div className="flex items-center justify-between p-5">
            <Link
              href="/"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <Image
                src="/logo.png"
                alt="Marine Masters"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
              "
            >
              <X />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-1 flex-col justify-center px-8">
            {links.map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  border-b
                  border-white/10
                  py-7
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-6">
            <Link
              href="/contact"
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                flex
                w-full
                justify-center
                rounded-full
                bg-orange-400
                px-8
                py-5
                text-lg
                font-semibold
                text-white
              "
            >
              Ask for a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}