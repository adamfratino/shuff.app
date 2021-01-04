const stopDraggingBiscuit = (e, el) => {
  const playArea = document.querySelector('.play-area')

  const playAreaDimensions = {
    width: playArea.clientWidth,
    height: playArea.clientHeight,
  }
  const biscuitWidth = el.node.clientWidth

  const calculatePercentage = (el, playArea) =>
    +(((el + biscuitWidth / 2) / playArea) * 100).toFixed(2)

  const biscuitPosition = {
    x: calculatePercentage(el.x, playAreaDimensions.width),
    y: calculatePercentage(el.y, playAreaDimensions.height),
  }

  return [biscuitPosition.x, biscuitPosition.y]
}

export default stopDraggingBiscuit
