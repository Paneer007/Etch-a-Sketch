let gridBody = document.querySelector('#gridBody');
let gridRow;
let gridColumn;
for (let i=0;i<16;i++){
    gridRow=document.createElement('div');
    gridBody.appendChild(gridRow);
    gridRow.classList.add(`Row`);
    for (let j=0;j<16;j++){
        gridColumn=document.createElement('div');
        gridRow.appendChild(gridColumn);
        gridColumn.classList.add('column');
    }
}