class Song{
    constructor(title, artist, album, year, genre, coverArt, code)
    {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.code = code;
    }

    get item() {
        const songSection = document.createElement("section");
        songSection.classList.add("song");
        const titleHeading = document.createElement("h3");
        titleHeading.innerText = this.title;
        const artistHeading = document.createElement("p");
        artistHeading.innerText = this.artist;
        songSection.appendChild(titleHeading);
        songSection.appendChild(artistHeading);

        songSection.appendChild(this.photo(this.coverArt));

        return songSection;
    }

    photo(coverArt) {
        const coverArtImage = document.createElement("img");
        coverArtImage.src = "images/" + coverArt;
        return coverArtImage;
    }
}

window.onload = () => {
    const songsList = document.getElementById("songs-list");
    let songs = [];

    songs.push(new Song("Wild Wild West ", "Will Smith (feat. Dru Hill & Kool Moe Dee) ", "Wild Wild West: Music Inspired by Motion Picture", 1999, "Country Rap ", "Wild-Wild-West-cover.jpg", ""));
    songs.push(new Song("Try Everything ", "Shakira ", "Zootopia (Original Motion Picture Soundtrack) ", 2016, " Pop ", "Try-Everything-cover.jpg", ""));
    songs.push(new Song("We Don't Talk About Bruno ", "Stephanie Beatriz & the Cast of Encanto ", "Encanto (Original Motion Picture Soundtrack) ", 2021, "Musical Soundtrack ", "We-Don't-Talk-About-Bruno-cover.jpg", ""));
    songs.push(new Song("I Just Can't Wait To Be King ", "JD McCrary, Shahadi Joseph, John Oliver ", "The Lion King (Original Motion Picture Soundtrack) ", 2019, " Musical Soundtrack ", "I-Just-Can't-Wait-To-Be-King-cover2.jpg", ""));

    for(let i in songs)
    {
        songsList.append(songs[i].item);
    }
    
};