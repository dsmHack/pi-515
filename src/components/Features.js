import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// TODO: A lot of this file is a hack to workaround issues with the original template we used
function FeatureTitle({item}) {
  if(item && item.title) {
    return <h3 class="has-text-centered">{item.title}</h3>
  } else {
    return null
  }
}

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
        <div key={item.text} className="column is-6">
          <section className="section">
            <FeatureTitle item={item}/>
            <div className="has-text-centered">
              <div
                style={{
                  width: '50%',
                  height: '50%',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            {item.text.split("|").map(i => (
              <p class="has-text-justified">{i}</p>
            ))}
            
          </section>
        </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
