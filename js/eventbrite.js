class EventBrite {
    constructor(){
        this.token_auth = 'XEWI4M4C57FJUP467VUQ';
        this.ordenar = 'date';
    }
    //Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

           //esperar la respuesta del evento y devolverlo como JSON
           const eventos = await respuestaEvento.json();
           return {
               eventos
           }
    }
    //Obtiene las categorias en init()
    async obtenerCategorias(){
        //Consultar las categorias a la REST API de Eventbrite
        const respuestaCategorias = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Resperar la respuesta de las categorias y devolverlas en JSON
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado
        return {
            categorias
        }
    }
}