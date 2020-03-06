import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
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
  }

  render() {
    console.log(this.props.data);
    return (
      <Layout>
        <section className="section">
        <div
            className="full-width-image margin-top-0"
            style={{
              backgroundImage: `url(${
                !!this.props.data.markdownRemark.frontmatter.contact.headImage.childImageSharp ? 
                this.props.data.markdownRemark.frontmatter.contact.headImage.childImageSharp.fluid.src : 
                this.props.data.markdownRemark.frontmatter.contact.headImage
              })`,
              backgroundPosition: `top left`,
              backgroundAttachment: `floating`,
              backgroundSize: `cover`,
            }}
          >
            {/* <div
              style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
              }}
            >
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    '#39DC78 0.5rem 0px 0px, #39DC78 -0.5rem 0px 0px',
                  backgroundColor: '#39DC78',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
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
              </div>
              <div className="field">
                <label className="label" htmlFor={'message'}>
                  Message
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

export const pageQuery = graphql`
  query index {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        contact{
          title
          comment
          headImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`