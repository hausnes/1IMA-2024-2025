const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bins = {
    plast: document.getElementById('plastBin'),
    papir: document.getElementById('papirBin'),
    matavfall: document.getElementById('matavfallBin')
};

const items = [
    { type: 'plast', x: 100, y: 500 },
    { type: 'papir', x: 300, y: 500 },
    { type: 'matavfall', x: 500, y: 500 }
];

function drawItems() {
    items.forEach(item => {
        ctx.fillStyle = item.type === 'plast' ? 'blue' : item.type === 'papir' ? 'green' : 'brown';
        ctx.fillRect(item.x, item.y, 50, 50);
    });
}

function checkCollision(item, bin) {
    const binRect = bin.getBoundingClientRect();
    return item.x < binRect.right && item.x + 50 > binRect.left && item.y < binRect.bottom && item.y + 50 > binRect.top;
}

canvas.addEventListener('mousedown', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    items.forEach(item => {
        if (mouseX > item.x && mouseX < item.x + 50 && mouseY > item.y && mouseY < item.y + 50) {
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);

            function onMouseMove(e) {
                item.x = e.offsetX - 25;
                item.y = e.offsetY - 25;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawItems();
            }

            function onMouseUp() {
                canvas.removeEventListener('mousemove', onMouseMove);
                canvas.removeEventListener('mouseup', onMouseUp);

                if (checkCollision(item, bins[item.type + 'Bin'])) {
                    alert('Riktig plassering!');
                } else {
                    alert('Feil plassering!');
                }
            }
        }
    });
});

drawItems();