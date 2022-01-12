import _ from 'lodash';
import './index.css';
import Logo from './webpack-logo.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    const brandLogo = new Image();
    brandLogo.src = Logo;
    brandLogo.classList.add('logo');
    element.appendChild(brandLogo);
    return element;
}

document.body.appendChild(component())