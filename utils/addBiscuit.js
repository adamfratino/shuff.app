const addBiscuit = (isYellow, biscuits, setBiscuits) => {
  if (isYellow && biscuits.yellow.length < 4) {
    setBiscuits((prevBiscuits) => ({
      ...prevBiscuits,
      yellow: [...prevBiscuits.yellow, [0, 0]],
    }))
  } else if (!isYellow && biscuits.black.length < 4) {
    setBiscuits((prevBiscuits) => ({
      ...prevBiscuits,
      black: [...prevBiscuits.black, [95.92, 0]],
    }))
  }
}

export default addBiscuit
