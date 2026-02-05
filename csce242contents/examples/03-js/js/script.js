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
    e.currentTarget.innerHTML = "Clciked";
}