document.querySelector(".proj1").addEventListener("click", project1);

function project1() {
    var shoe = 'https://www.behance.net/gallery/121874533/Adidas-Shoe-Animation';
    window.open(shoe,'_blank');
}

document.querySelector(".proj2").addEventListener("click", project2);

function project2() {
    var nutryinsta = 'https://www.instagram.com/nutry_alsace/';
    window.open(nutryinsta,'_blank');
}

document.querySelector(".proj3").addEventListener("click", project3);

function project3() {
    var chetki = 'https://www.youtube.com/watch?v=CAo7-ODG4tg';
    window.open(chetki,'_blank');
}

document.querySelector(".proj4").addEventListener("click", project4);

function project4() {
    var deadeye = 'https://www.behance.net/gallery/127038835/Stepped-Deadeye';
    window.open(deadeye,'_blank');
}

document.querySelectorAll('.img>img').forEach( img => {
    img.addEventListener('mouseenter', function() {
        this.nextElementSibling.style.display = 'block';
    })

    img.addEventListener('mouseleave', function() {
        this.nextElementSibling.style.display = 'none';
    })

});