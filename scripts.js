function switchLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const frText = element.getAttribute('data-fr');
        if (document.documentElement.lang === 'fr') {
            element.innerText = enText;
        } else {
            element.innerText = frText;
        }
    });
    document.documentElement.lang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    document.getElementById("lang-switch").innerText = document.documentElement.lang === 'fr' ? "Switch to English" : "Basculer en français";
}
