class EventBrite {
    constructor(){
        this.token_auth = 'XEWI4M4C57FJUP467VUQ';
        this.ordenar = 'date';
    }
    //Obtiene las categorias en inigt()
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