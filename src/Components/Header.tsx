import "../style/Header.css"

const Header = () => {
  return (
    <div>
    <header className="header">
      <div className="logo">SHAFIQUE</div>
      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/About" className="nav-link">About</a>
        <a href="/Skill" className="nav-link">Skills</a>
        <a href="/Projects" className="nav-link">Projects</a>
        <a href="/Contact" className="nav-link">Contact</a>
      </nav>
      {/* <button className="hire-button">Hire me</button> */}
    </header>
  </div>
  

  )
}

export default Header