let countdown = 20;
renderCountdown(countdown);
console.log('test')

function renderCountdown(number) {
    let n1 = Math.floor(number/100);
    number = number-(n1*100);
    let n2 = Math.floor(number/10);
    number = number-(n2*10);
    let n3 = number;
    const digit1 = document.getElementById('digit1');
    const digit2 = document.getElementById('digit2');
    const digit3 = document.getElementById('digit3');
    digit1.innerText = `${n1}`;
    digit2.innerText = `${n2}`;
    digit3.innerText = `${n3}`;
}
function decreaseCountdown() {
    if(countdown===0) {
        return resetCountdown();
    }
    renderCountdown(--countdown);
    if(countdown===0) {
        openPopUp('deathScreen');
    }
}

function resetCountdown() {
    renderCountdown(countdown=20);
}