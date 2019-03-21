let mousePosition = {x:0, y:0};
let drawId;
const getRandomNumber = function(min, max) {
return Math.round(Math.random() * (max - min + 1)) + min;
};
window.addEventListener('mousemove', function(e) {
mousePosition.x=e.pageX;
mousePosition.y=e.pageY;
}); //review

function draw() {
return setInterval(function(){
    let container = document.getElementById("wrap") //review
    let color = `background:rgb(${getRandomNumber(
0,
255
)},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
const ballSize = getRandomNumber(10, 30);
const size = `height:${ballSize}px; width:${ballSize}px;`;
const left = `left:${getRandomNumber(
mousePosition.x - ballSize,
mousePosition.x
)}px;`;
const top = `top:${getRandomNumber(
mousePosition.y - ballSize,
mousePosition.y
)}px; `;
const style = `${left}${top}${color}${size}`;

let ball = document.createElement("div") //creation of element
ball.classList.add("ball"); //adding classlist
ball.style = style;
ball.addEventListener("animationend", function(e){e.target.remove();});


container.appendChild(ball);


}, 100);
}
window.addEventListener('mouseover', function() {
drawId = draw();
});
window.addEventListener('mouseout', function() {
clearInterval(drawId);
});