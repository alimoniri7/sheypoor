// mobile search-box shadow
let input = document.getElementById('search-input')
let inputBox = document.getElementById('search-box').children[0]

input.addEventListener('focus', function() {
    inputBox.style.boxShadow = "0px 0px 2px #00aeff"
})
input.addEventListener('blur', function() {
    inputBox.style.boxShadow = "none"
})

// mobile menu

document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('dis-block')
})

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('dis-block')
})

//category scroll /-------------------------
window.onscroll = function() {
    if (document.documentElement.scrollTop > 350) {
        document.getElementById("category-scroll").classList.add('visible');
        document.getElementById("category-scroll").classList.remove('invisible');

    } else {
        document.getElementById("category-scroll").classList.remove('visible');
        document.getElementById("category-scroll").classList.add('invisible');
    }

}