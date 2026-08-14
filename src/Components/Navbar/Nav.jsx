"use client";
import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillProject,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO = "/assets/enostation.jpeg";

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState("/");
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`agency-header ${scrolled ? "scrolled" : ""}`}>
        <div className="agency-header-container">
          <Link
            href="/"
            className="agency-logo-brand"
            onClick={() => setActiveNav("/")}
          >
            <img src={LOGO} alt="Enostation Logo" className="agency-logo-img" />
            <div className="agency-brand-text">
              <span className="agency-name">ENOSTATION</span>
              <span className="agency-tag"></span>
            </div>
          </Link>

          <nav className="agency-desktop-nav">
            <Link href="/" className={activeNav === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              href="/about"
              className={activeNav === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              href="/services"
              className={activeNav === "/services" ? "active" : ""}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={activeNav === "/portfolio" ? "active" : ""}
            >
              Work
            </Link>
            <Link
              href="/pricing"
              className={activeNav === "/pricing" ? "active" : ""}
            >
              Pricing
            </Link>
            <Link
              href="/testimonial"
              className={activeNav === "/testimonial" ? "active" : ""}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={activeNav === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </nav>

          <div className="agency-header-actions">
            <Link href="/contact" className="btn btn-primary header-cta-btn">
              <AiOutlineThunderbolt /> Get a Quote
            </Link>
          </div>
        </div>
      </header>

      <nav className="agency-mobile-floating-nav">
        <Link
          href="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
          title="Home"
        >
          <AiOutlineHome />
        </Link>
        <Link
          href="/about"
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : ""}
          title="About"
        >
          <AiOutlineUser />
        </Link>
        <Link
          href="/services"
          onClick={() => setActiveNav("/services")}
          className={activeNav === "/services" ? "active" : ""}
          title="Services"
        >
          <MdMedicalServices />
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setActiveNav("/portfolio")}
          className={activeNav === "/portfolio" ? "active" : ""}
          title="Work"
        >
          <AiFillProject />
        </Link>
        <Link
          href="/pricing"
          onClick={() => setActiveNav("/pricing")}
          className={activeNav === "/pricing" ? "active" : ""}
          title="Pricing"
        >
          <BsTag />
        </Link>
        <Link
          href="/contact"
          onClick={() => setActiveNav("/contact")}
          className={activeNav === "/contact" ? "active" : ""}
          title="Contact"
        >
          <RiContactsFill />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
