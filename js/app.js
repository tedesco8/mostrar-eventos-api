//Instanciar clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    //Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //Validando input
    if(textoBuscador !== ''){
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
        .then(eventos => {
            if(eventos.eventos.events.length > 0){
                //Si hay eventos, mostrar el resultado
                ui.limpiarResultado();
                ui.mostrarEventos(eventos.eventos);
            }else {
                //No hay eventos enviar una alerta
                ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
            }
        })
    }else {
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})