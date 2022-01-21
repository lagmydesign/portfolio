document.querySelector(".proj1").addEventListener("click", project1);

function project1() {
    var ecofood = 'https://ecofood-alsace.fr/';
    window.open(ecofood,'_blank');
}

document.querySelector(".proj2").addEventListener("click", project2);

function project2() {
    var laf = 'https://500px.com/p/merj__/galleries/lost-and-found';
    window.open(laf,'_blank');
}

document.querySelector(".proj3").addEventListener("click", project3);

function project3() {
    var solo = 'https://www.youtube.com/watch?v=TdsNsSMt6Bo&t=4s';
    window.open(solo,'_blank');
}

document.querySelector(".proj4").addEventListener("click", project4);

function project4() {
    var nutryweb = 'https://nutry-alsace.github.io/website/';
    window.open(nutryweb,'_blank');
}

document.querySelectorAll('.img>img').forEach( img => {
    img.addEventListener('mouseenter', function() {
        this.nextElementSibling.style.display = 'block';
    })

    img.addEventListener('mouseleave', function() {
        this.nextElementSibling.style.display = 'none';
    })

});