import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, links }) => (
  <header className="bg-white">
    <nav className="flex flex-row items-center py-2 px-4">
      <Link to="/">{siteTitle}</Link>
      <ul className="flex flex-row items-center">
        {links &&
          links.map(l => (
            <li key={l.text} className="mx-3 mb-0">
              <Link to={`/${l.path}`}>{l.text}</Link>
            </li>
          ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  links: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  links: [],
}

export default Header
