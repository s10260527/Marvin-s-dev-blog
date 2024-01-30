console.log('Need to wait');

setTimeout(function() {
  console.log('setting window location');
  window.location.href = "devblog.html";
}, 10000);

let countdown = 10;
const countdownElement = document.querySelector('.countdown');

const intervalId = setInterval(() => {
  countdown--;
  countdownElement.textContent = `you will be redirected in ${countdown} seconds...`;

  if (countdown === 0) {
    clearInterval(intervalId);
  }
}, 1000);

window.onload = function() {
  setTimeout(function() {
    var directLink = document.querySelector('.direct-link');
    directLink.style.visibility = 'visible';
    directLink.style.pointerEvents = 'auto';
  }, 4000);
};