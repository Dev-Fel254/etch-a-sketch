const title = document.createElement("h1");
const btn = document.createElement("button");

title.textContent = "Click the button to generate your desired grid: i.e 9 for 9x9";
btn.textContent = "Grid";
document.body.appendChild(title);
document.body.appendChild(btn);

    //btn triggers the subsequent events
    btn.addEventListener("click", function () {
       const gridContainer = document.getElementById("demo");
       document.body.appendChild(gridContainer);
       gridContainer.innerHTML = "";

        const size = parseInt(prompt("Enter grid size(e.g., 9 for 9x9 grid)"));
        const gridSize = parseInt(size*size);
        console.log(gridSize);
        
        //This ensures the grid takes input between 1 and 64
        if(Number(gridSize) && gridSize > 0 && gridSize<= 4096){
            //Adjust grid-item width dynamically using calc()
                const itemWidth = `calc(100% / ${size})`;
            for(let i=1; i<=gridSize; i++){
                    const myDivs = document.createElement("div");
                    myDivs.className = "grid-item";
                    myDivs.style.flexBasis = itemWidth;
                    myDivs.innerText = i;
                    document.getElementById('demo').appendChild(myDivs);
                    myDivs.addEventListener("mouseover", ()=>{
                        myDivs.style.backgroundColor = "black"; 
                        });
                }
            }else{
                alert("Please enter a number in this range (1-64).");
        }
    });
    

