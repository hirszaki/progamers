document.addEventListener('DOMContentLoaded', function(){

    const navigation = document.querySelector('.navbar')
    const allNAvItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addSadow() {
        if(window.scrollY >=100) {
            navigation.classList.add('shadow-bg')
        }else{
            navigation.classList.remove('shadow-bg')
        }
    }

    allNAvItems.forEach(item => item.addEventListener('click', () => {
        navList.classList.remove('show')
    }))

    window.addEventListener('scroll', addSadow)
})


