import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import constants from '../../../constants'
import logo from "../../img/pi-logo-WithTagline-VariationA.png";
import {Link} from "gatsby";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  };

  render() {
    return (
      <Layout>
        <section className="section" style={{'textAlign': 'center', 'padding-left': '15%', 'padding-right': '15%'}}>
          <img src={logo} style={{'width': '50%'}} alt="Pi515"/>
          <h1 id="contact-us-title" style={{'paddingTop': '40px', 'paddingBottom': '80px'}}>CONTACT US</h1>
          <div className="columns" style={{'width': '70vw'}}>
            <address className="column" style={{'textAlign': 'left'}}>
              <div><strong>Phone number: </strong><a href={'tel:' + constants.phoneNumber}>{constants.phoneNumber}</a></div>
              <div><strong>Email: </strong><a href={'mailto:' + constants.email}>{constants.email}</a></div>
              <div><strong>Address: </strong><a href={'geo:' + constants.address}>{constants.address}</a></div>
              <div><strong>Hours: </strong>9am - 5pm</div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.7812477219422!2d-93.68107734840824!3d41.638859579140046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9c14426aaaab%3A0x20398f4414d00158!2sPursuit%20of%20Innovation!5e0!3m2!1sen!2sus!4v1583522683319!5m2!1sen!2sus"
                width="100%" height="390" frameBorder="0" style={{'border': '0px','paddingTop': '20px'}}
                allowFullScreen=""></iframe>
            </address>
            <div className="content column" style={{'textAlign': 'left'}}>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <div class="field">
                    <label className="label">
                      I am a:
                    </label>
                    <div class="control">
                      <div class="select">
                        <select
                        className={"select"}
                        onChange={this.handleChange}
                        id={"select"}
                        required={true}
                        >
                          <option></option>
                          <option>Student</option>
                          <option>Donator</option>
                          <option>Volunteer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    My Name is:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    My Email is:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    How can we help you?
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field" style={{marginTop:'15px'}}>
                  <button id="contact-us-button" className="button" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
