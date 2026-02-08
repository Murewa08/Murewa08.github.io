const datePicked = () => {
    const date = document.getElementById("date-input").value;
    const message = document.getElementById("message");
    const formattedDate = date.split("-").reverse().join("/");

    message.innerHTML = "You picked the date: " + formattedDate;
};

const newImage = () => {
    const image = document.getElementById("sun-image");
    image.src = "images/sun-border-image.png";
}

const geometryClicked = () => {
    const triangle = document.getElementById("triangle");
    triangle.style.display = "block"; // Show the triangle when clicked
}

window.onload = () => {
    document.getElementById("date-input").onchange = datePicked;
    document.getElementById("sun-image").onclick = newImage;
    document.getElementById("geometry-box").onclick = geometryClicked;
};