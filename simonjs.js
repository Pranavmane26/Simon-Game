let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelup();

    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    //console.log(randidx);
    //console.log(randcolor);
    //console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    //console.log("curr level :",level);
    //let idx = level-1;
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText=`gameover! press any key to start`; 
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);;



}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}