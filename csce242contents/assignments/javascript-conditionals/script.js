const timeLeft = document.getElementById("time-left");
const funMessage = document.getElementById("fun-message");
const countdownTimer = document.getElementById("countdown-timer");
const countdownMessage = document.getElementById("countdown-message");
const minutesSlider = document.getElementById("minutes-slider");

currentHour = new Date().getHours();
currentMinute = new Date().getMinutes();
showTime = currentHour + ":" + currentMinute;
const Ex1Clicked = () => {
    const section1 = document.getElementById("section-1");
    section1.style.display = "inline-block";
    const section2 = document.getElementById("section-2");
    section2.style.display = "none";

    timeLeft.innerHTML = `Current time: ${showTime}`;
    if(currentHour == 8) {
    
        if(currentMinute >= 0 && currentMinute < 15)
        {
            timeLeft.innerHTML = (30 - currentMinute) + " minutes";
            funMessage.innerHTML = "Its almost time for class! Time to sprint, athlete!";
            minutesSlider.value = currentMinute;
        }

        
    if(currentMinute >= 15 && currentMinute < 30)
        {
            timeLeft.innerHTML = (30 - currentMinute) + " minutes";
            funMessage.innerHTML = " We can still make a pit stop at Starbucks!";
            minutesSlider.value = currentMinute;
        }
    }

    else if(currentHour < 8) {
        if(currentMinute >= 30 && currentMinute <= 45) 
        {
            timeLeft.innerHTML = (60 - currentMinute) + 30 + " minutes";
            funMessage.innerHTML = "We've got quite some time. Let's review some notes!";
            minutesSlider.value = currentMinute;
        }

        if(currentMinute > 45)
        {
            timeLeft.innerHTML = (60 - currentMinute) + 30 + " minutes";
            funMessage.innerHTML = "We have more than 45 minutes! Feel free to take a nap!";
            minutesSlider.value = currentMinute;
        }
    }
}

const Ex2Clicked = () => {
    const section2 = document.getElementById("section-2");
    section2.style.display = "inline-block";
    const section1 = document.getElementById("section-1");
    section1.style.display = "none";
    //countdownTimer.innerHTML = `Current time: ${showTime}`;

    if(currentHour <= 8) {
        if(currentMinute < 15)
        {
            countdownTimer.innerHTML = (30 - currentMinute) + " minutes";
            countdownMessage.innerHTML = "It's almost time for class! Time to sprint, athlete!";
            //minutesSlider.value = currentMinute;
        }
        else if((30 - currentMinute) <= 15 && (30 - currentMinute) >= 10)
        {
            countdownTimer.innerHTML = (30 - currentMinute) + " minutes";
            countdownMessage.innerHTML = " We can still make a pit stop at Starbucks!";
            //minutesSlider.value = currentMinute;
        }
        else if((30 - currentMinute) >= 5 && (30 - currentMinute) <= 10)
        {
            countdownTimer.innerHTML = (30 - currentMinute) + " minutes";
            countdownMessage.innerHTML = "We're getting close to class time! Let's get ready! ";
            //minutesSlider.value = currentMinute;
        }
        else if((30 - currentMinute) >= 0 && (30 - currentMinute) <= 5)
        {
            countdownTimer.innerHTML = (30 - currentMinute) + " minutes";
            countdownMessage.innerHTML = "Quick! Grab your materials and get to class!";
            //minutesSlider.value = currentMinute;
        }
    }
    else if(currentHour == 8) {
        if((30 - currentMinute) >= -5 && (30 - currentMinute) < 0)
        {
            countdownTimer.innerHTML = "Class started " + Math.abs(30 -currentMinute) + " minutes ago";
            //countdownMessage.innerHTML = "Class has already started! Better late than never!";
        }
        else if((30 - currentMinute) >= -15 && (30 - currentMinute) < -5)
        {
            countdownTimer.innerHTML = "Class started " + Math.abs(30 -currentMinute) + " minutes ago";
            countdownMessage.innerHTML = "We're a few minutes late, but we can still make it to class! Let's go!";
        }
        else if((30 - currentMinute) < -15)
        {
            countdownTimer.innerHTML = "Class started " + Math.abs(30 -currentMinute) + " minutes ago";
            countdownMessage.innerHTML = "You missed class! Let's just go to the library and study!";
        }
    }
    else if(currentHour > 8) {
            //countdownTimer.innerHTML = "Class started over " + Math.abs(30 -currentMinute) + " minutes ago";
            countdownMessage.innerHTML = "You missed class! Let's just go to the library and study!";
    }
}

const button1 = document.getElementById("ex-1-section");
const button2 = document.getElementById("ex-2-section");
const state1 = document.getElementById("toggle-1");
const state2 = document.getElementById("toggle-2");
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

const toggle2Clicked = () => 
{
    button1.style.display = "none";
    button2.style.display = "none";
    state1.style.display = "block";
    state2.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
}

const toggle1Clicked = () =>
{
    button1.style.display = "block";
    button2.style.display = "block";
    state2.style.display = "block";
    state1.style.display = "none";
}
window.onload = () => {
    document.getElementById("ex-1-section").onclick = Ex1Clicked;
    document.getElementById("ex-2-section").onclick = Ex2Clicked;
    document.getElementById("toggle-1").onclick = toggle1Clicked;
    document.getElementById("toggle-2").onclick = toggle2Clicked;
}