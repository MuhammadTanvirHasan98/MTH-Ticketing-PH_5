
const allBtn = document.getElementsByClassName("add-btn");


for(const btn of allBtn){
    btn.addEventListener("click", function(event){
     const name = btn.innerText;
     btn.style.backgroundColor = '#1DD100';
     btn.style.color = 'white';

     event.target.setAttribute("disabled", false);

     const price = getConvertedValue('total');
      const selectedContainer = document.getElementById(
        "table"
      );

      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.classList.add("pl-7");
      const td2 = document.createElement("td");
      td2.classList.add("text-center");
      const td3 = document.createElement("td");
      td3.classList.add("text-right");
      td1.innerText = name;
      td2.innerText = "Economy";
      td3.innerText = "550";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      selectedContainer.appendChild(tr);


      updateSeatCount();
      updateLeftSeats();
      updateTotalCost(price);
      updateGrandTotal();
    });
}

function updateSeatCount() {
  const defaultCount = document.getElementById("seat-count").innerText;
  const convertDefaultCount = parseInt(defaultCount);
  document.getElementById("seat-count").innerText = convertDefaultCount + 1;
}


function updateLeftSeats() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}


function updateTotalCost(price) {
  const perSeat = 550;
  document.getElementById("total").innerText = perSeat + price;
}

function updateGrandTotal(control) {
  const previousTotal = getConvertedValue("total");
  if (control == undefined) {
    document.getElementById("grandTotal").innerText = previousTotal;
  } 
  else {
    const couponCode = document.getElementById("coupon").value;

    if (couponCode == "NEW15") {
      const discount = previousTotal * 0.15;
      if(discount > 0){
        document.getElementById("coupon-field").style.display = 'none';
        document.getElementById("grandTotal").innerText =
        previousTotal - discount;
      }
        else{
          alert("Invalid Coupon Code");
          return;
        }
        
    } 
    else if(couponCode == "Couple 20"){
      const discount = previousTotal * 0.20;
      if(discount > 0){
        document.getElementById("coupon-field").style.display = 'none';
        document.getElementById("grandTotal").innerText =
        previousTotal - discount;
      }
        else{
          alert("Invalid Coupon Code");
          return;
        }
    }

    else {
      alert("Invalid Coupon Code");
      return;
    }
  }

}


function getConvertedValue(id){
   const price = document.getElementById(id).innerText;
   const convertPrice = parseInt(price);
   return convertPrice;
}
