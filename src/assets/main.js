// flip on click
let stage = 1;
let totalFlips = 0;

const title = document.querySelectorAll('h1')[0]
const container = document.querySelectorAll('.tile-container')[0]
container.addEventListener('mouseover', flip)
container.addEventListener('click', flip)

function flip(e) {
  const tile = e.target.closest('.tile')
  if (tile) {
    tile.classList.toggle('flipped')
    totalFlips++;

    if(stage === 1 && totalFlips === 50) {
      stage = 2;
      container.classList.add('stage2')
      title.classList.add('stage2')
    }
    if(stage === 2 && totalFlips === 100) {
      stage = 3;
      container.classList.add('stage3')
      title.classList.add('stage3')
    }
    if(stage === 3 && totalFlips === 250) {
      stage = 4;
      container.classList.add('stage4')
      title.classList.add('stage4')
    }
    if(stage === 4 && totalFlips === 500) {
      stage = 1;
      container.classList.remove('stage2')
      container.classList.remove('stage3')
      container.classList.remove('stage4')
      title.classList.remove('stage2')
      title.classList.remove('stage3')
      title.classList.remove('stage4')
      totalFlips = 0;
    }
  }
}