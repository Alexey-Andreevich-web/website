let baseSize = 16;

function changeFontSize(step) {
    const newSize = baseSize + step * 2;
    document.body.style.fontSize = `${newSize}px`;
}
