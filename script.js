//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("sizeInfo").innerHTML = `Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize", updateSize);
updateSize(); // Call once to initialize

