let boxes = document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');

let turnO = true; //playerX ,player Y

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Box is Clicked");
        if(turnO){// id turn of player O
            box.innerText="O";
            turnO=false;
        }else{// player x turn
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner()
    });
});

const checkWinner=()=>{
    for(let pattern of winpattern){
    let posval1=boxes[pattern[0]].innerText;
    let posval2=boxes[pattern[1]].innerText;
    let posval3=boxes[pattern[2]].innerText;

    if(posval1 !="" && posval2 !="" && posval3 !=""){
        if(posval1===posval2 && posval2===posval3){
            console.log("Winner",posval1)

        }
     }
    }
    
}