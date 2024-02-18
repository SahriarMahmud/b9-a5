// document.addEventListener('click', function(){
//     const buttons = document.querySelectorAll('.seat');
//     for(const button of buttons){
//         button.addEventListener('click', function(){
//             button.style.backgroundColor = colorChange();
//         });
//     }
// })


// let seatNumber = 40;
// function countingSeat() {
//     const newValue = document.getElementById('seat-number');
//     let newValueNumber = parseInt(newValue.innerText);
//     seatNumber--;
//     newValueNumber = seatNumber-1;

//     return seatNumber >= 0;
    // console.log(newValueNumber);
// }

document.addEventListener('click', function () {
    const seats = document.querySelectorAll('.seat');
    for (const seat of seats) {
        seat.addEventListener('click', function () {
            seat.style.backgroundColor = colorChange();
            seat.disable = true;
        });
    }
})



function colorChange(){
    const coloR = '#1DD100';
    return coloR;
}




