import React from 'react'
import PropTypes from 'prop-types'
import { PartnersPageTemplate } from '../../templates/partners-page'

const PartnersPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'partnersList'])
  const partnersList = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <PartnersPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ partnersList }}
    />
  )
}

PartnersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnersPagePreview
