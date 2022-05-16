let switches = document.getElementById("switch");
let bulb = document.getElementById("bulb");
document.querySelector(".box").style.border = "2px solid black";
document.querySelector("hr").style.border = "2px solid black";
let bulbOFF = true;

let bulbOnOFF = ()=>{
    if(bulbOFF == true){
        bulb.src = "bulb-on.png";
        switches.src = "switch-on.png";
        document.querySelector(".box").style.border = "2px solid yellow";
        document.querySelector("hr").style.border = "2px solid yellow";
        bulbOFF = false;
    }else{
        bulb.src = "bulb off.png";
        switches.src = "switch-off.png";
        document.querySelector(".box").style.border = "2px solid black";
        document.querySelector("hr").style.border = "2px solid black";
        bulbOFF=true;
    }

}
switches.addEventListener('click',bulbOnOFF)