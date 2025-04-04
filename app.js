function playSound(e){
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return; //this stops the function from running
   audio.currentTime=0; //rewinds the process back to the start
   audio.play();
   key.classList.add('playing'); 
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //this skips if it is not transform
    this.classList.remove('playing'); //this is the keys
}

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', playSound);