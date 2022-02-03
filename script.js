const container = document.querySelector('.fireworks-example')
const cover = document.querySelector('.cover')
const fireworks = new Fireworks(container, {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1,
      particles: 500,
      trace: 3,
      explosion: 10,
      autoresize: true,
      brightness: { 
        min: 50, 
        max: 80,
        decay: { min: 0.015, max: 0.03 }
      },
      mouse: { 
        click: false, 
        move: false, 
        max: 3 
      },
      boundaries: { 
        x: 50, 
        y: 50, 
        width: container.clientWidth, 
        height: container.clientHeight 
      },
      sound: {
        enable: true,
        files: [
          'explosion0.mp3',
          'explosion1.mp3',
          'explosion2.mp3'
        ],
        volume: { min: 1, max: 2 },
      }
});
var audio = new Audio("./Audio/Auld Lang Syne (with lyrics) - Jingle Punks.mp3")
window.addEventListener('load', (event) => {
    setTimeout(()=>{
     fireworks.start();
     audio.play();
    },3000);
  });