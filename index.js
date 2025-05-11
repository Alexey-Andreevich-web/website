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