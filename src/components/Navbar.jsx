import React, { useState, useEffect, useRef } from "react";
import { Layers, Moon, Sun, ArrowRight, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const tlRef = useRef(null);

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark"); // Keeping body for consistency with original
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const body = document.body;

    if (isDark) {
      html.classList.remove("dark");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      // Using 60 as threshold per original code
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Mobile Menu Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          contentRef.current,
          {
            x: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".mobile-nav-link",
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        );

      tlRef.current = tl;
    },
    { scope: mobileMenuRef }
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuRef.current.classList.remove("pointer-events-none");
      mobileMenuRef.current.classList.add("pointer-events-auto");
      tlRef.current.restart();
    } else {
      if (tlRef.current) {
        tlRef.current.reverse();
        // Delay hiding pointer events until animation finishes
        setTimeout(() => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.classList.add("pointer-events-none");
            mobileMenuRef.current.classList.remove("pointer-events-auto");
          }
        }, 500);
      }
    }
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for links
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    // Dispatch a custom event or let App handle scrolling if we hold the Lenis instance there?
    // For now, simpler: just standard smooth scroll or try to access Lenis if globally available.
    // If Lenis is on window (often attached to window.lenis), we can use it.
    // Or just use DOM API:
    const target = document.querySelector(href);
    if (target) {
      // Ideally use lenis.scrollTo if available, otherwise:
      // target.scrollIntoView({ behavior: 'smooth' });
      // Let's assume we'll attach lenis to window in App.jsx for simplicity as in the original HTML script somewhat.
      if (window.lenis) {
        window.lenis.scrollTo(href, { offset: -80 });
      } else {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 w-full z-50 transition-all duration-500 px-6 py-6"
      >
        <div
          id="nav-container"
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-2xl border ${
            isScrolled
              ? "bg-white shadow-2xl py-2 border-gray-100 mt-2 dark:bg-slate-800 dark:border-slate-700"
              : "bg-white/50 backdrop-blur-lg py-3 border-transparent mt-0 dark:bg-slate-800/50 dark:border-slate-700"
          }`}
        >
          <div className="text-xl font-extrabold tracking-tighter text-blue-600 flex items-center gap-2">
            <Layers className="w-8 h-8" />
            FLOW.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            {["hero", "main-content", "second-content", "contact"].map((id) => {
              const labels = {
                hero: "Ana Sayfa",
                "main-content": "Özellikler",
                "second-content": "İstatistikler",
                contact: "İletişim",
              };
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, `#${id}`)}
                  className="nav-link hover:text-blue-600 transition dark:text-slate-200"
                >
                  {labels[id]}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button className="hidden md:flex bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 items-center gap-2 cursor-pointer">
              Başla <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <Menu className="w-6 h-6 dark:text-slate-200" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="fixed inset-0 z-[100] pointer-events-none"
      >
        <div
          ref={overlayRef}
          id="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0"
        ></div>
        <div
          ref={contentRef}
          id="mobile-menu-content"
          className="absolute top-0 right-0 w-80 h-full bg-white dark:bg-slate-900 shadow-2xl translate-x-full p-8 flex flex-col"
        >
          <button
            id="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            className="self-end p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition mb-8 cursor-pointer"
          >
            <X className="w-6 h-6 dark:text-slate-200" />
          </button>
          <nav className="flex flex-col gap-6">
            {["hero", "main-content", "second-content", "contact"].map((id) => {
              const labels = {
                hero: "Ana Sayfa",
                "main-content": "Özellikler",
                "second-content": "İstatistikler",
                contact: "İletişim",
              };
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, `#${id}`)}
                  className="mobile-nav-link text-2xl font-bold text-slate-900 hover:text-blue-600 transition dark:text-slate-200"
                >
                  {labels[id]}
                </a>
              );
            })}
          </nav>
          <button className="mt-auto bg-blue-600 text-white px-6 py-4 rounded-2xl text-sm font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer">
            Başla <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
