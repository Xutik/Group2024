import './styles/reset.css'
import './styles/style.css'

import createNav from './js/header.js'
import createHeroSection from './js/hero.js';
import createTeamSection from './js/team.js';
import renderProjects from './js/projects'

document.addEventListener('DOMContentLoaded', () => {
    createNav()
    renderProjects()
    createHeroSection()

    const main = document.querySelector('main') || document.body;
    const team = createTeamSection();
    main.appendChild(team);
});
