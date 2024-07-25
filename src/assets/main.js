// flip on click
const container = document.querySelectorAll('.tile-container')[0]
container.addEventListener('click', function (e) {
  const tile = e.target.closest('.tile')
  if (tile) {
    tile.classList.toggle('flipped')
  }
})