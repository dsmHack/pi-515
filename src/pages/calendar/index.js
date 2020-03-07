import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Layout from '../../components/Layout'

import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {
  render() {
    return (
    <Layout>  
          <FullCalendar
            defaultView = "dayGridMonth"
            plugins = {[ dayGridPlugin, googleCalendarPlugin ]}
            googleCalendarApiKey = "AIzaSyCyR1tMvmmmk3nlYBh_4_ExJ0aqhI1Z31Q"
            events = {
              googleCalendarId = "djjoe2015ms@gmail.com"
            }
            // events = {
            //   googleCalendarId = `${process.env.GATSBY_CALENDAR_ID}@gmail.com`
            // }
          />
    </Layout>
    )
  }
}

