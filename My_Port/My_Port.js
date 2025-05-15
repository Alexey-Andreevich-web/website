let baseSize = 16;

function changeFontSize(step) {
    const newSize = baseSize + step * 2;
    document.body.style.fontSize = `${newSize}px`;
}
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("portfolioSelect");
    select.addEventListener("change", function () {
        const url = this.value;
        if (url) {
            window.location.href = url;
        }
    });
});
// Пример данных
const data = {
    "главная": "/website/index.html",
    "преподавателю": "/website/Prepod/Prepod.html",
    "обучающемуся": "/website/Obych/Obych.html",
    "кнопка": "/website/NO_1/No_1.html",
    "мое портфолио": "/website/My_Port/My_Port.html",
    "портфолио учащихся": "/website/Obych_Port/ObychPort.html",
    "обо мне": "/website/O_Mne/O_Mne.html"
};

function performSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const errorMessage = document.getElementById("errorMessage");

    if (data.hasOwnProperty(query)) {
        // Переход на нужную страницу
        window.location.href = data[query];
    } else {
        // Показываем сообщение, если совпадений нет
        errorMessage.textContent = "Страница по запросу не найдена.";
    }
}
