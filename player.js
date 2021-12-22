const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.hieght = window.innerHeight;
// const player = {
//   x:canvas.width,
//   y: canvas.height-80,
//   width: 100,
//   height: 100,
// };
// context.fillStyle = "yellow";
// context.fillRect(player.x, player.y, player.width, player.height);
// let dir = "ltr";
// function movePlayer() {
//   context.clearRect(player.x, player.y, player.width, player.height);
//   context.fillStyle = "tomato";
//   if (dir === "ltr") player.x += 2;
//   else player.x -=2;
//   if (player.x >= canvas.width -player.width-2) dir = "rtl";
//   if (player.x <= 0) dir = "ltr";
//   context.fillRect(player.x, player.y, player.width, player.height);
//   window.requestAnimationFrame(movePlayer);
// }
// movePlayer();
