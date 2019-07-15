const getCanvasCtx = id => {
    const canvas = document.getElementById(id);
    if (canvas.getContext) {
        return canvas.getContext("2d");
    } else {
        throw new Error("canvas not support!");
    }
}

const ctx = getCanvasCtx('line');
ctx.beginPath();
ctx.moveTo(75, 75);
ctx.lineTo(100, 75);
ctx.lineTo(100, 100);
ctx.stroke();

const dom = document.querySelector("canvas#line");
if (dom) {
    dom.addEventListener("click", e => {
        const [x, y] = [e.offsetX, e.offsetY];
        console.log(ctx.isPointInStroke(x,y));
    });
}