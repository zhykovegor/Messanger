//add event handlers
window.onload = function() {
  document.getElementById("enter").onclick = enter;
}

function enter() {
  document.getElementById("header").style.marginTop = "-60px";
  window.location="Friends.htm";
}

function key_enter(e) {
  e = e || window.event;

  if(e.keyCode == 13)
    enter();
}
