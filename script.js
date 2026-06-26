const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide-sidebar");

    if(content){
        content.classList.toggle("expand-content");
    }
});

 

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active-chip");
        });

        button.classList.add("active-chip");

    });

});


const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            themeBtn.innerHTML = "☀️";
        }else{
            themeBtn.innerHTML = "🌙";
        }

    });

}
function filterVideos(category){

    const videos = document.querySelectorAll(".video-card");

    videos.forEach(video => {

        if(category === "all"){

            video.style.display = "block";

        }
        else if(video.classList.contains(category)){

            video.style.display = "block";

        }
        else{

            video.style.display = "none";

        }

    });

}