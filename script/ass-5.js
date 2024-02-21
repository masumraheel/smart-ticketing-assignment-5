const allBtn= document.getElementsByClassName("add-btn");

for (const btn of allBtn){
    btn.addEventListener("click", function (event){
        const seat=event.target.innerText;

        btn.classList.add("bg-green-400");

        const seatCount=getConvertedValue("ticket-count");
        document.getElementById("ticket-count").innerText=seatCount+1;

        const result=getConvertedValue('total-seat');
        document.getElementById('total-seat').innerText=result-1;



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

        updateTotalPrice(p3.innerText);
        updateGrandTotal()
    })
}

// price section start
function updateGrandTotal(discount){
    const totalPrice= getConvertedValue("total-price");
    if(discount==undefined){
        document.getElementById("grand-total").innerText=totalPrice;
    }
    else{
       const couponCode= document.getElementById("coupon-code").value;
       if(couponCode=="NEW15"){
        const discountedN= totalPrice * .15;
        document.getElementById("grand-total").innerText=totalPrice-discountedN;
       }
       else if(couponCode=="Couple 20"){
        const discountedC= totalPrice *.2;
        document.getElementById("grand-total").innerText=totalPrice-discountedC;
       }
       else{
        alert('This coupon Code is not Valid')
       }
    }

}

function updateTotalPrice(value){
    const totalPrice= getConvertedValue("total-price");
    const sum= totalPrice+parseInt(value);
    document.getElementById("total-price").innerText=sum;
}






// Total seat button part
function getConvertedValue(id){
    const totalSeat=document.getElementById(id).innerText;
    const convertTotalSeat=parseInt(totalSeat);
    return convertTotalSeat;
}
// const result=getConvertedValue('total-seat');
// // console.log(result);


