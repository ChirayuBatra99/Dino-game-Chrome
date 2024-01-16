const dino= document.getElementById("dino");
const cactus= document.getElementById("cactus");

function jump() {
        if(dino.classList != "jump")
        {
            dino.classList.add("jump");
            setTimeout(function() {
                dino.classList.remove("jump");
            }, 300)
        }
}

let isAlive= setInterval(function() {
    let dinoTop= parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft= parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // console.log(dinoTop);
    console.log(cactusLeft);
    if(cactusLeft>0 && cactusLeft<=5 && dinoTop>10)
    {
        alert("game over");
        console.log("over");
    }   
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});


