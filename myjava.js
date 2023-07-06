const colori = ["blue" , "red", "yellow"];
const bgbtn = document.getElementById('bgcolor');
const saycolor = document.querySelector('.saycolor')
bgbtn.addEventListener("click", function (){
    var randomcolor = getRandomNumber();
    console.log(randomcolor);
    document.body.style.backgroundColor = colori[randomcolor];
    saycolor.textContent = colori[randomcolor];
}); 

function getRandomNumber() {
    return Math.floor(Math.random() * colori.length);
}
function myexplosion(){
    const bg = document.getElementById("bg");
    bg.className = "explosion"
    setTimeout(changebodyclass,1500)
    

}
function changebodyclass() {
    const body = document.getElementById("body");
    body.className = "body"
}