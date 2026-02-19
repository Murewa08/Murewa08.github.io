document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i=0; i<10; i++)
    {
        const li = document.createElement("li");
        li.innerHTML = `I'm the ${i+1} element`;
        ul.append(li);
    }
};

document.getElementById("btn-count-range").onclick = () => {
    const startNumber = parseInt(document.getElementById("txt-start").value);
    const endNumber = parseInt(document.getElementById("txt-end").value);
    const errorP = document.getElementById("error-range");
    errorP.innerHTML = "";
    const divNumRange = document.getElementById("number-range");

    if(startNumber > endNumber) {
        errorP.innerHTML = "Not a valid range";
        return;
    }

    for(let i=startNumber; i < endNumber+1; i++)
    {
        const p = document.createElement("p");
        p.innerHTML = i;
        divNumRange.append(p);
        p.onlcick = () => {
            document.getElementById("number-range").innerHTML = `You clicked the ${i}th item`;
        };
    }
};

document.getElementById("a-show-toy").onclick = (e) => {
    e.preventDefault(); //Don't go to the link destination
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["fish", "guitar", "popsicle sticks", "rc cars", "shoe"];

    //traditional for loop
    for(let i=0; i<toys.length; i++)
    {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(i);
    }

    //second way preferred
    //(toy, i) where i is a parameter index
    toys.forEach((toy) => {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
};

//Associative Array
const toyPrices = [];
toyPrices["fish"] = 2.99;
toyPrices["guitar"] = 200;
toyPrices["popsicle sticks"] = 0.10;
toyPrices["rc car"] = 59.99;
toyPrices["shoe"] = 49.99;

for(let toy in toyPrices) {
    const toyTable = document.getElementById("toy-table");
    const tr = document.getElementById("tr");
    toyTable.append(tr);
    const tdToy = document.getElementById("td");
    tdToy.innerHTML = toy;
    tr.append(tdToy); 

    const tdPrice = document.getElementById("td");
    tdPrice.innerHTML = `$${toyPrices[toy]}`;
    tr.append(tdPrice);

    tr.onclick = () => {
        document.getElementById("p-toy-desc").innerHTML = `You want a ${toy} so ask your mom for $${toyPrices[toy]}`;
    };
}