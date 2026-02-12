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

//sart and stop ball bouncing
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

/*Sart, Pause, Stop Buttons*/
const pDisplay = document.getElementById("p-count-display");
let count = 0;
let countInterval;
const startButton = document.getElementById("btn-start-count");

const startClicked = () => {
    countInterval = setInterval(()=>{
        startButton.disabled = true;
        pDisplay.innerHTML = count++;
    }, 500);
}

const pauseClicked = (e) => {
    startButton.disabled = false;
   clearInterval(countInterval);
}

const stopClicked = (e) => {
    startButton.disabled = false;
   clearInterval(countInterval);
   count = 0;
   pDisplay.innerHTML = count;
}

document.getElementById("btn-start-count").onclick = startClicked;
document.getElementById("btn-pause-count").onclick = pauseClicked;
document.getElementById("btn-stop-count").onclick = stopClicked;

/*Display the Date*/
setInterval(()=>{
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();

    document.getElementById("p-date").innerHTML = `${month + 1}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}, 500);

/*Money Raising section*/

const amountEntered = () => {
    const errorMessage = document.getElementById("p-error-message");
    const amount = document.getElementById("txt-donation-amount").value;
    if(amount < 0)
    {
        errorMessage.innerHTML = "Invalid number! Try again.";
    }
    else if(isNaN(amount))
    {
        errorMessage.innerHTML = "Not a number! Try again.";
    }
    else if(amount == 0)
    {
        errorMessage.innerHTML = "Amount must be greater than 0!";
    }
    else
    {
        errorMessage.innerHTML = "";
    }
}
document.getElementById("txt-donation-amount").onchange = amountEntered;