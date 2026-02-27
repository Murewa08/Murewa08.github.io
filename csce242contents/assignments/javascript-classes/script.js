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

}
window.onload = () => {
    const songsList = document.getElementById("songs-list");
    let songs = [];

    songs.push(new Song("Blinding Lights ", "The Weeknd ", "After Hours ", 2020, "Synth-Pop ", "", ""));
    songs.push(new Song("Rolling in the Deep ", "Adele ", "21 ", 2010, " Pop ", "", ""));
    songs.push(new Song("Counting Stars ", "OneRepublic ", "Native ", 2013, " Pop Rock ", "", ""));
    songs.push(new Song("Someone Like You ", "Adele ", "21 ", 2011, " Pop ", "", ""));

    for(let i in songs)
    {
        console.log(`Title: ${songs[i].title},` + `Artist: ${songs[i].artist},` + `Album: ${songs[i].album},` + `Year: ${songs[i].year}, ` + `Genre: ${songs[i].genre}`);
    }
}