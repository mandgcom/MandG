document.querySelectorAll(".about-photo").forEach(img => {
    img.addEventListener("click", function(){
        let modal = document.getElementById("modal");
        let modalImg = document.getElementById("modal-img");
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

document.querySelector(".close").addEventListener("click", function(){
    document.getElementById("modal").style.display = "none";
});

// Закрытие по клику на фон
document.getElementById("modal").addEventListener("click", function(e){
    if(e.target === this) this.style.display = "none";
});
