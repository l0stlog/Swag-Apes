let staticNumber = +document.querySelector('#tokennumber').textContent;

document.querySelector('#tokennumber').textContent = localStorage.getItem('tokennumber');
   
let timerId = setTimeout(function tick() {
  let tokennumbercontent = document.querySelector('#tokennumber');
  let tokennumber = localStorage.getItem('tokennumber') || staticNumber;
  let randomNumber = Math.floor(Math.random() * 10);
  let number = +tokennumber + +randomNumber;
  let endTickNumber = +document.querySelector('#endTick').textContent;
  let endTick = endTickNumber / 100 * 95;
  let howMaxNumber = Math.round(+tokennumber * 100 / endTickNumber);

  // localStorage.clear();

  if(+tokennumber <= endTick) {
    localStorage.setItem('tokennumber', number)
    tokennumbercontent.textContent = number;

    // document.querySelector(".progress-line").style.width = " " + howMaxNumber + "%";

    timerId = setTimeout(tick, 1300);
  } else {
    console.log("end")
  }
}, 1500);