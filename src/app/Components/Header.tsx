// import "../../style/Header.css"
// import Link from "next/link"

// const Header = () => {
//   return (
//     <div>
//     <header className="header">
//       <div className="logo">SHAFIQUE</div>
//       <nav className="nav-links">
//         <Link href="/" className="nav-link">Home</Link>
//         <Link href="#Skill" className="nav-link">Skills</Link>
//         <Link href="#About" className="nav-link">About</Link>
//         <Link href="#Projects" className="nav-link">Projects</Link>
//         <Link href="#Contact" className="nav-link">Contact</Link>
//       </nav>
//       {/* <button className="hire-button">Hire me</button> */}
//     </header>
//   </div>
  

//   )
// }

// export default Header
"use client"

import "../../style/Header.css";
import Link from "next/link";
import { useState } from "react"; // Import useState for toggling menu on mobile

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu visibility
  };

  return (
    <header className="header">
      <div className="logo">SHAFIQUE</div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/" className="nav-link" aria-label="Home">Home</Link>
        <Link href="#Skill" className="nav-link" aria-label="Skills">Skills</Link>
        <Link href="#About" className="nav-link" aria-label="About">About</Link>
        <Link href="#Projects" className="nav-link" aria-label="Projects">Projects</Link>
        <Link href="#Contact" className="nav-link" aria-label="Contact">Contact</Link>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};

export default Header;
