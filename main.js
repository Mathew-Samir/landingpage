let img = document.querySelector(".img");
let container = document.querySelector(".container");

if(sessionStorage.length > 0){
    container.style.background =  sessionStorage.color;
    img.src =  sessionStorage.phone;
}


function phones(phone){
    sessionStorage.setItem('phone',phone);
    img.src = phone;
}


function colors(color){
    sessionStorage.setItem('color',color);
    container.style.background = color;
}





