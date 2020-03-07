import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/header-icon.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="" title="Logo">
              <img src={logo} alt="Pi515" style={{ height: '100%', marginTop: '-3px'}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered is">
              <Link className="navbar-item" to="/about">
                ABOUT
              </Link>
              <Link className="navbar-item" to="/blog">
                BLOG
              </Link>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-item is-arrowless">
                  GET INVOLVED
                </a>
                <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/partners">
                    PARTNERS
                  </Link>
                  <Link className="navbar-item" to="/programs">
                    PROGRAMS
                  </Link>
                  <Link className="navbar-item">
                    VOLUNTEERS
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/contact">
                CONTACT US
              </Link>
              <Link id="donate-button" className="navbar-item" onClick={() => window.open('https://pursuit-of-innovation.square.site/','_blank')}>
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar
