
let callDuration = 0; 
const durationDisplay = document.querySelector('.min');
const interval = setInterval(() => {
    callDuration += 1;
    const minutes = Math.floor(callDuration / 60);
    const seconds = callDuration % 60;
    durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} Min`;
}, 1000); 

const endCall = () => {
    clearInterval(interval); 
    alert('Call ended');
};

const endCallButton = document.createElement('button');
endCallButton.textContent = 'End Call';
endCallButton.addEventListener('click', endCall);

document.body.appendChild(endCallButton);
