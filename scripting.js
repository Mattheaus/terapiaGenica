

function piecesize() {
  let craneimg = document.querySelector("#crane");
  let pieceimg = document.querySelector("#piece");
  let wratio = pieceimg.naturalWidth/craneimg.naturalWidth;
  let hratio = pieceimg.naturalHeight/craneimg.naturalHeight;
  pieceimg.style.height = craneimg.height*hratio + "px";
  pieceimg.style.width = craneimg.width*wratio + "px";
}
function placement() {
  let craneimg = document.querySelector("#crane");
  let pieceimg = document.querySelector("#piece");
  pieceimg.style.bottom = craneimg.height*0.453 + "px";
  pieceimg.style.left = craneimg.width*0.758 + "px";
}
function movingcrane(){
  let craneimg = document.querySelector("#crane");
  let scrollPercent = scroll/window.height;
  craneimg.style.left = window.width*scrollPercent + 'px';
}
function main(){
  piecesize();
  placement();
}


window.onresize = main;
window.onload = main;
window.addEventListener('scroll', function(event) {
  placement();
  let craneimg = document.querySelector("#crane");
  let hlimit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  let wlimit = Math.max( document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth );
  let scrollPercent = scrollY/(hlimit*1.5);
  craneimg.style.left = wlimit*scrollPercent + 'px';
  placement();
});
