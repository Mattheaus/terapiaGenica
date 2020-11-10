window.addEventListener('scroll', function(event) {
  let craneimg = document.querySelector("#crane");
  let hlimit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  let wlimit = Math.max( document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth );
  console.log(scrollY);
  let scrollPercent = scrollY/(hlimit*1.4);
  craneimg.style.left = wlimit*scrollPercent + 'px';
});
