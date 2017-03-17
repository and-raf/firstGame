var map1_1 = [
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9, 9, 9, 9],
  [9, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 8, 1, 0, 9],
  [9, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 9],
  [9, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 1, 1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 9],
  [9, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 9],
  [9, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 9],
  [9, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9],
  [9, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9 ,9 ,9, 9]
];
var map1_2 = [
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9, 9, 9, 9],
  [9, 9, 1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 8, 3, 9],
  [9, 9, 1, 0, 1, 1, 0, 0, 9, 0, 0, 0, 0, 3, 9],
  [9, 9, 1, 1, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 0, 0, 0, 9, 1, 1, 0, 0, 0, 9],
  [9, 0, 1, 0, 0, 0, 2, 0, 9, 1, 1, 0, 0, 0, 9],
  [9, 0, 1, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 1, 1, 9],
  [9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 9],
  [9, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 9, 0, 0, 9],
  [9, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 9, 0, 0, 9],
  [9, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 9, 8, 3, 9],
  [9, 0, 1, 3, 1, 1, 1, 0, 1, 0, 0, 1, 9, 3, 9],
  [9, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9 ,9 ,9, 9]
];
var map1_3 = [
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9, 9, 9, 9],
  [9, 9, 1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 8, 3, 9],
  [9, 9, 1, 0, 1, 1, 0, 0, 9, 0, 0, 0, 0, 3, 9],
  [9, 9, 1, 1, 1, 0, 0, 0, 9, 9, 9, 9, 0, 0, 9],
  [9, 9, 9, 9, 9, 0, 0, 0, 9, 1, 1, 9, 1, 1, 9],
  [9, 0, 1, 0, 0, 0, 2, 0, 9, 1, 1, 1, 1, 1, 9],
  [9, 0, 1, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 1, 1, 9],
  [9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 9],
  [9, 1, 1, 9, 0, 0, 0, 1, 0, 0, 0, 9, 0, 0, 9],
  [9, 3, 1, 0, 9, 9, 1, 1, 1, 1, 1, 9, 0, 0, 9],
  [9, 5, 3, 3, 0, 4, 1, 1, 0, 0, 1, 9, 8, 3, 9],
  [9, 5, 0, 3, 1, 1, 1, 9, 1, 0, 0, 1, 9, 3, 9],
  [9, 5, 5, 5, 0, 0, 1, 9, 9, 0, 0, 1, 1, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9 ,9 ,9, 9]
];
// var map2_1 = [
//   [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9, 9, 9, 9],
//   [9, 9, 1, 7, 7, 7, 7, 7, 9, 7, 7, 7, 8, 3, 9],
//   [9, 9, 1, 7, 1, 1, 0, 7, 9, 7, 7, 7, 7, 3, 9],
//   [9, 9, 1, 1, 1, 7, 0, 7, 4, 7, 0, 7, 7, 7, 9],
//   [9, 9, 9, 9, 9, 7, 0, 7, 9, 1, 1, 7, 7, 7, 9],
//   [9, 7, 1, 77, 7, 7, 2, 7, 9, 1, 1, 7, 7, 7, 9],
//   [9, 7, 1, 7, 7, 7, 7, 7, 9, 1, 1, 1, 1, 1, 9],
//   [9, 7, 0, 7, 7, 7, 7, 7, 9, 9, 9, 9, 1, 1, 9],
//   [9, 7, 1, 7, 7, 7, 7, 7, 0, 0, 9, 9, 7, 7, 9],
//   [9, 1, 1, 7, 7, 7, 7, 1, 7, 0, 0, 9, 0, 7, 9],
//   [9, 7, 7, 7, 1, 7, 7, 1, 1, 1, 1, 9, 0, 0, 9],
//   [9, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 9, 8, 3, 9],
//   [9, 7, 1, 3, 1, 1, 1, 7, 1, 7, 7, 1, 9, 3, 9],
//   [9, 7, 7, 7, 7, 7, 1, 7, 1, 7, 7, 1, 1, 9, 9],
//   [9, 9, 9, 9, 9, 9, 9, 9 ,9 ,9 ,9 ,9 ,9 ,9, 9]
// ];
var playerArrayPosX = 0;
var playerArrayPosY = 0;
var score = 0;
var bombs = 1;
draw = function(){
var ctx = document.getElementById("canvas").getContext("2d");

var wall = new Image();
var bg = new Image();
var bg2 = new Image();
var player = new Image();
var coin = new Image();
var unbreakable = new Image();
var doors = new Image();
// var doorsOpen = new Image();
var bomb = new Image();
var lava = new Image();
var box = new Image();



wall.src = 'static/resources/img/wall.png';
bg.src = 'static/resources/img/bg.png';
bg2.src = 'static/resources/img/bg2.png'
player.src = 'static/resources/img/player.png';
coin.src = 'static/resources/img/coin.png';
unbreakable.src = 'static/resources/img/unbreakable.png'
doors.src = 'static/resources/img/doors.png';
bomb.src = 'static/resources/img/bomb.png';
lava.src = 'static/resources/img/lava.png';
box.src = 'static/resources/img/box.png';

var posX = 0;
var posY = 0;

currMap = map1_1;

wall.onload = function () {
  // (score >= 2) ? currMap = map1_2 : currMap = map1_1;
  if (score < 2) {
    currMap = map1_1;
  } else if (score < 7) {
    currMap = map1_2;
  }else if (score <= 13) {
    currMap = map1_3;
  }
  // console.log(currMap);
  for (var i = 0; i < currMap.length; i++) {
    for (var j = 0; j < currMap[i].length; j++) {
      if (currMap[i][j]==1) {
        ctx.drawImage(wall, posX, posY);
      }
      if (currMap[i][j]==0) {
        ctx.drawImage(bg, posX, posY);
      }
      if (currMap[i][j]==7) {
        ctx.drawImage(bg2, posX, posY);
      }
      if (currMap[i][j]==6) {
        ctx.drawImage(box, posX, posY);
      }
      if (currMap[i][j]==3) {
        ctx.drawImage(coin, posX, posY);
      }
      if (currMap[i][j]==4) {
        ctx.drawImage(doors, posX, posY);
      }
      if (currMap[i][j]==9) {
        ctx.drawImage(unbreakable, posX, posY);
      }
      if (currMap[i][j]==5) {
        ctx.drawImage(lava, posX, posY);
      }
      if (currMap[i][j]==8) {
        ctx.drawImage(bomb, posX, posY);
      }
      if (currMap[i][j]==2) {
        ctx.drawImage(player, posX, posY);
        playerArrayPosX = i;
        playerArrayPosY = j;
      }
      posX += 32;
    }
    posX = 0;
    posY += 32;
  }
}
}
var chuj = 'q';
document.onkeydown = keyCheck;
function keyCheck(e) {
  console.log(e.keyCode);
          if (e.keyCode == 37) { //left
            var test = currMap[playerArrayPosX][playerArrayPosY-1];
            if (test == 0) {
              currMap[playerArrayPosX][playerArrayPosY-1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 3) {
              currMap[playerArrayPosX][playerArrayPosY-1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              score++;
            }else if (test == 8) {
              currMap[playerArrayPosX][playerArrayPosY-1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              bombs++;
            }else if (test == 4) {
              (currMap[playerArrayPosX][playerArrayPosY-2] == 3) ? score++ : false;
              currMap[playerArrayPosX][playerArrayPosY-2] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 5) {
              gameOver();
            }
            else if (test == 6) {
              currMap[playerArrayPosX][playerArrayPosY-2] = 6;
              currMap[playerArrayPosX][playerArrayPosY-1] = 0;
            }
          }else if (e.keyCode == 39) { //right
            var test = currMap[playerArrayPosX][playerArrayPosY+1];
            if (test == 0) {
              currMap[playerArrayPosX][playerArrayPosY+1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 3) {
              currMap[playerArrayPosX][playerArrayPosY+1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              score++;
            }else if (test == 8) {
              currMap[playerArrayPosX][playerArrayPosY+1] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              bombs++;
            }else if (test == 4) {
              currMap[playerArrayPosX][playerArrayPosY+2] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 5) {
              gameOver();
            }else if (test == 6) {
              currMap[playerArrayPosX][playerArrayPosY+2] = 6;
              currMap[playerArrayPosX][playerArrayPosY+1] = 0;
            }
          }else if (e.keyCode == 40) { //down
            var test = currMap[playerArrayPosX+1][playerArrayPosY];
            if (test == 0) {
                currMap[playerArrayPosX+1][playerArrayPosY] = 2;
                currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 3) {
              currMap[playerArrayPosX+1][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              score++;
            }else if (test == 8) {
              currMap[playerArrayPosX+1][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              bombs++;
            }else if (test == 4) {
              currMap[playerArrayPosX+2][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 5) {
              gameOver();
            }
          }else if (e.keyCode == 38) { //up
            var test = currMap[playerArrayPosX-1][playerArrayPosY];
            // console.log("chuj2");
            if (test == 0) {
              currMap[playerArrayPosX-1][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 3) {
              currMap[playerArrayPosX-1][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              score++;
            }else if (test == 8) { //bomb
              currMap[playerArrayPosX-1][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
              bombs++;
            }else if (test == 4) { //bomb
              currMap[playerArrayPosX-2][playerArrayPosY] = 2;
              currMap[playerArrayPosX][playerArrayPosY] = 0;
            }else if (test == 5) {
              gameOver();
            }
          }else if (e.keyCode == 32) { //space
            if (bombs) {
              bombs--;
            // console.log("chuj");
              if (currMap[playerArrayPosX-1][playerArrayPosY] != 9) {
                currMap[playerArrayPosX-1][playerArrayPosY] = 0;
              }
              if (currMap[playerArrayPosX+1][playerArrayPosY] != 9) {
                currMap[playerArrayPosX+1][playerArrayPosY] = 0;
              }
              if (currMap[playerArrayPosX][playerArrayPosY-1] != 9) {
                currMap[playerArrayPosX][playerArrayPosY-1] = 0;
              }
              if (currMap[playerArrayPosX][playerArrayPosY+1] != 9) {
                currMap[playerArrayPosX][playerArrayPosY+1] = 0;
              }
            }
          }


// console.log(score);
// console.log(bombs);
var scoreBoard = document.getElementById('scoreBoard');
document.getElementById('bombs').innerHTML = 'Bombs left: ' + bombs;
document.getElementById('score').innerHTML = 'Points: ' + score;
draw();
}
draw();

function gameOver(){
  document.write("YOU LOSE");
}
