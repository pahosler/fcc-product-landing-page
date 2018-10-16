import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
  return (
    <footer>
      <div className="contact-info">
        <p>
          <span>
            <FontAwesomeIcon
              style={{ color: '#5f0000', marginRight: '10px' }}
              icon={'heart'}
              size="lg"
            />
          </span>
          P. A. Hosler
        </p>
      </div>
      <div className="social-media">
        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
      </div>
      <div className="info">
        <p>Footer Stuff</p>
      </div>
    </footer>
  )
}
