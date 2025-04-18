// Toggle for Desktop Language List
window.toggleDesktopLanguageList = function() {
    const languageList = document.getElementById("DesktopLanguageList");
    const expanded = languageList.hasAttribute("hidden");
    document.querySelector(".disclosure__button").setAttribute("aria-expanded", expanded);
    languageList.toggleAttribute("hidden");
};

// Toggle for Mobile Language List
window.toggleMobileLanguageList = function() {
    const languageList = document.getElementById("MobileLanguageList");
    const expanded = languageList.hasAttribute("hidden");
    document.querySelector(".disclosure__button-mobile").setAttribute("aria-expanded", expanded);
    languageList.toggleAttribute("hidden");
};

// Shared function for changing language
window.changeLanguage = function(locale, target) {
    if (target === "desktop") {
        document.getElementById("desktop_language_code").value = locale;
    } else if (target === "mobile") {
        document.getElementById("mobile_language_code").value = locale;
    }
    document.querySelector(`.${target}-language-switcher form`).submit();
};