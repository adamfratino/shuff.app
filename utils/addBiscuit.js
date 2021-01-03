const addBiscuit = (isYellow, biscuits, setBiscuits) => {
  if (isYellow && biscuits.yellow.length < 4) {
    setBiscuits((prevBiscuits) => ({
      ...prevBiscuits,
      yellow: [...prevBiscuits.yellow, 'yellowBiscuit'],
    }))
  } else if (!isYellow && biscuits.black.length < 4) {
    setBiscuits((prevBiscuits) => ({
      ...prevBiscuits,
      black: [...prevBiscuits.black, 'blackBiscuit'],
    }))
  }
}

export default addBiscuit
