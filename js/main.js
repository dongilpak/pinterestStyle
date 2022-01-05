const frame = 'section';
const box = 'article';
const speed = '0.5s';
let grid;

function init() {
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed,
    });
}

window.addEventListener('load', () => {
    init();
});
