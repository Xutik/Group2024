const project = (title, techStack, author, image, link) => {
  return {
    title,
    techStack,
    author,
    image,
    link
  }
}

const projects = [
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
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Klejda Mamaj',
    'src/assets/img/tictactoe-klej.png',
    '#'
  ),
  project(
    'Calculator',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    'src/assets/img/calculator-xutik.jpg',
    '#'
  ),
  project(
    'Tic-Tac-Toe',
    ['JavaScript', 'CSS', 'HTML'],
    'Kseniia Prakhova',
    'src/assets/img/tictactoe-xutik.jpg',
    '#'
  )
]

export default function renderProjects() {
  // <h2>Projects</h2>
  //       <div class="grid-container">
  //           <div class="card">
  //               <div class="card-img"></div>
  //               <div class="card-text">
  //                   <div class="card-title">
  //                       <h3>Project name</h3>
  //                       <div class="card-link">
  //                           <a href="https://github.com/MaybeJod" target="_blank">
  //                               <img
  //                                   src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
  //                           </a>
  //                           <a href="https://codepen.io/notjod" target="_blank">
  //                               <img
  //                                   src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codepen/codepen-original.svg" />
  //                           </a>
  //                       </div>
  //                   </div>
  //                   <p>
  //                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  //                       Mollitia, laborum!
  //                   </p>
  //               </div>
  //           </div>
  //       </div>
}
