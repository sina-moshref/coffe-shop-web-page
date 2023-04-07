let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = sidemenu;
let colps;
function sidemenu(){
    if(!colps){
    navbar.style.right = '0';
    cartItem.style.cssText = "display:none;opacity:0";
    searchForm.style.cssText = 'transform: scaleY(0);';
    colps = "i";
    return;
    }
    navbar.style.right = '-100%';
    colps = null;
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = sidemenu2;
let colp;
function sidemenu2(){
    if(!colp){
    cartItem.style.cssText = "display:block;opacity:1";
    searchForm.style.cssText = 'transform: scaleY(0);';
    navbar.style.right = '-100%';
    colp = "i";
    return;
    }
    cartItem.style.cssText = "display:none;opacity:0";
    colp = null;
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = sidemenu3;
let colpss;
function sidemenu3(){
    if(!colpss){
    searchForm.style.cssText = 'transform: scaleY(1);';
    cartItem.style.cssText = "display:none;opacity:0";
    navbar.style.right = '-100%';
    colpss = "i";
    return;
    }
    searchForm.style.cssText = 'transform: scaleY(0);';
    colpss = null;
}
