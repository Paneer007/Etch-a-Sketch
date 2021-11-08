let gridBody = document.querySelector('#gridBody');
let gridRow;
let gridColumn;
for (let i=0;i<64;i++){
    gridRow=document.createElement('div');
    gridBody.appendChild(gridRow);
    gridRow.classList.add(`Row`);
    gridRow.setAttribute('id',`Row${i+1}`)
    for (let j=0;j<64;j++){
        gridColumn=document.createElement('div');
        gridRow.appendChild(gridColumn);
        gridColumn.classList.add('column');
        gridColumn.addEventListener('mouseenter',changeColor);
        gridColumn.setAttribute('id',`Column${j+1} Row${i+1}`);
    }
}
function changeColor(e){
    console.log(e.target)
    e.target.style.backgroundColor='white'
}


