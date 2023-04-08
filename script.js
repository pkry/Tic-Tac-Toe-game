console.log("Welcome to Tic Tac Toe");
let turn ="x";
let gameover=false;

const changeturn=()=>{
    return turn==="x"? "0":"x";
}

const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxText");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
        && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won!";
            gameover=true;
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
              boxtext.innerText=turn;
              turn=changeturn();
              checkwin();
            if(gameover === false){
              document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    });
    turn = "x";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;

})