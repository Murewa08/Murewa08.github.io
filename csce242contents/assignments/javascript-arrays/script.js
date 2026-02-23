const resultDiv = document.getElementById("result");
const videoDiv = document.getElementById("video-box");
const btnDisney = document.getElementById("btn-disney");
const btnHappy = document.getElementById("btn-happy");

const showHappySongs = () => {
    btnDisney.style.display = "none";
    const ulElem = document.createElement("ul");
    resultDiv.append(ulElem);

    const happySongTitle = ["Happy by Pharrell Williams", "Don't Stop Me Now by Queen", "Can't Stop This Feeling by Justin Timberlake", "Don't Worry Be Happy by Bobby McFerrin", "I'm Still Standing by Taron Egerton"];
    
    const happySongLink = [];
    happySongLink["Happy by Pharrell Williams"] = "ZbZSe6N_BXs?si=6CSDKrtAa0D8bnig";
    happySongLink["Don't Stop Me Now by Queen"] = "HgzGwKwLmgM?si=swMmA5UbRcPleF76";
    happySongLink["Can't Stop This Feeling by Justin Timberlake"] = "ru0K8uYEZWw?si=33mMigfo63lFVfdM";
    happySongLink["Don't Worry be Happy by Bobby McFerrin"] = "d-diB65scQU?si=NSuD7FxafbsQYRqF";
    happySongLink["I'm Still Standing by Taron Egerton"] = "pHZneOidj9A?si=aMEdZLuwh7-fDBHH";

    for(let i in happySongTitle)
    {
        const liElem = document.createElement("li");
        liElem.innerHTML = happySongTitle[i];
        ulElem.append(liElem);
    }
};

const HappyMusicVid = () => {
    videoDiv.append(happySongLink["Happy by Pharrell Williams"]);
}

const showDisneySongs = () => {
    btnHappy.style.display = "none";
    const ulElem2 = document.createElement("ul");
    resultDiv.append(ulElem2);

    const disneySongTitle = ["I'm A Star from Wish", "Into The Unknown from Frozen II", "How Far I'll Go from Moana", "The Family Madrigal from Encanto", "Un Poco Loco from Coco"];
    
    const disneySongLink = [];
    disneySongLink["I'm A Star from Wish"] = "V-ZSXJlBBrg?si=XgWfjXa8eW0Fazfr";
    disneySongLink["Into The Unknown from Frozen II"] = "gIOyB9ZXn8s?si=499Kx-AcFtIIA8cg";
    disneySongLink["How Far I'll Go from Moana"] = "cPAbx5kgCJo?si=eopCOgclPUKGDyDd";
    disneySongLink["The Family Madrigal from Encanto"] = "Yp5nPGWWMh4?si=kW9EVQprV3Joa28d";
    disneySongLink["Un Poco Loco from Coco"] = "yg8116aeD7E?si=v0tpmth0b-G_IbAG";

    for(let i in disneySongTitle)
    {
        const liElem2 = document.createElement("li");
        liElem2.textContent = disneySongTitle[i];
        ulElem2.append(liElem2);
    }

}

window.onload = () => {
    document.getElementById("btn-happy").onclick = showHappySongs;
    document.getElementsByName("Happy By Pharrell Williams").onclick = HappyMusicVid;
    document.getElementById("btn-disney").onclick = showDisneySongs;
};