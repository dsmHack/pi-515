import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Layout from '../../components/Layout'




import './main.scss' // webpack must be configured to do this

export default class calendar extends React.Component {

  render() {
    return (
    <Layout>  
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />

    </Layout>
    )
  }

}

