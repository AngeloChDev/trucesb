const colori = ["blue" , "red", "yellow"];
const bgbtn = document.getElementById('bgcolor');
bgbtn.addEventListener("click", function (){
    var randomcolor =Math.floor(Math.random() * colori.length);

    document.body.style.backgroundColor = colori[randomcolor];

}); 

function myexplosion(){
    const bg = document.getElementById("bg");
    bg.className = "explosion";
    setTimeout(changebodyclass,1700);
}
function changebodyclass() {
    const body = document.getElementById("bomb");
    body.className = "falldown btnbomb";
    setTimeout(changenavclass,1700)
}
function changenavclass() {
    const nav = document.getElementById("navbar");
    nav.className = "falldown navbar navbar-expand-lg bg-body-tertiary";
    setTimeout(changebtn1vclass,777)
    const bg = document.getElementById("body");
    bg.className = "falldown";
}
function changebtn1vclass(){
    const body = document.getElementById("bgcolor");
    body.className = "falldown btn fromlist";
}