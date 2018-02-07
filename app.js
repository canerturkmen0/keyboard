let keyboard = document.querySelector('.keyboard');

function keyPressed(e) {
  const key = document.querySelector(`kbd[data-key='${e.keyCode}']`);
  const textBox = document.querySelector('.textBox');
  key.classList.add('keyPressedStyle');
  if (e.key == 'Backspace') {
    let newText = textBox.innerHTML.slice(0,-1);
    textBox.innerHTML = newText;
  }
  else if (e.key == 'Shift' || e.key=='CapsLock') {
     keyboard.classList.add('upperCase');
  }
  else if (e.keyCode == '13') {
    textBox.innerHTML = '';
  }
  else {
    textBox.innerHTML += e.key;
  }
}
function transitionend(e) {
    e.target.classList.remove('keyPressedStyle');
}
function keyUp(e){
    keyboard.classList.remove('upperCase');
}

window.addEventListener('keydown',keyPressed);
window.addEventListener('transitionend',transitionend);
window.addEventListener('keyup',keyUp);
