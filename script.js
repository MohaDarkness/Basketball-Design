const BALL = document.getElementById('ball');
const BALL_WIDTH = BALL.offsetWidth;
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const ON_GROUND = 0.80 * SCREEN_HEIGHT;
let IN_ANIMATION = false;

window.addEventListener('load', () => {
    centerBall();
    console.log(BALL.style.bottom);
    // bouncBall();
})



const bouncBall = async(pointX, pointY) => {
    const ballY = parseInt(BALL.getBoundingClientRect().top);
    
    const toGround1 = ON_GROUND - ballY;
    BALL.style.translate = `${pointX}px -9vh`;
    BALL.style.transitionTimingFunction = "linear";
    BALL.style.transition = "0.4s";
    await timeOut(320);
    BALL.style.transition = "0.1s";
    BALL.style.transform = "scaleY(0.6)";
    await timeOut(100);
    BALL.style.translate = `${pointX}px -30vh`;
    BALL.style.transform = "scaleY(1)";
    BALL.style.transition = "0.3s";
    await timeOut(300);
    BALL.style.translate = `${pointX}px -9vh`;
    BALL.style.transitionTimingFunction = "linear";
    BALL.style.transition = "0.3s";
    await timeOut(220);
    BALL.style.transition = "0.1s";
    BALL.style.transform = "scaleY(0.6)";
    await timeOut(100);
    BALL.style.translate = `${pointX}px -25vh`;
    BALL.style.transform = "scaleY(1)";
    BALL.style.transition = "0.3s";
    await timeOut(300);
    BALL.style.translate = `${pointX}px -9vh`;
    BALL.style.transitionTimingFunction = "linear";
    BALL.style.transition = "0.3s";
    await timeOut(220);
    BALL.style.transition = "0.1s";
    BALL.style.transform = "scaleY(0.6)";
    await timeOut(100);
    BALL.style.translate = `${pointX}px -15vh`;
    BALL.style.transform = "scaleY(1)";
    BALL.style.transition = "0.2s";
    await timeOut(200);
    BALL.style.translate = `${pointX}px -9vh`;
    BALL.style.transitionTimingFunction = "linear";
    BALL.style.transition = "0.3s";
    await timeOut(220);
    BALL.style.transition = "0.1s";
    BALL.style.transform = "scaleY(0.8)";
    await timeOut(100);
    BALL.style.transform = "scaleY(1)";
    centerBall()
}

document.getElementById('board').addEventListener('click', async (event) => {
    if (IN_ANIMATION)
        return;

    IN_ANIMATION = true;
    BALL.style.scale = 0.4;
    BALL.style.transform = "translateY(-115vh)";
    BALL.style.transition = "0.5s"; //easy? fadein? fadeout?
    BALL.style.transitionTimingFunction = "ease-out";
    await timeOut(300);
    BALL.style.removeProperty('transform');
    const moveX = parseInt(BALL.getBoundingClientRect().left) - BALL_WIDTH / 2;
    
    document.querySelector('h1').style.display = 'block';
    document.querySelector('h1').classList.add('h1-animation');

    bouncBall(0, null);
})

document.getElementById('white-space').addEventListener('click', async (event) => {
    if (IN_ANIMATION)
        return;

    IN_ANIMATION = true;
    const ballX = parseInt(BALL.getBoundingClientRect().left);
    const ballY = parseInt(BALL.getBoundingClientRect().top);
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const moveX = cursorX - ballX - BALL_WIDTH / 2;
    const moveY = cursorY - ballY - BALL_WIDTH / 2;


    console.log(`movex:${moveX}, moveY:${moveY}`);
    console.log(`Ball: (${ballX}, ${ballY})`);
    console.log(`Cursor: (${cursorX}, ${cursorY})`);

    
    BALL.style.scale = 0.4;
    BALL.style.translate = `${moveX}px ${moveY}px`;
    BALL.style.transition = "0.7s"; //easy? fadein? fadeout?
    // BALL.style.transitionTimingFunction = "ease-out";
    await timeOut(700);
    
    
    bouncBall(moveX, moveY);
    // centerBall();
}, { capture: true })


const timeOut = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const centerBall = () => {
    BALL.style.scale = 1;
    BALL.style.removeProperty('translate');
    BALL.style.removeProperty('transform');
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h1').classList.remove('h1-animation');
    BALL.style.left = SCREEN_WIDTH / 2 - BALL.offsetWidth / 2;
    BALL.style.top = 0.80 * SCREEN_HEIGHT;
    IN_ANIMATION = false;
}
