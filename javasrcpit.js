document.getElementById('contactForm')
.addEventListener('submit',
function(e){
    e.preventDefalt();
    let name = document.getElementById('fname').value;

    let email = document.getElementById(emailInput).value;

    let message =document.getElementById('messageInput').value;

    if (name ===''){
        alert('Please enter your name');
        return;
    }

    if (!email.includes('@')) {
    alert('Please enter a vaild email address');
       return;
}
    if(message ===''){
        alert('Please enter your message');
        return;
    }
      alert('Thank you for your message' + name + '! We will contact you soon.');
});

var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
