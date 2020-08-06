let darkMode = localStorage.getItem('darkMode');
const darkModeClass = 'dark-mode';
const darkModeToggler = document.getElementById('dark-mode-toggler');

const enableDarkMode = () => {
    document.body.classList.add(darkModeClass);
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggler.checked = true;
};

const disableDarkMode = () => {
    document.body.classList.remove(darkModeClass);
    localStorage.setItem('darkMode', null);
    darkModeToggler.checked = false;
};

if (darkMode == 'enabled') {
    enableDarkMode();
}

darkModeToggler.addEventListener("click", () => {
    let darkMode = localStorage.getItem('darkMode');
    darkMode == 'enabled'
        ? disableDarkMode()
        : enableDarkMode();
});