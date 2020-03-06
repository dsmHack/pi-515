import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  facebook = 'https://www.facebook.com/Pi515/';
  twitter = 'https://twitter.com/LOVEPI515';
  phoneNumber = '515-344-4326';
  address = '4300 Beaver Avenue Des Moines, IA 50310';
  email = 'tech@pi515.org';



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
    console.log(this.props.data);
    return (
      <Layout>
        <section className="section">
          <div className="container horizontalColumns">
            <address className="content column">
              <h3>Pursuit of Innovation</h3>
              <div>Phone number: <a href={'tel:' + this.phoneNumber}>{this.phoneNumber}</a></div>
              <div>Email: <a href={'mailto:' + this.email}>{this.email}</a></div>
              <div>Address: <a href={'geo:' + this.address}>4300 Beaver Avenue Des Moines, IA 50310</a></div>
              <div>Hours: 9am - 5pm</div>
              <div>
                <div><a href={this.facebook}>Facebook</a></div>
                <div><a href={this.twitter}>Twitter</a></div>
              </div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.7812477219422!2d-93.68107734840824!3d41.638859579140046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9c14426aaaab%3A0x20398f4414d00158!2sPursuit%20of%20Innovation!5e0!3m2!1sen!2sus!4v1583522683319!5m2!1sen!2sus"
                width="600" height="450" frameBorder="0" style={{'border': '0px'}}
                allowFullScreen=""></iframe>
            </address>
            <div className="content column">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {this.props.data.markdownRemark.frontmatter.contact.title}
              </h1>
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    '#39DC78 0.5rem 0px 0px, #39DC78 -0.5rem 0px 0px',
                  backgroundColor: '#39DC78',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
              >
                {this.props.data.markdownRemark.frontmatter.contact.comment}
              </h3>
            </div> */}
          </div>
          <div className="container">
        <div className="section">
          <div className="columns">
           <h1 className="contactHeader">Contact Information</h1>
          </div>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <h1>Contact</h1>
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
                <label className="label" htmlFor={'name'}>
                  Your name
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
                  Email
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
                <div>
                  <label className="label" htmlFor={'message'}>
                    Contact Types
                  </label>
                  <div class="field">
                    <div class="control">
                      <div class="select">
                        <select>
                          <option disabled hidden selected>Select Option</option>
                          <option>Students</option>
                          <option>Donators</option>
                          <option>Volunteers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field" style={{marginTop:'15px'}}>
                  <button className="button is-link" type=" submit">
                    Send
                  </button>
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
        </section>
      </Layout>
    )
  }
}
