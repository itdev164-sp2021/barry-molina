import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Outer = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: purple;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
