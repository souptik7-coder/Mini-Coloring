let h1=document.querySelector("h1");
let button=document.querySelector("button");
let div=document.querySelector("div");
button.addEventListener("click",function(){
        let color=randomcolor();
        div.style.backgroundColor=color;
        h1.style.color=color;
        h1.innerText=color;
        console.log(color);
})
function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red}, ${green},${blue})`;
    return color;
}