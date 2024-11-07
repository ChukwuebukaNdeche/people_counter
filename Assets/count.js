let saveEl = document.getElementById("saveel")
let countEl=document.getElementById("countel")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0;
}
