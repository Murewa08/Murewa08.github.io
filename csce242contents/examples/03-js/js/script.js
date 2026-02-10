//Button Click Example
document.getElementById("btn-show-message").onclick = () => {
    document.getElementById("p-message").innerHTML = "Hi Murewa";
};

//Link Click Example
//e is the event (clicking)
//e.currentTarget is the element the event was performed on (the link)
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); //not go to the link's destinations
    console.log(e.currentTarget);
    e.currentTarget.innerHTML = "Clicked";
}

//sart band stop ball bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");
    if(e.currentTarget.innerHTML.toLowerCase()  == "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce");
    }
    else
    {
        e.currentTarget.innerHTML = "Start";
        ball.classList.remove("bounce");
    }
}

//Plant Health Example
document.getElementById("txt-num-days").onchange = (e) => {
    const plantMessage = parseInt(e.currentTarget.value);
    const p = document.getElementById("p-plant-message")

    if(plantMessage < 0) {
        p.innerHTML = "Yay! We were fed today!";
    }
    else if(plantMessage <= 2) {
        p.innerHTML = "I'm a little thirsty";
    }
    else if( plantMessage <= 5) {
        p.innerHTML = "I'm starting to wilt!";
    }
    else {
        p.innerHTML = "You killed me : (";
    }
}

//toggle nav
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
}