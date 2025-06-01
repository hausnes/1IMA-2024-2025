const stjerneknapp = document.querySelector('#stjerneknapp');

stjerneknapp.addEventListener('click', stjernefunksjon);

function stjernefunksjon() {
    console.log('Stjerneknapp klikka!');
    const listeStjerner = document.querySelectorAll('.spinning-star');

    for (let stjerne of listeStjerner) {
        stjerne.classList.toggle('reverse-spin');
    }

    // listeStjerner.forEach(stjerne => {
    //     stjerne.classList.toggle('reverse-spin');
    // });
    // stjerneknapp.classList.toggle('reverse-spin');
}