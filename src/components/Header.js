function Header () {
    return (
    <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <p className="navbar-brand">N I C &nbsp;&nbsp; S C H W O R E R</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="navbar-nav">
                <li className="nav-item">
                  <button className="nav-link" >About</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" >Portfolio</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" >Contact</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" >Resume</button>
                </li>
              </div>
            </div>
          </nav>
    </header>
    )
};

export default Header;