import calculatorKGM from '../assets/img/calculator-kgm.PNG'
import calculatorKJW from '../assets/img/calculator-kjw.png'
import calculatorXutik from '../assets/img/calculator-xutik.jpg'
import etchASketchKJW from '../assets/img/etch-a-sketch-kjw.png'
import restaurantKGM from '../assets/img/restaurant-kgm.PNG'
import etchASketchKlejda from '../assets/img/etch-a-sketch-klej.png'
import tictactoeKlejda from '../assets/img/tictactoe-klej.png'
import tictactoeXutik from '../assets/img/tictactoe-xutik.jpg'

const project = (
  title,
  techStack,
  author,
  image,
  deploymentLink,
  githubLink
) => {
  return {
    title,
    techStack,
    author,
    image,
    deploymentLink,
    githubLink
  }
}

const projects = [
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    calculatorKGM,
    'https://kevingarciamartin.github.io/calculator/',
    'https://github.com/kevingarciamartin/calculator'
  ),
  project(
    'Restaurant',
    ['Webpack', 'JavaScript', 'CSS', 'HTML'],
    'Kevin Garcia Martin',
    restaurantKGM,
    'https://kevingarciamartin.github.io/restaurant-page/',
    'https://github.com/kevingarciamartin/restaurant-page'
  ),
  project(
    'Etch-A-Sketch',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    etchASketchKJW,
    'https://maybejod.github.io/ODIN-etch-a-sketch/',
    'https://github.com/MaybeJod/ODIN-etch-a-sketch'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kiattisak Jod Wongphayak',
    calculatorKJW,
    'https://maybejod.github.io/ODIN-calculator/',
    'https://github.com/MaybeJod/ODIN-calculator'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    calculatorXutik,
    'https://xutik.github.io/calculator/',
    'https://github.com/Xutik/calculator'
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    tictactoeXutik,
    'https://xutik.github.io/TicTacToe/',
    'https://github.com/Xutik/TicTacToe'
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Klejda Mamaj',
    tictactoeKlejda,
    'https://klejda59.github.io/tictactoe/',
    'https://github.com/klejda59/tictactoe'
  ),
  project(
    'Etch-a-sketch',
    ['Webpack', 'JavaScript', 'CSS', 'HTML'],
    'Klejda Mamaj',
    etchASketchKlejda,
    'https://klejda59.github.io/etch-a-sketch/',
    'https://github.com/klejda59/etch-a-sketch.git'
  )
]

export default function renderProjects() {
  const projectsSection = document.querySelector('#projects')
  const projectsSectionTitle = document.createElement('h2')
  const gridContainer = document.createElement('div')

  gridContainer.classList.add('grid-container')

  projectsSectionTitle.textContent = 'Projects'

  projectsSection.appendChild(projectsSectionTitle)
  projectsSection.appendChild(gridContainer)

  projects.forEach((project) => {
    const card = document.createElement('article')

    card.classList.add('card')

    card.innerHTML = `
      <img class="card-img" src="${project.image}" alt="project image">
      <div class="card-text">
        <div class="card-title">
          <h3>${project.title}</h3>
          <div class="card-link">
            <a href="${project.deploymentLink}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
            </a>
            <a href="${project.githubLink}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
            </a>
          </div>
        </div>
        <p class="card-tech-stack">${project.techStack.join(', ')}</p>
        <p class="card-author">${project.author}</p>
      </div>
    `

    gridContainer.appendChild(card)
  })
}
