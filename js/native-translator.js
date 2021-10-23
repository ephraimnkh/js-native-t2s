const textForSpeech = document.getElementById('textForSpeech');
const form = document.getElementById('speechForm');
form.addEventListener('submit', speak);
const darkModeToggle = document.getElementById('darkModeToggle');
const navbars = document.getElementsByClassName('navbar');
const navbar = navbars[0];
const navbarBrands = document.getElementsByClassName('navbar-brand');
const navbarBrand = navbarBrands[0];
const inputText = document.getElementById('inputText');
const bodyElement = document.getElementById('body');


let darkMode = localStorage.getItem('dark-mode') || false;
darkModeToggle.innerHTML = darkMode ? 'Enable Light Mode' : 'Enable Dark Mode';

function speak(e) {
    e.preventDefault();
    const words = new SpeechSynthesisUtterance(textForSpeech.value);
    [words.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(words);
}

clearText = () => textForSpeech.value = '';

darkModeSwitch = () => {
    darkMode = !darkMode;
    localStorage.setItem('dark-mode', darkMode);
    darkModeToggle.innerHTML = darkMode ? 'Enable Light Mode' : 'Enable Dark Mode';
    lightsOut();
}

lightsOut = () => {
    if (darkMode) {
        bodyElement.setAttribute('style', 'background-color: #292929 !important;');
        textForSpeech.setAttribute('style', 'background-color: #2E2E2E !important; color: #fff !important; border-color: #525250 !important;');
        navbar.setAttribute('style', 'background-color: #292929 !important;');
        navbarBrand.setAttribute('style', 'color: #fff !important;');
        darkModeToggle.setAttribute('style', 'color: #fff !important;');
        inputText.setAttribute('style', 'color: #fff !important;');
    } else {
        bodyElement.setAttribute('style', 'background-color: #fff !important;');
        textForSpeech.setAttribute('style', 'background-color: #fff !important; color: #000 !important;');
        navbar.setAttribute('style', 'background-color: #fff !important;');
        navbarBrand.setAttribute('style', 'color: #000 !important;');
        darkModeToggle.setAttribute('style', 'color: #000 !important;');
        inputText.setAttribute('style', 'color: #000 !important;');
    }
}

lightsOut();