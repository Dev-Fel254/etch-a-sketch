for(x=0; x<256; x++){
    const myDivs = document.createElement("div");
    myDivs.className = "grid-item";
    document.getElementById('demo').appendChild(myDivs);
    myDivs.addEventListener("mouseover", ()=>{
        myDivs.style.backgroundColor = "black";
    });
}

