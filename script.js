const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggle.addEventListener('click', () => {
    if (toggle.className == "toggle") {
        toggle.className += " active";
        navigation.className += " active";
        console.log(toggle.className);
    } else {
        toggle.className = "toggle";
        navigation.className = "navigation"; 
    }
})

