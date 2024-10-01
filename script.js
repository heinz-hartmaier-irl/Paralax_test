let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let sun = document.getElementById('sun')
let nav = document.getElementById('secret')

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.2 +"px";
    leaf.style.top = value * -0.6 +"px";
    hill1.style.top = value * -0.15 +"px";
    hill2.style.top = value * 0.15  +"px";
    hill3.style.top = value * 0.05  +"px";
    hill4.style.top = value * -0.1 +"px";
    hill5.style.top = value * 0.3 +"px";
    sun.style.top = value *  -0.8 +"px";
}
)

