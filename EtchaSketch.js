//complete this function to beautify the code
function gridGenerator(boxes=16,new_padding){
    var newPB=document.querySelector('#parentOfGridBody');
    newPB.removeChild(gridBody);
    gridBody=document.createElement('div');
    gridBody.classList.add='gridBody';
    newPB.appendChild(gridBody);
    for (let i=0;i<boxes;i++){
        gridRow=document.createElement('div');
        gridBody.appendChild(gridRow);
        gridRow.classList.add(`row`);
        gridRow.setAttribute('id',`Row${i+1}`)
        for (let j=0;j<boxes;j++){
            gridColumn=document.createElement('div');
            gridRow.appendChild(gridColumn);
            gridColumn.classList.add('column');
            gridColumn.addEventListener('mouseenter',changeColor);
            gridColumn.setAttribute('id',`Column${j+1} Row${i+1}`);
            gridColumn.setAttribute('style',`padding: ${new_padding}px`)
        }
    }
}

function change(boxes,new_padding){
    var newPB=document.querySelector('#parentOfGridBody');
    newPB.removeChild(gridBody);
    gridBody=document.createElement('div');
    gridBody.classList.add='gridBody';
    newPB.appendChild(gridBody);
    for (let i=0;i<boxes;i++){
        gridRow=document.createElement('div');
        gridBody.appendChild(gridRow);
        gridRow.classList.add(`row`);
        gridRow.setAttribute('id',`Row${i+1}`)
        for (let j=0;j<boxes;j++){
            gridColumn=document.createElement('div');
            gridRow.appendChild(gridColumn);
            gridColumn.classList.add('column');
            gridColumn.addEventListener('mouseenter',changeColor);
            gridColumn.setAttribute('id',`Column${j+1} Row${i+1}`);
            gridColumn.setAttribute('style',`padding: ${new_padding}px`)
        }
    }
}
function adjustFiness(event){
    let boxes =event.target.value;
    let padding_factor= boxes/16;
    let new_padding= 20/padding_factor;
    console.log(new_padding)
    change(boxes,new_padding);
}
let parentBody=document.querySelector('#parentOfGridBody');
let slider= document.querySelector('.slider');
slider.addEventListener('change',adjustFiness)
let gridBody = document.querySelector('#gridBody');
let gridRow;
let gridColumn;
let colorOfHover='white'
for (let i=0;i<16;i++){
    gridRow=document.createElement('div');
    gridBody.appendChild(gridRow);
    gridRow.classList.add(`row`);
    gridRow.setAttribute('id',`Row${i+1}`)
    for (let j=0;j<16;j++){
        gridColumn=document.createElement('div');
        gridRow.appendChild(gridColumn);
        gridColumn.classList.add('column');
        gridColumn.addEventListener('mouseenter',changeColor);
        gridColumn.setAttribute('id',`Column${j+1} Row${i+1}`);
    }
}
function changeColor(e){
    console.log(e.target)
    if(colorOfHover=='Rainbow'){
        e.target.style.backgroundColor=rainbow()
    }else{
        e.target.style.backgroundColor=`${colorOfHover}`;
    }
}
function choice_button(button){
    button.addEventListener('click',(e) => {
        colorOfHover=e.target.value;
        console.log(colorOfHover)
    })
}
function rainbow(){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    return `rgb(${r},${g},${b})`
}
let buttons = document.querySelectorAll('button')
buttons.forEach((button) =>{
    choice_button(button)
}
)