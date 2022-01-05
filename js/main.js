const frame = 'section';
const box = 'article';
const speed = '0.5s';
const btns = document.querySelectorAll('main .filter li');
let grid;
const activeClass = 'on';

function filter(btns) {
    for (let btn of btns) {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log(e.currentTarget);

            const sort = e.currentTarget
                .querySelector('a')
                .getAttribute('href');

            grid.arrange({
                filter: sort,
            });

            for (let btn of btns) {
                btn.classList.remove(activeClass);
            }

            e.currentTarget.classList.add(activeClass);
        });
    }
}

function init() {
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed,
    });
}

window.addEventListener('load', () => {
    init();
    filter(btns);
});
