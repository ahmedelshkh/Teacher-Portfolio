// On Click On the Toggle Menu
let toggleMenu = document.querySelector(".toggle-menu");
let menu = document.querySelector("header .links");
let link = document.querySelectorAll("header .links a");
let toggleLines = document.querySelectorAll("header .toggle-menu .line");

console.log(link);
let click = true;

toggleMenu.onclick = function(e) {
    if(click){
        click = false;
        for(let i = 0; i < toggleLines.length; i++) {
            toggleLines[i].classList.add("line-move");
        }
        toggleLines[0].classList.add("line12-rotate");
        toggleLines[1].classList.add("line12-rotate");
        toggleLines[2].classList.add("line3-rotate");
        menu.classList.add("menu-clicked");
    }else {
        click = true;
        for (let i = 0; i < toggleLines.length; i++) {
            toggleLines[i].classList.remove("line-move");
        }
        toggleLines[0].classList.remove("line12-rotate");
        toggleLines[1].classList.remove("line12-rotate");
        toggleLines[2].classList.remove("line3-rotate");
        menu.classList.remove("menu-clicked");
    }
};

// Hide the Menu On Click
menu.onclick = function() {
    setTimeout(() => {
        menu.classList.remove("menu-clicked");
    }, 200);
    for (let i = 0; i < toggleLines.length; i++) {
        toggleLines[i].classList.remove("line-move");
    }
    toggleLines[0].classList.remove("line12-rotate");
    toggleLines[1].classList.remove("line12-rotate");
    toggleLines[2].classList.remove("line3-rotate");
    click = true;
}

// Create A Count Down For The Achivements Section
let numsOfAchivements = document.querySelectorAll(".achivements .collections .num");
let achivementsSec = document.querySelector("#achivements")

function countDwon(value, element, duration = 2000) {
    let increament = value / (duration / 20);
    let i = 0
    let interval = setInterval(() => {
        element.textContent = Math.ceil(i);
        i += increament
        
        if (i >= value) {
            console.log(value, i)
            clearInterval(interval);
            element.textContent = value;
        }
    }, 20);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countDwon(numsOfAchivements[0].textContent, numsOfAchivements[0]);
            countDwon(numsOfAchivements[1].textContent, numsOfAchivements[1]);
            countDwon(numsOfAchivements[2].textContent, numsOfAchivements[2]);
        }
    });
}, { threshold: 0.4 });



observer.observe(achivementsSec);



    

