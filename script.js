// to change theme with switcher point
var themeSwitcher = document.getElementById('theme-switcher');
var currentTheme = 1;
themeSwitcher.addEventListener('click', function () {
    currentTheme++;
    if (currentTheme > 3) {
        currentTheme = 1;
    }
    if (currentTheme === 3) {
        document.getElementById('switch').style.left = '55px';
    } 
    if(currentTheme === 2){
        document.getElementById('switch').style.left = '30px';
    }
    if(currentTheme === 1){
        document.getElementById('switch').style.left = '5px';
    }
    for (let i = 0; i < themeNumbers.length; i++) {
        themeNumbers[i].classList.remove('active');
    }
    themeNumbers[currentTheme - 1].classList.add('active')
    themeChanger();
})

// to switch theme with numbers of themes
let themeNumbers = document.getElementsByClassName('theme-number');

function switchThemeByThemeNumber(element) {
    for (let i = 0; i < themeNumbers.length; i++) {
        themeNumbers[i].classList.remove('active');
    }
    element.classList.add('active');
    for (let i = 0; i < themeNumbers.length; i++) {
        if(themeNumbers[i].classList.contains('active')){
            currentTheme = i;
        }
    }
    themeChanger();
}

let themen = document.getElementsByClassName('theme-number');
function themeChanger() {
    document.querySelector('.header h3').style.color = `var(--th${currentTheme}-text-c)`;
    document.querySelector('.header h4').style.color = `var(--th${currentTheme}-text-c)`;
    document.getElementsByClassName('main')[0].style.backgroundColor = `var(--th${currentTheme}-bg)`;
    for (let i = 0; i < themen.length; i++) {
        themen[i].style.color = `var(--th${currentTheme}-text-c)`;
    }
    document.getElementById('switch').style.backgroundColor = `var(--th${currentTheme}-equal-key)`;
    document.getElementById('theme-switcher').style.backgroundColor = `var(--th${currentTheme}-keypad-bg)`;
    document.querySelector('.cacl .screen').style.backgroundColor = `var(--th${currentTheme}-result-bg)`;
    document.querySelector('.cacl .screen').style.color = `var(--th${currentTheme}-text-c)`;
    document.querySelector('.key-pad').style.backgroundColor = `var(--th${currentTheme}-keypad-bg)`;
    for (let i = 0; i < document.querySelectorAll('.key-pad button.numbers').length; i++) {
        document.querySelectorAll('.key-pad button.numbers')[i].style.backgroundColor = `var(--th${currentTheme}-number-key)`;
        document.querySelectorAll('.key-pad button.numbers')[i].style.color = `var(--th${currentTheme}-numbers-c)`;
        document.querySelectorAll('.key-pad button.numbers')[i].style.borderBottom = `3px solid var(--th${currentTheme}-number-key-shadow)`;
    }
    for (let i = 0; i < document.querySelectorAll('.key-pad button#del,.key-pad button#reset').length; i++) {
        document.querySelectorAll('.key-pad button#del,.key-pad button#reset')[i].style.backgroundColor = `var(--th${currentTheme}-del-key)`;
        document.querySelectorAll('.key-pad button#del,.key-pad button#reset')[i].style.color = `white`;
        document.querySelectorAll('.key-pad button#del,.key-pad button#reset')[i].style.borderBottom = `3px solid var(--th${currentTheme}-del-key-shadow)`;
    }
    for (let i = 0; i < document.querySelectorAll('.key-pad button#equal').length; i++) {
        document.querySelectorAll('.key-pad button#equal')[i].style.backgroundColor = `var(--th${currentTheme}-equal-key)`;
        document.querySelectorAll('.key-pad button#equal')[i].style.color = `var(--th${currentTheme}-equal-c)`;
        document.querySelectorAll('.key-pad button#equal')[i].style.borderBottom = `3px solid var(--th${currentTheme}-equal-key-shadow)`;
    }
}

var buttons = document.querySelectorAll('.key-pad button');
window.onresize = function(){
    for (let i = 0; i < buttons.length; i++) {
        if (document.body.offsetWidth < 500) {
            buttonHeight = 70;
        }else{
            buttonHeight = 45;
        }
        buttons[i].style.height = `${buttonHeight}px`;
    }
};
let buttonHeight = 45;
if (document.body.offsetWidth < 500) {
    buttonHeight = 70;
}else{
    buttonHeight = 45;
}


for (let i = 0; i < buttons.length; i++) {
    if (!buttons[i].hasAttribute('id')) {
        buttons[i].addEventListener('click', function() {
            this.style.borderBottom = `0px solid var(--th${currentTheme}-number-key-shadow)`;
            this.style.height = `${buttonHeight - 2}px`;
            this.style.transform = `translateY(2px)`
            setTimeout(() => {
            this.style.height = `${buttonHeight}px`;
            this.style.borderBottom = `3px solid var(--th${currentTheme}-number-key-shadow)`;
            this.style.transform = `translateY(0px)`;
            }, 150);
        })
    }
}
document.getElementById('equal').addEventListener('click', function() {
    this.style.height = `${buttonHeight - 2}px`;
    this.style.transform = `translateY(2px)`
    this.style.borderBottom = `0px solid var(--th${currentTheme}-equal-key-shadow)`;
    setTimeout(() => {
        this.style.height = `${buttonHeight}px`;
        this.style.transform = `translateY(0px)`
        this.style.borderBottom = `3px solid var(--th${currentTheme}-equal-key-shadow)`;
    }, 150);
})
let resetAndDel = [document.getElementById('reset'), document.getElementById('del')];
for (let i = 0; i < resetAndDel.length; i++) {
    resetAndDel[i].addEventListener('click', function() {
        this.style.borderBottom = `0px solid var(--th${currentTheme}-del-key-shadow`;
        this.style.height = `${buttonHeight - 2}px`;
        this.style.transform = `translateY(2px)`
        setTimeout(() => {
        this.style.height = `${buttonHeight}px`;
        this.style.borderBottom = `3px solid var(--th${currentTheme}-del-key-shadow`;
        this.style.transform = `translateY(0px)`;
        }, 150);
    })
}