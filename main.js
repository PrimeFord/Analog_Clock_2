const dial = document.querySelector(".dial");
const dialLines = document.getElementsByClassName("diallines");
const hr = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".sec-hand");
const dates = document.querySelector(".date");

// let c = dialLines.cloneNode(true);
// c.style.transform = "rotate(" + 6 + "deg)";
// dial.appendChild(c);
// for (var i = 1; i < 60; i++) {
//   dialLines[i] = dialLines[i - 1].clone().insertAfter(dialLines[i - 1]);
//   dialLines[i].css("transform", "rotate(" + 6 * i + "deg)");
// }

// for (var i = 1; i < 60; i++) {
//   //   dial.innerHTML += `${dials[i]}`;
//   dialLines[i] = dialLines[i - 1].clone().insertAfter(dialLines[i - 1]);

//   dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
// }

function tick() {
  var date = new Date();

  let second = date.getSeconds() * 6;
  let minute = date.getMinutes() * 6 + date.getSeconds() * (360 / 3600);
  let hour = date.getHours() * 30 + Math.round(minute / 12);
  let dat = date.getDate();

  sec.style.transform = "rotate(" + second + "deg)";
  min.style.transform = "rotate(" + minute + "deg)";
  hr.style.transform = "rotate(" + hour + "deg)";
  dates.textContent = dat;
}

setInterval(tick, 100);
