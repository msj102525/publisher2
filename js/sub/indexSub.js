'use strict';

// scroll



const scrollBox = document.querySelector('.scrollBox');
const inHeader = document.querySelector('.header .inner-header');

window.addEventListener('scroll', () => {
    const wScrollTop = window.scrollY;
    // console.log(wScrollTop);
    if (wScrollTop >= 100) {
        scrollBox.classList.add('scrollBoxOn');
    } else {
        scrollBox.classList.remove('scrollBoxOn');
    }
});

scrollBox.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});





// header gnb

const gnbArrow = document.querySelectorAll('.gnbArrow');
const subBox = document.querySelectorAll('.subBox');


const sub3ArrowA = document.querySelectorAll('.sub3ArrowA');
const sub3Box = document.querySelectorAll('.sub3-box');
const sub3BoxArrow = document.querySelectorAll('.sub2 img');

// categoryArrow.addEventListener('click', (e) => {
//     // console.log(e.target);
//     categoryBox.classList.toggle('categoryOn');
//     
// });

gnbArrow.forEach(el => {
    el.addEventListener('click', (e) => {
        const elParent = e.target.parentElement;
        const elPNext = elParent.nextElementSibling;
        subBox.forEach(el2 => {
            if (el2 == elPNext) {
                el2.classList.toggle('gnbOn');
            } else {
                el2.classList.remove('gnbOn');
            }
        });
    });
});



sub3ArrowA.forEach(el => {
    el.addEventListener('click', (e) => {
        sub3BoxArrow.forEach(el2 => {
            if (e.target == el2) {
                const el2Parent = el2.parentElement;
                const nextEl2 = el2Parent.nextElementSibling;
                // console.log(el2);
                // console.log(el2Parent);
                // console.log(nextEl2);
                nextEl2.classList.toggle('sub3BoxOn');
                el2.classList.toggle('rotateImg');
            }
        });
    });
});

const translateBoxUl = document.querySelector('.translate-box>ul');
const translateBoxUlLi = document.querySelectorAll('.translate-box>ul>li');
const categoryUlSub1 = document.querySelector('.sub1');

translateBoxUl.addEventListener('click', (e) => {
    translateBoxUlLi.forEach((el, idx) => {
        if (e.target == el) {
            categoryUlSub1.classList.add('translateX');
            el.classList.add('liOn');
        } else {
            categoryUlSub1.classList.remove('translateX');
            el.classList.remove('liOn');
        }
    });
});

// container

// gallery1 

const gallery1 = document.querySelector('.gallery1');
const gallery1Ul = document.querySelector('.gallery1>ul');
const gallery1UlLi = document.querySelectorAll('.gallery1>ul>li');

const arrowCon = document.querySelector('.section.sec1');
const arrowConSpan = arrowCon.querySelectorAll('span.arrow');

const itemsUl = document.querySelector('.items>ul');
const itemsUlLi = document.querySelectorAll('.items>ul>li');

const arrBg = [];
for (let i = 0; i < gallery1UlLi.length; i++) {
    arrBg.push(`url(img/subPage/gallery1_${i}.jpg) no-repeat 50%/cover`);
    gallery1UlLi[i].style.background = arrBg[i];
}

const firstClone1 = gallery1Ul.firstElementChild.cloneNode(true);
const lastClone1 = gallery1Ul.lastElementChild.cloneNode(true);

gallery1Ul.append(firstClone1);
gallery1Ul.prepend(lastClone1);



let i = 0;
let setOut;

function autoGallery1() {
    i++;
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * i) + 'px';
    if (i > gallery1UlLi.length) {
        gallery1.style.left = 0;
        gallery1.style.transition = '0s';
        i = 0;
        setOut = setTimeout(autoGallery1, 0);
    } else {
        gallery1.style.left = goto;
        gallery1.style.transition = 'all 0.5s ease-in-out';
        setOut = setTimeout(autoGallery1, 4000);
    }
    // console.log(i);
    itemsUlLi.forEach((el, idx) => {
        let itemsIdx = i - 1;
        if (idx == itemsIdx) {
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });


}

(() => autoGallery1())();

// arrow
function autoGalleryFn(j) {
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery1.style.left = goto;
    gallery1.style.transition = 'all 0.5s ease-in-out';
    if (j <= 0) {
        j = gallery1UlLi.length;
    }

    itemsUlLi.forEach((el, idx) => {
        let idx2 = j - 1;
        if (idx2 == idx) {
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });
}

arrowCon.addEventListener('click', (e) => {
    arrowConSpan.forEach((el, idx) => {
        if (el == e.target) {
            if (idx == 0) {
                if (i == 0) {
                    i = gallery1UlLi.length;
                    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
                    const goto = (-gap * i) + 'px';
                    gallery1.style.left = goto;
                    gallery1.style.transition = 0 + 'ms';
                }
                i--;
                console.log(i)
                autoGalleryFn(i);
            }

            if (idx == 1) {
                if (i == gallery1UlLi.length) {
                    gallery1.style.left = 0;
                    gallery1.style.transition = 0 + 'ms';
                    i = 0;
                }
                i++;
                autoGalleryFn(i);
            }
        }
    });
});

// items
itemsUl.addEventListener('click', (e) => {
    itemsUlLi.forEach((el, idx) => {
        if (e.target == el) {
            let liIdx = idx + 1;
            i = liIdx;
            console.log(liIdx);
            const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
            const goto = (-gap * i) + 'px';
            gallery1.style.left = goto;
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });
});

// gallery2 

const gallery2 = document.querySelector('.gallery2');
const gallery2Ul = document.querySelector('.gallery2>ul');
const gallery2UlLi = document.querySelectorAll('.gallery2>ul>li');
const gallery2UlLiImgBox = document.querySelectorAll('.gallery2>ul>li .img-box');

const arrObj2 = {
    arrSrc2: [],
    arrAlt2: []
};

for (let i = 0; i < gallery2UlLiImgBox.length; i++) {
    arrObj2.arrSrc2.push(`img/subPage/gallery2_${i}.jpg`);
    arrObj2.arrAlt2.push(`gallery2_${i}.jpg`);

    gallery2UlLiImgBox[i].children[0].setAttribute('src', arrObj2.arrSrc2[i]);
    gallery2UlLiImgBox[i].children[0].setAttribute('alt', arrObj2.arrAlt2[i]);
}

const firstClone2 = gallery2Ul.firstElementChild.cloneNode(true);
const lastClone2 = gallery2Ul.lastElementChild.cloneNode(true);

gallery2Ul.append(firstClone2);
gallery2Ul.prepend(lastClone2);


let i2 = 0;

function autoGallery2() {
    i2++;
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-i2 * gap) + "px";


    if (i2 > gallery2UlLi.length - 2) {
        i2 = -2;
        gallery2.style.left = (-gap * i2) + 'px';
        gallery2.style.transition = "0s";
        setTimeout(autoGallery2, 0);
    } else {
        gallery2.style.left = goto;
        gallery2.style.transition = "all 0.5s ease-in-out";
    }

    // console.log(i2);
    // console.log(gallery2.style.left,i2);

}
(() => autoGallery2())();
let setIn = setInterval(autoGallery2, 3000);

// arrow2

const spanArrow2Con = document.querySelector('.center-btn2');
const spanArrow2ConBtn = document.querySelectorAll('.center-btn2 span');

function arrowGalleryFn2(j) {
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery2.style.left = goto;
    gallery2.style.transition = 'all 0.5s ease-in-out';
}





spanArrow2Con.addEventListener('click', (e) => {
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * i2) + 'px';

    spanArrow2ConBtn.forEach((el, idx) => {
        if (el == e.target) {
            if (idx == 0) {
                if (i2 == gallery2UlLi.length - 2) {
                    i2 = -2;
                    gallery2.style.left = (-gap * i2) + 'px';
                    gallery2.style.transition = "0s";
                }
                i2++;
                console.log(i2);
                arrowGalleryFn2(i2);
            } else {
                if (i2 == -2) {
                    i2 = gallery2UlLi.length - 2;
                    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
                    const goto = (-gap * i2) + 'px';
                    gallery2.style.left = goto;
                    gallery2.style.transition = 0 + 'ms';
                }
                i2--;
                console.log(i2);
                arrowGalleryFn2(i2);
            }
        }
    });
});

// section3 

const gallery3 = document.querySelector('.gallery3');
const gallery3UlLi = gallery3.querySelectorAll('li');
const gallery3UlLiImg = gallery3.querySelectorAll('li img');

let i3 = 1;
let setOut3

function autoGallery3() {
    i3++;
    const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
    const goto = (-gap * i3) + "px";

    if (i3 > gallery3UlLi.length - 5) {
        i3 = 0;
        gallery3.style.left = (-gap * i3) + "px";
        gallery3.style.transition = "0s";
        setOut3 = setTimeout(autoGallery3, 0);
    } else {
        gallery3.style.left = goto;
        gallery3.style.transition = "all 0.5s ease-in-out";
        setOut3 = setTimeout(autoGallery3, 3000);
    }
    // console.log(i3 ,gap, goto);
}

(() => autoGallery3())();

// gallery3 멈추기

gallery3UlLi.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        // console.log(e.currentTarget);
        if (el == e.currentTarget) {
            clearTimeout(setOut3);
        }
    });
    el.addEventListener('mouseleave', (e) => {
        if (el == e.currentTarget) {
            setOut3 = setTimeout(autoGallery3, 1500);
        }
    });
});



// gallery3 이미지 popUp

const popUp3Con = document.querySelector('.popup3-con');
const popUp3 = document.querySelector('.popup3');
const popUp3Span = document.querySelector('.popup3 span');

gallery3UlLiImg.forEach(el => {
    el.addEventListener('click', (e) => {
        if (el == e.target) {
            const img3Src = e.target.getAttribute('src');
            const img3Alt = e.target.getAttribute('alt');
            popUp3.firstElementChild.setAttribute('src', img3Src);
            popUp3.firstElementChild.setAttribute('alt', img3Alt);
            // console.log(img3Src,img3Alt);
            popUp3Con.classList.add('popOn3');
        }
    });
    popUp3Span.addEventListener('click', () => {
        popUp3Con.classList.remove('popOn3');
    });
});

// gallery3 arrow
function arrowGalleryFn3(j) {
    const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
    const goto = (-gap * j) + "px";
    gallery3.style.left = goto;
    gallery3.style.transition = "all 0.5s ease-in-out";
}

const spanBtn3 = document.querySelectorAll('span.arrow3');

spanBtn3.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        if (idx == 0) {
            if (i3 >= gallery3UlLi.length - 5) {
                i3 = 0;
                const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
                const goto = (-gap * i3) + "px";
                gallery3.style.left = (-gap * i3) + "px";
                gallery3.style.transition = "0s";
            }
            i3++;
            // console.log(i3);
            arrowGalleryFn3(i3);
        } else {
            if (i3 == 0) {
                i3 = gallery3UlLi.length - 5;
                const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
                const goto = (-gap * i3) + "px";
                gallery3.style.left = (-gap * i3) + "px";
                gallery3.style.transition = "0s";
            }
            i3--;
            // console.log(i3);
            arrowGalleryFn3(i3);
        }
    });
});

// section4

const gallery4UlLi = document.querySelectorAll('.section.sec4 .sec-con>ul>li');
const gallery4UlLiImg = document.querySelectorAll('.section.sec4 .sec-con>ul>li .img-box');
const arrow4Con = document.querySelector('.center-btn4');
const arrow4ConSpan = document.querySelectorAll('.center-btn4 span.arrow4');
const gallery4BconUl = document.querySelector('.section.sec4 .sec-con .bcon .items ul');
const gallery4BconUlLi = document.querySelectorAll('.section.sec4 .sec-con .bcon .items ul>li');




const arrObj4 = {
    arrSrc4: [],
    arrAlt4: []
};

for (let i = 0; i < gallery4UlLiImg.length; i++) {
    arrObj4.arrSrc4.push(`img/subPage/gallery4_${i}.jpg`);
    arrObj4.arrAlt4.push(`gallery4_${i}.jpg`);

    gallery4UlLiImg[i].children[0].setAttribute('src', arrObj4.arrSrc4[i]);
    gallery4UlLiImg[i].children[0].setAttribute('alt', arrObj4.arrAlt4[i]);
}


function fadeGallery4Fn(j) {
    gallery4UlLi.forEach((el, idx) => {
        if (idx == i4) {
            el.classList.add('fadeLiOn');
        } else {
            el.classList.remove('fadeLiOn');
        }
    });
    gallery4BconUlLi.forEach((el, idx) => {
        if (idx == i4) {
            el.classList.add('bcon4On');
        } else {
            el.classList.remove('bcon4On');
        }
    });
}


let i4 = -1;

function fadeGallery4() {
    if (i4 >= gallery4UlLi.length - 1) i4 = -1;
    i4++;
    // console.log(i4);
    fadeGallery4Fn(i4);
}
(() => fadeGallery4())();

let setIn4 = setInterval(fadeGallery4, 3000);

arrow4Con.addEventListener('click', (e) => {
    arrow4ConSpan.forEach((el, idx) => {
        if (e.target == el) {
            if (idx == 0) {
                i4--;
                if (i4 <= 0) i4 = gallery4UlLi.length - 1;
                console.log(i4);
                fadeGallery4Fn(i4);
            } else {
                console.log(i4);
                if (i4 >= gallery4UlLi.length - 1) i4 = -1;
                i4++;
                fadeGallery4Fn(i4);
            }
        }
    })
});

gallery4BconUl.addEventListener('click', (e) => {
    gallery4BconUlLi.forEach((el, idx) => {
        if (e.target == el) {
            i4 = idx;
            fadeGallery4Fn(i4);
        }
    });
});

// section5

const gallery5 = document.querySelector('.gallery5');
const gallery5Ul = gallery5.querySelector('.gallery5>ul');
const gallery5UlLi = gallery5.querySelectorAll('.gallery5>ul>li');
const spanArrow5 = document.querySelectorAll('span.arrow5');
const bCon5Ul = document.querySelector('.section.sec5 .bcon .items ul');
const bCon5UlLi = document.querySelectorAll('.section.sec5 .bcon .items ul>li');



let i5 = 1;
let setOut5;

function banner5Fn() {
    const gap = gallery5UlLi[1].offsetLeft - gallery5UlLi[0].offsetLeft;
    const goto = (gap * -i5) + "px";
    gallery5.style.left = goto;
    gallery5.style.transition = "all 0.2s ease-in-out";
    if(i5<0){
        i5=gallery5UlLi.length-4;
        gallery5.style.transition = "0s";
    }
    bCon5UlLi.forEach((el, idx) => {
        let idx2 = i5 - 1;
        if(idx2==-1)idx2=11;
        if (idx == idx2) {
            el.classList.add('bcon5On');
        } else {
            el.classList.remove('bcon5On');
        }
        // console.log(i5);
    });
}
(() => banner5Fn())();

spanArrow5.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        if (idx == 1) {
            if (i5 >= gallery5UlLi.length - 5) {
                i5 = 0;
                gallery5.style.left = 0;
                gallery5.style.transition = "0s";
            }
            i5++;
            banner5Fn(i5);
        } else {
            if (i5 == 0) {
                i5=gallery5UlLi.length-5;
                const gap = gallery5UlLi[1].offsetLeft - gallery5UlLi[0].offsetLeft;
                const goto = (-gap * i5) + "px";
                gallery5.style.left = (-gap * i5) + "px";
                gallery5.style.transition = "0s";
            }
            i5--;
            banner5Fn(i5);
        }
    })
});

const banner5BconUl = document.querySelector(".section.sec5 .bcon ul");
const banner5BconUlLi = banner5BconUl.querySelectorAll("li");

banner5BconUl.addEventListener("click",(e)=>{
    banner5BconUlLi.forEach((el,idx)=>{
        if(e.target == el){
            let liIdx = idx+1;
            i5= liIdx;
            // console.log(i5);
            banner5Fn(i5);
        }
    });
});




// footer-gallert

const fGalleryUlLi = document.querySelectorAll('.footer-gallery>ul>li');

let f = -1;
function fGallery(){
    f++;
    fGalleryUlLi.forEach((el,idx)=>{
        if(f==idx){
            el.classList.add('fadeLi');
        }else {
            el.classList.remove('fadeLi');
        }
    });
    if(f >= fGalleryUlLi.length-1) f = -1;
    // console.log(f);
}
setInterval (fGallery,3000);

(()=>fGallery())();

const goSub = document.querySelector('#familySite');
// const goSub = document.querySelector('#goSub');

goSub.addEventListener('change',(e)=>{
    if(e.target.value == 'japen'){
        alert('sub이동!');
        location.href = 'http://msj102525.dothome.co.kr/portfolio/project_portfolio/index_sub.html';
        console.log(e.target.value);
    }else if (e.target.value == 'sub2'){
        alert('sub2이동!');
        location.href = 'http://msj102525@msj102525.dothome.co.kr/portfolio/project_portfolio/profile.html';
    }else if(e.target.value == "main"){
        alert("main이동!");
        location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index.html"
    }
});

