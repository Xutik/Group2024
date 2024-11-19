const project = (title, techStack, author, image, link) => {
  return {
    title,
    techStack,
    author,
    image,
    link
  }
}

export const projects = [
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    'src/assets/img/calculator-kgm.PNG',
    'https://kevingarciamartin.github.io/calculator/'
  ),
  project(
    'Fjordsmaken',
    ['Webpack', 'JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    'src/assets/img/restaurant-kgm.PNG',
    'https://kevingarciamartin.github.io/restaurant-page/'
  ),
  project(
    'Etch-A-Sketch',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    'src/assets/img/etch-a-sketch-kjw.png',
    'https://maybejod.github.io/ODIN-etch-a-sketch/'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    'src/assets/img/calculator-kjw.png',
    'https://maybejod.github.io/ODIN-calculator/'
  )
]
