const colori = ["blue" , "red", "yellow"];
const bgbtn = document.getElementById('bgcolor');
bgbtn.addEventListener("click", function (){
    var randomcolor =Math.floor(Math.random() * colori.length);

    document.body.style.backgroundColor = colori[randomcolor];

}); 

function myexplosion(){
    const bg = document.getElementById("bg");
    bg.className = "explosion";
    setTimeout(changebodyclass,2500);
}
function changebodyclass() {
    const body = document.getElementById("bomb");
    body.className = "body btnbomb";
    setTimeout(changenavclass,3000)
}
function changenavclass() {
    const nav = document.getElementById("navbar");
    nav.className = "body navbar navbar-expand-lg bg-body-tertiary";
    setTimeout(changebtn1vclass,1500)
    const bg = document.getElementById("body");
    bg.className = "body";
}
function changebtn1vclass(){
    const body = document.getElementById("bgcolor");
    body.className = "body btn fromlist";
}