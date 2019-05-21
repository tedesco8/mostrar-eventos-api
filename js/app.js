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
        console.log('Buscando...');
    }else {
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
})