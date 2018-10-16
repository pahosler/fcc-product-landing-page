import React from 'react'

export default function(props) {
  return (
    <div className="container">
      <div className="pricing">
        <img src={require('../assets/the-original-tardis.jpg')} />
      </div>
      <div className="pricing">
        <iframe
          id="video"
          width="150"
          height="250"
          src="https://www.youtube.com/embed/tHxicdBaqJ0?rel=0&amp;start=269"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="pricing">
        <img src={require('../assets/good-old-tardis-console.jpg')} />
      </div>
    </div>
  )
}
