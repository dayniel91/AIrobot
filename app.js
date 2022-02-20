document.addEventListener('DOMContentLoaded', () => {
    const eye = document.querySelectorAll('.eye')
    const mask = document.querySelector('.mask')
    const torso = document.querySelector('.torso')
    const robot = document.querySelector('.robot')
    let position = 0

    function changeEyes() {
        eyes.forEach(eye => eye.classList.toggle('blue-eye'))
    }
    
    mask.addEventListener('click',changeEyes)

    function moveRobot() {
        position += 50
        robot.style.left = position + 'px'
    }
    torso.addEventListener('click',moveRobot)
})