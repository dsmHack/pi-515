import React from 'react'
import Layout from '../../components/Layout'
import constants from './constants'

export default () => (
  <Layout>
    <section className="section">
      <div className="columns is-centered is-vcentered">
        <div class="column is-half has-text-centered">
          <div className="content">
            <h1>Thanks for being Awesome!</h1>
            <p>
              We appreciate that you've taken the time to write us. If your
              inquiry is urgent, please use the telephone number listed below to talk to one
              of our staff members. Otherwise, we will reply by email as soon as possible.
              <br/><br/>
              Talk to you soon!
            </p>
          </div>
          <address className="content column">
            <h3>Pursuit of Innovation</h3>
            <div>Phone number: <a href={'tel:' + constants.phoneNumber}>{constants.phoneNumber}</a></div>
            <div>Email: <a href={'mailto:' + constants.email}>{constants.email}</a></div>
            <div>Address: <a href={'geo:' + constants.address}>4300 Beaver Avenue Des Moines, IA 50310</a></div>
          </address>
        </div>
      </div>
    </section>
  </Layout>
)
