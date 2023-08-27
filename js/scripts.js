// Bling 
function bling() {
    let icon = document.querySelector("#bling");
    icon.style.display = "block";
    let clickSound = document.querySelector("#clickSound");
    clickSound.play();
        setTimeout(function() {
        icon.style.display = "none";
    }, 200);
}

