function piecesize() {
  let craneimg = document.querySelector("#crane");
  let pieceimg = document.querySelector("#piece");
  let wratio = pieceimg.naturalWidth/craneimg.naturalWidth;
  let hratio = pieceimg.naturalHeight/craneimg.naturalHeight;
  pieceimg.style.height = craneimg.height*hratio + "px";
  pieceimg.style.width = craneimg.width*wratio + "px";
  pieceimg.style.bottom = craneimg.height*0.453 + "px";
  pieceimg.style.left = craneimg.width*0.758 + "px";
}
function main(){
  piecesize();
}

window.onresize = main;
window.onload = main;
