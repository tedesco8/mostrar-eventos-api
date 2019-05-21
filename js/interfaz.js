class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos');

    }

    //Metodo para cuando inicialice la app
    init(){
        this.imprimirCategorias();
    }
    //Imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
        .then(categorias => {
            const cats = categorias.categorias.categories;
            //seleccionar el select de las categorias
            const selectCategoria = document.getElementById('listado-categorias');
            //recorremos el arreglo e imprimimos los <option>
            cats.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));
                selectCategoria.appendChild(option);
            })
        })
    }
    //Lee la respuesta de la api e imprime los resultados
    mostrarEventos(eventos){
        //leer los eventos y agregarlos a una variable
        const listaEventos = eventos.events;

        //recorrer los eventos y crear su template
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
                        <div class="card-body">
                            <div class="card-text>
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Informacion del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>                        
                        </div>
                    </div>
                </div>
            `;
        })

    }
    //Limpia los resultados previos
    limpiarResultado(){
        this.listado.innerHTML = '';
    }
    //Metodo para imprimir mensajes: 2 parametros, mensajes y clases
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //quitar el alert despues de 3 segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }
    //Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}