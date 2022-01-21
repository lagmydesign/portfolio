document.querySelector(".proj2").addEventListener("click", project2);

function project2() {
    var sigma = 'https://www.instagram.com/p/CIGuwWSCGrL/';
    window.open(sigma,'_blank');
}

document.querySelectorAll('.img>img').forEach( img => {
    img.addEventListener('mouseenter', function() {
        this.nextElementSibling.style.display = 'block';
    })

    img.addEventListener('mouseleave', function() {
        this.nextElementSibling.style.display = 'none';
    })

});