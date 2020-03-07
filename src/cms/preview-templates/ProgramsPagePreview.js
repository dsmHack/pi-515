import React from 'react'
import PropTypes from 'prop-types'
import { ProgramsPageTemplate } from '../../templates/programs-page'

const ProgramsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'programsList'])
  const programsList = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <ProgramsPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ programsList }}
    />
  )
}

ProgramsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProgramsPagePreview
