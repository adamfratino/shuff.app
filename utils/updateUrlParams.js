const updateUrlParams = (biscuits, router) => {
  if (biscuits.yellow.length && !biscuits.black.length) {
    router.push(`?yellow=${biscuits.yellow}`)
  } else if (!biscuits.yellow.length && biscuits.black.length) {
    router.push(`?black=${biscuits.black}`)
  } else if (biscuits.yellow.length && biscuits.black.length) {
    router.push(`?yellow=${biscuits.yellow}&black=${biscuits.black}`)
  } else {
    router.push('/')
  }
}

export default updateUrlParams
