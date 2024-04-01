// * convert rem to pixels
const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

// * FIRST ORDER

// * getting first order elements
const firstOrderContainer = document.getElementById('first-order__items-container')
const firstOrderScrollLeftBtn = document.getElementById('first-order__scroll-left')
const firstOrderScrollRightBtn = document.getElementById('first-order__scroll-right')

// * hide scroll btn
firstOrderContainer.addEventListener('scroll', () => {
  const containerWidth = firstOrderContainer.scrollWidth - firstOrderContainer.clientWidth;
  const scrollPosition = firstOrderContainer.scrollLeft  
  firstOrderScrollLeftBtn.hidden = scrollPosition === 0;
  firstOrderScrollRightBtn.hidden = scrollPosition >= containerWidth
})

firstOrderScrollLeftBtn.addEventListener('click', () => {
  firstOrderContainer.scrollLeft -= convertRemToPixels(11)
})

firstOrderScrollRightBtn.addEventListener('click', () => {
  firstOrderContainer.scrollLeft += convertRemToPixels(11)
})


// * TOP BRANDS
const topBrandsContainer = document.getElementById('top-brands-items-container')
const topBrandsScrollLeftBtn = document.getElementById('top-brands__scroll-left');
const topBrandsScrollRightBtn = document.getElementById('top-brands__scroll-right')


topBrandsContainer.addEventListener('scroll', () => {
  const containerWidth =topBrandsContainer.scrollWidth - topBrandsContainer.clientWidth
  const scrollPosition = topBrandsContainer.scrollLeft
  topBrandsScrollLeftBtn.hidden = scrollPosition === 0
  topBrandsScrollRightBtn.hidden = scrollPosition >= containerWidth
})

topBrandsScrollLeftBtn.addEventListener('click', () => {
  topBrandsContainer.scrollLeft -= convertRemToPixels(11)
})

topBrandsScrollRightBtn.addEventListener('click', () => {
  topBrandsContainer.scrollLeft += convertRemToPixels(11)
})


