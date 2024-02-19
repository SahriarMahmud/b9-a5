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
    const inputValue = document.getElementById('coupon-field').value;

    if(inputValue === 'NEW15'){
        const currentTotal = parseFloat(document.getElementById('grand-total').innerText);
        const newTotal = currentTotal * 0.15;
        const finalPrice = currentTotal - newTotal;
        document.getElementById('grand-total').innerText = finalPrice.toFixed(2);;
    }
    else if(inputValue === 'Coupon 20'){
        const currentTotal = parseFloat(document.getElementById('grand-total').innerText);
        const newTotal2 = currentTotal * 0.20;
        const finalPrice2 = currentTotal - newTotal2;
        document.getElementById('grand-total').innerText = finalPrice2.toFixed(2);
      } 
      else if(inputValue === ''){
        setInnerText('grand-total', convertedTotalCost);
    }
    else {
        setInnerText('grand-total', convertedTotalCost);
        alert("Please enter a valid coupon in the input field.");
        document.getElementById('grand-total').value = '';

    }
    
        
    
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function colorChange() {
    const coloR = '#1DD100';
    return coloR;
}


