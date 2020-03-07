import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-black-ter">
        <div className="content has-text-centered has-text-black-ter">
          <div className="container has-text-black-ter footer-content">
              <div className="is-4 social">
                <a title="facebook" href="https://www.facebook.com/Pi515/">
                  <FontAwesomeIcon icon={faFacebookF} color="black" size="lg"/>
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCDOtl8WYPLelXNDQhzKBTKQ">
                  <FontAwesomeIcon icon={faYoutube} color="black" size="lg"/>
                </a>
                <a title="twitter" href="https://twitter.com/LOVEPI515">
                  <FontAwesomeIcon icon={faTwitter} color="black" size="lg"/>
                </a>
                <a title="linkedin" href="https://www.linkedin.com/company/pi-515/">
                  <FontAwesomeIcon icon={faLinkedin} color="black" size="lg"/>
                </a>
                <a title="instagram" href="https://instagram.com/lovepi515">
                  <FontAwesomeIcon icon={faInstagram} color="black"size="lg"/>
                </a>
              </div>
              © Copyright 2020 PI515, a 501(c)(3) nonprofit organization
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
