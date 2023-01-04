let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector(`.hour-hand`);
function setDate(){
    let now = new Date();
    let sec = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();
    let hoursDegrees = ((hours/12)*360)+90;
    let minsDegrees = ((mins/60)*360)+90;
    let secDegree = ((sec/60)*360)+90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secDegree}deg)`;
    //console.log(sec);
}
setInterval(setDate,1000);