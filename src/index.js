import './styles/reset.css'
import './styles/style.css'

import createNav from './js/header.js'
import createHeroSection from './js/hero.js';
import renderProjects from './js/projects'
import createTeamSection from './js/team.js';

document.addEventListener('DOMContentLoaded', () => {
    createNav()
    renderProjects()
    createHeroSection()
    createTeamSection()
});
