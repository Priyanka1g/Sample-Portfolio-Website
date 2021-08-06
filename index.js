const navburger = document.querySelector(".header .navbar .navlist .navburger")
const mobile = document.querySelector(".header .navbar .navlist ul")
const menu_item = document.querySelectorAll(".header .navbar .navlist ul li a")
const header = document.querySelector(".header.container")

navburger.addEventListener("click", ()=>{
    navburger.classList.toggle('active');
    mobile.classList.toggle('active');
});



document.addEventListener("scroll",()=> {
    // console.log('tdchhdnd');
    
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor = "#29323c";        
    }
    else{
        header.style.backgroundColor = "transparent";      

    }

});

menu_item.forEach((item) => {
    item.addEventListener("click", ()=>{
        navburger.classList.toggle('active');
        mobile.classList.toggle('active'); 
    });
});

const typedtextspan = document.querySelector(".typed-text");
const cursorspan = document.querySelector(".cursor");

const textarray = ["Hello, I am Priyanka", " I am a web developer", "I am a graphic designer", "Also I am a competitive programmer."];
const typingdelay =100;
const erasingdelay = 100;
const newtextdelay = 1000;
let textarrayindex = 0;
let charindex = 0;

//defining type function
function type(){
    if(charindex < textarray[textarrayindex].length){
        if(cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
        typedtextspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++;
        setTimeout(type, typingdelay);
    }
    else{
        cursorspan.classList.remove("typing");
        setTimeout(erase, newtextdelay);
    }
}

//defining erase function
function erase() {
    if(charindex > 0){
        typedtextspan.textContent = textarray[textarrayindex].substring(0,charindex-1);
        charindex--;
        setTimeout(erase, erasingdelay);
    }
    else{
        cursorspan.classList.remove("typing");
        textarrayindex++;
        if(textarrayindex>=textarray.length) textarrayindex=0;
        setTimeout(type, typingdelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textarray.length)setTimeout(type, newtextdelay + 250);
})


