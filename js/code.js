
/* Activa la opción del menú que ha sido seleccionada */
const listaOpciones = document.querySelectorAll('div ul li a');
listaOpciones.forEach(( opcion ) => {
    opcion.addEventListener('click', ( event ) => {
        listaOpciones.forEach(( opcion ) => {
            opcion.classList.remove('active');
        });
        event.target.classList.add('active');
    })
});

/* Cambia el icono del botón toggler para el menú responsivo*/
const botonMenu = document.getElementById('boton-menu');
botonMenu.addEventListener('click', ( event ) => {
    const contenidoBotonMenu = botonMenu.innerHTML.trim();
    if( contenidoBotonMenu.includes('bi-list') ) {
        botonMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>`;
    } else {
        botonMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" 
        class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>`;
    }
});