let settingsMenu = document.querySelector(".settings-menu ")

function settingsMenuToggle(){

    settingsMenu.classList.toggle("settings-menu-height");
}


let dark_menu = document.getElementById("dark-mode")

dark_menu.onclick = function(){
    dark_menu.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");

    
}

if(localStorage.getItem("theme") == "light"){
    dark_menu.classList.remove("dark-mode-on")
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    dark_menu.classList.add("dark-mode-on")
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light")
}


localStorage.setItem("theme", "dark")
localStorage.getItem("theme") 