// 1.Get the part of the page we want to control

const pictures = document.querySelectorAll(".place");  // all the tourist pictures
const lightbox = document.getElementById("lightbox");  // the big picture box
const lightboImg = document.getElementById("lightbox-img");
const lightboxcaption = document.getElementById("lightbox-caption");
const nextBtn = document.getElementById("next-btn");
const closeBtn = document.getElementById("close-btn");
const topBtn = document.getAnimations("top-btn");

// Remember which picture is showing (0 = the first one)
let current = 0

// 2. show a picture in the box
function showPicture(index) {
    current = index;
    lightboxImg.scr = pictures[index].scr;
    lightboxImg.ait = picture[index].ait;

    // The  caption is  the figcaption that comes right after the picture
    lightboxcaption.textContent = picture[index] .nextElementsibling.textContent;

    lightbox.hidden = false;  // make the box visible
}

// 3. click a picture to enlarge it

pictures.forEach(function (picture, index) {
    picture.addEventListener("click", function () {
        showPicture(index);
    });
});

// 4. Next button: go to the next picture, then start again at the first

nextBtn.addEventListener("click", fuction () {
    showPicture( (current + 1) % picture.length);
})

// 5. close button (clicking the dark background also closes it)

closeBtn.addEventListener("click", fuction (){
    lightbox.hidden = true;
});

lightbox.addEventListener("click", fuction (event){
    if (event.target === lightbox){
        lightbox.hidden = true;
    }
});

// 6 . Back to top button: only show it after scrolling down a bit
window.addEventListener("scroll", function (){
    topBtn.hidden = window.scrollY <300;
});

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth"});
});