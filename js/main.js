const themeButton = document.querySelector(".btn-theme-mode");

//*  Проверка темной темы в localstorage
if (localStorage.getItem("themeMode") === "dark") {
    themeButton.classList.add("btn-theme-mode--active");
    document.body.classList.add("dark");
}

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matcher) {
    themeButton.classList.add("btn-theme-mode--active");
    document.body.classList.add("dark");
}

themeButton.onclick = function() {
    console.log("User clicked the button");
    themeButton.classList.toggle("btn-theme-mode--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("themeMode", "dark");
    } else {
        localStorage.setItem("themeMode", "light");
    }
}

/* 
classList.toggle("className")  ==>  убирает/добавляет класс модификатор. 
Важно указать название класса без точки. В случае когда его нет, оно создаст его и будет работать с ним.
*/