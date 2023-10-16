const blob1 = document.getElementById("blob-1");
const blob2 = document.getElementById("blob-2");
const cursor = document.getElementById("cursor");

document.body.onmousemove = event => {
    const { clientX, clientY } = event;

    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 0, fill: "forwards" });
    blob1.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
    blob2.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2300, fill: "forwards" });
}