"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../../imgs/LOGOBOLA.png";

const navItems = [
  { href: "/#eventos", label: "Eventos" },
  { href: "/#contato", label: "Contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    closeMenuButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-content">
          <Link aria-label="Explosão Inferno Coral — início" className="brand" href="/">
            <Image alt="Escudo da Explosão Inferno Coral" className="brand-mark" priority src={logo} />
            <span className="brand-name">Explosão Inferno Coral</span>
          </Link>

          <nav aria-label="Navegação principal" className="desktop-nav">
            {navItems.map((item) => {
              const id = item.href.split("#")[1];
              return (
                <Link aria-current={activeSection === id ? "page" : undefined} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link className="header-action" href="/entrar">Entrar</Link>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Abrir navegação"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            ref={menuButtonRef}
            type="button"
          >
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-nav-overlay"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeMenu();
          }}
        >
          <nav aria-label="Navegação móvel" className="mobile-nav" id="mobile-navigation">
            <div className="mobile-nav-header">
              <button aria-label="Fechar navegação" className="icon-button" onClick={closeMenu} ref={closeMenuButtonRef} type="button">
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            {navItems.map((item) => {
              const id = item.href.split("#")[1];
              return (
                <Link aria-current={activeSection === id ? "page" : undefined} href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              );
            })}
            <Link className="header-action" href="/entrar" onClick={closeMenu}>Entrar</Link>
          </nav>
        </div>
      )}
    </>
  );
}
