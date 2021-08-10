import styled from 'styled-components'

const TopBar = ({ onClick }) => (
  <StyledTopBar>
    <Title>💰 Big Money Visualizer</Title>
    <CloseButton onClick={onClick}>&times;</CloseButton>
  </StyledTopBar>
)

export default TopBar

const StyledTopBar = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`
const Title = styled.h1`
  font-size: 14px;
  color: white;
`

const CloseButton = styled.button`
  align-self: flex-end;
  appearance: none;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 24px;
  line-height: 16px;
  padding: 8px;
  z-index: 1;

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 4px;
  }
`
