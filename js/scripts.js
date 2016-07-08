var bigLeftArrow = document.getElementById("bigLeftArrow");
var bigRightArrow = document.getElementById("bigRightArrow");
var mainImg = document.getElementById("mainImg");
var smallLeftArrow = document.getElementById("smallLeftArrow");
var smallRightArrow = document.getElementById("smallRightArrow");
var smallImg1 = document.getElementById("smallImg1");
var smallImg2 = document.getElementById("smallImg2");
var smallImg3 = document.getElementById("smallImg3");
var arrows = document.getElementsByClassName("arrows");
var imgNum = 1;
var smallImgNum = 0;

bigLeftArrow.addEventListener("click", function() {
    if (imgNum > 1) {
        imgNum--;
        mainImg.setAttribute("src", "css/images/nature" + imgNum + ".jpg");
    } else if (imgNum === 1) {
        imgNum = 7;
        mainImg.setAttribute("src", "css/images/nature" + imgNum + ".jpg");
    }
});

bigRightArrow.addEventListener("click", function() {
    if (imgNum < 7) {
        imgNum++;
        mainImg.setAttribute("src", "css/images/nature" + imgNum + ".jpg");
    } else if (imgNum === 7) {
        imgNum = 1;
        mainImg.setAttribute("src", "css/images/nature" + imgNum + ".jpg");
    }
});

smallLeftArrow.addEventListener("click", function() {
    if (smallImgNum >= 1) {
        smallImg1.setAttribute("src", "css/images/nature" + smallImgNum + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + (smallImgNum + 1) + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + (smallImgNum + 2) + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === 0) {
        smallImg1.setAttribute("src", "css/images/nature" + 7 + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + 1 + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + 2 + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === -1) {
        smallImg1.setAttribute("src", "css/images/nature" + 6 + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + 7 + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + 1 + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === -2) {
        smallImgNum = 5;
    }
});

smallRightArrow.addEventListener("click", function() {
    if (smallImgNum < 4) {
        smallImgNum +=2;
        smallImg1.setAttribute("src", "css/images/nature" + smallImgNum + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + (smallImgNum + 1) + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + (smallImgNum + 2) + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === 4) {
        smallImgNum += 2;
        smallImg1.setAttribute("src", "css/images/nature" + smallImgNum + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + (smallImgNum + 1) + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + (smallImgNum - 5) + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === 5) {
        smallImgNum += 2;
        smallImg1.setAttribute("src", "css/images/nature" + smallImgNum + ".jpg");
        smallImg2.setAttribute("src", "css/images/nature" + (1) + ".jpg");
        smallImg3.setAttribute("src", "css/images/nature" + (2) + ".jpg");
        smallImgNum--;
    } else if (smallImgNum === 6) {
        smallImgNum = -1;
    }
});

var allSmallImgs = document.getElementsByClassName("small-img");
for (var i = 0; i < allSmallImgs.length; i++) {
    allSmallImgs[i].addEventListener("click", function() {
        var getNum = Number(this.getAttribute("src").slice(17, 18));
        mainImg.setAttribute("src", "css/images/nature" + getNum + ".jpg");
        imgNum = getNum;
    });
}

window.onload = resize;
window.onresize = resize;

function resize(){
    if(window.innerWidth < 775) {
        for (var i = 0; i < arrows.length; i++) {
            arrows[i].classList.remove("show");
            arrows[i].classList.add("hidden");
        }
        smallImg1.setAttribute("src", "css/images/nature1.jpg");
        smallImg2.setAttribute("src", "css/images/nature2.jpg");
        smallImg3.setAttribute("src", "css/images/nature3.jpg");
    } else if (window.innerWidth >= 775) {
        for (var i = 0; i < arrows.length; i++) {
            arrows[i].classList.remove("hidden");
            arrows[i].classList.add("show");
        }
    }
};
