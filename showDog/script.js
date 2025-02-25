const showImage = document.getElementById("showImage");
const questionText = document.getElementById("question");
const questionText2 = document.getElementById("question2");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const noImages = [
    "./showDog/targetImages/1@3x.png",
    "./showDog/targetImages/2@3x.png",
    "./showDog/targetImages/3@3x.png",
    "./showDog/targetImages/4@3x.png",
    "./showDog/targetImages/5@3x.png",
    "./showDog/targetImages/6@3x.png",
    "./showDog/targetImages/7@3x.png",
    "./showDog/targetImages/8@3x.png"
    
]
const noTexts = [
    "对不起,我知道错了",
    "零花钱都给你",
    "你认真的吗",
    "要不要再想想",
    "不许选这个",
    "我会很伤心的",
    "不行!",
    "对不起,我真知道错了",
];

let name = ''
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
name = params.get('name') ? params.get('name') : ''
questionText.textContent += ` ${name}`;

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount <= 8) {
        showImage.src = noImages[clickCount - 1]
        questionText.innerText = noTexts[clickCount - 1];
    }
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    showImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    questionText2.style.transform = `translateY(-${moveUp}px)`;


});
yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">汪~我就知道</p>
            <img src="./showDog/targetImages/1@3x.png" alt="开心" class="yes-image">
        </div>
    `;
});