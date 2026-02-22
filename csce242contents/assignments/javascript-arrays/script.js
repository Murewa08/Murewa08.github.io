const showSongs = () => {
    const resultDiv = document.getElementById("result");
    const ulElem = document.createElement("ul");
    resultDiv.append(ulElem);

    const happySongTitle = ["Happy by Pharrell Williams", "I'm Standing by Ellie Rills"];
    /**const happySongVideo = ["<iframe https://www.youtube.com/embed/ZbZSe6N_BXs?si=dEKI1fhnpT8OWhzs title = YouTube video player frameborder= 0 allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerpolicy= strict-origin-when-cross-origin allowfullscreen></iframe>"];

    const songsArray = {};

    for(let i = 0; i< happySongTitle.length; i++)
    {
        songsArray[happySongTitle[i]] = happySongVideo[i];
    }*/

    for(let i in happySongTitle)
    {
        const liElem = document.createElement("li");
        liElem.textContent = happySongTitle[i];
        ulElem.append(liElem);
    }
};

window.onload = () => {
    document.getElementById("mood-selector").onclick = showSongs;
};