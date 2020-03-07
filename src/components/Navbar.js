import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/img/smallLogo.png'

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
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-item navbar-link is-arrowless">
                  GET INVOLVED
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item">
                    PARTNERS
                  </Link>
                  <Link className="navbar-item">
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
              <Link className="navbar-item button is-primary" style={{marginTop:'5px'}} onClick={() => window.open('https://pursuit-of-innovation.square.site/','_blank')}>
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
