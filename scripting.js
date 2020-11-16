window.addEventListener('scroll', function(event) {
    let craneimg = document.querySelector("#crane");
    let hlimit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    let wlimit = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
    let scrollPercent = scrollY / (hlimit * 1.4);
    craneimg.style.left = wlimit * scrollPercent + 'px';
});

window.onload = function() {
    let title = document.getElementById('title');
    let background = document.getElementById("all");
    let section1 = document.getElementById("sec1");
    let section2 = document.getElementById("sec2");
    let section3 = document.getElementById("sec3");
    let section4 = document.getElementById("sec4");
    let section5 = document.getElementById("sec5");
    title.style.left = background.offsetWidth / 2 - title.offsetWidth / 2 + "px";
    section1.style.top = title.offsetTop + title.offsetHeight + window.innerHeight * 0.01 + "px";
    section2.style.top = section1.offsetTop + section1.offsetHeight + window.innerHeight * 0.005 + "px";
    section3.style.top = title.offsetTop + title.offsetHeight + window.innerHeight * 0.01 + "px";
    section4.style.top = section3.offsetTop + section3.offsetHeight + window.innerHeight * 0.005 + "px";
    section5.style.top = title.offsetTop + title.offsetHeight + window.innerHeight * 0.01 + "px";
};