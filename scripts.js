function switchLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    elements.forEach(element => {
        if (document.documentElement.lang === 'fr') {
            element.innerText = element.getAttribute('data-en');
        } else {
            element.innerText = element.getAttribute('data-fr');
        }
    });
    document.documentElement.lang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    document.getElementById("lang-switch").innerText = document.documentElement.lang === 'fr' ? "Switch to English" : "Basculer en français";
}
