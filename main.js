const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.hieght = window.innerHeight;
console.log(window.innerHeight, canvas.hieght);
// context.fillStyle = "red";
// context.fillRect(0, 0, 50, 50);
// context.fillStyle = "black";
// context.fillRect(0, 100, 100, 100);
// console.log(context);
// let x = 0;
// let dir = "ltr";
// const myInterval = setInterval(() => {
//   context.clearRect(x, 100, 100, 100);
//   context.fillStyle = "violet";
//   if (dir === "ltr") x += 100;
//   else x -= 100;
//   if (x >= canvas.width - 200) dir = "rtl";
//   if (x <= 0) dir = "ltr";
//   context.fillRect(x, 100, 100, 100);
// }, 500);
// let x1 = 0;
// let right = true;
// let step=100;
// const myInterval1 = setInterval(() => {
//   context.clearRect(x1, 0, 50, 50);
//   context.fillStyle = "tomato";
//   right?x1+=step:x1-=step;
//  if (x1 >= canvas.width - 100-step||x<=0) {
// right=!right;
//   }
// context.fillRect(x1, 0, 50, 50);
// }, 500);
// const floor = { x: 0, y: canvas.height - 50, width: canvas.width, height: 50 };
// context.fillStyle = "tomato";
// context.fillRect(floor.x, floor.y, floor.width, floor.height);
// const floor={
// x:0,
// y:canvas.height-this.height,
// width:canvas.width,
// height:50,
// };
// context.fillStyle = "purple";
// context.fillRect(floor.x, floor.y, floor.width, floor.height);
// const player = {
//   x:570,
//   y: canvas.height-150,
//   width: 100,
//   height: 100,
// };
// context.fillStyle = "yellow";
// context.fillRect(player.x, player.y, player.width, player.height);
// var x = 0;
// context.beginPath();
// context.fillStyle = "red";
// context.arc(120, 75, 30, 0, 2 * Math.PI);
// context.fill();
// context.beginPath();
// context.fillStyle = "blue";
// context.arc(120, 75, 50, 0, 2 * Math.PI);
// context.fill();
// context.beginPath();
// context.fillStyle = "green";
// context.arc(120, 75, 40, 0, 2 * Math.PI);
// context.fill();
// context.beginPath();
// context.fillStyle = "green";
// context.arc(230, 75, 40, 0, 2 * Math.PI);
// context.fill();
// context.fillStyle = "red";
// context.fillRect(0, 0, 50, 50);
// let x = 0;
// let dir = "ltr";
// const myInterval = setInterval(() => {
//   context.clearRect(x, 0, 50, 50);
//   context.fillStyle = "violet";
//   if (dir === "ltr") x += 20;
//   else x -= 20;
//   if (x >= canvas.width - 200) dir = "rtl";
//   if (x <= 0) dir = "ltr";
//   context.fillRect(x, 0, 50, 50);
// }, 500);
// context.fillStyle = "blue";
// context.fillRect(0, 50, 50, 50);
// let x1 = 0;
// let dir1 = "ltr";
// const myInterval1 = setInterval(() => {
//   context.clearRect(x1, 50, 50, 50);
//   context.fillStyle = "yellow";
//   if (dir1 === "ltr") x1 += 20;
//   else x1 -= 20;
//   if (x1 >= canvas.width - 200) dir1 = "rtl";
//   if (x1 <= 0) dir1= "ltr";
//   context.fillRect(x1, 50, 50, 50);
// }, 500);
// context.fillStyle = "green";
// context.fillRect(0, 100, 50, 50);
// let x2 = 0;
// let dir2= "ltr";
// const myInterval2 = setInterval(() => {
//   context.clearRect(x2, 100, 50, 50);
//   context.fillStyle = "tomato";
//   if (dir2 === "ltr") x2 += 20;
//   else x2 -= 20;
//   if (x2 >= canvas.width - 200) dir2= "rtl";
//   if (x2 <= 0) dir2= "ltr";
//   context.fillRect(x2, 100, 50, 50);
// }, 500);
// for (var i = 0; i < 10; i++) {
//     const x = Math.random() * context.canvas.width;
//     const y = Math.random() * context.canvas.height;
//     const r = parseInt(Math.random() * 255);
//     const g = parseInt(Math.random() * 255);
//     const b = parseInt(Math.random() * 255);
//     const a = Math.random();
//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//     context.fill();
//   }
//   for (let i = 0; i < 10; i++) {
//     const x = Math.random() * context.canvas.width;
//     const y = Math.random() * context.canvas.height;
//     const r = parseInt(Math.random() * 255);
//     const g = parseInt(Math.random() * 255);
//     const b = parseInt(Math.random() * 255);
//     const a = Math.random()*300;
//     context.beginPath();
//     context.fillRect(x, y, 50, 50);
//     context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//   }
// const keyboard = (() => {
//   document.addEventListener("keydown", keyHandler);
//   document.addEventListener("keyup", keyHandler);
//   const keyboard = {
//     right: false,
//     left: false,
//     up: false,
//     any: false,
//   };
//   function keyHandler(e) {
//     const state = e.type === "keydown";
//     if (e.keyCode == 39) {
//       keyboard.right = state;
//     } else if (e.keyCode == 37) {
//       keyboard.left = state;
//     } else if (e.keyCode == 38) {
//       keyboard.up = state;
//       e.preventDefault();
//     }
//     if (state) {
//       keyboard.any = true;
//     }
//   }
//   return keyboard;
// })();
// const player = {
//   x: 0,
//   y: 0,
//   dx: 0,
//   dy: 0,
//   size: 100,
//   color: "lime",
//   onGround: false,
//   jumpPower: -10,
//   moveSpeed: 2,
//   update() {
//     if (keyboard.up && this.onGround) {
//       this.dy = this.jumpPower;
//     }
//     if (keyboard.right) {
//       this.dx = this.moveSpeed;
//     }
//     this.dy += world.gravity;
//     this.dy *= world.drag;
//     this.dx *= this.onGround ? world.groundDrag : world.drag;
//     this.x += this.dx;
//     this.y += this.dy;
//     if (this.y + this.size >= world.ground) {
//       this.y = world.ground - this.size;
//       this.dy = 0;
//       this.onGround = true;
//     } 
//   },
//   draw() {
//     drawRect(this.x, this.y, this.size, this.size, this.color);
//   },
//   start() {
//     this.x = context.canvas.width / 2 - this.size / 2;
//     this.y = world.ground - this.size;
//   },
// };
// const world = {
//   gravity: 0.2,
//   drag: 0.999,
//   groundDrag: 0.9,
//   ground: 150,
// };
// player.start();
// requestAnimationFrame(mainLoop);
// function drawRect(x, y, width, height, color) {
//   context.fillRect(x, y, width, height);
//   context.fillStyle = color;
// }
// function mainLoop(time) {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   player.update();
//   player.draw();
//   requestAnimationFrame(mainLoop);
// }
window.focus();
context.beginPath();
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.fillStyle="yellow";
context.fill();
context.stroke();
context.beginPath();
context.arc(80, 60, 5, 0, 2 * Math.PI);
context.fillStyle="black";
context.fill();
context.stroke();
context.beginPath();
context.arc(120, 60, 5, 0, 2 * Math.PI);
context.fillStyle="black";
context.fill();
context.stroke();
context.beginPath();
context.arc(100, 80, 5, 3.2, 2 * Math.PI);
context.fillStyle="red";
context.fill();
context.stroke();
context.beginPath();
context.arc(100, 100, 15, 0, 1 * Math.PI);
context.fillStyle="red";
context.fill();
context.stroke();
