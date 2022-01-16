document.querySelector("#menu_burger").addEventListener("click", menu);

function menu() {
    document.querySelector(".all").classList.toggle("show");
    document.querySelector("#menu_burger").classList.toggle("burgercolor");
}

document.querySelector("#instagram").addEventListener("click", insta);

function insta() {
    var instagram = 'https://www.instagram.com/lagmy_';
    window.open(instagram,'_blank');
}

document.querySelector("#behance").addEventListener("click", beh);

function beh() {
    var behance = 'https://www.behance.net/lagmy_';
    window.open(behance,'_blank');
}

document.querySelector("#linkedin").addEventListener("click", linked);

function linked() {
    var linkedin = 'https://www.linkedin.com/in/jeremy-lagadec-414625205/';
    window.open(linkedin,'_blank');
}