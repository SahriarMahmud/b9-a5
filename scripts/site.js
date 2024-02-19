const allButton = document.getElementsByClassName('seat');
let count = 0;
let numbeR = 40;


for (const button of allButton) {
    button.addEventListener("click", function (e) {
        button.style.backgroundColor = colorChange()



        const seatName = e.target.childNodes[0].innerText;

        const selectedContainer = document.getElementById('selected-seat');
        const tr = document.createElement('tr')
        const tr0 = document.createElement('td');
        tr0.innerText = seatName;
        const tr1 = document.createElement('td');
        tr1.innerText = 'Economy';
        const tr2 = document.createElement('td');
        tr2.innerText = '550';

        tr.appendChild(tr0);
        tr.appendChild(tr1);
        tr.appendChild(tr2);
        selectedContainer.appendChild(tr);

        totalCost('total-cost', parseInt('550'))
        grandTotalCost('grand-total', parseInt('550'));
    
        
        count = count + 1;
        numbeR = numbeR - 1;

        setInnerText('total-seat', count);
        setInnerText('seat-number', numbeR);



    })
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + value;
    setInnerText(id, sum);
}



function grandTotalCost() {
    
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    const inputValue = document.getElementById('coupon-field').value.toLowerCase();
    const new15code = 'NEW15'.toLowerCase();
    const coupon20code = 'Coupon 20'.toLowerCase();

    if(inputValue === new15code){
        const currentTotal = parseFloat(document.getElementById('grand-total').innerText);
        const newTotal = currentTotal * 0.15;
        const finalPrice = currentTotal - newTotal;
        document.getElementById('grand-total').innerText = finalPrice.toFixed(2);
        document.getElementById('coupon-field').style.display = 'none';
        document.getElementById('coupon-btn').style.display = 'none';
    }
    else if(inputValue === coupon20code){
        const currentTotal = parseFloat(document.getElementById('grand-total').innerText);
        const newTotal2 = currentTotal * 0.20;
        const finalPrice2 = currentTotal - newTotal2;
        document.getElementById('grand-total').innerText = finalPrice2.toFixed(2);
        document.getElementById('coupon-field').style.display = 'none';
        document.getElementById('coupon-btn').style.display = 'none';
      } 
      else if(inputValue === ''){
        setInnerText('grand-total', convertedTotalCost);
    }
    else {
        setInnerText('grand-total', convertedTotalCost);
        alert("Please enter a valid coupon in the input field.");
        document.getElementById('coupon-field').value = '';
    }
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function colorChange() {
    const coloR = '#1DD100';
    return coloR;
}


function submission(){
    const nameValue = document.getElementById('name').value;
    
    const numberValue = document.getElementById('number').value;
    
    const finalButton = document.getElementById('final-btn');


    finalButton.disabled = numberValue.length === 0;
}


