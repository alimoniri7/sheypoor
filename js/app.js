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
    if (document.documentElement.scrollTop > 220) {
        document.getElementById("category-scroll").classList.add('dis-flex');
        document.getElementById("category-scroll").classList.remove('dis-none');
    } else {
        document.getElementById("category-scroll").classList.remove('dis-flex');
        document.getElementById("category-scroll").classList.add('dis-none');
    }

}

// toggle buttons /-----------------------------

let buttons = [document.getElementById('toggle-btn').children[0], document.getElementById('toggle-btn').children[1]]

console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.classList == 'selected') {
            return
        } else {
            buttons.forEach(button => {
                button.classList.remove('selected')
            })
            button.classList.add('selected')
        }
    })
})