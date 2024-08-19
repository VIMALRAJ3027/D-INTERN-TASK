
const durationDisplay = document.querySelector('.min');
let callDuration = 89; 

const updateDuration = () => {
    const minutes = Math.floor(callDuration / 60);
    const seconds = callDuration % 60;
    durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} Min`;
};

const timer = setInterval(() => {
    callDuration += 1;
    updateDuration();
}, 1000); 

const endCallButton = document.querySelector('.video-callbutton-function-item');
endCallButton.addEventListener('click', () => {
    clearInterval(timer); 
    alert('Call Ended'); 

});

updateDuration();
