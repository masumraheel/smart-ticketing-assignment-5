const allBtn= document.getElementsByClassName("add-btn");

for (const btn of allBtn){
    btn.addEventListener("click", function (event){
        const seat=event.target.innerText;
        // console.log(seat)

        const selectedSeat=document.getElementById("selected-seat");

        const div=document.createElement("div");
        div.classList.add("count-seat");

        const p1=document.createElement("p");
        p1.innerText=seat;
        const p2=document.createElement("p");
        p2.innerText="Economy";
        const p3=document.createElement("p");
        p3.innerText=550;
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedSeat.appendChild(div);
    })
}









// Total seat button part
function getConvertedValue(id){
    const totalSeat=document.getElementById(id).innerText;
    const convertTotalSeat=parseInt(totalSeat);
    return convertTotalSeat;
}
const result=getConvertedValue('total-seat');
console.log(result);


