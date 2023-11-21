const button = document.getElementById("ripple");

button.addEventListener('click',function (e) {
    const x = e.clientX
    const y = e.clientY

    const offsetTop = e.target.offsetTop
    const offsetLeft = e.target.offsetLeft
    const xInside = x - offsetLeft
    const yInside = y - offsetTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500);
})