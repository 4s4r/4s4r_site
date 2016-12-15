var icons = document.querySelectorAll(".icon"),
    videos = document.getElementsByTagName("video"),
    id = document.getElementById('icons'),
    cursorX, cursorY, cursor = document.getElementById('cursor'),
    player = document.getElementById('player'),
    icons = document.getElementsByClassName('icon'),
    icon = document.getElementsByClassName('icon'),
    fullScreenVideo = document.querySelector('video');

document.onmousemove = function(event){
  cursorX = event.clientX;
  cursorY = event.clientY;
}

function checkCursor(){
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
}

setInterval(checkCursor, 1);

function videoClick() {
  if (fullScreenVideo.paused) {
    fullScreenVideo.play();
    cursor.innerHTML = "Остановить";
  } else {
    fullScreenVideo.pause();
    cursor.innerHTML = "Продолжить";
  }
}
function videoOver() {
  if (fullScreenVideo.paused) {
    document.querySelector("body").style.cursor = "none";
    cursor.innerHTML = "Продолжить";
  } else {
    document.querySelector("body").style.cursor = "none";
    cursor.innerHTML = "Остановить";
  }
}
function videoOut() {
  document.querySelector("body").style.cursor = "auto";
  cursor.innerHTML = "";
}

// function videoOver() {
//   if (fullScreenVideo.paused) {
//     fullScreenVideo.play();
//     cursor.innerHTML = "Стоп";
//   } else {
//     fullScreenVideo.pause();
//     cursor.innerHTML = "Play";
//   }
// }

// fullScreenVideo.addEventListener('onclick', function () {

//   if (this.paused) {
//     this.play();
//     cursor.innerHTML = "Стоп";
//   } else {
//     this.pause();
//     cursor.innerHTML = "Play";
//   }
//     // player.api('paused', function(paused) {
//     //   if (paused) {
//     //     player.api('play');
//     //     isPlaying = 1;
//     //     cursor.innerHTML = "Стоп";
//     //   }
//     //   else {
//     //     player.api('pause');
//     //     isPlaying = 0;
//     //     cursor.innerHTML = "Play";
//     //   }
//     // });
// });

// fullScreenVideo.onmouseover = function (event) {
//   var event = event || window.event;
//   var target = event.target || event.srcElement;
//   event.preventDefault();
//     player.api('paused', function(paused) {
//       if (paused) {
//         isPlaying = 0;
//         cursor.innerHTML = "Play";
//       }
//       else {
//         isPlaying = 1;
//         cursor.innerHTML = "Стоп";
//       }
//     });
// }

// function videoClick( event ) {
//   var event = event || window.event;
//   var target = event.target || event.srcElement;
//   event.preventDefault();
//   if (['0','1'].indexOf(target.id) > -1) {
//     var iframe = document.getElementById('player_'+target.id);
//     var player = $f(iframe);
//     player.api('paused', function(paused) {
//       if (paused) {
//         player.api('play');
//         isPlaying = 1;
//         cursor.innerHTML = "Стоп";
//       }
//       else {
//         player.api('pause');
//         isPlaying = 0;
//         cursor.innerHTML = "Play";
//       }
//     });
//   }
// }

  // var iframes = document.querySelectorAll('iframes');

  // for (var i = 0; i < iframes.length; i++) {
  //   var videoFramei = document.getElementById("player_" + i);
  //   console.log(videoFramei);
  // }

  // if (['0','1'].indexOf(iframes.length) > -1) {
  //   var iframe = document.getElementById('player_'+target.id);
  //   var player = $f(iframe);
  //   player.api('paused', function(paused) {
  //     if (paused) {
  //       player.api('play');
  //       isPlaying = 1;
  //       cursor.innerHTML = "Стоп";
  //     }
  //     else {
  //       player.api('pause');
  //       isPlaying = 0;
  //       cursor.innerHTML = "Play";
  //     }
  //   });
  // }
