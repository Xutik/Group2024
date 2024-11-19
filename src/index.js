import './styles/reset.css'
import './styles/style.css'

import { createNav } from './js/header.js'
import { createTeamSection } from './js/team.js';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main') || document.body;
    const team = createTeamSection();
    main.appendChild(team);
});

createNav()

