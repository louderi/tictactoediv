togglePlayers = true;
turnPreview = true;

let createTable = function(){

    let image = document.createElement("IMG");
    image.onmouseover=function(){showHover(this)};

   let table = document.createElement("TABLE");

   let row1 = document.createElement("TR");
   let row2 = document.createElement("TR");
   let row3 = document.createElement("TR");

   let data1 = document.createElement("TD");
   let data2 = document.createElement("TD");
   let data3 = document.createElement("TD");

   let data4 = document.createElement("TD");
   let data5 = document.createElement("TD");
   let data6 = document.createElement("TD");

    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");

    data1.innerText = "a";
    data2.innerText = "b";
    data3.innerText = "c";
    data4.innerText = "d";
    data5.innerText = "e";
    data6.innerText = "f";
    data7.innerText = "g";
    data8.innerText = "h";
    data9.innerText = "i";

    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);

    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);

    let content = document.getElementById("content");
    content.appendChild(table);

};

let toggleTurns = function(id){

    if(togglePlayers === true){
        id.style.backgroundColor= "peachpuff";
        togglePlayers = false;
    } else {
        id.style.backgroundColor = "pink";
        togglePlayers = true;
    }
};

let mouseOver = function(id){

    id.style.backgroundColor = "blue";



}
