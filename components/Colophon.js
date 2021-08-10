import styled from 'styled-components'

const Colophon = () => (
  <StyledColophon>
    Built with <span>♥</span> by{' '}
    <a href="//fratino.dev" target="_blank">
      Adam Fratino
    </a>
  </StyledColophon>
)

export default Colophon

const StyledColophon = styled.span`
  font-size: 9px;
  letter-spacing: 1px;
  margin-top: auto;
  text-align: center;
  text-transform: uppercase;
  padding: 16px 0;

  span {
    color: tomato;
  }

  a {
    text-decoration: underline;
  }
`
