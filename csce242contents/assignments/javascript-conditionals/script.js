const Ex1Clicked = () => {
    const section1 = document.getElementById("section-1");
    section1.style.display = "inline-block";
    const section2 = document.getElementById("section-2");
    section2.style.display = "none";
}

const Ex2Clicked = () => {
    const section2 = document.getElementById("section-2");
    section2.style.display = "inline-block";
    const section1 = document.getElementById("section-1");
    section1.style.display = "none";
}


window.onload = () => {
    document.getElementById("ex-1-section").onclick = Ex1Clicked;
    document.getElementById("ex-2-section").onclick = Ex2Clicked;
}