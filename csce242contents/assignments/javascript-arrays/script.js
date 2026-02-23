const resultDiv = document.getElementById("result");
const videoDiv = document.getElementById("video-box");
const btnDisney = document.getElementById("btn-disney");
const btnHappy = document.getElementById("btn-happy");
const dropBtn = document.getElementById('dropbtn');
const myDropdown = document.getElementById('myDropdown');

const happySongTitle = [
  "Happy by Pharrell Williams",
  "Don't Stop Me Now by Queen",
  "Can't Stop This Feeling by Justin Timberlake",
  "Don't Worry Be Happy by Bobby McFerrin",
  "I'm Still Standing by Taron Egerton"
];

const happySongLink = []; 
  happySongLink["Happy by Pharrell Williams"] = "ZbZSe6N_BXs";
  happySongLink["Don't Stop Me Now by Queen"] = "HgzGwKwLmgM";
  happySongLink["Can't Stop This Feeling by Justin Timberlake"] = "ru0K8uYEZWw";
  happySongLink["Don't Worry Be Happy by Bobby McFerrin"] = "d-diB65scQU";
  happySongLink["I'm Still Standing by Taron Egerton"] = "pHZneOidj9A";

const disneySongTitle = [
  "I'm A Star from Wish",
  "Into The Unknown from Frozen II",
  "How Far I'll Go from Moana",
  "The Family Madrigal from Encanto",
  "Un Poco Loco from Coco"
];

const disneySongLink = [];
  disneySongLink["I'm A Star from Wish"] = "V-ZSXJlBBrg";
  disneySongLink["Into The Unknown from Frozen II"] = "gIOyB9ZXn8s";
  disneySongLink["How Far I'll Go from Moana"] = "cPAbx5kgCJo";
  disneySongLink["The Family Madrigal from Encanto"] = "Yp5nPGWWMh4";
  disneySongLink["Un Poco Loco from Coco"] = "yg8116aeD7E";

const  showHappySongs = () => {
  resultDiv.innerHTML = "";
  videoDiv.innerHTML = "";

  const ulElem = document.createElement("ul");

  for (let i = 0; i < happySongTitle.length; i++) {
    const title = happySongTitle[i];
    const liElem = document.createElement("li");

    const link = document.createElement("p");
    link.textContent = title;
    link.style.cursor = "pointer";

    link.onclick = () => {
      const embededPortion = happySongLink[title];
      videoDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${embededPortion}" frameborder="0" allowfullscreen></iframe>`;
      videoDiv.style.display = "block";
    };

    liElem.appendChild(link); 
    ulElem.appendChild(liElem);
  }

  resultDiv.appendChild(ulElem);
}

const showDisneySongs = () => {
  resultDiv.innerHTML = "";
  videoDiv.innerHTML = "";
  videoDiv.style.display = "none";

  const ulElem = document.createElement("ul");

  for (let i = 0; i < disneySongTitle.length; i++) {
    const title = disneySongTitle[i];
    const liElem = document.createElement("li");
    const link = document.createElement("p");
    link.textContent = title;
    link.style.cursor = "pointer";

    link.onclick = () => {
      const embededPortion = disneySongLink[title];
      videoDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${embededPortion}" frameborder="0" allowfullscreen></iframe>`;
      videoDiv.style.display = "block";
    };

    liElem.appendChild(link);
    ulElem.appendChild(liElem);
  }

  resultDiv.appendChild(ulElem);
}

window.onload = () => {
  document.getElementById("btn-happy").onclick = showHappySongs;
  document.getElementById("btn-disney").onclick = showDisneySongs;
};

// This toggles the dropdown menu when the button is clicked
dropBtn.addEventListener('click', function (ev) {
  myDropdown.classList.toggle('show');
});
