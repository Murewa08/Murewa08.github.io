const Navs = document.getElementById("webpage-navs");
const openBtn = document.getElementById("toggle-open");
const closeBtn = document.getElementById("toggle-close");

const toggleOpen = () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    Navs.style.display = "block";
};

const toggleClose = () => {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    Navs.style.display = "none";
};

window.onload = () => {
    document.getElementById("toggle-open").onclick = toggleOpen;
    document.getElementById("toggle-close").onclick = toggleClose;
};